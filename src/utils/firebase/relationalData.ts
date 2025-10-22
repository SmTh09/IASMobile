import { doc, getDoc, collection, getDocs, query, where, DocumentReference } from "firebase/firestore";
import { db } from "./firestore";

/**
 * Helper function to extract ID from either a string or DocumentReference
 */
function extractId(ref: string | DocumentReference | any): string {
  if (typeof ref === 'string') {
    return ref;
  }
  if (ref && typeof ref === 'object' && 'id' in ref) {
    return ref.id;
  }
  return String(ref);
}

export interface PhysicalLocation {
  id: string;
  name: string;
  address: string;
  imageUrl?: string; // URL de imagen de Firebase Storage
  createdDate?: string;
  createdBy?: string;
}

export interface Shelf {
  id: string;
  code: string;
  description: string;
  isDefault: boolean;
  imageUrl?: string; // URL de imagen de Firebase Storage
  createdDate: string;
  createdBy: string;
  physicalLocationID: string;
  physicalLocation?: PhysicalLocation; // Populated data
}

// Part Physical Location - represents a part's presence in a specific physical location
export interface PartPhysicalLocation {
  id: string; // Physical Location ID
  shelves: string[]; // Array of shelf IDs where this part exists in this location
}

// Part Quantity - quantity of a part on a specific shelf
export interface PartQuantity {
  shelfID: string;
  quantity: number;
}

export interface Part {
  id: string;
  partNumber: string;
  description: string;
  imageUrl?: string; // URL de imagen principal de Firebase Storage
  images?: string[]; // Array de URLs para galería de imágenes (opcional)
  physicalLocations: PartPhysicalLocation[]; // Multiple physical locations
  quantities: PartQuantity[]; // Quantities per shelf
}

// Extended interface for UI display - represents a specific shelf instance of a part
export interface PartShelfInstance {
  id: string;
  partNumber: string;
  description: string;
  physicalLocationID: string;
  shelfID: string;
  quantity: number;
  // Populated data
  physicalLocationData?: PhysicalLocation;
  shelfData?: Shelf;
}

export interface Relocation {
  id: string;
  partID: string;
  partNumber: string;
  physicalLocationID: string; // The physical location where the relocation happens
  fromShelfID: string;
  toShelfID: string;
  quantity: number;
  date: string;
  status: string;
  imageUrl?: string; // URL de imagen/foto de la reubicación (opcional)
  createdBy?: string;
  timestamp?: any; // Firestore timestamp
  // Populated data
  partData?: Part;
  physicalLocationData?: PhysicalLocation;
  fromShelfData?: Shelf;
  toShelfData?: Shelf;
}

/**
 * Fetch a physical location by ID
 */
export async function fetchPhysicalLocation(locationId: string | DocumentReference | any): Promise<PhysicalLocation | null> {
  try {
    const id = extractId(locationId);
    const locationDoc = await getDoc(doc(db, "physicalLocations", id));
    if (locationDoc.exists()) {
      return {
        id: locationDoc.id,
        ...locationDoc.data()
      } as PhysicalLocation;
    }
    return null;
  } catch (error) {
    console.error("Error fetching physical location:", error);
    return null;
  }
}

/**
 * Fetch a shelf by ID with optional location data
 */
export async function fetchShelf(shelfId: string | DocumentReference | any, includeLocation = false): Promise<Shelf | null> {
  try {
    const id = extractId(shelfId);
    const shelfDoc = await getDoc(doc(db, "shelves", id));
    if (shelfDoc.exists()) {
      const shelfData = {
        id: shelfDoc.id,
        ...shelfDoc.data()
      } as Shelf;
      
      // Optionally populate location data
      if (includeLocation && shelfData.physicalLocationID) {
        shelfData.physicalLocation = await fetchPhysicalLocation(shelfData.physicalLocationID) || undefined;
      }
      
      return shelfData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching shelf:", error);
    return null;
  }
}

/**
 * Fetch all physical locations
 */
export async function fetchAllPhysicalLocations(): Promise<PhysicalLocation[]> {
  try {
    const locationsSnapshot = await getDocs(collection(db, "physicalLocations"));
    return locationsSnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as PhysicalLocation));
  } catch (error) {
    console.error("Error fetching physical locations:", error);
    return [];
  }
}

