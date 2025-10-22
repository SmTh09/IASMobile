/**
 * ==========================================
 * LOCAL IMAGE STORAGE - FIRESTORE ONLY
 * ==========================================
 * Alternativa GRATUITA a Firebase Storage
 * Almacena imágenes como base64 directamente en Firestore
 * 
 * VENTAJAS:
 * - 100% gratis (usa el tier gratuito de Firestore)
 * - No necesita habilitar Firebase Storage
 * - Funciona offline
 * 
 * LIMITACIONES:
 * - Firestore tiene límite de 1MB por documento
 * - Recomendado solo para imágenes pequeñas (< 500KB)
 * - Compresión es obligatoria
 */

import { doc, updateDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from './firestore';

/**
 * Convierte archivo a base64
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Comprime imagen antes de convertir a base64
 * OBLIGATORIO para evitar exceder límite de Firestore
 */
export function compressImageToBase64(
  file: File,
  maxWidth: number = 800,
  maxHeight: number = 800,
  quality: number = 0.7
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Calcular nuevas dimensiones
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convertir a base64 con compresión
        const base64 = canvas.toDataURL('image/jpeg', quality);
        
        // Verificar tamaño (max ~800KB para dejar margen)
        const sizeInKB = base64.length * 0.75 / 1024;
        if (sizeInKB > 800) {
          console.warn(`⚠️ Imagen muy grande (${sizeInKB.toFixed(0)}KB). Considere reducir calidad.`);
        }
        
        resolve(base64);
      };
      
      img.onerror = () => reject(new Error('Could not load image'));
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Guarda imagen como base64 en un documento de Firestore
 */
export async function saveImageToFirestore(
  file: File,
  collection: string,
  documentId: string,
  fieldName: string,
  compress: boolean = true
): Promise<string> {
  try {
    let base64: string;
    
    if (compress) {
      // Comprimir imagen (recomendado)
      base64 = await compressImageToBase64(file, 800, 800, 0.7);
    } else {
      // Sin comprimir (solo para imágenes muy pequeñas)
      base64 = await fileToBase64(file);
    }
    
    // Verificar tamaño final
    const sizeInKB = base64.length * 0.75 / 1024;
    console.log(`📸 Imagen: ${sizeInKB.toFixed(0)}KB`);
    
    if (sizeInKB > 950) {
      throw new Error('Imagen demasiado grande. Máximo ~950KB. Reduce la calidad o dimensiones.');
    }
    
    // Guardar en Firestore
    const docRef = doc(db, collection, documentId);
    await updateDoc(docRef, {
      [fieldName]: base64
    });
    
    return base64;
  } catch (error) {
    console.error('Error saving image to Firestore:', error);
    throw error;
  }
}

/**
 * Obtiene imagen base64 desde Firestore
 */
export async function getImageFromFirestore(
  collection: string,
  documentId: string,
  fieldName: string
): Promise<string | null> {
  try {
    const docRef = doc(db, collection, documentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()[fieldName] || null;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting image from Firestore:', error);
    return null;
  }
}

/**
 * Agrega imagen a un array en Firestore (para galerías)
 */
export async function addImageToGallery(
  file: File,
  collection: string,
  documentId: string,
  fieldName: string
): Promise<string> {
  try {
    const base64 = await compressImageToBase64(file, 600, 600, 0.6);
    
    const docRef = doc(db, collection, documentId);
    await updateDoc(docRef, {
      [fieldName]: arrayUnion(base64)
    });
    
    return base64;
  } catch (error) {
    console.error('Error adding image to gallery:', error);
    throw error;
  }
}

/**
 * Elimina imagen de un array en Firestore
 */
export async function removeImageFromGallery(
  base64Image: string,
  collection: string,
  documentId: string,
  fieldName: string
): Promise<void> {
  try {
    const docRef = doc(db, collection, documentId);
    await updateDoc(docRef, {
      [fieldName]: arrayRemove(base64Image)
    });
  } catch (error) {
    console.error('Error removing image from gallery:', error);
    throw error;
  }
}

/**
 * Calcula tamaño de una imagen base64 en KB
 */
export function getBase64Size(base64: string): number {
  return base64.length * 0.75 / 1024;
}

/**
 * Valida que un archivo sea una imagen válida
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  // Verificar tipo
  if (!file.type.startsWith('image/')) {
    return { valid: false, error: 'El archivo debe ser una imagen' };
  }
  
  // Verificar tamaño del archivo (5MB máximo antes de comprimir)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return { valid: false, error: 'Archivo demasiado grande. Máximo 5MB' };
  }
  
  return { valid: true };
}
