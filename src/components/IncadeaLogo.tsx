/**
 * IncadeaLogo Component
 * 
 * Componente para mostrar el logo de Incadea en toda la aplicación.
 * Usa la imagen importada directamente desde Figma.
 * 
 * VENTAJAS:
 * - No depende de URLs externas
 * - Se carga instantáneamente
 * - Funciona offline
 * - No hay errores 403
 */

import imgIncadeaLogo from "figma:asset/24c902b1a9e277fbde3be49a0758d06802f9c23d.png";

interface IncadeaLogoProps {
  /**
   * Ancho del logo en px
   * Por defecto: 100px (dimensiones originales del diseño de Figma)
   */
  width?: number;
  
  /**
   * Alto del logo en px
   * Por defecto: se calcula automáticamente para mantener aspect ratio
   */
  height?: number;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Texto alternativo
   */
  alt?: string;
}

/**
 * Componente del logo de Incadea
 * 
 * @param width - Ancho en px (por defecto 100)
 * @param height - Alto en px (por defecto auto-calculado)
 * @param className - Clases CSS adicionales
 * @param alt - Texto alternativo (por defecto "Incadea")
 */
export function IncadeaLogo({
  width = 100,
  height,
  className = '',
  alt = 'Incadea'
}: IncadeaLogoProps) {
  // Si no se especifica height, se calcula automáticamente
  // El logo original tiene aspect ratio de aproximadamente 2.18:1 (ancho:alto)
  const calculatedHeight = height || Math.round(width / 2.18);
  
  return (
    <img
      src={imgIncadeaLogo}
      alt={alt}
      width={width}
      height={calculatedHeight}
      className={className}
      style={{
        width: `${width}px`,
        height: `${calculatedHeight}px`,
        objectFit: 'contain'
      }}
    />
  );
}

/**
 * EJEMPLOS DE USO:
 * 
 * // Uso básico (100px de ancho)
 * <IncadeaLogo />
 * 
 * // Con ancho personalizado
 * <IncadeaLogo width={150} />
 * 
 * // Con dimensiones específicas
 * <IncadeaLogo width={200} height={92} />
 * 
 * // Con clases CSS
 * <IncadeaLogo width={120} className="opacity-80 hover:opacity-100" />
 * 
 * // Para TopBar (dimensiones originales de Figma)
 * <IncadeaLogo width={100} />
 * 
 * // Para Login View (más grande)
 * <IncadeaLogo width={200} />
 * 
 * // Para Sidebar (más pequeño)
 * <IncadeaLogo width={80} />
 */

export default IncadeaLogo;
