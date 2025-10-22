/**
 * Página de Login
 * 
 * Adapta el componente LoginView existente para usar el sistema de autenticación
 */

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from '../auth/useAuth';
import { AuthRequest } from '../types/auth';
import LoginView from '../components/LoginView';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin, isAuthenticated } = useLoginForm();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obtener la ruta de donde venía el usuario (para redirigir después del login)
  const from = location.state?.from?.pathname || '/home';

  // Si ya está autenticado, redirigir
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const onSignIn = async (username: string, password: string) => {
    if (isLoading) return;

    console.log('Login attempt with:', { username, password });
    setIsLoading(true);
    setError(null);

    try {
      const credentials: AuthRequest = {
        UserName: username,
        Password: password
      };

      console.log('Calling handleLogin with credentials:', credentials);
      const result = await handleLogin(credentials);

      if (result.success) {
        // Redirigir a la página de origen o home
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error inesperado. Intenta nuevamente.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] relative">
      {/* Mostrar error si existe */}
      {error && (
        <div className="absolute top-[70px] left-[20px] right-[20px] z-10">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Mostrar loading si está cargando */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#4c68b1]"></div>
              <p className="text-gray-700">Iniciando sesión...</p>
            </div>
          </div>
        </div>
      )}

      {/* Usar el componente LoginView existente */}
      <LoginView onSignIn={onSignIn} />
    </div>
  );
}
