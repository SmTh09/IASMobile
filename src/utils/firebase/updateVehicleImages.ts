/**
 * Update Vehicle Images
 * 
 * Script para actualizar imágenes específicas de vehículos
 * Usa las imágenes importadas desde Figma
 */

import { doc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from './firestore';

// Importar imágenes de vehículos desde Figma
import imgCarRedBMW330i from "figma:asset/901479a00ad97f34e4ecce86fafd722e5c231ff4.png";
import imgCarGrayBMW540i from "figma:asset/d79143797154b720e7bfa61ecddf09ca1a3e97e3.png";
import imgCar3 from "figma:asset/69bec7266b37b74dca7051ae59a49c1da43b254c.png";
import imgCarOrangeBMW330i from "figma:asset/5757059128b70b795e187f77d09176b243b9cab7.png";
import imgCarBMWX6 from "figma:asset/533cb35a4334f4835e80e12e461cc23db8b89e3f.png";

/**
 * Mapeo de vehículos a imágenes de Figma
 */
const vehicleImages = {
  'vehicle-cf-545-ya': imgCarRedBMW330i,      // BMW 330i xDrive - Rojo
  'vehicle-tk-271-gt': imgCarGrayBMW540i,     // BMW 540i xDrive - Gris
  'vehicle-qx-504-ap': imgCar3,               // BMW 330I XDRIVE A
  'vehicle-ww-896-ba': imgCarOrangeBMW330i,   // BMW 330I XDRIVE A - Naranja
  'vehicle-qr-759-hy': imgCarBMWX6            // BMW X6 XDRIVE35I US
};

/**
 * Actualizar imagen de un vehículo específico
 */
export async function updateVehicleImage(vehicleId: string, imageUrl: string): Promise<void> {
  try {
    const docRef = doc(db, 'vehicles', vehicleId);
    await updateDoc(docRef, {
      imageUrl: imageUrl,
      updatedAt: new Date().toISOString()
    });
    
    console.log(`✅ Updated image for ${vehicleId}`);
  } catch (error) {
    console.error(`❌ Error updating ${vehicleId}:`, error);
    throw error;
  }
}

/**
 * Actualizar todas las imágenes de vehículos con las de Figma
 */
export async function updateAllVehicleImages(): Promise<void> {
  console.log('🚗 Updating vehicle images from Figma...');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const [vehicleId, imageUrl] of Object.entries(vehicleImages)) {
    try {
      await updateVehicleImage(vehicleId, imageUrl);
      successCount++;
    } catch (error) {
      console.error(`Failed to update ${vehicleId}`);
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Update complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
}

/**
 * Actualizar solo el vehículo CF-545-YA (BMW 330i rojo)
 */
export async function updateRedBMW(): Promise<void> {
  console.log('🚗 Updating red BMW 330i (CF-545-YA)...');
  
  try {
    await updateVehicleImage('vehicle-cf-545-ya', imgCarRedBMW330i);
    console.log('✅ Red BMW image updated successfully!');
    console.log(`   Vehicle ID: vehicle-cf-545-ya`);
    console.log(`   Plate: CF-545-YA`);
    console.log(`   Model: BMW 330i xDrive`);
    console.log(`   Image: ${imgCarRedBMW330i.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Failed to update red BMW:', error);
    throw error;
  }
}

/**
 * Crear o actualizar vehículo CF-545-YA con todos los datos
 */
export async function seedRedBMWVehicle(): Promise<void> {
  console.log('🚗 Creating/updating red BMW 330i (CF-545-YA) with image...');
  
  const vehicleData = {
    plate: 'CF-545-YA',
    registrationDate: '25.02.2020',
    brand: 'BMW',
    model: '330i xDrive',
    chassis: 'WBSWD9C54HP123456',
    imageUrl: imgCarRedBMW330i,
    customerId: 'customer-theo-floyd',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    const docRef = doc(db, 'vehicles', 'vehicle-cf-545-ya');
    await setDoc(docRef, vehicleData);
    
    console.log('✅ Red BMW created/updated successfully!');
    console.log('   Plate: CF-545-YA');
    console.log('   Model: BMW 330i xDrive');
    console.log('   Chassis: WBSWD9C54HP123456');
    console.log('   Customer: Theo Floyd');
    console.log('   ✅ Image included from Figma assets');
  } catch (error) {
    console.error('❌ Failed to create/update red BMW:', error);
    throw error;
  }
}

/**
 * Actualizar solo el vehículo TK-271-GT (BMW 540i gris)
 */
export async function updateGrayBMW(): Promise<void> {
  console.log('🚗 Updating gray BMW 540i (TK-271-GT)...');
  
  try {
    await updateVehicleImage('vehicle-tk-271-gt', imgCarGrayBMW540i);
    console.log('✅ Gray BMW image updated successfully!');
    console.log(`   Vehicle ID: vehicle-tk-271-gt`);
    console.log(`   Plate: TK-271-GT`);
    console.log(`   Model: BMW 540i xDrive`);
    console.log(`   Image: ${imgCarGrayBMW540i.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Failed to update gray BMW:', error);
    throw error;
  }
}

/**
 * Crear o actualizar vehículo TK-271-GT con todos los datos
 */
export async function seedGrayBMWVehicle(): Promise<void> {
  console.log('🚗 Creating/updating gray BMW 540i (TK-271-GT) with image...');
  
  const vehicleData = {
    plate: 'TK-271-GT',
    registrationDate: '21.02.2020',
    brand: 'BMW',
    model: '540i xDrive',
    chassis: 'WBAKB8C51BE252341',
    imageUrl: imgCarGrayBMW540i,
    customerId: 'customer-theo-floyd',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    const docRef = doc(db, 'vehicles', 'vehicle-tk-271-gt');
    await setDoc(docRef, vehicleData);
    
    console.log('✅ Gray BMW created/updated successfully!');
    console.log('   Plate: TK-271-GT');
    console.log('   Model: BMW 540i xDrive');
    console.log('   Chassis: WBAKB8C51BE252341');
    console.log('   Customer: Theo Floyd');
    console.log('   ✅ Image included from Figma assets');
  } catch (error) {
    console.error('❌ Failed to create/update gray BMW:', error);
    throw error;
  }
}

/**
 * Actualizar solo el vehículo QX-504-AP (BMW 330i blanco)
 */
export async function updateWhiteBMW(): Promise<void> {
  console.log('🚗 Updating white BMW 330i (QX-504-AP)...');
  
  try {
    await updateVehicleImage('vehicle-qx-504-ap', imgCar3);
    console.log('✅ White BMW image updated successfully!');
    console.log(`   Vehicle ID: vehicle-qx-504-ap`);
    console.log(`   Plate: QX-504-AP`);
    console.log(`   Model: BMW 330I XDRIVE A`);
    console.log(`   Image: ${imgCar3.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Failed to update white BMW:', error);
    throw error;
  }
}

/**
 * Crear o actualizar vehículo QX-504-AP con todos los datos
 */
export async function seedWhiteBMWVehicle(): Promise<void> {
  console.log('🚗 Creating/updating white BMW 330i (QX-504-AP) with image...');
  
  const vehicleData = {
    plate: 'QX-504-AP',
    registrationDate: '18.02.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: 'WBA8E5G58HNU12345',
    imageUrl: imgCar3,
    customerId: 'customer-theo-floyd',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    const docRef = doc(db, 'vehicles', 'vehicle-qx-504-ap');
    await setDoc(docRef, vehicleData);
    
    console.log('✅ White BMW created/updated successfully!');
    console.log('   Plate: QX-504-AP');
    console.log('   Model: BMW 330I XDRIVE A');
    console.log('   Chassis: WBA8E5G58HNU12345');
    console.log('   Customer: Theo Floyd');
    console.log('   ✅ Image included from Figma assets');
  } catch (error) {
    console.error('❌ Failed to create/update white BMW:', error);
    throw error;
  }
}

/**
 * Actualizar solo el vehículo WW-896-BA (BMW 330i naranja)
 */
export async function updateOrangeBMW(): Promise<void> {
  console.log('🚗 Updating orange BMW 330i (WW-896-BA)...');
  
  try {
    await updateVehicleImage('vehicle-ww-896-ba', imgCarOrangeBMW330i);
    console.log('✅ Orange BMW image updated successfully!');
    console.log(`   Vehicle ID: vehicle-ww-896-ba`);
    console.log(`   Plate: WW-896-BA`);
    console.log(`   Model: BMW 330I XDRIVE A`);
    console.log(`   Image: ${imgCarOrangeBMW330i.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Failed to update orange BMW:', error);
    throw error;
  }
}

/**
 * Crear o actualizar vehículo WW-896-BA con todos los datos
 */
export async function seedOrangeBMWVehicle(): Promise<void> {
  console.log('🚗 Creating/updating orange BMW 330i (WW-896-BA) with image...');
  
  const vehicleData = {
    plate: 'WW-896-BA',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: '330I XDRIVE A',
    chassis: '5UXFG8C59HLS12345',
    imageUrl: imgCarOrangeBMW330i,
    customerId: 'customer-theo-floyd',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    const docRef = doc(db, 'vehicles', 'vehicle-ww-896-ba');
    await setDoc(docRef, vehicleData);
    
    console.log('✅ Orange BMW created/updated successfully!');
    console.log('   Plate: WW-896-BA');
    console.log('   Model: BMW 330I XDRIVE A');
    console.log('   Chassis: 5UXFG8C59HLS12345');
    console.log('   Customer: Theo Floyd');
    console.log('   ✅ Image included from Figma assets');
  } catch (error) {
    console.error('❌ Failed to create/update orange BMW:', error);
    throw error;
  }
}

/**
 * Actualizar solo el vehículo QR-759-HY (BMW X6)
 */
export async function updateBMWX6(): Promise<void> {
  console.log('🚗 Updating BMW X6 (QR-759-HY)...');
  
  try {
    await updateVehicleImage('vehicle-qr-759-hy', imgCarBMWX6);
    console.log('✅ BMW X6 image updated successfully!');
    console.log(`   Vehicle ID: vehicle-qr-759-hy`);
    console.log(`   Plate: QR-759-HY`);
    console.log(`   Model: BMW X6 XDRIVE35I US`);
    console.log(`   Image: ${imgCarBMWX6.substring(0, 50)}...`);
  } catch (error) {
    console.error('❌ Failed to update BMW X6:', error);
    throw error;
  }
}

/**
 * Crear o actualizar vehículo QR-759-HY con todos los datos
 */
export async function seedBMWX6Vehicle(): Promise<void> {
  console.log('🚗 Creating/updating BMW X6 (QR-759-HY) with image...');
  
  const vehicleData = {
    plate: 'QR-759-HY',
    registrationDate: '01.01.2020',
    brand: 'BMW',
    model: 'X6 XDRIVE35I US',
    chassis: '5UXFG435X9L224178',
    imageUrl: imgCarBMWX6,
    customerId: 'customer-theo-floyd',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  try {
    const docRef = doc(db, 'vehicles', 'vehicle-qr-759-hy');
    await setDoc(docRef, vehicleData);
    
    console.log('✅ BMW X6 created/updated successfully!');
    console.log('   Plate: QR-759-HY');
    console.log('   Model: X6 XDRIVE35I US');
    console.log('   Chassis: 5UXFG435X9L224178');
    console.log('   Customer: Theo Floyd');
    console.log('   ✅ Image included from Figma assets');
  } catch (error) {
    console.error('❌ Failed to create/update BMW X6:', error);
    throw error;
  }
}

/**
 * Actualizar los dos últimos vehículos (naranja, X6)
 */
export async function updateLastTwoVehicles(): Promise<void> {
  console.log('🚗 Updating last two vehicles with images...\n');
  
  try {
    console.log('4️⃣ WW-896-BA (Orange BMW 330i)...');
    await seedOrangeBMWVehicle();
    
    console.log('\n5️⃣ QR-759-HY (BMW X6)...');
    await seedBMWX6Vehicle();
    
    console.log('\n🎉 Last two vehicles updated successfully!');
    console.log('✅ WW-896-BA - Orange BMW 330I XDRIVE A');
    console.log('✅ QR-759-HY - BMW X6 XDRIVE35I US');
  } catch (error) {
    console.error('❌ Error updating vehicles:', error);
    throw error;
  }
}

/**
 * Actualizar los tres primeros vehículos (rojo, gris, blanco)
 */
export async function updateFirstThreeVehicles(): Promise<void> {
  console.log('🚗 Updating first three vehicles with images...\n');
  
  try {
    console.log('1️⃣ CF-545-YA (Red BMW 330i)...');
    await seedRedBMWVehicle();
    
    console.log('\n2️⃣ TK-271-GT (Gray BMW 540i)...');
    await seedGrayBMWVehicle();
    
    console.log('\n3️⃣ QX-504-AP (White BMW 330i)...');
    await seedWhiteBMWVehicle();
    
    console.log('\n🎉 All three vehicles updated successfully!');
    console.log('✅ CF-545-YA - Red BMW 330i xDrive');
    console.log('✅ TK-271-GT - Gray BMW 540i xDrive');
    console.log('✅ QX-504-AP - White BMW 330I XDRIVE A');
  } catch (error) {
    console.error('❌ Error updating vehicles:', error);
    throw error;
  }
}

// Hacer funciones disponibles en consola del navegador
if (typeof window !== 'undefined') {
  (window as any).updateVehicleImage = updateVehicleImage;
  (window as any).updateAllVehicleImages = updateAllVehicleImages;
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
  
  console.log('🚗 Vehicle image update functions loaded!');
  console.log('\n   ✨ BATCH UPDATES:');
  console.log('   updateFirstThreeVehicles() - First 3: CF-545-YA, TK-271-GT, QX-504-AP');
  console.log('   updateLastTwoVehicles() - Last 2: WW-896-BA, QR-759-HY');
  console.log('\n   📍 INDIVIDUAL UPDATES (Image Only):');
  console.log('   updateRedBMW() - CF-545-YA (Red 330i)');
  console.log('   updateGrayBMW() - TK-271-GT (Gray 540i)');
  console.log('   updateWhiteBMW() - QX-504-AP (White 330i)');
  console.log('   updateOrangeBMW() - WW-896-BA (Orange 330i)');
  console.log('   updateBMWX6() - QR-759-HY (X6)');
  console.log('\n   🔄 SEED FULL VEHICLES:');
  console.log('   seedRedBMWVehicle() - Create CF-545-YA');
  console.log('   seedGrayBMWVehicle() - Create TK-271-GT');
  console.log('   seedWhiteBMWVehicle() - Create QX-504-AP');
  console.log('   seedOrangeBMWVehicle() - Create WW-896-BA');
  console.log('   seedBMWX6Vehicle() - Create QR-759-HY');
  console.log('\n   🌐 ALL VEHICLES:');
  console.log('   updateAllVehicleImages() - Update all 5 vehicles');
}
