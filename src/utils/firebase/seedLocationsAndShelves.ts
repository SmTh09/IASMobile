import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";

interface PhysicalLocation {
  id: string;
  name: string;
  address: string;
  createdDate: string;
  createdBy: string;
}

interface Shelf {
  code: string;
  description: string;
  isDefault: boolean;
  createdDate: string;
  createdBy: string;
  physicalLocationID: string;
}

// Physical Locations Data
const physicalLocationsData: PhysicalLocation[] = [
  {
    id: "bmwParts",
    name: "BMW Parts",
    address: "Warehouse A - Section B",
    createdDate: "2020-10-01T13:48:11",
    createdBy: "System Administrator"
  },
  {
    id: "mainWarehouse",
    name: "Main Warehouse",
    address: "Central Storage - Level 1",
    createdDate: "2020-10-01T13:48:11",
    createdBy: "System Administrator"
  }
];

// Complete list of shelves for BMW Parts and Main Warehouse
const shelvesData: Shelf[] = [
  // BMW Parts Shelves
  { code: "A1", description: "Shelf A1", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "A2", description: "Shelf A2", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B1", description: "Shelf B1", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B2", description: "Shelf B2", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B3", description: "Shelf B3", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B4", description: "Shelf B4", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B5", description: "Shelf B5", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B6", description: "Shelf B6", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "B7", description: "Shelf B7", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "C1", description: "Shelf C1", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "C2", description: "Shelf C2", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "D1", description: "Shelf D1", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "D2", description: "Shelf D2", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  { code: "DEFB", description: "Shelf DEFB", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "bmwParts" },
  
  // Main Warehouse Shelf
  { code: "BK1", description: "Shelf BK1", isDefault: false, createdDate: "2020-10-01T13:48:11", createdBy: "System Administrator", physicalLocationID: "mainWarehouse" }
];

export async function seedPhysicalLocations() {
  try {
    const locationsCollection = collection(db, "physicalLocations");
    
    // Check if locations already exist
    const existingLocations = await getDocs(locationsCollection);
    
    if (existingLocations.size > 0) {
      console.log(`Physical locations already seeded (${existingLocations.size} locations). Skipping.`);
      return {
        success: true,
        message: `Physical locations already exist (${existingLocations.size} locations)`,
        skipped: true
      };
    }

    // Add all locations with predefined IDs
    const promises = physicalLocationsData.map(location => 
      setDoc(doc(db, "physicalLocations", location.id), {
        name: location.name,
        address: location.address,
        createdDate: location.createdDate,
        createdBy: location.createdBy
      })
    );
    await Promise.all(promises);

    console.log(`Successfully added ${physicalLocationsData.length} physical locations`);
    
    return {
      success: true,
      message: `Successfully added ${physicalLocationsData.length} physical locations`,
      count: physicalLocationsData.length
    };
  } catch (error) {
    console.error("Error seeding physical locations:", error);
    return {
      success: false,
      message: "Failed to seed physical locations",
      error
    };
  }
}

export async function seedShelves() {
  try {
    const shelvesCollection = collection(db, "shelves");
    
    // Check if shelves already exist
    const existingShelves = await getDocs(shelvesCollection);
    
    if (existingShelves.size > 0) {
      console.log(`Shelves already seeded (${existingShelves.size} shelves). Skipping.`);
      return {
        success: true,
        message: `Shelves already exist (${existingShelves.size} shelves)`,
        skipped: true
      };
    }

    // Add all shelves with code as document ID
    const promises = shelvesData.map(shelf => {
      // Create a safe document ID from the shelf code
      const docId = `shelf${shelf.code}`;
      return setDoc(doc(db, "shelves", docId), {
        code: shelf.code,
        description: shelf.description,
        isDefault: shelf.isDefault,
        createdDate: shelf.createdDate,
        createdBy: shelf.createdBy,
        physicalLocationID: shelf.physicalLocationID
      });
    });
    await Promise.all(promises);

    console.log(`Successfully added ${shelvesData.length} shelves`);
    
    return {
      success: true,
      message: `Successfully added ${shelvesData.length} shelves`,
      count: shelvesData.length
    };
  } catch (error) {
    console.error("Error seeding shelves:", error);
    return {
      success: false,
      message: "Failed to seed shelves",
      error
    };
  }
}

export async function seedLocationsAndShelves() {
  try {
    const locationsResult = await seedPhysicalLocations();
    const shelvesResult = await seedShelves();
    
    return {
      success: locationsResult.success && shelvesResult.success,
      locations: locationsResult,
      shelves: shelvesResult
    };
  } catch (error) {
    console.error("Error seeding locations and shelves:", error);
    return {
      success: false,
      message: "Failed to seed locations and shelves",
      error
    };
  }
}
