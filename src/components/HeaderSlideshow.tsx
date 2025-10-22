/**
 * HeaderSlideshow Component
 * 
 * Componente de slideshow automático para el header del HomeView.
 * Rota entre 3 imágenes con transición crossfade suave.
 * 
 * CARACTERÍSTICAS:
 * - Transición automática cada 7 segundos
 * - Efecto crossfade suave (2 segundos de duración)
 * - Loop continuo: Imagen 1 → 2 → 3 → 1
 * - Mantiene las dimensiones exactas del header original (430x200px)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "figma:asset/64602acb6a691d91de17b7a421c6110096af9406.png"; // Rueda de auto
import img2 from "figma:asset/9cd7a0534f9d2fd17697ddea004cdeb684cf2759.png"; // Mecánico trabajando
import img3 from "figma:asset/0662d753619690745c6dd9d5bc4c794bc57bf193.png"; // Velocímetro

interface HeaderSlideshowProps {
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
   * Duración de cada imagen en milisegundos
   * Por defecto: 7000ms (7 segundos)
   */
  interval?: number;
  
  /**
   * Duración de la transición crossfade en segundos
   * Por defecto: 2 segundos
   */
  transitionDuration?: number;
}

/**
 * Componente de slideshow del header
 * 
 * @param width - Ancho en px (por defecto 430)
 * @param height - Alto en px (por defecto 200)
 * @param className - Clases CSS adicionales
 * @param interval - Duración de cada imagen en ms (por defecto 7000)
 * @param transitionDuration - Duración de la transición en segundos (por defecto 2)
 */
export function HeaderSlideshow({
  width = 430,
  height = 200,
  className = '',
  interval = 7000,
  transitionDuration = 2
}: HeaderSlideshowProps) {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <AnimatePresence mode="sync">
        {images.map((img, index) => (
          index === currentIndex && (
            <motion.img
              key={index}
              src={img}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: transitionDuration,
                ease: "easeInOut"
              }}
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                objectFit: 'cover'
              }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * EJEMPLOS DE USO:
 * 
 * // Uso básico (dimensiones originales de Figma)
 * <HeaderSlideshow />
 * 
 * // Con dimensiones personalizadas
 * <HeaderSlideshow width={390} height={200} />
 * 
 * // Con clases CSS (como en HomeViewMobileCustomer)
 * <HeaderSlideshow 
 *   width={430} 
 *   height={200} 
 *   className="absolute inset-0" 
 * />
 * 
 * // Con intervalo personalizado (cada 5 segundos)
 * <HeaderSlideshow interval={5000} />
 * 
 * // Con transición más rápida (1 segundo)
 * <HeaderSlideshow transitionDuration={1} />
 */

export default HeaderSlideshow;
