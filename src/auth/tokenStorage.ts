/**
 * Gestión del almacenamiento de tokens de autenticación
 * 
 * NOTA DE SEGURIDAD:
 * En un entorno de producción, idealmente el refreshToken debería almacenarse
 * en cookies httpOnly para mayor seguridad. Sin embargo, para simplicidad
 * del PWA y compatibilidad, usamos localStorage aquí.
 * 
 * Considera migrar a cookies httpOnly + secure en producción.
 */

import { AuthResponse, AuthState, AuthUser } from '../types/auth';
import { parseIsoToEpoch } from '../utils/date';
import { appConfig } from '../config/appConfig';

// Cache en memoria para evitar accesos constantes a localStorage
let memoryCache: AuthState | null = null;

/**
 * Obtiene la sesión actual desde localStorage o cache en memoria
 */
export function getSession(): AuthState {
  // Si tenemos cache en memoria, lo usamos
  if (memoryCache) {
    return memoryCache;
  }

  try {
    const token = localStorage.getItem(appConfig.storageKeys.token);
    const refreshToken = localStorage.getItem(appConfig.storageKeys.refreshToken);
    const expiresAtStr = localStorage.getItem(appConfig.storageKeys.expiresAt);
    const userStr = localStorage.getItem(appConfig.storageKeys.user);

    const session: AuthState = {
      token,
      refreshToken,
      expiresAt: expiresAtStr ? parseInt(expiresAtStr, 10) : null,
      user: userStr ? JSON.parse(userStr) : undefined
    };

    // Validar que los datos sean consistentes
    if (token && !expiresAtStr) {
      // Si hay token pero no expiresAt, limpiar sesión
      clearSession();
      return { token: null, refreshToken: null, expiresAt: null };
    }

    // Actualizar cache en memoria
    memoryCache = session;
    return session;
  } catch (error) {
    console.error('Error reading session from localStorage:', error);
    // En caso de error, limpiar y retornar sesión vacía
    clearSession();
    return { token: null, refreshToken: null, expiresAt: null };
  }
}

/**
 * Guarda una nueva sesión desde la respuesta de autenticación
 */
export function setSession(authResponse: AuthResponse): void {
  try {
    // Calcular timestamp de expiración
    const expiresAt = parseIsoToEpoch(authResponse.expirationDate);
    
    // Crear objeto de usuario
    const user: AuthUser = {
      id: authResponse.userId,
      name: authResponse.fullName,
      divisionName: authResponse.divisionName,
      departmentName: authResponse.departmentName
    };

    // Guardar en localStorage
    localStorage.setItem(appConfig.storageKeys.token, authResponse.token);
    localStorage.setItem(appConfig.storageKeys.refreshToken, authResponse.refreshToken);
    localStorage.setItem(appConfig.storageKeys.expiresAt, expiresAt.toString());
    localStorage.setItem(appConfig.storageKeys.user, JSON.stringify(user));

    // Actualizar cache en memoria
    memoryCache = {
      token: authResponse.token,
      refreshToken: authResponse.refreshToken,
      expiresAt,
      user
    };

    console.log('Session saved successfully', {
      userId: user.id,
      userName: user.name,
      expiresAt: new Date(expiresAt).toISOString()
    });
  } catch (error) {
    console.error('Error saving session to localStorage:', error);
    throw new Error('Failed to save authentication session');
  }
}

/**
 * Actualiza solo el token y fecha de expiración (usado en refresh)
 */
export function updateTokens(token: string, expirationDate: string, refreshToken?: string): void {
  try {
    const expiresAt = parseIsoToEpoch(expirationDate);
    
    // Actualizar localStorage
    localStorage.setItem(appConfig.storageKeys.token, token);
    localStorage.setItem(appConfig.storageKeys.expiresAt, expiresAt.toString());
    
    if (refreshToken) {
      localStorage.setItem(appConfig.storageKeys.refreshToken, refreshToken);
    }

    // Actualizar cache en memoria si existe
    if (memoryCache) {
      memoryCache.token = token;
      memoryCache.expiresAt = expiresAt;
      if (refreshToken) {
        memoryCache.refreshToken = refreshToken;
      }
    }

    console.log('Tokens updated successfully', {
      expiresAt: new Date(expiresAt).toISOString()
    });
  } catch (error) {
    console.error('Error updating tokens:', error);
    throw new Error('Failed to update authentication tokens');
  }
}

/**
 * Limpia completamente la sesión
 */
export function clearSession(): void {
  try {
    // Limpiar localStorage
    localStorage.removeItem(appConfig.storageKeys.token);
    localStorage.removeItem(appConfig.storageKeys.refreshToken);
    localStorage.removeItem(appConfig.storageKeys.expiresAt);
    localStorage.removeItem(appConfig.storageKeys.user);

    // Limpiar cache en memoria
    memoryCache = null;

    console.log('Session cleared successfully');
  } catch (error) {
    console.error('Error clearing session:', error);
  }
}

/**
 * Verifica si hay una sesión válida (con token no expirado)
 */
export function hasValidSession(): boolean {
  const session = getSession();
  
  if (!session.token || !session.expiresAt) {
    return false;
  }

  // Verificar si el token no ha expirado
  return Date.now() < session.expiresAt;
}

/**
 * Obtiene solo el token actual si es válido
 */
export function getCurrentToken(): string | null {
  const session = getSession();
  
  if (!session.token || !session.expiresAt) {
    return null;
  }

  // Verificar si el token no ha expirado
  if (Date.now() >= session.expiresAt) {
    return null;
  }

  return session.token;
}
