import { db } from './firestore';
import { collection, addDoc, doc, getDoc, updateDoc, query, where, getDocs, Timestamp, writeBatch } from 'firebase/firestore';
import type { Part, PartQuantity } from './relationalData';

interface CreateRelocationParams {
  partId: string;
  partNumber: string;
  description: string;
  physicalLocationID: string;
  fromShelfID: string;
  toShelfID: string;
  quantity: number;
}

interface RelocationResult {
  success: boolean;
  message: string;
  relocationId?: string;
}

/**
 * Creates a relocation record and updates the quantities array in the part document
 */
export async function createRelocation(params: CreateRelocationParams): Promise<RelocationResult> {
  const {
    partId,
    partNumber,
    description,
    physicalLocationID,
    fromShelfID,
    toShelfID,
    quantity
  } = params;

  try {
    // Validate that from and to shelves are different
    if (fromShelfID === toShelfID) {
      return {
        success: false,
        message: 'Cannot relocate to the same shelf.'
      };
    }

    // Get the part document
    const partRef = doc(db, 'parts', partId);
    const partDoc = await getDoc(partRef);
    
    if (!partDoc.exists()) {
      return {
        success: false,
        message: 'Part not found.'
      };
    }

    const partData = partDoc.data() as Part;
    const quantities = partData.quantities || [];

    // Find the source shelf quantity
    const fromQuantityEntry = quantities.find(q => q.shelfID === fromShelfID);
    
    if (!fromQuantityEntry) {
      return {
        success: false,
        message: 'Source shelf not found in part inventory.'
      };
    }

    // Validate quantity
    if (quantity > fromQuantityEntry.quantity) {
      return {
        success: false,
        message: `Quantity exceeds available stock on this shelf. Available: ${fromQuantityEntry.quantity}`
      };
    }

    if (quantity <= 0) {
      return {
        success: false,
        message: 'Quantity must be greater than 0.'
      };
    }

    // Verify both shelves belong to the same physical location
    const fromShelfRef = doc(db, 'shelves', fromShelfID);
    const toShelfRef = doc(db, 'shelves', toShelfID);

    const [fromShelfDoc, toShelfDoc] = await Promise.all([
      getDoc(fromShelfRef),
      getDoc(toShelfRef)
    ]);

    if (!fromShelfDoc.exists() || !toShelfDoc.exists()) {
      return {
        success: false,
        message: 'Shelf not found.'
      };
    }

    const fromShelfData = fromShelfDoc.data();
    const toShelfData = toShelfDoc.data();

    // Validate both shelves are in the same physical location
    if (fromShelfData.physicalLocationID !== physicalLocationID || 
        toShelfData.physicalLocationID !== physicalLocationID) {
      return {
        success: false,
        message: 'Source and destination shelves must be in the same physical location.'
      };
    }

    // Calculate new quantities
    const updatedQuantities = [...quantities];
    
    // Find indices
    const fromIndex = updatedQuantities.findIndex(q => q.shelfID === fromShelfID);
    const toIndex = updatedQuantities.findIndex(q => q.shelfID === toShelfID);

    // Update source shelf quantity
    const newFromQuantity = fromQuantityEntry.quantity - quantity;
    
    if (newFromQuantity === 0) {
      // Remove the quantity entry if it becomes zero
      updatedQuantities.splice(fromIndex, 1);
    } else {
      // Update the quantity
      updatedQuantities[fromIndex] = {
        shelfID: fromShelfID,
        quantity: newFromQuantity
      };
    }

    // Update or add target shelf quantity
    if (toIndex !== -1 && toIndex !== fromIndex) {
      // Target shelf exists - increase quantity
      updatedQuantities[toIndex] = {
        shelfID: toShelfID,
        quantity: updatedQuantities[toIndex].quantity + quantity
      };
    } else if (toIndex === -1) {
      // Target shelf doesn't exist - add new entry
      updatedQuantities.push({
        shelfID: toShelfID,
        quantity: quantity
      });
    }

    // Verify the part has this physical location in its physicalLocations array
    const hasLocation = partData.physicalLocations?.some(loc => loc.id === physicalLocationID);
    if (!hasLocation) {
      return {
        success: false,
        message: 'Part does not exist in the specified physical location.'
      };
    }

    // Update the physicalLocations array to include the new shelf if needed
    const updatedPhysicalLocations = partData.physicalLocations.map(loc => {
      if (loc.id === physicalLocationID) {
        // Add toShelfID if not already present
        const shelves = new Set(loc.shelves);
        shelves.add(toShelfID);
        return {
          ...loc,
          shelves: Array.from(shelves)
        };
      }
      return loc;
    });

    // Use batch for atomic operations
    const batch = writeBatch(db);

    // 1. Create relocation record
    const relocationRef = doc(collection(db, 'relocations'));
    batch.set(relocationRef, {
      partID: partId,
      partNumber,
      description,
      physicalLocationID,
      fromShelfID,
      toShelfID,
      quantity,
      date: new Date().toISOString().split('T')[0],
      status: 'activated',
      timestamp: Timestamp.now(),
      createdBy: 'System Administrator'
    });

    // 2. Update part document with new quantities array and physicalLocations
    batch.update(partRef, {
      quantities: updatedQuantities,
      physicalLocations: updatedPhysicalLocations
    });

    // Commit all changes atomically
    await batch.commit();

    return {
      success: true,
      message: 'Relocation successfully created.',
      relocationId: relocationRef.id
    };

  } catch (error) {
    console.error('Error creating relocation:', error);
    return {
      success: false,
      message: 'Failed to create relocation. Please try again.'
    };
  }
}

/**
 * Fetches all relocations for a specific part
 */
export async function getRelocationsByPart(partId: string) {
  try {
    const relocationsQuery = query(
      collection(db, 'relocations'),
      where('partID', '==', partId)
    );
    
    const snapshot = await getDocs(relocationsQuery);
    return snapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    }));
  } catch (error) {
    console.error('Error fetching relocations:', error);
    return [];
  }
}

/**
 * Fetches all relocations
 */
export async function getAllRelocations() {
  try {
    const relocationsQuery = query(collection(db, 'relocations'));
    const snapshot = await getDocs(relocationsQuery);
    
    return snapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    }));
  } catch (error) {
    console.error('Error fetching all relocations:', error);
    return [];
  }
}
