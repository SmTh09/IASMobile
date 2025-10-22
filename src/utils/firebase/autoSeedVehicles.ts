/**
 * Auto-Seed Vehicles on First Load
 * 
 * This script automatically creates vehicles if they don't exist
 * IMPORTANT: Preserves user-uploaded images (base64)
 * Runs once when the app loads
 */

import { collection, getDocs, query, where, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firestore';
import { VehicleData } from './vehicles';

let hasChecked = false;

// Vehicle data WITH placeholder images from placeholder.com (always work!)
const vehiclesDataTemplate: Omit<VehicleData, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    plate: 'CF-545-YA',
    registrationDate: '25.02.2020',
    brand: 'BMW',
    model: '330i xDrive',
    chassis: 'WBSWD9C54HP123456',
    imageUrl: 'https://via.placeholder.com/400x300/DC143C/ffffff?text=BMW+330i+xDrive', // Red placeholder
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'TK-271-GT',
    registrationDate: '21.02.2020',
    brand: 'BMW',
    model: '540i xDrive',
    chassis: 'WBAKB8C51BE252341',
    imageUrl: 'https://via.placeholder.com/400x300/808080/ffffff?text=BMW+540i+xDrive', // Gray placeholder
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QX-504-AP',
    registrationDate: '18.02.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: 'WBA8E5G58HNU12345',
    imageUrl: 'https://via.placeholder.com/400x300/4C68B0/ffffff?text=BMW+330I', // Blue placeholder
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'WW-896-BA',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: '5UXFG8C59HLS12345',
    imageUrl: 'https://via.placeholder.com/400x300/FF8C00/ffffff?text=BMW+330I', // Orange placeholder
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QR-759-HY',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: 'X6 XDRIVE35I US',
    chassis: '5UXFG435X9L224178',
    imageUrl: 'https://via.placeholder.com/400x300/000080/ffffff?text=BMW+X6', // Navy placeholder
    customerId: 'customer-theo-floyd'
  }
];

/**
 * Smart seed that PRESERVES user-uploaded images
 */
async function smartSeedVehicles(customerId: string) {
  console.log('🚗 Smart-seeding vehicles (preserves uploaded images)...\n');
  
  let created = 0;
  let skipped = 0;
  
  for (const vehicleData of vehiclesDataTemplate) {
    if (vehicleData.customerId !== customerId) {
      continue;
    }
    
    const vehicleId = `vehicle-${vehicleData.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    const docRef = doc(db, 'vehicles', vehicleId);
    
    // Check if vehicle already exists
    const existingDoc = await getDoc(docRef);
    
    if (existingDoc.exists()) {
      const existingData = existingDoc.data();
      
      // If vehicle has a user-uploaded image (base64), keep it
      if (existingData.imageUrl && existingData.imageUrl.startsWith('data:image/')) {
        console.log(`  ⏭️  ${vehicleData.plate} - Already has uploaded image, preserving`);
        skipped++;
        continue;
      }
      
      // If it only has a placeholder, update it with our new placeholder
      if (existingData.imageUrl && existingData.imageUrl.includes('placeholder')) {
        console.log(`  🔄 ${vehicleData.plate} - Updating placeholder image`);
        await setDoc(docRef, {
          ...existingData,
          imageUrl: vehicleData.imageUrl,
          updatedAt: new Date().toISOString()
        });
        continue;
      }
      
      console.log(`  ℹ️  ${vehicleData.plate} - Already exists, skipping`);
      skipped++;
      continue;
    }
    
    // Create new vehicle without image
    const docData = {
      ...vehicleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await setDoc(docRef, docData);
    console.log(`  ✅ ${vehicleData.plate} - Created (ready for photo upload)`);
    created++;
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Created: ${created} vehicles`);
  console.log(`   ⏭️  Skipped: ${skipped} vehicles (already exist)`);
  console.log(`\n📸 Next step: Upload photos for each vehicle!`);
  console.log(`   Navigate to: Home → New Appointment → Select Car → Click Edit`);
}

/**
 * Check if vehicles exist and seed if needed
 * SMART: Preserves user-uploaded images
 */
export async function autoSeedVehiclesIfNeeded(customerId: string = 'customer-theo-floyd') {
  // Only check once per session
  if (hasChecked) {
    return;
  }
  
  hasChecked = true;
  
  try {
    console.log('🔍 Checking if vehicles exist for:', customerId);
    
    // Check if any vehicles exist for this customer
    const vehiclesRef = collection(db, 'vehicles');
    const q = query(vehiclesRef, where('customerId', '==', customerId));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log('📦 No vehicles found. Auto-seeding 5 vehicles...\n');
      await smartSeedVehicles(customerId);
      console.log('\n✅ Auto-seed complete!');
    } else {
      console.log(`✅ Found ${snapshot.size} existing vehicles.`);
      
      // Check if any have user-uploaded images
      const vehiclesWithImages = snapshot.docs.filter(doc => {
        const data = doc.data();
        return data.imageUrl && data.imageUrl.startsWith('data:image/');
      });
      
      if (vehiclesWithImages.length > 0) {
        console.log(`📸 ${vehiclesWithImages.length} vehicles have uploaded images!`);
      }
      
      console.log('💡 No auto-seed needed. Vehicles already exist.');
    }
  } catch (error) {
    console.error('❌ Error checking/seeding vehicles:', error);
    console.log('💡 You can manually seed by running: await seedVehicles("customer-theo-floyd")');
  }
}
