/**
 * Configuración principal del router
 * 
 * Define todas las rutas de la aplicación con sus respectivas
 * protecciones de autenticación
 */

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import ProtectedRoute, { PublicOnlyRoute } from './ProtectedRoute';
import Login from '../pages/Login';
import HomeWrapper from '../pages/HomeWrapper';
import ErrorBoundary from '../components/ErrorBoundary';

/**
 * Configuración de rutas
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: (
      <PublicOnlyRoute>
        <Login />
      </PublicOnlyRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <HomeWrapper />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <Navigate to="/home" replace />,
  },
]);

/**
 * Componente principal del router con provider de autenticación
 */
export function AppRouter() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default AppRouter;
