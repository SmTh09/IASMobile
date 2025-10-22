/**
 * Script para verificar las URLs de imágenes de los vehículos
 * 
 * Ejecutar desde la consola del navegador:
 * import { checkVehicleImages } from './utils/firebase/checkVehicleImages';
 * checkVehicleImages();
 */

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firestore';

export async function checkVehicleImages() {
  console.log('\n🔍 VERIFICANDO IMÁGENES DE VEHÍCULOS\n' + '='.repeat(60));
  
  try {
    const querySnapshot = await getDocs(collection(db, 'vehicles'));
    
    if (querySnapshot.empty) {
      console.log('⚠️ No hay vehículos en la base de datos');
      return;
    }
    
    console.log(`\n✅ Encontrados ${querySnapshot.size} vehículos\n`);
    
    querySnapshot.forEach((doc, index) => {
      const data = doc.data();
      console.log(`\n${index + 1}. Vehículo: ${data.plate} (${data.brand} ${data.model})`);
      console.log(`   ID: ${doc.id}`);
      console.log(`   Customer: ${data.customerId}`);
      
      if (data.imageUrl) {
        console.log(`   ✅ Tiene imageUrl:`);
        console.log(`      ${data.imageUrl}`);
        
        // Analizar el tipo de URL
        if (data.imageUrl.includes('drive.google.com')) {
          console.log(`      🔗 Tipo: Google Drive`);
        } else if (data.imageUrl.startsWith('data:image/')) {
          console.log(`      🔗 Tipo: Base64 (${data.imageUrl.length} caracteres)`);
        } else if (data.imageUrl.startsWith('http')) {
          console.log(`      🔗 Tipo: URL externa`);
        } else {
          console.log(`      🔗 Tipo: Desconocido`);
        }
      } else {
        console.log(`   ❌ NO tiene imageUrl`);
      }
    });
    
    console.log('\n' + '='.repeat(60) + '\n');
    
  } catch (error) {
    console.error('❌ Error al verificar imágenes:', error);
  }
}

// También exportar una versión que retorna los datos
export async function getVehicleImageUrls() {
  const querySnapshot = await getDocs(collection(db, 'vehicles'));
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    plate: doc.data().plate,
    imageUrl: doc.data().imageUrl
  }));
}
