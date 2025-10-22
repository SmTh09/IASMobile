/**
 * Hook personalizado para autenticación
 * 
 * Proporciona una interfaz simple para acceder al estado
 * y métodos de autenticación desde cualquier componente
 */

import { useAuthContext } from './AuthContext';
import { AuthRequest, AuthUser } from '../types/auth';

/**
 * Hook principal de autenticación
 */
export function useAuth() {
  const context = useAuthContext();

  return {
    // Estado
    user: context.state.user,
    token: context.state.token,
    isAuthenticated: context.isAuthenticated,
    isLoading: false, // Podríamos agregar un estado de loading si es necesario
    
    // Métodos
    login: context.login,
    logout: context.logout,
    refresh: context.refreshAuth,
    
    // Utilidades
    isTokenExpiringSoon: context.isTokenExpiringSoon,
  };
}

/**
 * Hook para obtener solo la información del usuario
 */
export function useUser(): AuthUser | undefined {
  const { user } = useAuth();
  return user;
}

/**
 * Hook para verificar si el usuario está autenticado
 */
export function useIsAuthenticated(): boolean {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}

/**
 * Hook para obtener métodos de autenticación sin el estado
 */
export function useAuthActions() {
  const { login, logout, refresh } = useAuth();
  
  return {
    login,
    logout,
    refresh,
  };
}

/**
 * Hook con helpers adicionales para formularios de login
 */
export function useLoginForm() {
  const { login, isAuthenticated } = useAuth();
  
  const handleLogin = async (credentials: AuthRequest) => {
    try {
      await login(credentials);
      return { success: true, error: null };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido' 
      };
    }
  };

  return {
    handleLogin,
    isAuthenticated,
  };
}

export default useAuth;
