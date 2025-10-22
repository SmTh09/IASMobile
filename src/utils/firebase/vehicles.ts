/**
 * Vehicle Management Utilities
 * 
 * Funciones para gestionar vehículos en Firestore con soporte para imágenes
 */

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from './firestore';

/**
 * Interface para datos de vehículo
 */
export interface VehicleData {
  id?: string;
  plate: string;
  registrationDate: string;
  brand: string;
  model: string;
  chassis: string;
  imageUrl?: string; // Base64 o URL de imagen
  customerId: string; // Relación con customer
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Obtener todos los vehículos de un cliente
 */
export async function getCustomerVehicles(customerId: string): Promise<VehicleData[]> {
  try {
    const q = query(
      collection(db, 'vehicles'),
      where('customerId', '==', customerId)
    );

    const querySnapshot = await getDocs(q);
    
    const vehicles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as VehicleData[];
    
    // Sort by registration date on the client side to avoid needing a composite index
    vehicles.sort((a, b) => {
      // Parse dates in DD.MM.YYYY format
      const parseDate = (dateStr: string): Date => {
        const [day, month, year] = dateStr.split('.');
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      };
      
      const dateA = parseDate(a.registrationDate);
      const dateB = parseDate(b.registrationDate);
      
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    });
    
    return vehicles;
  } catch (error) {
    console.error('❌ Error getting customer vehicles:', error);
    throw error; // Throw to show the error in CarList
  }
}

/**
 * Obtener un vehículo por ID
 */
export async function getVehicleById(vehicleId: string): Promise<VehicleData | null> {
  try {
    const docRef = doc(db, 'vehicles', vehicleId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as VehicleData;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting vehicle:', error);
    return null;
  }
}

/**
 * Crear un nuevo vehículo
 */
export async function createVehicle(vehicleData: Omit<VehicleData, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'vehicles'), {
      ...vehicleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    console.log('✅ Vehicle created with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating vehicle:', error);
    throw error;
  }
}

/**
 * Actualizar un vehículo existente
 */
export async function updateVehicle(
  vehicleId: string,
  updates: Partial<Omit<VehicleData, 'id' | 'createdAt'>>
): Promise<void> {
  try {
    const docRef = doc(db, 'vehicles', vehicleId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    
    console.log('✅ Vehicle updated:', vehicleId);
  } catch (error) {
    console.error('Error updating vehicle:', error);
    throw error;
  }
}

/**
 * Actualizar imagen de un vehículo
 */
export async function updateVehicleImage(vehicleId: string, imageUrl: string): Promise<void> {
  try {
    await updateVehicle(vehicleId, { imageUrl });
    console.log('✅ Vehicle image updated');
  } catch (error) {
    console.error('Error updating vehicle image:', error);
    throw error;
  }
}

/**
 * Eliminar un vehículo
 */
export async function deleteVehicle(vehicleId: string): Promise<void> {
  try {
    const docRef = doc(db, 'vehicles', vehicleId);
    await deleteDoc(docRef);
    
    console.log('✅ Vehicle deleted:', vehicleId);
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw error;
  }
}

/**
 * Buscar vehículos por texto (plate, brand, model)
 */
export async function searchVehicles(customerId: string, searchTerm: string): Promise<VehicleData[]> {
  const vehicles = await getCustomerVehicles(customerId);
  
  if (!searchTerm.trim()) {
    return vehicles;
  }
  
  const lowerSearch = searchTerm.toLowerCase();
  
  return vehicles.filter(vehicle => 
    vehicle.plate.toLowerCase().includes(lowerSearch) ||
    vehicle.brand.toLowerCase().includes(lowerSearch) ||
    vehicle.model.toLowerCase().includes(lowerSearch) ||
    vehicle.chassis.toLowerCase().includes(lowerSearch)
  );
}
