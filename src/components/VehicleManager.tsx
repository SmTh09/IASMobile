/**
 * VehicleManager Component
 * 
 * Componente para gestionar vehículos con carga desde Firestore
 * y soporte para imágenes dinámicas
 */

import { useState, useEffect } from 'react';
import { getCustomerVehicles, VehicleData } from '../utils/firebase/vehicles';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VehicleManagerProps {
  customerId: string;
  onSelectVehicle?: (vehicle: VehicleData) => void;
  searchTerm?: string;
}

/**
 * Hook personalizado para cargar vehículos desde Firestore
 */
export function useCustomerVehicles(customerId: string) {
  const [vehicles, setVehicles] = useState<VehicleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVehicles() {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getCustomerVehicles(customerId);
        setVehicles(data);
      } catch (err: any) {
        console.error('Error loading vehicles:', err);
        setError(err.message || 'Failed to load vehicles');
      } finally {
        setLoading(false);
      }
    }

    if (customerId) {
      loadVehicles();
    }
  }, [customerId]);

  return { vehicles, loading, error, refresh: () => setVehicles([]) };
}

/**
 * Componente de tarjeta de vehículo con imagen
 */
export function VehicleCard({ 
  vehicle, 
  onClick,
  showImage = true 
}: { 
  vehicle: VehicleData; 
  onClick?: () => void;
  showImage?: boolean;
}) {
  // Placeholder si no hay imagen
  const placeholderImage = `https://via.placeholder.com/400x300/4C68B0/ffffff?text=${encodeURIComponent(vehicle.model)}`;
  
  return (
    <div 
      className="bg-[#f4f4f4] w-full cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center overflow-clip">
        <div className="flex gap-5 items-center justify-center p-5 w-full">
          {showImage && (
            <div className="relative shrink-0 w-[100px] h-[100px]">
              <ImageWithFallback
                src={vehicle.imageUrl || placeholderImage}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="absolute inset-0 w-full h-full object-cover rounded"
              />
            </div>
          )}
          
          <div className="flex flex-col gap-1 flex-1 text-sm text-[#161616]">
            <p>
              <span className="font-medium">Plate: </span>
              <span className="font-light">{vehicle.plate}</span>
            </p>
            <p>
              <span className="font-medium">Registration Date: </span>
              <span className="font-light">{vehicle.registrationDate}</span>
            </p>
            <p>
              <span className="font-medium">Brand: </span>
              <span className="font-light">{vehicle.brand}</span>
            </p>
            <p>
              <span className="font-medium">Model: </span>
              <span className="font-light">{vehicle.model}</span>
            </p>
          </div>
          
          <div className="shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path 
                d="M6 12L10 8L6 4" 
                stroke="#525252" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Lista de vehículos con carga desde Firestore
 */
export function VehicleList({
  customerId,
  onSelectVehicle,
  searchTerm = ''
}: VehicleManagerProps) {
  const { vehicles, loading, error } = useCustomerVehicles(customerId);

  // Filtrar vehículos por búsqueda
  const filteredVehicles = vehicles.filter(vehicle => {
    if (!searchTerm.trim()) return true;
    
    const search = searchTerm.toLowerCase();
    return (
      vehicle.plate.toLowerCase().includes(search) ||
      vehicle.brand.toLowerCase().includes(search) ||
      vehicle.model.toLowerCase().includes(search) ||
      vehicle.chassis.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-5">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 h-[140px] rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-5 text-center">
        <p className="text-red-600">Error loading vehicles</p>
        <p className="text-sm text-gray-600 mt-2">{error}</p>
      </div>
    );
  }

  if (filteredVehicles.length === 0) {
    return (
      <div className="p-5 text-center">
        <p className="text-gray-600">
          {searchTerm ? 'No vehicles found' : 'No vehicles yet'}
        </p>
        {!searchTerm && (
          <p className="text-sm text-gray-500 mt-2">
            Run seedVehicles() to add sample vehicles
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {filteredVehicles.map(vehicle => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onClick={() => onSelectVehicle?.(vehicle)}
        />
      ))}
    </div>
  );
}

/**
 * EJEMPLO DE USO:
 * 
 * // En CarList.tsx o cualquier componente:
 * 
 * import { VehicleList, useCustomerVehicles } from './components/VehicleManager';
 * 
 * function MyCarList({ customerId }: { customerId: string }) {
 *   const [selectedVehicle, setSelectedVehicle] = useState(null);
 *   const [searchTerm, setSearchTerm] = useState('');
 * 
 *   return (
 *     <div>
 *       <input 
 *         value={searchTerm}
 *         onChange={(e) => setSearchTerm(e.target.value)}
 *         placeholder="Search vehicles..."
 *       />
 *       
 *       <VehicleList
 *         customerId={customerId}
 *         onSelectVehicle={(vehicle) => {
 *           console.log('Selected:', vehicle);
 *           setSelectedVehicle(vehicle);
 *         }}
 *         searchTerm={searchTerm}
 *       />
 *     </div>
 *   );
 * }
 * 
 * // O usar el hook directamente:
 * const { vehicles, loading, error } = useCustomerVehicles('customer-theo-floyd');
 */
