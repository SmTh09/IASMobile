/**
 * Seed Vehicles to Firestore
 * 
 * Script para poblar la base de datos con vehículos de ejemplo
 * Ahora incluye imágenes reales desde Figma!
 * 
 * USO:
 * 1. Importar en consola del navegador
 * 2. Ejecutar: seedVehiclesWithFigmaImages('customer-theo-floyd')
 */

import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firestore';
import { VehicleData } from './vehicles';

/**
 * Datos de vehículos con placeholders (funcionan siempre!)
 */
const vehiclesData: Omit<VehicleData, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    plate: 'CF-545-YA',
    registrationDate: '25.02.2020',
    brand: 'BMW',
    model: '330i xDrive',
    chassis: 'WBSWD9C54HP123456',
    imageUrl: 'https://via.placeholder.com/400x300/DC143C/ffffff?text=BMW+330i+xDrive',
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'TK-271-GT',
    registrationDate: '21.02.2020',
    brand: 'BMW',
    model: '540i xDrive',
    chassis: 'WBAKB8C51BE252341',
    imageUrl: 'https://via.placeholder.com/400x300/808080/ffffff?text=BMW+540i+xDrive',
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QX-504-AP',
    registrationDate: '18.02.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: 'WBA8E5G58HNU12345',
    imageUrl: 'https://via.placeholder.com/400x300/4C68B0/ffffff?text=BMW+330I',
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'WW-896-BA',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: '5UXFG8C59HLS12345',
    imageUrl: 'https://via.placeholder.com/400x300/FF8C00/ffffff?text=BMW+330I',
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QR-759-HY',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: 'X6 XDRIVE35I US',
    chassis: '5UXFG435X9L224178',
    imageUrl: 'https://via.placeholder.com/400x300/000080/ffffff?text=BMW+X6',
    customerId: 'customer-theo-floyd'
  }
];

/**
 * Datos de vehículos con placeholders (RECOMENDADO para desarrollo local)
 * Usa URLs públicas que funcionan sin necesidad de archivos locales
 */
const vehiclesDataWithImages: Omit<VehicleData, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    plate: 'CF-545-YA',
    registrationDate: '25.02.2020',
    brand: 'BMW',
    model: '330i xDrive',
    chassis: 'WBSWD9C54HP123456',
    imageUrl: 'https://via.placeholder.com/400x300/DC143C/ffffff?text=BMW+330i+xDrive', // Red
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'TK-271-GT',
    registrationDate: '21.02.2020',
    brand: 'BMW',
    model: '540i xDrive',
    chassis: 'WBAKB8C51BE252341',
    imageUrl: 'https://via.placeholder.com/400x300/808080/ffffff?text=BMW+540i+xDrive', // Gray
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QX-504-AP',
    registrationDate: '18.02.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: 'WBA8E5G58HNU12345',
    imageUrl: 'https://via.placeholder.com/400x300/4C68B0/ffffff?text=BMW+330I', // Blue
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'WW-896-BA',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: '5UXFG8C59HLS12345',
    imageUrl: 'https://via.placeholder.com/400x300/FF8C00/ffffff?text=BMW+330I', // Orange
    customerId: 'customer-theo-floyd'
  },
  {
    plate: 'QR-759-HY',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: 'X6 XDRIVE35I US',
    chassis: '5UXFG435X9L224178',
    imageUrl: 'https://via.placeholder.com/400x300/000080/ffffff?text=BMW+X6', // Navy
    customerId: 'customer-theo-floyd'
  }
];

/**
 * Seed vehicles para un customer específico
 */
