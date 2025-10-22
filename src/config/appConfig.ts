/**
 * Configuración principal de la aplicación
 * 
 * Permite configurar el baseUrl y endpoints de autenticación
 * a través de variables de entorno o valores por defecto.
 */

// Base URL por defecto - puede ser sobrescrito por VITE_API_BASE_URL
const DEFAULT_BASE_URL = 'https://srvstealth.incadeacloud-poc.com/idamsWebApi';

// En desarrollo, usar rutas relativas (el proxy se encarga de redirigir)
// En producción, usar la URL completa
const isDevelopment = import.meta.env.DEV;
export const baseUrl = isDevelopment ? '' : (import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE_URL);

// Configuración de endpoints de autenticación
export const authEndpoints = {
  login: `${baseUrl}/api/Authentication/Authenticate`,
  refresh: `${baseUrl}/api/Authentication/Refresh`
};

// Configuración general de la aplicación
export const appConfig = {
  baseUrl,
  authEndpoints,
  // Configuración de tokens
  tokenRefreshThreshold: 60000, // 60 segundos antes de expirar
  // Configuración de timeouts
  httpTimeout: 30000, // 30 segundos
  // Configuración de storage
  storageKeys: {
    token: 'auth_token',
    refreshToken: 'auth_refresh_token',
    expiresAt: 'auth_expires_at',
    user: 'auth_user'
  }
} as const;

export default appConfig;