/**
 * Fetch all shelves with optional location data
 */
export async function fetchAllShelves(includeLocation = false): Promise<Shelf[]> {
  try {
    const shelvesSnapshot = await getDocs(collection(db, "shelves"));
    const shelves = shelvesSnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as Shelf));
    
    // Optionally populate location data
    if (includeLocation) {
      const locations = await fetchAllPhysicalLocations();
      const locationMap = new Map(locations.map(loc => [loc.id, loc]));
      
      shelves.forEach(shelf => {
        if (shelf.physicalLocationID) {
          shelf.physicalLocation = locationMap.get(shelf.physicalLocationID);
        }
      });
    }
    
    return shelves;
  } catch (error) {
    console.error("Error fetching shelves:", error);
    return [];
  }
}

/**
 * Fetch shelves by physical location
 */
export async function fetchShelvesByLocation(locationId: string | DocumentReference | any): Promise<Shelf[]> {
  try {
    const id = extractId(locationId);
    const shelvesQuery = query(
      collection(db, "shelves"),
      where("physicalLocationID", "==", id)
    );
    const shelvesSnapshot = await getDocs(shelvesQuery);
    return shelvesSnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as Shelf));
  } catch (error) {
    console.error("Error fetching shelves by location:", error);
    return [];
  }
}

/**
 * Fetch shelves that contain a specific part in a specific physical location
 * Used for relocation dropdown - only shows shelves in the same location
 */
export async function fetchShelvesForPartInLocation(
  partNumber: string,
  physicalLocationID: string,
  currentShelfID?: string
): Promise<Shelf[]> {
  try {
    // Find the part
    const partsQuery = query(
      collection(db, "parts"),
      where("partNumber", "==", partNumber)
    );
    const partsSnapshot = await getDocs(partsQuery);
    
    if (partsSnapshot.empty) {
      return [];
    }
    
    const partData = partsSnapshot.docs[0].data() as Part;
    
    // Find the physical location entry for this part
    const locationEntry = partData.physicalLocations?.find(
      loc => loc.id === physicalLocationID
    );
    
    if (!locationEntry) {
      return [];
    }
    
    // Get all shelf IDs for this part in this location (excluding current shelf)
    const shelfIds = locationEntry.shelves.filter(
      shelfId => shelfId !== currentShelfID
    );
    
    // Fetch shelf data for each shelf
    const shelves = await Promise.all(
      shelfIds.map(async (shelfId) => {
        return await fetchShelf(shelfId);
      })
    );
    
    // Filter out null results and return
    return shelves.filter(shelf => shelf !== null) as Shelf[];
  } catch (error) {
    console.error("Error fetching shelves for part in location:", error);
    return [];
  }
}

/**
 * Get quantity of a part on a specific shelf
 */
export function getPartQuantityOnShelf(part: Part, shelfID: string): number {
  const quantityEntry = part.quantities?.find(q => q.shelfID === shelfID);
  return quantityEntry?.quantity || 0;
}

/**
 * Get the physical location ID for a shelf
 */
export async function getPhysicalLocationForShelf(shelfID: string): Promise<string | null> {
  try {
    const shelf = await fetchShelf(shelfID);
    return shelf?.physicalLocationID || null;
  } catch (error) {
    console.error("Error getting physical location for shelf:", error);
    return null;
  }
}

/**
 * Fetch all part-shelf instances for UI display
 * Expands each part into multiple instances (one per shelf with quantities)
 */
