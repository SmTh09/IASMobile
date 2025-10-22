/**
 * Componente de ruta protegida
 * 
 * Verifica si el usuario está autenticado antes de permitir
 * el acceso a rutas protegidas. Redirige a login si no está autenticado.
 */

import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

/**
 * Componente que protege rutas requiriendo autenticación
 */
export function ProtectedRoute({ 
  children, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Si no está autenticado, redirigir a login
  if (!isAuthenticated) {
    // Guardar la ubicación actual para redirigir después del login
    return (
      <Navigate 
        to={redirectTo} 
        state={{ from: location }} 
        replace 
      />
    );
  }

  // Si está autenticado, mostrar el contenido
  return <>{children}</>;
}

/**
 * Componente que solo permite acceso a usuarios NO autenticados
 * Útil para páginas como login que no deben ser accesibles si ya estás logueado
 */
export function PublicOnlyRoute({ 
  children, 
  redirectTo = '/home' 
}: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  // Si está autenticado, redirigir a la página principal
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Si no está autenticado, mostrar el contenido
  return <>{children}</>;
}

export default ProtectedRoute;
