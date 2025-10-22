import { collection, getDocs, doc, setDoc, deleteDoc, writeBatch } from "firebase/firestore";
import { db } from "./firestore";
import type { Part, ShelfStock } from "./relationalData";

/**
 * Migrate existing parts collection from duplicate documents to consolidated structure
 * Groups parts by partNumber and consolidates them into single documents with shelfStocks array
 */
export async function migratePartsToConsolidatedStructure(): Promise<{
  success: boolean;
  message: string;
  migratedCount: number;
  errors: string[];
}> {
  const errors: string[] = [];
  let migratedCount = 0;

  try {
    console.log("Starting parts migration...");
    
    // Fetch all existing parts
    const partsSnapshot = await getDocs(collection(db, "parts"));
    const oldParts = partsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any[];

    console.log(`Found ${oldParts.length} part documents to process`);

    // Group parts by partNumber
    const partsByNumber = new Map<string, any[]>();
    
    oldParts.forEach(part => {
      const partNumber = part.partNumber;
      if (!partNumber) {
        errors.push(`Part ${part.id} has no partNumber`);
        return;
      }
      
      if (!partsByNumber.has(partNumber)) {
        partsByNumber.set(partNumber, []);
      }
      partsByNumber.get(partNumber)!.push(part);
    });

    console.log(`Found ${partsByNumber.size} unique part numbers`);

    // Create consolidated parts
    const batch = writeBatch(db);
    const consolidatedParts: Part[] = [];
    const oldPartIdsToDelete: string[] = [];

    for (const [partNumber, duplicates] of partsByNumber.entries()) {
      try {
        // Use the first duplicate as the base
        const basePart = duplicates[0];
        
        // Create shelfStocks array from all duplicates
        const shelfStocks: ShelfStock[] = duplicates.map(dup => ({
          shelfRef: dup.shelfRef || dup.shelfAddress || "unknown",
          currentAvail: dup.currentAvailability || 0
        }));

        // Create consolidated part document
        const consolidatedPart: Omit<Part, 'id'> = {
          partNumber: partNumber,
          partName: basePart.partName || basePart.description || "",
          description: basePart.description || basePart.partName || "",
          physicalLocationRef: basePart.physicalLocationRef || basePart.physicalLocation || "",
          shelfStocks: shelfStocks,
          // Legacy fields for backwards compatibility
          physicalLocation: basePart.physicalLocation,
          shelfAddress: basePart.shelfAddress,
          currentAvailability: basePart.currentAvailability,
          shelfRef: basePart.shelfRef
        };

        // Use a clean document ID based on part number (sanitized)
        const newDocId = partNumber.replace(/[^a-zA-Z0-9-_]/g, '_');
        
        // Create the new consolidated document
        const newPartRef = doc(db, "parts", newDocId);
        batch.set(newPartRef, consolidatedPart);
        
        consolidatedParts.push({
          id: newDocId,
          ...consolidatedPart
        });

        // Mark old duplicates for deletion (except if one of them has the same ID as newDocId)
        duplicates.forEach(dup => {
          if (dup.id !== newDocId) {
            oldPartIdsToDelete.push(dup.id);
          }
        });

        migratedCount++;
        console.log(`Consolidated ${duplicates.length} duplicates for part ${partNumber}`);
        
      } catch (error) {
        const errorMsg = `Error consolidating part ${partNumber}: ${error}`;
        console.error(errorMsg);
        errors.push(errorMsg);
      }
    }

    // Commit the batch write for new consolidated parts
    await batch.commit();
    console.log(`Created ${consolidatedParts.length} consolidated parts`);

    // Delete old duplicate documents in batches
    if (oldPartIdsToDelete.length > 0) {
      console.log(`Deleting ${oldPartIdsToDelete.length} old duplicate documents...`);
      
      // Firestore batch writes are limited to 500 operations
      const batchSize = 500;
      for (let i = 0; i < oldPartIdsToDelete.length; i += batchSize) {
        const deleteBatch = writeBatch(db);
        const batchIds = oldPartIdsToDelete.slice(i, i + batchSize);
        
        batchIds.forEach(id => {
          deleteBatch.delete(doc(db, "parts", id));
        });
        
        await deleteBatch.commit();
        console.log(`Deleted batch ${Math.floor(i / batchSize) + 1}`);
      }
    }

    const message = `Successfully migrated ${migratedCount} part numbers. Consolidated ${oldParts.length} documents into ${consolidatedParts.length} parts.`;
    console.log(message);

    return {
      success: true,
      message,
      migratedCount,
      errors
    };

  } catch (error) {
    const errorMsg = `Migration failed: ${error}`;
    console.error(errorMsg);
    return {
      success: false,
      message: errorMsg,
      migratedCount,
      errors: [...errors, errorMsg]
    };
  }
}

/**
 * Check if migration is needed by looking for duplicate part numbers
 */
export async function checkIfMigrationNeeded(): Promise<boolean> {
  try {
    const partsSnapshot = await getDocs(collection(db, "parts"));
    const partNumbers = new Set<string>();
    let hasDuplicates = false;

    partsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const partNumber = data.partNumber;
      
      if (partNumber) {
        if (partNumbers.has(partNumber)) {
          hasDuplicates = true;
        }
        partNumbers.add(partNumber);
      }
    });

    return hasDuplicates;
  } catch (error) {
    console.error("Error checking migration status:", error);
    return false;
  }
}
