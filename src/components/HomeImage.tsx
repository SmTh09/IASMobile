/**
 * HomeImage Component
 * 
 * Componente para mostrar la imagen del home (mecánico trabajando en auto).
 * Usa la imagen importada directamente desde Figma.
 * 
 * VENTAJAS:
 * - No depende de URLs externas
 * - Se carga instantáneamente
 * - Funciona offline
 * - No hay errores 403
 */

import imgHomeBackground from "figma:asset/b6685d373e00a9376befb1596d3760c1fe3a0af0.png";

interface HomeImageProps {
  /**
   * Ancho de la imagen en px
   * Por defecto: 430px (dimensiones originales del diseño de Figma)
   */
  width?: number;
  
  /**
   * Alto de la imagen en px
   * Por defecto: 200px (dimensiones originales del diseño de Figma)
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
 * Componente de imagen del home
 * 
 * @param width - Ancho en px (por defecto 430)
 * @param height - Alto en px (por defecto 200)
 * @param className - Clases CSS adicionales
 * @param alt - Texto alternativo (por defecto vacío)
 */
export function HomeImage({
  width = 430,
  height = 200,
  className = '',
  alt = ''
}: HomeImageProps) {
  return (
    <img
      src={imgHomeBackground}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'cover'
      }}
    />
  );
}

/**
 * EJEMPLOS DE USO:
 * 
 * // Uso básico (dimensiones originales de Figma)
 * <HomeImage />
 * 
 * // Con dimensiones personalizadas
 * <HomeImage width={390} height={200} />
 * 
 * // Con clases CSS (como en HomeViewMobileCustomer)
 * <HomeImage 
 *   width={430} 
 *   height={200} 
 *   className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
 * />
 * 
 * // Para vista móvil
 * <HomeImage width={390} height={200} />
 */

export default HomeImage;
