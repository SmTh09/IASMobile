import { db } from './firestore';
import { collection, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore';

/**
 * Helper to extract ID from DocumentReference or string
 */
function extractId(ref: any): string {
  if (typeof ref === 'string') {
    return ref;
  }
  if (ref && typeof ref === 'object' && 'id' in ref) {
    return ref.id;
  }
  return String(ref);
}

/**
 * Deletes all relocations from the database
 */
export async function deleteAllRelocations(): Promise<{ success: boolean; count: number; message: string }> {
  try {
    if (!db) {
      return {
        success: false,
        count: 0,
        message: 'Firebase is not initialized.'
      };
    }

    const relocationsSnapshot = await getDocs(collection(db, 'relocations'));
    const totalRelocations = relocationsSnapshot.docs.length;

    if (totalRelocations === 0) {
      return {
        success: true,
        count: 0,
        message: 'No relocations found to delete.'
      };
    }

    // Delete in batches (Firestore batch limit is 500 operations)
    const batchSize = 500;
    let deletedCount = 0;

    for (let i = 0; i < relocationsSnapshot.docs.length; i += batchSize) {
      const batch = writeBatch(db);
      const batchDocs = relocationsSnapshot.docs.slice(i, i + batchSize);

      batchDocs.forEach(docSnapshot => {
        batch.delete(docSnapshot.ref);
      });

      await batch.commit();
      deletedCount += batchDocs.length;
    }

    return {
      success: true,
      count: deletedCount,
      message: `Successfully deleted ${deletedCount} relocation(s).`
    };
  } catch (error) {
    console.error('Error deleting relocations:', error);
    return {
      success: false,
      count: 0,
      message: 'Failed to delete relocations.'
    };
  }
}

/**
 * Finds and deletes duplicate parts (same partNumber on the same shelf)
 * Keeps the part with the highest currentAvailability
 */
export async function deleteDuplicateParts(): Promise<{ success: boolean; duplicatesRemoved: number; message: string }> {
  try {
    if (!db) {
      return {
        success: false,
        duplicatesRemoved: 0,
        message: 'Firebase is not initialized.'
      };
    }

    const partsSnapshot = await getDocs(collection(db, 'parts'));
    const parts = partsSnapshot.docs.map(doc => ({
      id: doc.id,
      ref: doc.ref,
      ...doc.data()
    }));

    // Group parts by partNumber + shelfRef combination
    const partGroups = new Map<string, any[]>();

    parts.forEach(part => {
      const shelfId = extractId(part.shelfRef);
      const key = `${part.partNumber}_${shelfId}`;
      
      if (!partGroups.has(key)) {
        partGroups.set(key, []);
      }
      partGroups.get(key)!.push(part);
    });

    // Find duplicates and decide which to keep
    const partsToDelete: any[] = [];
    
    partGroups.forEach((group, key) => {
      if (group.length > 1) {
        // Sort by currentAvailability (descending) to keep the one with highest quantity
        group.sort((a, b) => (b.currentAvailability || 0) - (a.currentAvailability || 0));
        
        // Keep the first one (highest quantity), delete the rest
        const toDelete = group.slice(1);
        partsToDelete.push(...toDelete);
        
        console.log(`Found ${group.length} duplicates for ${key}. Keeping part with ${group[0].currentAvailability} units, deleting ${toDelete.length} duplicate(s).`);
      }
    });

    if (partsToDelete.length === 0) {
      return {
        success: true,
        duplicatesRemoved: 0,
        message: 'No duplicate parts found.'
      };
    }

    // Delete duplicates in batches
    const batchSize = 500;
    let deletedCount = 0;

    for (let i = 0; i < partsToDelete.length; i += batchSize) {
      const batch = writeBatch(db);
      const batchParts = partsToDelete.slice(i, i + batchSize);

      batchParts.forEach(part => {
        batch.delete(part.ref);
      });

      await batch.commit();
      deletedCount += batchParts.length;
    }

    return {
      success: true,
      duplicatesRemoved: deletedCount,
      message: `Successfully deleted ${deletedCount} duplicate part(s).`
    };
  } catch (error) {
    console.error('Error deleting duplicate parts:', error);
    return {
      success: false,
      duplicatesRemoved: 0,
      message: 'Failed to delete duplicate parts.'
    };
  }
}

/**
 * Runs a complete database cleanup
 */
export async function cleanupDatabase(): Promise<{ success: boolean; message: string; details: any }> {
  try {
    // Delete all relocations first
    const relocationsResult = await deleteAllRelocations();
    
    // Then delete duplicate parts
    const duplicatesResult = await deleteDuplicateParts();

    const allSuccessful = relocationsResult.success && duplicatesResult.success;

    return {
      success: allSuccessful,
      message: allSuccessful 
        ? 'Database cleanup completed successfully.' 
        : 'Database cleanup completed with errors.',
      details: {
        relocations: relocationsResult,
        duplicates: duplicatesResult
      }
    };
  } catch (error) {
    console.error('Error during database cleanup:', error);
    return {
      success: false,
      message: 'Database cleanup failed.',
      details: { error }
    };
  }
}
