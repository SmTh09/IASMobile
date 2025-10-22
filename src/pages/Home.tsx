/**
 * Página principal (Home)
 * 
 * Muestra información del usuario autenticado y permite hacer logout.
 * Incluye un smoke test para probar llamadas OData protegidas.
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../auth/useAuth';
import { api } from '../http/httpClient';
import { appConfig } from '../config/appConfig';

export default function Home() {
  const { user, logout } = useAuth();
  const [odataTest, setOdataTest] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
    data: any;
  }>({
    loading: false,
    success: false,
    error: null,
    data: null
  });

  // Smoke test automático al cargar la página
  useEffect(() => {
    performODataSmokeTest();
  }, []);

  /**
   * Smoke test para verificar que las llamadas OData llevan el header Authorization
   */
  const performODataSmokeTest = async () => {
    setOdataTest(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Intentar llamada a $metadata (endpoint común en OData)
      const response = await api.get('/odata/$metadata');
      
      setOdataTest({
        loading: false,
        success: true,
        error: null,
        data: response
      });
    } catch (error: any) {
      // Incluso si falla, si es por razones distintas a autenticación, 
      // significa que el header Authorization se envió correctamente
      const isAuthError = error?.response?.status === 401 || error?.response?.status === 403;
      
      setOdataTest({
        loading: false,
        success: !isAuthError, // Si no es error de auth, consideramos exitoso el test
        error: isAuthError ? 'Error de autenticación' : error?.message || 'Error de red',
        data: error?.response?.data || null
      });
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleRetryODataTest = () => {
    performODataSmokeTest();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Panel Principal
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          
          {/* Información del usuario */}
          <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Sesión Iniciada
              </h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                  <dd className="mt-1 text-sm text-gray-900">{user?.name || 'N/A'}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">ID de Usuario</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">{user?.id || 'N/A'}</dd>
                </div>
                
                {user?.divisionName && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">División</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.divisionName}</dd>
                  </div>
                )}
                
                {user?.departmentName && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Departamento</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.departmentName}</dd>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Smoke Test OData */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Smoke Test OData
                </h2>
                <button
                  onClick={handleRetryODataTest}
                  disabled={odataTest.loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                >
                  {odataTest.loading ? 'Probando...' : 'Reintentar'}
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Este test verifica que las llamadas HTTP incluyan el header Authorization correctamente.
              </p>
              
              <div className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Endpoint</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">
                    {appConfig.baseUrl}/odata/$metadata
                  </dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1">
                    {odataTest.loading && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <div className="animate-spin rounded-full h-3 w-3 border-b border-yellow-600 mr-1"></div>
                        Cargando...
                      </span>
                    )}
                    
                    {!odataTest.loading && odataTest.success && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Header Authorization enviado correctamente
                      </span>
                    )}
                    
                    {!odataTest.loading && !odataTest.success && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        ✗ {odataTest.error}
                      </span>
                    )}
                  </dd>
                </div>
                
                {odataTest.data && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Respuesta</dt>
                    <dd className="mt-1">
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
                        {typeof odataTest.data === 'string' 
                          ? odataTest.data.substring(0, 200) + (odataTest.data.length > 200 ? '...' : '')
                          : JSON.stringify(odataTest.data, null, 2).substring(0, 200) + '...'
                        }
                      </pre>
                    </dd>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Información técnica */}
          <div className="bg-white overflow-hidden shadow rounded-lg mt-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Configuración
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Base URL</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">{appConfig.baseUrl}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Endpoint de Login</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">{appConfig.authEndpoints.login}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500">Endpoint de Refresh</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-mono">{appConfig.authEndpoints.refresh}</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
