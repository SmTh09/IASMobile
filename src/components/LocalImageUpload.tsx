import React, { useState } from 'react';
import { 
  saveImageToFirestore, 
  validateImageFile, 
  getBase64Size 
} from '../utils/firebase/localImageStorage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

interface LocalImageUploadProps {
  /** URL base64 actual de la imagen (opcional) */
  currentImageBase64?: string;
  /** Callback cuando se sube una nueva imagen */
  onImageUploaded: (base64: string) => void;
  /** Colección de Firestore */
  collection: string;
  /** ID del documento */
  documentId: string;
  /** Nombre del campo */
  fieldName: string;
  /** Texto del botón */
  buttonText?: string;
  /** Clases CSS adicionales */
  className?: string;
  /** Mostrar preview */
  showPreview?: boolean;
  /** Permitir eliminar */
  allowRemove?: boolean;
  /** Callback al eliminar */
  onImageRemoved?: () => void;
  /** Calidad de compresión (0-1, default: 0.7) */
  quality?: number;
  /** Ancho máximo (default: 800px) */
  maxWidth?: number;
  /** Alto máximo (default: 800px) */
  maxHeight?: number;
}

/**
 * Componente para subir imágenes como base64 a Firestore
 * 
 * ✅ 100% GRATIS (usa tier gratuito de Firestore)
 * ✅ No requiere Firebase Storage
 * ✅ Funciona offline
 * 
 * ⚠️ Solo para imágenes pequeñas (< 500KB comprimido)
 * 
 * @example
 * ```tsx
 * <LocalImageUpload
 *   collection="parts"
 *   documentId="PART001"
 *   fieldName="imageUrl"
 *   onImageUploaded={(base64) => console.log('Saved!', base64)}
 *   showPreview={true}
 * />
 * ```
 */
export function LocalImageUpload({
  currentImageBase64,
  onImageUploaded,
  collection,
  documentId,
  fieldName,
  buttonText = 'Subir imagen',
  className = '',
  showPreview = true,
  allowRemove = false,
  onImageRemoved,
  quality = 0.7,
  maxWidth = 800,
  maxHeight = 800
}: LocalImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [previewBase64, setPreviewBase64] = useState(currentImageBase64 || '');
  const [imageSize, setImageSize] = useState<number | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar archivo
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Archivo inválido');
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      setProgress(20);

      // Guardar en Firestore (comprime automáticamente)
      const base64 = await saveImageToFirestore(
        file,
        collection,
        documentId,
        fieldName,
        true // compress = true
      );

      setProgress(80);

      // Calcular tamaño
      const sizeKB = getBase64Size(base64);
      setImageSize(sizeKB);

      setProgress(100);
      setPreviewBase64(base64);

      // Callback
      onImageUploaded(base64);

      // Resetear input
      e.target.value = '';
      
      // Mostrar feedback
      if (sizeKB < 300) {
        console.log(`✅ Imagen guardada (${sizeKB.toFixed(0)}KB) - Tamaño óptimo`);
      } else if (sizeKB < 600) {
        console.log(`⚠️ Imagen guardada (${sizeKB.toFixed(0)}KB) - Tamaño aceptable`);
      } else {
        console.warn(`⚠️ Imagen guardada (${sizeKB.toFixed(0)}KB) - Considere reducir calidad`);
      }
    } catch (err: any) {
      console.error('Error uploading image:', err);
      setError(err.message || 'Error al subir la imagen. Intenta con una imagen más pequeña.');
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleRemove = () => {
    setPreviewBase64('');
    setImageSize(null);
    setError(null);
    if (onImageRemoved) {
      onImageRemoved();
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Preview */}
      {showPreview && previewBase64 && (
        <div className="relative inline-block">
          <ImageWithFallback
            src={previewBase64}
            alt="Preview"
            className="w-full max-w-xs h-auto rounded-lg border border-gray-300"
          />
          {allowRemove && (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              title="Eliminar imagen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {imageSize !== null && (
            <div className="mt-2 text-xs text-gray-500">
              Tamaño: {imageSize.toFixed(0)}KB
            </div>
          )}
        </div>
      )}

      {/* Upload button */}
      <div className="flex items-center gap-3">
        <label
          className={`
            px-4 py-2 rounded-lg cursor-pointer transition-colors
            ${uploading 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
            }
          `}
        >
          {uploading ? 'Subiendo...' : buttonText}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>

        {uploading && (
          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Info */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>✅ Almacenamiento 100% gratuito en Firestore</p>
        <p>📦 Formatos: JPG, PNG, GIF, WebP (máx. 5MB original)</p>
        <p>🗜️ Se comprime automáticamente a ~{maxWidth}x{maxHeight}px</p>
        <p>💾 Tamaño recomendado final: {'<'}300KB</p>
      </div>
    </div>
  );
}
