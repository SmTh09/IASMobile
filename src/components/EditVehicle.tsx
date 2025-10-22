/**
 * EditVehicle Component
 * 
 * Componente para editar información de un vehículo,
 * incluyendo la capacidad de subir/actualizar su imagen
 */

import { useState, useEffect } from 'react';
import { getVehicleById, updateVehicle, VehicleData } from '../utils/firebase/vehicles';
import { LocalImageUpload } from './LocalImageUpload';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EditVehicleProps {
  vehicleId: string;
  onSave?: (vehicle: VehicleData) => void;
  onCancel?: () => void;
}

/**
 * Componente completo de edición de vehículo
 */
export function EditVehicle({ vehicleId, onSave, onCancel }: EditVehicleProps) {
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar vehículo
  useEffect(() => {
    async function loadVehicle() {
      setLoading(true);
      try {
        const data = await getVehicleById(vehicleId);
        if (data) {
          setVehicle(data);
        } else {
          setError('Vehicle not found');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadVehicle();
  }, [vehicleId]);

  const handleSave = async () => {
    if (!vehicle) return;

    setSaving(true);
    try {
      await updateVehicle(vehicleId, {
        plate: vehicle.plate,
        brand: vehicle.brand,
        model: vehicle.model,
        chassis: vehicle.chassis,
        registrationDate: vehicle.registrationDate,
        imageUrl: vehicle.imageUrl
      });

      onSave?.(vehicle);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleImageUploaded = (base64: string) => {
    if (vehicle) {
      setVehicle({ ...vehicle, imageUrl: base64 });
    }
  };

  if (loading) {
    return <div className="p-4">Loading vehicle...</div>;
  }

  if (error || !vehicle) {
    return (
      <div className="p-4">
        <p className="text-red-600">{error || 'Vehicle not found'}</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Edit Vehicle</h2>

      {/* Campos de texto */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Plate</label>
          <input
            type="text"
            value={vehicle.plate}
            onChange={(e) => setVehicle({ ...vehicle, plate: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <input
            type="text"
            value={vehicle.brand}
            onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Model</label>
          <input
            type="text"
            value={vehicle.model}
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Chassis</label>
          <input
            type="text"
            value={vehicle.chassis}
            onChange={(e) => setVehicle({ ...vehicle, chassis: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Registration Date</label>
          <input
            type="text"
            value={vehicle.registrationDate}
            onChange={(e) => setVehicle({ ...vehicle, registrationDate: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            placeholder="DD.MM.YYYY"
          />
        </div>
      </div>

      {/* Upload de imagen */}
      <div>
        <label className="block text-sm font-medium mb-2">Vehicle Image</label>
        <LocalImageUpload
          collection="vehicles"
          documentId={vehicleId}
          fieldName="imageUrl"
          onImageUploaded={handleImageUploaded}
          currentImageBase64={vehicle.imageUrl}
          showPreview={true}
          allowRemove={true}
          onImageRemoved={() => setVehicle({ ...vehicle, imageUrl: '' })}
          buttonText="Change photo"
          quality={0.7}
          maxWidth={800}
          maxHeight={600}
        />
      </div>

      {/* Botones */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
        
        <button
          onClick={onCancel}
          disabled={saving}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/**
 * Componente simplificado solo para subir imagen de vehículo
 */
export function VehicleImageUpload({ 
  vehicleId,
  currentImageUrl,
  onImageUpdated
}: { 
  vehicleId: string;
  currentImageUrl?: string;
  onImageUpdated?: (base64: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">Vehicle Photo</h3>
      
      <LocalImageUpload
        collection="vehicles"
        documentId={vehicleId}
        fieldName="imageUrl"
        onImageUploaded={(base64) => {
          console.log('✅ Vehicle image updated!');
          onImageUpdated?.(base64);
        }}
        currentImageBase64={currentImageUrl}
        showPreview={true}
        allowRemove={true}
        buttonText="📸 Take photo"
        quality={0.7}
        maxWidth={800}
        maxHeight={600}
      />
      
      <p className="text-xs text-gray-500">
        💡 Tip: Take a photo of the vehicle from the side
      </p>
    </div>
  );
}

/**
 * EJEMPLOS DE USO:
 * 
 * 1. Componente completo de edición:
 * ```tsx
 * <EditVehicle
 *   vehicleId="vehicle-cf-545-ya"
 *   onSave={(vehicle) => {
 *     console.log('Vehicle saved:', vehicle);
 *     // Navegar de vuelta
 *   }}
 *   onCancel={() => {
 *     // Cerrar modal o navegar de vuelta
 *   }}
 * />
 * ```
 * 
 * 2. Solo upload de imagen:
 * ```tsx
 * <VehicleImageUpload
 *   vehicleId="vehicle-cf-545-ya"
 *   currentImageUrl={vehicle.imageUrl}
 *   onImageUpdated={(base64) => {
 *     // Actualizar estado local
 *     setVehicle({ ...vehicle, imageUrl: base64 });
 *   }}
 * />
 * ```
 * 
 * 3. Agregar a un modal o drawer existente:
 * ```tsx
 * import { Dialog } from './ui/dialog';
 * 
 * function VehicleEditModal({ vehicleId, open, onClose }) {
 *   return (
 *     <Dialog open={open} onOpenChange={onClose}>
 *       <EditVehicle
 *         vehicleId={vehicleId}
 *         onSave={(vehicle) => {
 *           toast.success('Vehicle updated!');
 *           onClose();
 *         }}
 *         onCancel={onClose}
 *       />
 *     </Dialog>
 *   );
 * }
 * ```
 */
