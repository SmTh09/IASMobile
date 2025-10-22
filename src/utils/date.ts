/**
 * Utilidades para manejo de fechas en el sistema de autenticación
 */

/**
 * Convierte una fecha ISO string a epoch milliseconds
 * @param isoString - Fecha en formato ISO (ej: "2025-10-22T23:03:12.3208401Z")
 * @returns Timestamp en milliseconds desde epoch
 */
export function parseIsoToEpoch(isoString: string): number {
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO date string: ${isoString}`);
  }
  
  return date.getTime();
}

/**
 * Verifica si un timestamp está próximo a expirar
 * @param expiresAt - Timestamp de expiración en milliseconds
 * @param thresholdMs - Umbral en milliseconds (por defecto 60 segundos)
 * @returns true si está próximo a expirar
 */
export function isExpiringSoon(expiresAt: number, thresholdMs: number = 60000): boolean {
  const now = Date.now();
  return (expiresAt - now) <= thresholdMs;
}

/**
 * Verifica si un timestamp ya ha expirado
 * @param expiresAt - Timestamp de expiración en milliseconds
 * @returns true si ya expiró
 */
export function isExpired(expiresAt: number): boolean {
  return Date.now() >= expiresAt;
}

/**
 * Formatea un timestamp a fecha legible
 * @param timestamp - Timestamp en milliseconds
 * @returns Fecha formateada
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

/**
 * Calcula el tiempo restante hasta la expiración
 * @param expiresAt - Timestamp de expiración en milliseconds
 * @returns Tiempo restante en milliseconds (0 si ya expiró)
 */
export function getTimeUntilExpiration(expiresAt: number): number {
  const remaining = expiresAt - Date.now();
  return Math.max(0, remaining);
}
