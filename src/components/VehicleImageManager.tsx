/**
 * Vehicle Image Manager
 * 
 * Componente para gestionar las imágenes de vehículos
 * Permite al usuario subir fotos para cada vehículo
 */

import { useState } from 'react';
import { VehicleData } from '../utils/firebase/vehicles';
import { LocalImageUpload } from './LocalImageUpload';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

interface VehicleImageManagerProps {
  vehicle: VehicleData;
  open: boolean;
  onClose: () => void;
  onImageUploaded?: (imageUrl: string) => void;
}

export function VehicleImageManager({
  vehicle,
  open,
  onClose,
  onImageUploaded
}: VehicleImageManagerProps) {
  const [currentImage, setCurrentImage] = useState(vehicle.imageUrl || '');

  const handleImageUploaded = (base64: string) => {
    setCurrentImage(base64);
    onImageUploaded?.(base64);
    
    // Show success message
    console.log(`✅ Image uploaded for ${vehicle.plate}`);
  };

  const handleImageRemoved = () => {
    setCurrentImage('');
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Vehicle Photo</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Vehicle Info */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Plate:</span>
              <span className="text-gray-700">{vehicle.plate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Model:</span>
              <span className="text-gray-700">{vehicle.brand} {vehicle.model}</span>
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-3">
            <label className="block font-medium">Vehicle Photo</label>
            
            <LocalImageUpload
              collection="vehicles"
              documentId={vehicle.id || ''}
              fieldName="imageUrl"
              onImageUploaded={handleImageUploaded}
              currentImageBase64={currentImage}
              showPreview={true}
              allowRemove={true}
              onImageRemoved={handleImageRemoved}
              buttonText="📸 Upload Photo"
              quality={0.7}
              maxWidth={800}
              maxHeight={600}
            />
            
            <p className="text-sm text-gray-500">
              💡 Tip: Take a clear photo of the vehicle from the side
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Componente simple de botón para abrir el manager
 */
export function UploadVehicleImageButton({
  vehicle,
  onImageUploaded
}: {
  vehicle: VehicleData;
  onImageUploaded?: (imageUrl: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Determinar si el vehículo ya tiene una imagen subida
  const hasUploadedImage = vehicle.imageUrl && vehicle.imageUrl.startsWith('data:image/');
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-blue-600 hover:text-blue-700 underline"
      >
        {hasUploadedImage ? '📷 Change photo' : '📸 Upload photo'}
      </button>

      <VehicleImageManager
        vehicle={vehicle}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onImageUploaded={(imageUrl) => {
          onImageUploaded?.(imageUrl);
          setIsOpen(false);
        }}
      />
    </>
  );
}

/**
 * EJEMPLO DE USO en CarList:
 * 
 * import { UploadVehicleImageButton } from './components/VehicleImageManager';
 * 
 * // Dentro de VehicleCard:
 * <div className="flex items-center gap-2">
 *   <span>{vehicle.plate}</span>
 *   <UploadVehicleImageButton 
 *     vehicle={vehicle}
 *     onImageUploaded={(imageUrl) => {
 *       // Refresh la lista o actualizar estado local
 *       console.log('New image:', imageUrl);
 *     }}
 *   />
 * </div>
 */
