/**
 * Servicio de autenticación
 * 
 * Maneja las operaciones de login, logout y refresh de tokens
 * Interactúa con el backend y gestiona el almacenamiento local
 */

import { AuthRequest, AuthResponse, AuthError, AuthErrorCode } from '../types/auth';
import { setSession, clearSession, getSession } from './tokenStorage';
import { appConfig } from '../config/appConfig';
import axios, { AxiosError } from 'axios';

/**
 * Realiza el login del usuario
 */
export async function login(credentials: AuthRequest): Promise<void> {
  try {
    console.log('Attempting login for user:', credentials.UserName);
    console.log('Login endpoint:', appConfig.authEndpoints.login);
    console.log('Base URL:', appConfig.baseUrl);

    // Crear cliente HTTP sin interceptores para evitar loops
    const authClient = axios.create({
      baseURL: appConfig.baseUrl,
      timeout: appConfig.httpTimeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Making POST request to:', appConfig.authEndpoints.login);
    console.log('Request payload:', credentials);

    // Realizar petición de login
    const response = await authClient.post<AuthResponse>(
      '/api/Authentication/Authenticate', // Usar ruta relativa
      credentials
    );

    // Guardar sesión
    setSession(response.data);

    console.log('Login successful for user:', response.data.fullName);
  } catch (error) {
    console.error('Login failed - Full error:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          baseURL: error.config?.baseURL
        }
      });
    }
    
    // Convertir error a AuthError
    const authError = handleAuthError(error);
    throw authError;
  }
}

/**
 * Realiza el refresh del token
 */
export async function refresh(): Promise<boolean> {
  try {
    const session = getSession();
    
    if (!session.refreshToken) {
      console.log('No refresh token available for refresh');
      return false;
    }

    console.log('Attempting token refresh...');

    // Crear cliente HTTP sin interceptores
    const authClient = axios.create({
      baseURL: appConfig.baseUrl,
      timeout: appConfig.httpTimeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Realizar petición de refresh
    const response = await authClient.post<AuthResponse>(
      appConfig.authEndpoints.refresh,
      { refreshToken: session.refreshToken }
    );

    // Actualizar sesión con nuevos tokens
    setSession(response.data);

    console.log('Token refresh successful');
    return true;
  } catch (error) {
    console.error('Token refresh failed:', error);
    
    // En caso de error en refresh, limpiar sesión
    clearSession();
    return false;
  }
}

/**
 * Realiza el logout del usuario
 */
export function logout(): void {
  console.log('Logging out user...');
  
  // Limpiar sesión local
  clearSession();
  
  // Emitir evento para que los componentes reaccionen
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('auth:logout');
    window.dispatchEvent(event);
  }
  
  console.log('Logout completed');
}

/**
 * Verifica si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  const session = getSession();
  
  if (!session.token || !session.expiresAt) {
    return false;
  }
  
  // Verificar si el token no ha expirado
  return Date.now() < session.expiresAt;
}

/**
 * Verifica si el token está próximo a expirar
 */
export function isTokenExpiringSoon(): boolean {
  const session = getSession();
  
  if (!session.expiresAt) {
    return false;
  }
  
  const timeUntilExpiration = session.expiresAt - Date.now();
  return timeUntilExpiration <= appConfig.tokenRefreshThreshold;
}

/**
 * Obtiene la información del usuario actual
 */
export function getCurrentUser() {
  const session = getSession();
  return session.user || null;
}

/**
 * Convierte errores de Axios a AuthError
 */
function handleAuthError(error: unknown): AuthError {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    
    // Error de red
    if (!axiosError.response) {
      return {
        code: AuthErrorCode.NETWORK_ERROR,
        message: 'Error de conexión. Verifica tu conexión a internet.',
        details: axiosError.message
      };
    }
    
    // Error del servidor
    switch (axiosError.response.status) {
      case 401:
        return {
          code: AuthErrorCode.INVALID_CREDENTIALS,
          message: 'Credenciales inválidas. Verifica tu usuario y contraseña.',
          details: axiosError.response.data
        };
      
      case 403:
        return {
          code: AuthErrorCode.INVALID_CREDENTIALS,
          message: 'Acceso denegado. No tienes permisos para acceder.',
          details: axiosError.response.data
        };
      
      case 500:
        return {
          code: AuthErrorCode.UNKNOWN_ERROR,
          message: 'Error interno del servidor. Intenta más tarde.',
          details: axiosError.response.data
        };
      
      default:
        return {
          code: AuthErrorCode.UNKNOWN_ERROR,
          message: `Error del servidor (${axiosError.response.status}). Intenta más tarde.`,
          details: axiosError.response.data
        };
    }
  }
  
  // Error desconocido
  return {
    code: AuthErrorCode.UNKNOWN_ERROR,
    message: 'Error inesperado. Intenta más tarde.',
    details: error
  };
}

/**
 * Valida las credenciales antes del envío
 */
export function validateCredentials(credentials: AuthRequest): string[] {
  const errors: string[] = [];
  
  if (!credentials.UserName || credentials.UserName.trim() === '') {
    errors.push('El nombre de usuario es requerido');
  }
  
  if (!credentials.Password || credentials.Password.trim() === '') {
    errors.push('La contraseña es requerida');
  }
  
  // Validar formato de email si es necesario
  if (credentials.UserName && !isValidEmail(credentials.UserName)) {
    errors.push('El formato del email no es válido');
  }
  
  return errors;
}

/**
 * Valida formato de email básico
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
