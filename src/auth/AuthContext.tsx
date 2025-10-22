/**
 * Contexto de autenticación para React
 * 
 * Proporciona estado global de autenticación y métodos para
 * login, logout y gestión de tokens en toda la aplicación
 */

import React, { createContext, useContext, useEffect, useReducer, ReactNode } from 'react';
import { AuthState, AuthContextType, AuthRequest } from '../types/auth';
import { getSession } from './tokenStorage';
import * as authService from './authService';

// Estado inicial
const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expiresAt: null,
  user: undefined,
};

// Tipos de acciones para el reducer
type AuthAction =
  | { type: 'LOAD_SESSION'; payload: AuthState }
  | { type: 'LOGIN_SUCCESS'; payload: AuthState }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_SUCCESS'; payload: AuthState };

// Reducer para manejar el estado de autenticación
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOAD_SESSION':
      return action.payload;
    
    case 'LOGIN_SUCCESS':
      return action.payload;
    
    case 'LOGOUT':
      return initialState;
    
    case 'REFRESH_SUCCESS':
      return action.payload;
    
    default:
      return state;
  }
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provider del contexto de autenticación
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Cargar sesión al montar el componente
  useEffect(() => {
    loadSession();
  }, []);

  // Escuchar eventos de logout desde otros componentes
  useEffect(() => {
    const handleLogout = () => {
      dispatch({ type: 'LOGOUT' });
    };

    window.addEventListener('auth:logout', handleLogout);
    
    return () => {
      window.removeEventListener('auth:logout', handleLogout);
    };
  }, []);

  /**
   * Carga la sesión desde el almacenamiento local
   */
  const loadSession = () => {
    try {
      const session = getSession();
      dispatch({ type: 'LOAD_SESSION', payload: session });
    } catch (error) {
      console.error('Error loading session:', error);
      dispatch({ type: 'LOGOUT' });
    }
  };

  /**
   * Realiza el login del usuario
   */
  const login = async (credentials: AuthRequest): Promise<void> => {
    try {
      // Validar credenciales
      const validationErrors = authService.validateCredentials(credentials);
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(', '));
      }

      // Realizar login
      await authService.login(credentials);
      
      // Cargar nueva sesión
      const newSession = getSession();
      dispatch({ type: 'LOGIN_SUCCESS', payload: newSession });
    } catch (error) {
      console.error('Login error in context:', error);
      throw error;
    }
  };

  /**
   * Realiza el logout del usuario
   */
  const logout = (): void => {
    authService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  /**
   * Intenta refrescar el token
   */
  const refreshAuth = async (): Promise<boolean> => {
    try {
      const success = await authService.refresh();
      
      if (success) {
        const newSession = getSession();
        dispatch({ type: 'REFRESH_SUCCESS', payload: newSession });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
      
      return success;
    } catch (error) {
      console.error('Refresh error in context:', error);
      dispatch({ type: 'LOGOUT' });
      return false;
    }
  };

  /**
   * Verifica si el usuario está autenticado
   */
  const isAuthenticated = (): boolean => {
    return authService.isAuthenticated();
  };

  /**
   * Verifica si el token está próximo a expirar
   */
  const isTokenExpiringSoon = (): boolean => {
    return authService.isTokenExpiringSoon();
  };

  // Valor del contexto
  const contextValue: AuthContextType = {
    state,
    login,
    logout,
    refreshAuth,
    isAuthenticated: isAuthenticated(),
    isTokenExpiringSoon,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook para usar el contexto de autenticación
 * Lanza error si se usa fuera del AuthProvider
 */
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return context;
}

export default AuthContext;
