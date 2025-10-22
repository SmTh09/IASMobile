import React, { useState } from 'react';
import { uploadImage, compressImage } from '../utils/firebase/storage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

interface ImageUploadFieldProps {
  /** URL actual de la imagen (opcional) */
  currentImageUrl?: string;
  /** Callback cuando se sube una nueva imagen */
  onImageUploaded: (url: string) => void;
  /** Ruta base en Storage (ej: 'parts/PART001') */
  storagePath: string;
  /** Texto del botón */
  buttonText?: string;
  /** Permitir comprimir imagen antes de subir */
  compress?: boolean;
  /** Ancho máximo para compresión */
  maxWidth?: number;
  /** Alto máximo para compresión */
  maxHeight?: number;
  /** Calidad de compresión (0-1) */
  quality?: number;
  /** Clases CSS adicionales */
  className?: string;
  /** Mostrar preview de la imagen */
  showPreview?: boolean;
  /** Permitir eliminar imagen */
  allowRemove?: boolean;
  /** Callback cuando se elimina la imagen */
  onImageRemoved?: () => void;
}

/**
 * Componente reutilizable para subir imágenes a Firebase Storage
 * 
 * @example
 * ```tsx
 * <ImageUploadField
 *   currentImageUrl={part.imageUrl}
 *   onImageUploaded={(url) => updatePartImage(partId, url)}
 *   storagePath={`parts/${partId}`}
 *   buttonText="Subir imagen del part"
 *   compress={true}
 *   showPreview={true}
 * />
 * ```
 */
export function ImageUploadField({
  currentImageUrl,
  onImageUploaded,
  storagePath,
  buttonText = 'Subir imagen',
  compress = true,
  maxWidth = 1920,
  maxHeight = 1080,
  quality = 0.8,
  className = '',
  showPreview = true,
  allowRemove = false,
  onImageRemoved
}: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState(currentImageUrl || '');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      setError('Por favor selecciona un archivo de imagen válido');
      return;
    }

    // Validar tamaño (5MB máximo)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError('La imagen es demasiado grande. Máximo 5MB');
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      let fileToUpload = file;

      // Comprimir si está habilitado
      if (compress) {
        setProgress(20);
        fileToUpload = await compressImage(file, maxWidth, maxHeight, quality);
      }

      setProgress(40);

      // Generar nombre único para el archivo
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const fullPath = `${storagePath}/${fileName}`;

      setProgress(60);

      // Subir a Firebase Storage
      const downloadUrl = await uploadImage(fileToUpload, fullPath);

      setProgress(100);
      setPreviewUrl(downloadUrl);

      // Callback con la URL
      onImageUploaded(downloadUrl);

      // Resetear input
      e.target.value = '';
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Error al subir la imagen. Por favor intenta de nuevo.');
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleRemove = () => {
    setPreviewUrl('');
    setError(null);
    if (onImageRemoved) {
      onImageRemoved();
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Preview de la imagen */}
      {showPreview && previewUrl && (
        <div className="relative inline-block">
          <ImageWithFallback
            src={previewUrl}
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
        </div>
      )}

      {/* Input de archivo */}
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
      <p className="text-xs text-gray-500">
        Formatos aceptados: JPG, PNG, GIF, WebP. Tamaño máximo: 5MB
        {compress && ' (se comprimirá automáticamente)'}
      </p>
    </div>
  );
}