export async function seedVehicles(customerId: string = 'customer-theo-floyd') {
  console.log('🚗 Seeding vehicles for customer:', customerId);
  
  try {
    let count = 0;
    
    for (const vehicleData of vehiclesData) {
      // Filtrar solo vehículos del customer especificado
      if (vehicleData.customerId !== customerId) {
        continue;
      }
      
      // Crear ID basado en la placa
      const vehicleId = `vehicle-${vehicleData.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      
      const docData = {
        ...vehicleData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'vehicles', vehicleId), docData);
      console.log(`  ✅ Vehicle: ${vehicleData.plate} (${vehicleData.model})`);
      count++;
    }
    
    console.log(`\n🎉 Successfully seeded ${count} vehicles!`);
    console.log('\n📸 NEXT STEPS:');
    console.log('   1. Vehicles are created without images');
    console.log('   2. Use the Edit Vehicle UI with LocalImageUpload to add photos');
    console.log('   3. Or use updateVehicleImage(vehicleId, base64) programmatically');
    console.log('\n💡 TIP: Use placeholder images for now:');
    console.log('   https://via.placeholder.com/400x300/4C68B0/ffffff?text=BMW');
    
    return count;
  } catch (error) {
    console.error('❌ Error seeding vehicles:', error);
    throw error;
  }
}

/**
 * Seed con imágenes placeholder (URLs públicas)
 * Útil para desarrollo sin necesidad de subir imágenes
 */
export async function seedVehiclesWithPlaceholders(customerId: string = 'customer-theo-floyd') {
  console.log('🚗 Seeding vehicles with placeholder images...');
  
  const vehiclesWithPlaceholders = vehiclesData.map((vehicle, index) => ({
    ...vehicle,
    // Usar diferentes colores para cada vehículo
    imageUrl: `https://via.placeholder.com/400x300/${['FF0000', '999999', 'FF6600', 'FFA500', '0066CC'][index]}/ffffff?text=${encodeURIComponent(vehicle.model)}`
  }));
  
  try {
    let count = 0;
    
    for (const vehicleData of vehiclesWithPlaceholders) {
      if (vehicleData.customerId !== customerId) {
        continue;
      }
      
      const vehicleId = `vehicle-${vehicleData.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      
      const docData = {
        ...vehicleData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'vehicles', vehicleId), docData);
      console.log(`  ✅ Vehicle: ${vehicleData.plate} with placeholder image`);
      count++;
    }
    
    console.log(`\n🎉 Successfully seeded ${count} vehicles with placeholders!`);
    console.log('💡 Replace placeholders with real images using LocalImageUpload');
    
    return count;
  } catch (error) {
    console.error('❌ Error seeding vehicles:', error);
    throw error;
  }
}

/**
 * Seed con imágenes placeholder (RECOMENDADO para desarrollo local)
 * Usa URLs públicas de placeholder.com que siempre funcionan
 * Las imágenes son placeholders de colores que representan cada vehículo
 */
export async function seedVehiclesWithFigmaImages(customerId: string = 'customer-theo-floyd') {
  console.log('🚗 Seeding vehicles with PLACEHOLDER images...');
  console.log('📸 Using colored placeholders for each vehicle!');
  console.log('🌐 These images work instantly on your local server!\n');
  
  try {
    let count = 0;
    
    for (const vehicleData of vehiclesDataWithImages) {
      if (vehicleData.customerId !== customerId) {
        continue;
      }
      
      const vehicleId = `vehicle-${vehicleData.plate.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      
      const docData = {
        ...vehicleData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'vehicles', vehicleId), docData);
      console.log(`  ✅ ${vehicleData.plate} - ${vehicleData.model}`);
      console.log(`     📷 Image: ${typeof vehicleData.imageUrl === 'string' ? vehicleData.imageUrl : '[Local Asset]'}`);
      count++;
    }
    
    console.log(`\n🎉 Successfully seeded ${count} vehicles!`);
    console.log('✨ All vehicles have placeholder images that work instantly!');
    console.log('\n📋 Vehicles created:');
    console.log('   1. CF-545-YA - BMW 330i xDrive (Red placeholder)');
    console.log('   2. TK-271-GT - BMW 540i xDrive (Gray placeholder)');
    console.log('   3. QX-504-AP - BMW 330I XDRIVE A (Blue placeholder)');
    console.log('   4. WW-896-BA - BMW 330I XDRIVE A (Orange placeholder)');
    console.log('   5. QR-759-HY - BMW X6 XDRIVE35I US (Navy placeholder)');
    console.log('\n📸 Replace placeholders with real photos:');
    console.log('   Run: goToVehiclePhotos()');
    console.log('\n🚀 Next step: Navigate to "New Appointment Request" → "Select Car"');
    
    return count;
  } catch (error) {
    console.error('❌ Error seeding vehicles:', error);
    throw error;
  }
}

/**
 * Limpiar todos los vehículos (útil para testing)
 */
export async function clearVehicles() {
  console.log('🗑️ Clearing all vehicles...');
  
  try {
    const { getDocs, deleteDoc, collection } = await import('firebase/firestore');
    const querySnapshot = await getDocs(collection(db, 'vehicles'));
    
    let count = 0;
    for (const docSnap of querySnapshot.docs) {
      await deleteDoc(docSnap.ref);
      count++;
    }
    
    console.log(`✅ Deleted ${count} vehicles`);
  } catch (error) {
    console.error('❌ Error clearing vehicles:', error);
    throw error;
  }
}

// Para usar en consola del navegador:
if (typeof window !== 'undefined') {
  (window as any).seedVehicles = seedVehicles;
  (window as any).seedVehiclesWithPlaceholders = seedVehiclesWithPlaceholders;
  (window as any).seedVehiclesWithFigmaImages = seedVehiclesWithFigmaImages;
  (window as any).clearVehicles = clearVehicles;
  
  console.log('🚗 Vehicle seeding functions loaded!');
  console.log('   ✨ RECOMMENDED: seedVehiclesWithFigmaImages("customer-theo-floyd")');
  console.log('   Or: seedVehiclesWithPlaceholders("customer-theo-floyd")');
  console.log('   Or: seedVehicles("customer-theo-floyd") - no images');
  console.log('   Clear: clearVehicles()');
}
