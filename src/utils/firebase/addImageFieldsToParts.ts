/**
 * Script de migración para agregar campos de imagen a documentos existentes
 * 
 * Ejecutar una vez para preparar la base de datos para imágenes de Firebase Storage
 */

import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './firestore';

/**
 * Agrega el campo imageUrl a todos los parts que no lo tengan
 */
export async function addImageFieldToParts() {
  console.log('🔄 Agregando campos de imagen a parts...');
  
  try {
    const partsSnapshot = await getDocs(collection(db, 'parts'));
    let updated = 0;
    
    for (const partDoc of partsSnapshot.docs) {
      const data = partDoc.data();
      
      // Si no tiene imageUrl, agregarlo como vacío
      if (!data.imageUrl) {
        await updateDoc(doc(db, 'parts', partDoc.id), {
          imageUrl: ''
        });
        updated++;
      }
    }
    
    console.log(`✅ ${updated} parts actualizados con campo imageUrl`);
  } catch (error) {
    console.error('❌ Error actualizando parts:', error);
    throw error;
  }
}

/**
 * Agrega el campo imageUrl a todos los vehicles que no lo tengan
 */
export async function addImageFieldToVehicles() {
  console.log('🔄 Agregando campos de imagen a vehicles...');
  
  try {
    const vehiclesSnapshot = await getDocs(collection(db, 'vehicles'));
    let updated = 0;
    
    for (const vehicleDoc of vehiclesSnapshot.docs) {
      const data = vehicleDoc.data();
      
      // Si no tiene imageUrl, agregarlo como vacío
      if (!data.imageUrl) {
        await updateDoc(doc(db, 'vehicles', vehicleDoc.id), {
          imageUrl: ''
        });
        updated++;
      }
    }
    
    console.log(`✅ ${updated} vehicles actualizados con campo imageUrl`);
  } catch (error) {
    console.error('❌ Error actualizando vehicles:', error);
    throw error;
  }
}

/**
 * Agrega el campo imageUrl a todas las physical locations que no lo tengan
 */
export async function addImageFieldToLocations() {
  console.log('🔄 Agregando campos de imagen a physical locations...');
  
  try {
    const locationsSnapshot = await getDocs(collection(db, 'physicalLocations'));
    let updated = 0;
    
    for (const locationDoc of locationsSnapshot.docs) {
      const data = locationDoc.data();
      
      // Si no tiene imageUrl, agregarlo como vacío
      if (!data.imageUrl) {
        await updateDoc(doc(db, 'physicalLocations', locationDoc.id), {
          imageUrl: ''
        });
        updated++;
      }
    }
    
    console.log(`✅ ${updated} locations actualizadas con campo imageUrl`);
  } catch (error) {
    console.error('❌ Error actualizando locations:', error);
    throw error;
  }
}

/**
 * Ejecuta todas las migraciones de una vez
 */
export async function addAllImageFields() {
  console.log('🚀 Iniciando migración de campos de imagen...\n');
  
  try {
    await addImageFieldToParts();
    await addImageFieldToVehicles();
    await addImageFieldToLocations();
    
    console.log('\n✅ Migración completada exitosamente!');
    console.log('📝 Ahora puedes comenzar a subir imágenes a Firebase Storage');
  } catch (error) {
    console.error('\n❌ Error en la migración:', error);
    throw error;
  }
}

// Si se ejecuta directamente desde la consola del navegador:
if (typeof window !== 'undefined') {
  (window as any).addImageFields = {
    parts: addImageFieldToParts,
    vehicles: addImageFieldToVehicles,
    locations: addImageFieldToLocations,
    all: addAllImageFields
  };
  
  console.log(`
📸 Funciones de migración de imágenes disponibles:

Para agregar campos de imagen a la base de datos, abre la consola del navegador y ejecuta:

  await window.addImageFields.all()

O de forma individual:

  await window.addImageFields.parts()
  await window.addImageFields.vehicles()
  await window.addImageFields.locations()
  `);
}
