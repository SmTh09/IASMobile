/**
 * CustomerProfileImage Component
 * 
 * Componente para mostrar y actualizar la foto de perfil del cliente.
 * 
 * ACTUALMENTE: Usa imagen importada de Figma (imgTheoFloyd)
 * FUTURO: Puede conectarse a Firestore para imágenes dinámicas
 * 
 * Para habilitar actualizaciones dinámicas:
 * 1. Crear documento de customer en Firestore con campo imageUrl
 * 2. Usar LocalImageUpload para subir nueva foto
 * 3. Mostrar imageUrl desde Firestore en lugar de imagen estática
 */

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase/firestore';
import imgTheoFloyd from "figma:asset/c16dc5349669022a7da18cc432ee444cded46a1c.png";

interface CustomerProfileImageProps {
  customerId?: string;
  size?: number;
  className?: string;
  alt?: string;
  editable?: boolean;
}

/**
 * Componente de imagen de perfil del cliente
 * 
 * @param customerId - ID del cliente (opcional, por defecto usa imagen estática)
 * @param size - Tamaño en px (por defecto 80)
 * @param className - Clases CSS adicionales
 * @param alt - Texto alternativo (por defecto "Theo Floyd")
 * @param editable - Si se puede editar (futuro feature)
 */
export function CustomerProfileImage({
  customerId,
  size = 80,
  className = '',
  alt = 'Theo Floyd',
  editable = false
}: CustomerProfileImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(imgTheoFloyd);
  const [loading, setLoading] = useState(false);

  // Cargar imagen desde Firestore (si customerId está presente)
  useEffect(() => {
    if (!customerId) {
      // Si no hay customerId, usar imagen estática de Figma
      setImageUrl(imgTheoFloyd);
      return;
    }

    async function loadCustomerImage() {
      setLoading(true);
      try {
        const docRef = doc(db, 'customers', customerId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists() && docSnap.data().imageUrl) {
          // Usar imagen de Firestore si existe
          setImageUrl(docSnap.data().imageUrl);
        } else {
          // Fallback a imagen de Figma
          setImageUrl(imgTheoFloyd);
        }
      } catch (error) {
        console.error('Error loading customer image:', error);
        // Fallback a imagen de Figma en caso de error
        setImageUrl(imgTheoFloyd);
      } finally {
        setLoading(false);
      }
    }

    loadCustomerImage();
  }, [customerId]);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
    >
      {loading ? (
        <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse" />
      ) : (
        <img
          src={imageUrl}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
      )}
      
      {editable && (
        <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-600 transition-colors">
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </div>
      )}
    </div>
  );
}

/**
 * EJEMPLO DE USO:
 * 
 * // Uso básico (imagen estática de Figma)
 * <CustomerProfileImage />
 * 
 * // Con customerId (intenta cargar desde Firestore)
 * <CustomerProfileImage customerId="customer-theo-floyd" />
 * 
 * // Con tamaño personalizado
 * <CustomerProfileImage size={120} />
 * 
 * // Editable (futuro feature)
 * <CustomerProfileImage customerId="customer-theo-floyd" editable={true} />
 * 
 * 
 * PARA HABILITAR ACTUALIZACIÓN DE FOTO:
 * 
 * 1. Crear colección 'customers' en Firestore:
 *    {
 *      id: "customer-theo-floyd",
 *      name: "Theo Floyd",
 *      email: "theo@example.com",
 *      imageUrl: "" // Base64 o URL
 *    }
 * 
 * 2. Usar LocalImageUpload en una página de perfil:
 *    <LocalImageUpload
 *      collection="customers"
 *      documentId="customer-theo-floyd"
 *      fieldName="imageUrl"
 *      onImageUploaded={(base64) => console.log('Foto actualizada!')}
 *      showPreview={true}
 *      quality={0.7}
 *      maxWidth={400}
 *      maxHeight={400}
 *    />
 * 
 * 3. La imagen se actualizará automáticamente en todos los componentes
 */
