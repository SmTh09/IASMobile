/**
 * Update Existing Vehicles with Placeholder Images
 * 
 * Este script actualiza vehículos que ya existen pero no tienen fotos
 * con imágenes placeholder de colores
 */

import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { db } from './firestore';

// Placeholder URLs por placa
const placeholdersByPlate: Record<string, string> = {
  'CF-545-YA': 'https://via.placeholder.com/400x300/DC143C/ffffff?text=BMW+330i+xDrive',
  'TK-271-GT': 'https://via.placeholder.com/400x300/808080/ffffff?text=BMW+540i+xDrive',
  'QX-504-AP': 'https://via.placeholder.com/400x300/4C68B0/ffffff?text=BMW+330I',
  'WW-896-BA': 'https://via.placeholder.com/400x300/FF8C00/ffffff?text=BMW+330I',
  'QR-759-HY': 'https://via.placeholder.com/400x300/000080/ffffff?text=BMW+X6'
};

/**
 * Actualiza vehículos existentes con placeholders
 * SOLO actualiza vehículos sin imagen o con placeholders viejos
 */
export async function updateVehiclesWithPlaceholders(customerId: string = 'customer-theo-floyd') {
  console.log('🔄 Actualizando vehículos con placeholders...\n');
  
  try {
    const vehiclesRef = collection(db, 'vehicles');
    const q = query(vehiclesRef, where('customerId', '==', customerId));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log('❌ No se encontraron vehículos para actualizar.');
      return;
    }
    
    let updated = 0;
    let skipped = 0;
    
    for (const vehicleDoc of snapshot.docs) {
      const data = vehicleDoc.data();
      const plate = data.plate;
      
      // Si ya tiene una foto base64 subida por el usuario, NO tocar
      if (data.imageUrl && data.imageUrl.startsWith('data:image/')) {
        console.log(`  ⏭️  ${plate} - Ya tiene foto subida, preservando`);
        skipped++;
        continue;
      }
      
      // Si tiene URL placeholder válida actual, NO tocar
      if (data.imageUrl && data.imageUrl.includes('via.placeholder.com')) {
        console.log(`  ✅ ${plate} - Ya tiene placeholder correcto`);
        skipped++;
        continue;
      }
      
      // Actualizar con placeholder
      const placeholderUrl = placeholdersByPlate[plate];
      
      if (placeholderUrl) {
        await updateDoc(doc(db, 'vehicles', vehicleDoc.id), {
          imageUrl: placeholderUrl,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`  ✅ ${plate} - Actualizado con placeholder`);
        updated++;
      } else {
        console.log(`  ⚠️  ${plate} - No hay placeholder configurado`);
      }
    }
    
    console.log(`\n📊 Resumen:`);
    console.log(`   ✅ Actualizados: ${updated} vehículos`);
    console.log(`   ⏭️  Saltados: ${skipped} vehículos (ya tenían fotos)`);
    console.log(`\n🎉 ¡Listo! Recarga la página para ver los cambios.`);
    
  } catch (error) {
    console.error('❌ Error actualizando vehículos:', error);
    throw error;
  }
}

/**
 * Versión más agresiva que FUERZA la actualización de todos los vehículos
 * (incluso si ya tienen placeholders)
 */
export async function forceUpdateAllVehiclesWithPlaceholders(customerId: string = 'customer-theo-floyd') {
  console.log('🔄 FORZANDO actualización de TODOS los vehículos...\n');
  console.log('⚠️  ADVERTENCIA: Esto NO afectará fotos base64 subidas por usuarios\n');
  
  try {
    const vehiclesRef = collection(db, 'vehicles');
    const q = query(vehiclesRef, where('customerId', '==', customerId));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log('❌ No se encontraron vehículos.');
      return;
    }
    
    let updated = 0;
    let preserved = 0;
    
    for (const vehicleDoc of snapshot.docs) {
      const data = vehicleDoc.data();
      const plate = data.plate;
      
      // SOLO preservar fotos base64 (subidas por usuario)
      if (data.imageUrl && data.imageUrl.startsWith('data:image/')) {
        console.log(`  🔒 ${plate} - Foto de usuario preservada`);
        preserved++;
        continue;
      }
      
      // FORZAR actualización con placeholder
      const placeholderUrl = placeholdersByPlate[plate];
      
      if (placeholderUrl) {
        await updateDoc(doc(db, 'vehicles', vehicleDoc.id), {
          imageUrl: placeholderUrl,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`  ✅ ${plate} - Actualizado con placeholder`);
        updated++;
      }
    }
    
    console.log(`\n📊 Resumen:`);
    console.log(`   ✅ Actualizados: ${updated} vehículos`);
    console.log(`   🔒 Preservados: ${preserved} vehículos (fotos de usuario)`);
    console.log(`\n🎉 ¡Listo! Recarga la página para ver los placeholders.`);
    
  } catch (error) {
    console.error('❌ Error forzando actualización:', error);
    throw error;
  }
}
