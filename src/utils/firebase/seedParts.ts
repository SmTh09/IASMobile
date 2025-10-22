import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";

// New structure: Parts can have multiple Physical Locations
// Each Physical Location reference includes the shelves available for that part in that location
interface PartPhysicalLocation {
  id: string; // Physical Location ID
  shelves: string[]; // Array of shelf IDs for this part in this location
}

interface PartQuantity {
  shelfID: string;
  quantity: number;
}

interface PartData {
  partNumber: string;
  description: string;
  physicalLocations: PartPhysicalLocation[];
  quantities: PartQuantity[]; // Quantity per shelf
}

// Parts data with the new structure
const partsData: PartData[] = [
  {
    partNumber: "83210398511",
    description: "test package part",
    physicalLocations: [
      {
        id: "bmwParts",
        shelves: ["shelfDEFB"]
      }
    ],
    quantities: [
      { shelfID: "shelfDEFB", quantity: 56 }
    ]
  },
  {
    partNumber: "11227508000",
    description: "New Test Part",
    physicalLocations: [
      {
        id: "bmwParts",
        shelves: ["shelfDEFB"]
      }
    ],
    quantities: [
      { shelfID: "shelfDEFB", quantity: 17 }
    ]
  },
  {
    partNumber: "11427512300",
    description: "SET OIL-FILTER ELEMENT",
    physicalLocations: [
      {
        id: "bmwParts",
        shelves: ["shelfB3"]
      }
    ],
    quantities: [
      { shelfID: "shelfB3", quantity: 27 }
    ]
  },
  {
    partNumber: "WH340",
    description: "ALL TERRAIN WHEEL",
    physicalLocations: [
      {
        id: "bmwParts",
        shelves: ["shelfB1", "shelfB2", "shelfB3", "shelfB4", "shelfB6", "shelfB7"]
      },
      {
        id: "mainWarehouse",
        shelves: ["shelfBK1"]
      }
    ],
    quantities: [
      { shelfID: "shelfB1", quantity: 30 },
      { shelfID: "shelfB2", quantity: 35 },
      { shelfID: "shelfB3", quantity: 25 },
      { shelfID: "shelfB4", quantity: 20 },
      { shelfID: "shelfB6", quantity: 34 },
      { shelfID: "shelfB7", quantity: 15 },
      { shelfID: "shelfBK1", quantity: 50 }
    ]
  }
];

export async function seedParts() {
  try {
    const partsCollection = collection(db, "parts");
    
    // Check if parts already exist
    const existingParts = await getDocs(partsCollection);
    
    if (existingParts.size > 0) {
      console.log(`Parts collection already has ${existingParts.size} parts. Skipping seed.`);
      return {
        success: true,
        message: `Parts collection already has ${existingParts.size} parts`,
        skipped: true
      };
    }

    // Add all parts with part number as document ID
    const promises = partsData.map(part => {
      // Use part number as document ID (sanitized)
      const docId = part.partNumber.replace(/[^a-zA-Z0-9-_]/g, '_');
      return setDoc(doc(partsCollection, docId), {
        partNumber: part.partNumber,
        description: part.description,
        physicalLocations: part.physicalLocations,
        quantities: part.quantities
      });
    });
    
    await Promise.all(promises);

    console.log(`Successfully added ${partsData.length} parts to the database`);
    
    return {
      success: true,
      message: `Successfully added ${partsData.length} parts to the database`,
      count: partsData.length
    };
  } catch (error) {
    console.error("Error seeding parts:", error);
    return {
      success: false,
      message: "Failed to seed parts",
      error
    };
  }
}

export async function clearParts() {
  try {
    const partsCollection = collection(db, "parts");
    const snapshot = await getDocs(partsCollection);
    
    const deletePromises = snapshot.docs.map(docSnapshot => {
      return docSnapshot.ref.delete();
    });
    
    await Promise.all(deletePromises);
    
    console.log(`Successfully deleted ${snapshot.size} parts from the database`);
    
    return {
      success: true,
      message: `Successfully deleted ${snapshot.size} parts`,
      count: snapshot.size
    };
  } catch (error) {
    console.error("Error clearing parts:", error);
    return {
      success: false,
      message: "Failed to clear parts",
      error
    };
  }
}
