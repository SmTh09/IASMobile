import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  updateDoc,
  increment
} from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigured } from './config';

// Initialize Firebase only if configured
let app: any = null;
let db: any = null;

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('✅ Firebase initialized successfully');
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
  }
} else {
  console.warn('⚠️ Firebase not configured. Configure Firebase in /utils/firebase/config.ts');
}

export { db };

// Collection references
export const COLLECTIONS = {
  APPOINTMENTS: 'appointments',
  CUSTOMERS: 'customers',
  VEHICLES: 'vehicles',
  APPOINTMENT_COUNTS: 'appointmentCounts'
};

// Types
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
  status?: string;
  createdAt?: string;
}

// Create a new appointment
export async function createAppointment(appointmentData: AppointmentData) {
  try {
    if (!db) {
      throw new Error('Firebase is not initialized. Please check your Firebase configuration.');
    }

    // Validate required fields
    if (!appointmentData.customerId || !appointmentData.vehicle || !appointmentData.date || !appointmentData.timeSlot) {
      throw new Error('Missing required appointment fields');
    }

    // Generate a unique appointment ID
    const appointmentId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const appointmentRef = doc(db, COLLECTIONS.APPOINTMENTS, appointmentId);
    
    // Clean appointment data to remove any undefined values
    const appointment = {
      id: appointmentId,
      customerId: appointmentData.customerId,
      customerName: appointmentData.customerName || '',
      vehicle: {
        licensePlate: appointmentData.vehicle.licensePlate || '',
        brand: appointmentData.vehicle.brand || '',
        model: appointmentData.vehicle.model || '',
        image: appointmentData.vehicle.image || ''
      },
      jobLines: appointmentData.jobLines || [],
      mileage: appointmentData.mileage || '',
      measurement: appointmentData.measurement || '',
      date: appointmentData.date,
      timeSlot: appointmentData.timeSlot,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    // Save appointment
    await setDoc(appointmentRef, appointment);
    
    // Update appointment count
    const countRef = doc(db, COLLECTIONS.APPOINTMENT_COUNTS, appointmentData.customerId);
    const countDoc = await getDoc(countRef);
    
    if (countDoc.exists()) {
      await updateDoc(countRef, {
        count: increment(1)
      });
    } else {
      await setDoc(countRef, {
        customerId: appointmentData.customerId,
        count: 1
      });
    }
    
    // Get new count
    const updatedCountDoc = await getDoc(countRef);
    const appointmentCount = updatedCountDoc.exists() ? updatedCountDoc.data().count : 1;
    
    return {
      success: true,
      appointment,
      appointmentCount
    };
  } catch (error) {
    console.error('Firebase Error - createAppointment:', error);
    throw error;
  }
}

// Get all appointments for a customer
export async function getAppointments(customerId: string) {
  try {
    if (!db) {
      throw new Error('Firebase is not initialized. Please check your Firebase configuration.');
    }

    const appointmentsRef = collection(db, COLLECTIONS.APPOINTMENTS);
    // Query only by customerId (no orderBy to avoid needing composite index)
    const q = query(
      appointmentsRef,
      where('customerId', '==', customerId)
    );
    
    const querySnapshot = await getDocs(q);
    const appointments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort by createdAt in descending order (most recent first) on the client side
    appointments.sort((a: any, b: any) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA; // Descending order
    });
    
    return appointments;
  } catch (error) {
    console.error('Firebase Error - getAppointments:', error);
    throw error;
  }
}

// Get appointment count for a customer
export async function getAppointmentCount(customerId: string) {
  try {
    if (!db) {
      console.warn('Firebase not initialized - returning 0');
      return 0;
    }

    const countRef = doc(db, COLLECTIONS.APPOINTMENT_COUNTS, customerId);
    const countDoc = await getDoc(countRef);
    
    if (countDoc.exists()) {
      return countDoc.data().count || 0;
    }
    
    return 0;
  } catch (error) {
    console.error('Firebase Error - getAppointmentCount:', error);
    // Return 0 on error for graceful degradation
    return 0;
  }
}

// Update appointment status
export async function updateAppointmentStatus(
  appointmentId: string,
  status: string
) {
  try {
    const appointmentRef = doc(db, COLLECTIONS.APPOINTMENTS, appointmentId);
    
    await updateDoc(appointmentRef, {
      status,
      updatedAt: new Date().toISOString()
    });
    
    const updatedDoc = await getDoc(appointmentRef);
    return {
      success: true,
      appointment: {
        id: updatedDoc.id,
        ...updatedDoc.data()
      }
    };
  } catch (error) {
    console.error('Firebase Error - updateAppointmentStatus:', error);
    throw error;
  }
}

// Delete an appointment
export async function deleteAppointment(customerId: string, appointmentId: string) {
  try {
    const appointmentRef = doc(db, COLLECTIONS.APPOINTMENTS, appointmentId);
    
    // Delete the appointment
    await deleteDoc(appointmentRef);
    
    // Update count
    const countRef = doc(db, COLLECTIONS.APPOINTMENT_COUNTS, customerId);
    await updateDoc(countRef, {
      count: increment(-1)
    });
    
    // Get new count
    const updatedCountDoc = await getDoc(countRef);
    const appointmentCount = updatedCountDoc.exists() ? Math.max(0, updatedCountDoc.data().count) : 0;
    
    return appointmentCount;
  } catch (error) {
    console.error('Firebase Error - deleteAppointment:', error);
    throw error;
  }
}
