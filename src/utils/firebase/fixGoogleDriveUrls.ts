/**
 * Script para convertir URLs de Google Drive al formato correcto
 * 
 * Este script:
 * 1. Lee todos los vehículos de Firestore
 * 2. Detecta URLs de Google Drive en formato incorrecto
 * 3. Las convierte al formato embebible correcto
 * 4. Actualiza la base de datos
 */

import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './firestore';

/**
 * Convierte una URL de Google Drive al formato embebible
 */
export function convertGoogleDriveUrl(url: string): string {
  // Extraer el FILE_ID de diferentes formatos de URLs de Google Drive
  
  // Formato 1: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Formato 2: https://drive.google.com/file/d/FILE_ID/view
  const match1 = url.match(/\/file\/d\/([^\/\?]+)/);
  if (match1) {
    const fileId = match1[1];
    // Usar formato de thumbnail que funciona mejor para imágenes
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
  }
  
  // Formato 3: https://drive.google.com/uc?export=view&id=FILE_ID
  const match2 = url.match(/[?&]id=([^&]+)/);
  if (match2) {
    const fileId = match2[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
  }
  
  // Si no coincide con ningún patrón, devolver la URL original
  return url;
}

/**
 * Verifica si una URL necesita ser convertida
 */
function needsConversion(url: string): boolean {
  if (!url || !url.includes('drive.google.com')) {
    return false;
  }
  
  // Ya está en formato correcto
  if (url.includes('/thumbnail?id=')) {
    return false;
  }
  
  // Necesita conversión
  return url.includes('/file/d/') || url.includes('uc?export=');
}

/**
 * Arregla todas las URLs de Google Drive en vehículos
 */
export async function fixGoogleDriveUrls() {
  console.log('\n🔧 ARREGLANDO URLs DE GOOGLE DRIVE\n' + '='.repeat(70));
  
  try {
    const querySnapshot = await getDocs(collection(db, 'vehicles'));
    
    if (querySnapshot.empty) {
      console.log('⚠️ No hay vehículos en la base de datos');
      return;
    }
    
    console.log(`\n✅ Encontrados ${querySnapshot.size} vehículos\n`);
    
    let fixedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;
    
    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      const plate = data.plate || docSnap.id;
      
      console.log(`\n📝 Procesando: ${plate}`);
      
      if (!data.imageUrl) {
        console.log(`   ⏭️ Sin imageUrl - saltando`);
        skippedCount++;
        continue;
      }
      
      if (!needsConversion(data.imageUrl)) {
        console.log(`   ✅ Ya está en formato correcto - saltando`);
        skippedCount++;
        continue;
      }
      
      const originalUrl = data.imageUrl;
      const convertedUrl = convertGoogleDriveUrl(originalUrl);
      
      console.log(`   🔄 Convirtiendo URL:`);
      console.log(`      Original:  ${originalUrl}`);
      console.log(`      Convertida: ${convertedUrl}`);
      
      try {
        await updateDoc(doc(db, 'vehicles', docSnap.id), {
          imageUrl: convertedUrl,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`   ✅ ¡URL actualizada exitosamente!`);
        fixedCount++;
      } catch (error) {
        console.error(`   ❌ Error al actualizar:`, error);
        errorCount++;
      }
    }
    
    console.log('\n' + '='.repeat(70));
    console.log('\n📊 RESUMEN:');
    console.log(`   ✅ URLs arregladas: ${fixedCount}`);
    console.log(`   ⏭️ Sin cambios: ${skippedCount}`);
    console.log(`   ❌ Errores: ${errorCount}`);
    console.log(`   📋 Total procesados: ${querySnapshot.size}`);
    console.log('\n' + '='.repeat(70) + '\n');
    
    if (fixedCount > 0) {
      console.log('🎉 ¡Recarga la página para ver los cambios!');
    }
    
  } catch (error) {
    console.error('❌ Error al arreglar URLs:', error);
    throw error;
  }
}

/**
 * Vista previa de los cambios sin aplicarlos
 */
export async function previewGoogleDriveUrlFixes() {
  console.log('\n👀 VISTA PREVIA DE CAMBIOS\n' + '='.repeat(70));
  
  try {
    const querySnapshot = await getDocs(collection(db, 'vehicles'));
    
    if (querySnapshot.empty) {
      console.log('⚠️ No hay vehículos en la base de datos');
      return;
    }
    
    console.log(`\n✅ Encontrados ${querySnapshot.size} vehículos\n`);
    
    let needsFixCount = 0;
    
    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      const plate = data.plate || docSnap.id;
      
      if (!data.imageUrl) {
        continue;
      }
      
      if (needsConversion(data.imageUrl)) {
        needsFixCount++;
        const convertedUrl = convertGoogleDriveUrl(data.imageUrl);
        
        console.log(`\n${needsFixCount}. ${plate}`);
        console.log(`   ❌ URL actual:  ${data.imageUrl}`);
        console.log(`   ✅ URL nueva:   ${convertedUrl}`);
      }
    }
    
    console.log('\n' + '='.repeat(70));
    
    if (needsFixCount > 0) {
      console.log(`\n⚠️ Hay ${needsFixCount} vehículo(s) que necesitan corrección`);
      console.log('\n💡 Para aplicar los cambios, ejecuta:');
      console.log('   fixGoogleDriveUrls()');
    } else {
      console.log(`\n✅ ¡Todas las URLs ya están en formato correcto!`);
    }
    
    console.log('\n' + '='.repeat(70) + '\n');
    
  } catch (error) {
    console.error('❌ Error al previsualizar cambios:', error);
    throw error;
  }
}
