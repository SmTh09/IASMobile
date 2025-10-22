// ==========================================
// BACKEND CONFIGURATION
// ==========================================
// This app uses Firebase Firestore as the backend
// Configure Firebase in: /utils/firebase/config.ts

import { isFirebaseConfigured } from './firebase/config';
import * as firestore from './firebase/firestore';

// Import seeding functions for development
import { seedVehicles, seedVehiclesWithPlaceholders, seedVehiclesWithFigmaImages, clearVehicles } from './firebase/seedVehicles';
import { 
  updateRedBMW, 
  seedRedBMWVehicle, 
  updateGrayBMW,
  seedGrayBMWVehicle,
  updateWhiteBMW,
  seedWhiteBMWVehicle,
  updateOrangeBMW,
  seedOrangeBMWVehicle,
  updateBMWX6,
  seedBMWX6Vehicle,
  updateFirstThreeVehicles,
  updateLastTwoVehicles,
  updateAllVehicleImages 
} from './firebase/updateVehicleImages';

const USE_FIREBASE = isFirebaseConfigured();

// Log which backend is being used
if (USE_FIREBASE) {
  console.log('🔥 Using Firebase Firestore backend');
} else {
  console.error('❌ Firebase is not configured. Please configure it in /utils/firebase/config.ts');
}

interface AppointmentData {
  customerId: string;
  customerName: string;
  vehicle: {
    licensePlate: string;
    brand: string;
    model: string;
    image: string;
  };
  jobLines: Array<{ id: number; text: string }>;
  mileage: string;
  measurement: string;
  date: string;
  timeSlot: string;
}

export async function createAppointment(appointmentData: AppointmentData) {
  try {
    if (!USE_FIREBASE) {
      throw new Error('Firebase is not configured');
    }
    return await firestore.createAppointment(appointmentData);
  } catch (error) {
    console.error('Error in createAppointment:', error);
    throw error;
  }
}

export async function getAppointments(customerId: string) {
  try {
    if (!USE_FIREBASE) {
      throw new Error('Firebase is not configured');
    }
    return await firestore.getAppointments(customerId);
  } catch (error) {
    console.error('Error in getAppointments:', error);
    throw error;
  }
}

export async function getAppointmentCount(customerId: string) {
  try {
    if (!USE_FIREBASE) {
      console.warn('Firebase is not configured');
      return 0;
    }
    return await firestore.getAppointmentCount(customerId);
  } catch (error) {
    console.error('Error in getAppointmentCount:', error);
    // Return 0 on error instead of throwing - graceful degradation
    return 0;
  }
}

export async function updateAppointmentStatus(
  customerId: string, 
  appointmentId: string, 
  status: string
) {
  try {
    if (!USE_FIREBASE) {
      throw new Error('Firebase is not configured');
    }
    const result = await firestore.updateAppointmentStatus(appointmentId, status);
    return result.appointment;
  } catch (error) {
    console.error('Error in updateAppointmentStatus:', error);
    throw error;
  }
}

export async function deleteAppointment(customerId: string, appointmentId: string) {
  try {
    if (!USE_FIREBASE) {
      throw new Error('Firebase is not configured');
    }
    return await firestore.deleteAppointment(customerId, appointmentId);
  } catch (error) {
    console.error('Error in deleteAppointment:', error);
    throw error;
  }
}

// ==========================================
// VEHICLE SEEDING (Development Only)
// ==========================================
// Export seeding functions for use in browser console

export { 
  seedVehicles, 
  seedVehiclesWithPlaceholders, 
  seedVehiclesWithFigmaImages,
  clearVehicles,
  updateRedBMW,
  seedRedBMWVehicle,
  updateGrayBMW,
  seedGrayBMWVehicle,
  updateWhiteBMW,
  seedWhiteBMWVehicle,
  updateOrangeBMW,
  seedOrangeBMWVehicle,
  updateBMWX6,
  seedBMWX6Vehicle,
  updateFirstThreeVehicles,
  updateLastTwoVehicles,
  updateAllVehicleImages
};

// Make available globally in browser
if (typeof window !== 'undefined') {
  (window as any).seedVehicles = seedVehicles;
  (window as any).seedVehiclesWithPlaceholders = seedVehiclesWithPlaceholders;
  (window as any).seedVehiclesWithFigmaImages = seedVehiclesWithFigmaImages;
  (window as any).clearVehicles = clearVehicles;
  (window as any).updateRedBMW = updateRedBMW;
  (window as any).seedRedBMWVehicle = seedRedBMWVehicle;
  (window as any).updateGrayBMW = updateGrayBMW;
  (window as any).seedGrayBMWVehicle = seedGrayBMWVehicle;
  (window as any).updateWhiteBMW = updateWhiteBMW;
  (window as any).seedWhiteBMWVehicle = seedWhiteBMWVehicle;
  (window as any).updateOrangeBMW = updateOrangeBMW;
  (window as any).seedOrangeBMWVehicle = seedOrangeBMWVehicle;
  (window as any).updateBMWX6 = updateBMWX6;
  (window as any).seedBMWX6Vehicle = seedBMWX6Vehicle;
  (window as any).updateFirstThreeVehicles = updateFirstThreeVehicles;
  (window as any).updateLastTwoVehicles = updateLastTwoVehicles;
  (window as any).updateAllVehicleImages = updateAllVehicleImages;
  
  console.log('\n🚗 VEHICLE FUNCTIONS:');
  console.log('   ✨ RECOMMENDED: seedVehiclesWithFigmaImages() - All 5 vehicles');
  console.log('   ⚡ BATCH: updateFirstThreeVehicles() - First 3');
  console.log('   ⚡ BATCH: updateLastTwoVehicles() - Last 2');
  console.log('\n   📍 INDIVIDUAL:');
  console.log('   updateRedBMW() - CF-545-YA');
  console.log('   updateGrayBMW() - TK-271-GT');
  console.log('   updateWhiteBMW() - QX-504-AP');
  console.log('   updateOrangeBMW() - WW-896-BA');
  console.log('   updateBMWX6() - QR-759-HY');
}
