/**
 * Utilidades de navegación
 * 
 * Helpers para navegación programática en la aplicación
 */

/**
 * Redirige a una ruta específica
 * @param path - Ruta de destino
 * @param replace - Si debe reemplazar la entrada actual en el historial
 */
export function navigateTo(path: string, replace: boolean = false): void {
  if (typeof window !== 'undefined') {
    if (replace) {
      window.history.replaceState(null, '', path);
    } else {
      window.history.pushState(null, '', path);
    }
    
    // Disparar evento para que React Router detecte el cambio
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

/**
 * Redirige a la página de login
 */
export function redirectToLogin(): void {
  navigateTo('/login', true);
}

/**
 * Redirige a la página principal
 */
export function redirectToHome(): void {
  navigateTo('/home', true);
}

/**
 * Obtiene la ruta actual
 */
export function getCurrentPath(): string {
  return typeof window !== 'undefined' ? window.location.pathname : '/';
}

/**
 * Verifica si estamos en una ruta específica
 */
export function isCurrentPath(path: string): boolean {
  return getCurrentPath() === path;
}

/**
 * Obtiene parámetros de query string
 */
export function getQueryParams(): URLSearchParams {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
}

/**
 * Obtiene un parámetro específico de query string
 */
export function getQueryParam(key: string): string | null {
  return getQueryParams().get(key);
}