export async function fetchAllPartShelfInstances(): Promise<PartShelfInstance[]> {
  try {
    const partsSnapshot = await getDocs(collection(db, "parts"));
    const instances: PartShelfInstance[] = [];
    
    for (const partDoc of partsSnapshot.docs) {
      const partData = partDoc.data() as Part;
      const part: Part = {
        id: partDoc.id,
        ...partData
      };
      
      // Create an instance for each quantity entry
      if (part.quantities && Array.isArray(part.quantities)) {
        for (const quantityEntry of part.quantities) {
          const shelfData = await fetchShelf(quantityEntry.shelfID);
          const physicalLocationID = shelfData?.physicalLocationID || "";
          const physicalLocationData = physicalLocationID 
            ? await fetchPhysicalLocation(physicalLocationID)
            : null;
          
          const instance: PartShelfInstance = {
            id: part.id,
            partNumber: part.partNumber,
            description: part.description,
            physicalLocationID: physicalLocationID,
            shelfID: quantityEntry.shelfID,
            quantity: quantityEntry.quantity,
            shelfData: shelfData || undefined,
            physicalLocationData: physicalLocationData || undefined
          };
          
          instances.push(instance);
        }
      }
    }
    
    return instances;
  } catch (error) {
    console.error("Error fetching part shelf instances:", error);
    return [];
  }
}

/**
 * Fetch part shelf instances filtered by location
 */
export async function fetchPartShelfInstancesByLocation(locationId: string): Promise<PartShelfInstance[]> {
  try {
    const allInstances = await fetchAllPartShelfInstances();
    // Filter by physical location
    return allInstances.filter(instance => instance.physicalLocationID === locationId);
  } catch (error) {
    console.error("Error fetching part shelf instances by location:", error);
    return [];
  }
}

/**
 * Fetch a part by ID
 */
export async function fetchPart(partId: string | DocumentReference | any): Promise<Part | null> {
  try {
    const id = extractId(partId);
    const partDoc = await getDoc(doc(db, "parts", id));
    if (!partDoc.exists()) {
      return null;
    }
    
    return {
      id: partDoc.id,
      ...partDoc.data()
    } as Part;
  } catch (error) {
    console.error("Error fetching part:", error);
    return null;
  }
}

/**
 * Fetch a part by part number
 */
export async function fetchPartByPartNumber(partNumber: string): Promise<Part | null> {
  try {
    const partsQuery = query(
      collection(db, "parts"),
      where("partNumber", "==", partNumber)
    );
    const partsSnapshot = await getDocs(partsQuery);
    
    if (partsSnapshot.empty) {
      return null;
    }
    
    const partDoc = partsSnapshot.docs[0];
    return {
      id: partDoc.id,
      ...partDoc.data()
    } as Part;
  } catch (error) {
    console.error("Error fetching part by part number:", error);
    return null;
  }
}

/**
 * Fetch a relocation with all populated data
 */
export async function fetchRelocationWithRelations(relocationId: string): Promise<Relocation | null> {
  try {
    const relocationDoc = await getDoc(doc(db, "relocations", relocationId));
    if (!relocationDoc.exists()) {
      return null;
    }
    
    const relocationData = {
      id: relocationDoc.id,
      ...relocationDoc.data()
    } as Relocation;
    
    // Populate all related data in parallel
    const [partData, physicalLocation, fromShelf, toShelf] = await Promise.all([
      relocationData.partID ? fetchPart(relocationData.partID) : null,
      relocationData.physicalLocationID ? fetchPhysicalLocation(relocationData.physicalLocationID) : null,
      relocationData.fromShelfID ? fetchShelf(relocationData.fromShelfID) : null,
      relocationData.toShelfID ? fetchShelf(relocationData.toShelfID) : null
    ]);
    
    relocationData.partData = partData || undefined;
    relocationData.physicalLocationData = physicalLocation || undefined;
    relocationData.fromShelfData = fromShelf || undefined;
    relocationData.toShelfData = toShelf || undefined;
    
    return relocationData;
  } catch (error) {
    console.error("Error fetching relocation with relations:", error);
    return null;
  }
}

/**
 * Fetch all relocations with populated data
 */
export async function fetchAllRelocationsWithRelations(): Promise<Relocation[]> {
  try {
    const relocationsSnapshot = await getDocs(collection(db, "relocations"));
    const relocations = relocationsSnapshot.docs.map(docSnapshot => ({
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as Relocation));
    
    // Populate all related data
    const populatedRelocations = await Promise.all(
      relocations.map(async (relocation) => {
        const populated = await fetchRelocationWithRelations(relocation.id);
        return populated || relocation;
      })
    );
    
    return populatedRelocations;
  } catch (error) {
    console.error("Error fetching relocations with relations:", error);
    return [];
  }
}
