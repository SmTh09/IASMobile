/**
 * Cliente HTTP con interceptores para manejo automático de autenticación
 * 
 * Características:
 * - Inyección automática de tokens de autorización
 * - Manejo automático de refresh tokens en caso de 401
 * - Prevención de múltiples refresh simultáneos
 * - Pre-refresh cuando el token está próximo a expirar
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { appConfig } from '../config/appConfig';
import { getSession, updateTokens, clearSession, getCurrentToken } from '../auth/tokenStorage';
import { isExpiringSoon } from '../utils/date';
import { AuthResponse } from '../types/auth';

// Flag para evitar múltiples refresh simultáneos
let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

/**
 * Crea y configura la instancia de Axios
 */
function createHttpClient(): AxiosInstance {
  const client = axios.create({
    baseURL: appConfig.baseUrl,
    timeout: appConfig.httpTimeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor: inyectar token de autorización
  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Obtener sesión actual
      const session = getSession();
      
      // Si no hay token, continuar sin autorización
      if (!session.token || !session.expiresAt) {
        return config;
      }

      // Verificar si el token está próximo a expirar y hacer pre-refresh
      if (isExpiringSoon(session.expiresAt, appConfig.tokenRefreshThreshold)) {
        console.log('Token expiring soon, attempting pre-refresh...');
        
        // Intentar refresh antes de la llamada
        const refreshed = await attemptTokenRefresh();
        if (!refreshed) {
          console.warn('Pre-refresh failed, continuing with current token');
        }
      }

      // Obtener el token actual (puede haber cambiado después del refresh)
      const currentToken = getCurrentToken();
      if (currentToken) {
        config.headers.Authorization = `Bearer ${currentToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor: manejar errores 401 y refresh automático
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // Si es un error 401 y no hemos intentado refresh aún
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        console.log('Received 401, attempting token refresh...');

        // Intentar refresh del token
        const refreshed = await attemptTokenRefresh();
        
        if (refreshed) {
          // Si el refresh fue exitoso, reintentar la petición original
          const currentToken = getCurrentToken();
          if (currentToken) {
            originalRequest.headers.Authorization = `Bearer ${currentToken}`;
            return client(originalRequest);
          }
        }

        // Si el refresh falló, hacer logout y redirigir
        console.log('Token refresh failed, logging out...');
        handleAuthFailure();
        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );

  return client;
}

/**
 * Intenta hacer refresh del token de forma segura (evita múltiples refresh simultáneos)
 */
async function attemptTokenRefresh(): Promise<boolean> {
  // Si ya hay un refresh en progreso, esperar a que termine
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  // Marcar que estamos haciendo refresh
  isRefreshing = true;
  
  refreshPromise = performTokenRefresh();
  
  try {
    const result = await refreshPromise;
    return result;
  } finally {
    // Limpiar flags
    isRefreshing = false;
    refreshPromise = null;
  }
}

/**
 * Realiza el refresh del token
 */
async function performTokenRefresh(): Promise<boolean> {
  try {
    const session = getSession();
    
    if (!session.refreshToken) {
      console.log('No refresh token available');
      return false;
    }

    console.log('Performing token refresh...');

    // Crear cliente temporal sin interceptores para evitar loops
    const refreshClient = axios.create({
      baseURL: appConfig.baseUrl,
      timeout: appConfig.httpTimeout,
    });

    // Hacer la llamada de refresh
    const response = await refreshClient.post<AuthResponse>(
      appConfig.authEndpoints.refresh,
      { refreshToken: session.refreshToken }
    );

    // Actualizar tokens en storage
    updateTokens(
      response.data.token,
      response.data.expirationDate,
      response.data.refreshToken
    );

    console.log('Token refresh successful');
    return true;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return false;
  }
}

/**
 * Maneja fallos de autenticación (logout y redirección)
 */
function handleAuthFailure(): void {
  clearSession();
  
  // Redirigir a login si estamos en el navegador
  if (typeof window !== 'undefined') {
    // Usar el router de la aplicación si está disponible
    const event = new CustomEvent('auth:logout');
    window.dispatchEvent(event);
    
    // Fallback: redirigir directamente
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }
}

// Crear instancia del cliente HTTP
export const httpClient = createHttpClient();

// Exportar también la función de creación para testing
export { createHttpClient };

// Función helper para hacer requests con mejor tipado
export async function apiRequest<T = any>(
  config: AxiosRequestConfig
): Promise<T> {
  const response = await httpClient.request<T>(config);
  return response.data;
}

// Helpers para métodos HTTP comunes
export const api = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => 
    apiRequest<T>({ ...config, method: 'GET', url }),
  
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    apiRequest<T>({ ...config, method: 'POST', url, data }),
  
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    apiRequest<T>({ ...config, method: 'PUT', url, data }),
  
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => 
    apiRequest<T>({ ...config, method: 'DELETE', url }),
  
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    apiRequest<T>({ ...config, method: 'PATCH', url, data }),
};

export default httpClient;
