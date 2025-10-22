// ==========================================
// FIREBASE STORAGE UTILITIES
// ==========================================
// For uploading and managing images in Firebase Storage

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from 'firebase/storage';
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

// ==========================================
// UPLOAD IMAGE TO FIREBASE STORAGE
// ==========================================
/**
 * Sube una imagen a Firebase Storage y devuelve la URL de descarga
 * @param file - Archivo de imagen (File o Blob)
 * @param path - Ruta donde se guardará (ej: 'parts/ABC123.jpg' o 'vehicles/car1.png')
 * @returns URL de descarga de la imagen
 */
export async function uploadImage(file: File | Blob, path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

// ==========================================
// UPLOAD MULTIPLE IMAGES
// ==========================================
/**
 * Sube múltiples imágenes a Firebase Storage
 * @param files - Array de archivos
 * @param basePath - Ruta base (ej: 'parts' o 'vehicles')
 * @returns Array de URLs de descarga
 */
export async function uploadMultipleImages(
  files: File[],
  basePath: string
): Promise<string[]> {
  try {
    const uploadPromises = files.map((file, index) => {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${index}_${file.name}`;
      const path = `${basePath}/${fileName}`;
      return uploadImage(file, path);
    });

    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error uploading multiple images:', error);
    throw error;
  }
}

// ==========================================
// GET IMAGE URL
// ==========================================
/**
 * Obtiene la URL de descarga de una imagen ya subida
 * @param path - Ruta de la imagen en Storage (ej: 'parts/ABC123.jpg')
 * @returns URL de descarga
 */
export async function getImageURL(path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error getting image URL:', error);
    throw error;
  }
}

// ==========================================
// DELETE IMAGE
// ==========================================
/**
 * Elimina una imagen de Firebase Storage
 * @param path - Ruta de la imagen a eliminar
 */
export async function deleteImage(path: string): Promise<void> {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}

// ==========================================
// LIST ALL IMAGES IN A FOLDER
// ==========================================
/**
 * Lista todas las imágenes en una carpeta de Storage
 * @param folderPath - Ruta de la carpeta (ej: 'parts' o 'vehicles')
 * @returns Array de URLs de descarga
 */
export async function listImagesInFolder(folderPath: string): Promise<string[]> {
  try {
    const folderRef = ref(storage, folderPath);
    const result = await listAll(folderRef);
    
    const urlPromises = result.items.map(item => getDownloadURL(item));
    return await Promise.all(urlPromises);
  } catch (error) {
    console.error('Error listing images:', error);
    throw error;
  }
}

// ==========================================
// ADD IMAGE TO FIRESTORE DOCUMENT
// ==========================================
/**
 * Sube una imagen y agrega su URL a un documento de Firestore
 * @param file - Archivo de imagen
 * @param storagePath - Ruta en Storage (ej: 'parts/ABC123.jpg')
 * @param collection - Colección de Firestore (ej: 'parts')
 * @param documentId - ID del documento
 * @param fieldName - Nombre del campo (ej: 'imageUrl' o 'images')
 * @param isArray - Si true, agrega a un array; si false, reemplaza el valor
 */
export async function uploadAndSaveToFirestore(
  file: File | Blob,
  storagePath: string,
  collection: string,
  documentId: string,
  fieldName: string,
  isArray: boolean = false
): Promise<string> {
  try {
    // Subir imagen a Storage
    const imageUrl = await uploadImage(file, storagePath);
    
    // Actualizar documento en Firestore
    const docRef = doc(db, collection, documentId);
    
    if (isArray) {
      // Agregar URL al array
      await updateDoc(docRef, {
        [fieldName]: arrayUnion(imageUrl)
      });
    } else {
      // Reemplazar valor del campo
      await updateDoc(docRef, {
        [fieldName]: imageUrl
      });
    }
    
    return imageUrl;
  } catch (error) {
    console.error('Error uploading and saving to Firestore:', error);
    throw error;
  }
}

// ==========================================
// REMOVE IMAGE FROM FIRESTORE ARRAY
// ==========================================
/**
 * Elimina una URL de imagen de un array en Firestore
 * @param imageUrl - URL de la imagen a eliminar
 * @param collection - Colección de Firestore
 * @param documentId - ID del documento
 * @param fieldName - Nombre del campo array
 */
export async function removeImageFromFirestore(
  imageUrl: string,
  collection: string,
  documentId: string,
  fieldName: string
): Promise<void> {
  try {
    const docRef = doc(db, collection, documentId);
    await updateDoc(docRef, {
      [fieldName]: arrayRemove(imageUrl)
    });
  } catch (error) {
    console.error('Error removing image from Firestore:', error);
    throw error;
  }
}

// ==========================================
// HELPER: CONVERT BASE64 TO FILE
// ==========================================
/**
 * Convierte una imagen base64 a File object
 * @param base64String - String base64 de la imagen
 * @param fileName - Nombre del archivo
 * @returns File object
 */
export function base64ToFile(base64String: string, fileName: string): File {
  const arr = base64String.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], fileName, { type: mime });
}

// ==========================================
// HELPER: COMPRESS IMAGE BEFORE UPLOAD
// ==========================================
/**
 * Comprime una imagen antes de subirla para ahorrar espacio
 * @param file - Archivo de imagen original
 * @param maxWidth - Ancho máximo (default: 1920)
 * @param maxHeight - Alto máximo (default: 1080)
 * @param quality - Calidad de compresión 0-1 (default: 0.8)
 * @returns Promise con el archivo comprimido
 */
export function compressImage(
  file: File,
  maxWidth: number = 1920,
  maxHeight: number = 1080,
  quality: number = 0.8
): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Calcular nuevas dimensiones manteniendo aspect ratio
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
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Could not compress image'));
              return;
            }
            
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now()
            });
            
            resolve(compressedFile);
          },
          file.type,
          quality
        );
      };
      
      img.onerror = () => reject(new Error('Could not load image'));
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}
