/**
 * Quick Vehicle Photo Upload
 * 
 * Componente super simple para subir fotos de vehículos
 * Se integra fácilmente en cualquier lista de vehículos
 */

import { useState } from 'react';
import { compressImageToBase64, saveImageToFirestore } from '../utils/firebase/localImageStorage';
import { VehicleData } from '../utils/firebase/vehicles';

interface QuickVehiclePhotoUploadProps {
  vehicle: VehicleData;
  onImageUploaded?: (imageUrl: string) => void;
  className?: string;
}

export function QuickVehiclePhotoUpload({
  vehicle,
  onImageUploaded,
  className = ''
}: QuickVehiclePhotoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      // Comprimir imagen
      const base64 = await compressImageToBase64(file, 800, 600, 0.7);
      
      // Guardar en Firestore
      const vehicleId = vehicle.id || `vehicle-${vehicle.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      await saveImageToFirestore(file, 'vehicles', vehicleId, 'imageUrl', true);
      
      console.log(`✅ Photo uploaded for ${vehicle.plate}`);
      onImageUploaded?.(base64);
      
      // Reset input
      event.target.value = '';
    } catch (err: any) {
      console.error('Error uploading photo:', err);
      setError(err.message || 'Failed to upload photo');
    } finally {
      setUploading(false);
    }
  };

  const hasUploadedImage = vehicle.imageUrl && vehicle.imageUrl.startsWith('data:image/');

  return (
    <div className={`inline-block ${className}`}>
      <label 
        className={`
          cursor-pointer text-sm underline transition-colors
          ${uploading ? 'text-gray-400 cursor-wait' : hasUploadedImage ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'}
        `}
      >
        {uploading ? '⏳ Uploading...' : hasUploadedImage ? '✅ Change photo' : '📸 Add photo'}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileSelect}
          disabled={uploading}
          className="hidden"
        />
      </label>
      
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}

/**
 * EJEMPLO DE USO MUY SIMPLE:
 * 
 * En VehicleCard o cualquier lista:
 * 
 * <div className="flex items-center justify-between">
 *   <span>{vehicle.plate}</span>
 *   <QuickVehiclePhotoUpload 
 *     vehicle={vehicle}
 *     onImageUploaded={() => {
 *       // Opcional: Recargar lista
 *       refreshVehicles();
 *     }}
 *   />
 * </div>
 */
