/**
 * Tipos de datos para el sistema de autenticación
 */

// Request para el endpoint de autenticación
export interface AuthRequest {
  UserName: string;
  Password: string;
}

// Response del endpoint de autenticación
export interface AuthResponse {
  token: string;
  expirationDate: string; // ISO string format
  refreshToken: string;
  userId: string;
  fullName: string;
  divisionName?: string;
  departmentName?: string;
}

// Información del usuario autenticado
export interface AuthUser {
  id: string;
  name: string;
  divisionName?: string;
  departmentName?: string;
}

// Estado de autenticación en la aplicación
export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiresAt: number | null; // epoch milliseconds
  user?: AuthUser;
}

// Contexto de autenticación para React Context
export interface AuthContextType {
  state: AuthState;
  login: (credentials: AuthRequest) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isTokenExpiringSoon: () => boolean;
  refreshAuth: () => Promise<boolean>;
}

// Errores de autenticación
export interface AuthError {
  code: string;
  message: string;
  details?: any;
}

// Tipos de errores comunes
export enum AuthErrorCode {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  REFRESH_FAILED = 'REFRESH_FAILED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// Request para refresh token
export interface RefreshTokenRequest {
  refreshToken: string;
}

// Configuración de endpoints de autenticación
export interface AuthEndpoints {
  login: string;
  refresh: string;
}
