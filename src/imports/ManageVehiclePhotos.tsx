/**
 * Manage Vehicle Photos - Simple UI
 * 
 * Página dedicada para subir fotos de vehículos
 * Diseño simple y directo
 */

import { useState, useEffect } from 'react';
import { getCustomerVehicles, VehicleData } from '../utils/firebase/vehicles';
import { compressImageToBase64, saveImageToFirestore } from '../utils/firebase/localImageStorage';
import StatusBar from '../components/StatusBar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ManageVehiclePhotosProps {
  customerId?: string;
  onBack?: () => void;
}

export default function ManageVehiclePhotos({
  customerId = 'customer-theo-floyd',
  onBack
}: ManageVehiclePhotosProps) {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  useEffect(() => {
    loadVehicles();
  }, [customerId]);

  const loadVehicles = async () => {
    try {
      setLoading(true);
      const data = await getCustomerVehicles(customerId);
      setVehicles(data);
    } catch (error) {
      console.error('Error loading vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (vehicle: VehicleData, file: File) => {
    const vehicleId = vehicle.id || `vehicle-${vehicle.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    
    try {
      setUploadingId(vehicleId);
      
      // Comprimir y guardar
      await saveImageToFirestore(file, 'vehicles', vehicleId, 'imageUrl', true);
      
      console.log(`✅ Photo uploaded for ${vehicle.plate}`);
      
      // Recargar vehículos
      await loadVehicles();
    } catch (error: any) {
      console.error('Error uploading photo:', error);
      alert(error.message || 'Failed to upload photo');
    } finally {
      setUploadingId(null);
    }
  };

  const hasUploadedImage = (imageUrl?: string) => {
    return imageUrl && imageUrl.startsWith('data:image/');
  };

  const getImageSrc = (imageUrl?: string) => {
    if (hasUploadedImage(imageUrl)) {
      return imageUrl!;
    }
    return 'https://via.placeholder.com/300x200/4C68B0/ffffff?text=No+Photo';
  };

  if (loading) {
    return (
      <div className="relative bg-white w-[430px] h-[932px] mx-auto overflow-hidden">
        <StatusBar />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-600">Loading vehicles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white w-[430px] h-[932px] mx-auto overflow-hidden font-['IBM_Plex_Sans',_sans-serif]">
      <StatusBar />
      
      {/* Header */}
      <div className="absolute left-0 right-0 top-[59px] h-[60px] bg-white border-b border-gray-200 flex items-center px-5">
        <button
          onClick={onBack}
          className="text-[#4C68B0] text-sm"
        >
          ← Back
        </button>
        <h1 className="flex-1 text-center font-medium text-[16px]">
          Vehicle Photos
        </h1>
        <div className="w-[60px]" />
      </div>

      {/* Instructions */}
      <div className="absolute left-0 right-0 top-[119px] bg-blue-50 p-4 border-b border-blue-100">
        <p className="text-sm text-blue-900 text-center">
          📸 Upload a photo for each vehicle
        </p>
      </div>

      {/* Vehicle List */}
      <div className="absolute left-0 right-0 top-[190px] bottom-[34px] overflow-y-auto px-5 pb-5">
        <div className="space-y-4">
          {vehicles.map((vehicle) => {
            const vehicleId = vehicle.id || `vehicle-${vehicle.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
            const isUploading = uploadingId === vehicleId;
            const hasPhoto = hasUploadedImage(vehicle.imageUrl);

            return (
              <div
                key={vehicleId}
                className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200"
              >
                {/* Vehicle Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[16px]">{vehicle.plate}</p>
                    <p className="text-sm text-gray-600">
                      {vehicle.brand} {vehicle.model}
                    </p>
                  </div>
                  {hasPhoto && (
                    <span className="text-green-600 text-sm">✅ Has photo</span>
                  )}
                </div>

                {/* Image Preview */}
                <div className="relative w-full h-[150px] bg-gray-200 rounded overflow-hidden">
                  <ImageWithFallback
                    src={getImageSrc(vehicle.imageUrl)}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Upload Button */}
                <label
                  className={`
                    block w-full text-center py-3 rounded cursor-pointer transition-colors
                    ${isUploading 
                      ? 'bg-gray-300 text-gray-600 cursor-wait' 
                      : hasPhoto
                        ? 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }
                  `}
                >
                  {isUploading 
                    ? '⏳ Uploading...' 
                    : hasPhoto 
                      ? '📷 Change Photo' 
                      : '📸 Upload Photo'
                  }
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handlePhotoUpload(vehicle, file);
                      }
                      e.target.value = '';
                    }}
                    disabled={isUploading}
                    className="hidden"
                  />
                </label>
              </div>
            );
          })}

          {vehicles.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p>No vehicles found</p>
              <p className="text-sm mt-2">
                Run auto-seed to create vehicles
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Home Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center bg-transparent">
        <div className="w-[134px] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}
