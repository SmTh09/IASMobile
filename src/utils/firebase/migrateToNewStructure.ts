import { collection, getDocs, deleteDoc, writeBatch, doc } from "firebase/firestore";
import { db } from "./firestore";

/**
 * Clear all existing data from the database
 */
export async function clearAllData() {
  try {
    console.log("🗑️ Starting database cleanup...");
    
    // Clear parts
    const partsSnapshot = await getDocs(collection(db, "parts"));
    console.log(`   Found ${partsSnapshot.size} parts to delete`);
    for (const docSnapshot of partsSnapshot.docs) {
      await deleteDoc(docSnapshot.ref);
    }
    
    // Clear shelves
    const shelvesSnapshot = await getDocs(collection(db, "shelves"));
    console.log(`   Found ${shelvesSnapshot.size} shelves to delete`);
    for (const docSnapshot of shelvesSnapshot.docs) {
      await deleteDoc(docSnapshot.ref);
    }
    
    // Clear physical locations
    const locationsSnapshot = await getDocs(collection(db, "physicalLocations"));
    console.log(`   Found ${locationsSnapshot.size} locations to delete`);
    for (const docSnapshot of locationsSnapshot.docs) {
      await deleteDoc(docSnapshot.ref);
    }
    
    // Clear relocations (optional - keeps history)
    // const relocationsSnapshot = await getDocs(collection(db, "relocations"));
    // console.log(`   Found ${relocationsSnapshot.size} relocations to delete`);
    // for (const docSnapshot of relocationsSnapshot.docs) {
    //   await deleteDoc(docSnapshot.ref);
    // }
    
    console.log("✅ Database cleanup completed");
    
    return {
      success: true,
      message: "All data cleared successfully",
      deleted: {
        parts: partsSnapshot.size,
        shelves: shelvesSnapshot.size,
        locations: locationsSnapshot.size
      }
    };
  } catch (error) {
    console.error("❌ Error clearing data:", error);
    return {
      success: false,
      message: "Failed to clear data",
      error
    };
  }
}

/**
 * Seed Physical Locations - NEW STRUCTURE
 */
async function seedPhysicalLocations() {
  try {
    console.log("📍 Seeding physical locations...");
    
    const batch = writeBatch(db);
    
    // BMW Parts Location
    batch.set(doc(db, "physicalLocations", "bmwParts"), {
      name: "BMW Parts",
      address: "Warehouse A - Section B",
      createdDate: "2020-10-01T13:48:11",
      createdBy: "System Administrator"
    });
    
    // Main Warehouse Location
    batch.set(doc(db, "physicalLocations", "mainWarehouse"), {
      name: "Main Warehouse",
      address: "Central Storage - Level 1",
      createdDate: "2020-10-01T13:48:11",
      createdBy: "System Administrator"
    });
    
    await batch.commit();
    console.log("✅ Physical locations seeded: 2 locations");
    
    return { success: true, count: 2 };
  } catch (error) {
    console.error("❌ Error seeding locations:", error);
    return { success: false, error };
  }
}

/**
 * Seed Shelves - NEW STRUCTURE
 */
async function seedShelves() {
  try {
    console.log("📚 Seeding shelves...");
    
    const shelvesData = [
      // BMW Parts Shelves (14 shelves)
      { id: "shelfA1", code: "A1", locationID: "bmwParts" },
      { id: "shelfA2", code: "A2", locationID: "bmwParts" },
      { id: "shelfB1", code: "B1", locationID: "bmwParts" },
      { id: "shelfB2", code: "B2", locationID: "bmwParts" },
      { id: "shelfB3", code: "B3", locationID: "bmwParts" },
      { id: "shelfB4", code: "B4", locationID: "bmwParts" },
      { id: "shelfB5", code: "B5", locationID: "bmwParts" },
      { id: "shelfB6", code: "B6", locationID: "bmwParts" },
      { id: "shelfB7", code: "B7", locationID: "bmwParts" },
      { id: "shelfC1", code: "C1", locationID: "bmwParts" },
      { id: "shelfC2", code: "C2", locationID: "bmwParts" },
      { id: "shelfD1", code: "D1", locationID: "bmwParts" },
      { id: "shelfD2", code: "D2", locationID: "bmwParts" },
      { id: "shelfDEFB", code: "DEFB", locationID: "bmwParts" },
      // Main Warehouse Shelf (1 shelf)
      { id: "shelfBK1", code: "BK1", locationID: "mainWarehouse" }
    ];
    
    const batch = writeBatch(db);
    
    shelvesData.forEach(shelf => {
      batch.set(doc(db, "shelves", shelf.id), {
        code: shelf.code,
        description: `Shelf ${shelf.code}`,
        isDefault: false,
        createdDate: "2020-10-01T13:48:11",
        createdBy: "System Administrator",
        physicalLocationID: shelf.locationID
      });
    });
    
    await batch.commit();
    console.log(`✅ Shelves seeded: ${shelvesData.length} shelves`);
    
    return { success: true, count: shelvesData.length };
  } catch (error) {
    console.error("❌ Error seeding shelves:", error);
    return { success: false, error };
  }
}

/**
 * Seed Parts - NEW STRUCTURE
 */
async function seedParts() {
  try {
    console.log("📦 Seeding parts...");
    
    const batch = writeBatch(db);
    
    // Part 1: 83210398511 - test package part (BMW Parts only)
    batch.set(doc(db, "parts", "83210398511"), {
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
    });
    
    // Part 2: 11227508000 - New Test Part (BMW Parts only)
    batch.set(doc(db, "parts", "11227508000"), {
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
    });
    
    // Part 3: 11427512300 - SET OIL-FILTER ELEMENT (BMW Parts only)
    batch.set(doc(db, "parts", "11427512300"), {
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
    });
    
    // Part 4: WH340 - ALL TERRAIN WHEEL (Multiple locations and shelves)
    batch.set(doc(db, "parts", "WH340"), {
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
    });
    
    await batch.commit();
    console.log("✅ Parts seeded: 4 parts");
    
    return { success: true, count: 4 };
  } catch (error) {
    console.error("❌ Error seeding parts:", error);
    return { success: false, error };
  }
}

/**
 * Complete migration to new database structure
 */
export async function migrateToNewStructure() {
  try {
    console.log("🚀 Starting migration to new database structure...");
    console.log("================================================");
    
    // Step 1: Clear all existing data
    const clearResult = await clearAllData();
    if (!clearResult.success) {
      return {
        success: false,
        message: "Failed to clear existing data",
        error: clearResult.error
      };
    }
    
    // Step 2: Seed Physical Locations
    const locationsResult = await seedPhysicalLocations();
    if (!locationsResult.success) {
      return {
        success: false,
        message: "Failed to seed physical locations",
        error: locationsResult.error
      };
    }
    
    // Step 3: Seed Shelves
    const shelvesResult = await seedShelves();
    if (!shelvesResult.success) {
      return {
        success: false,
        message: "Failed to seed shelves",
        error: shelvesResult.error
      };
    }
    
    // Step 4: Seed Parts
    const partsResult = await seedParts();
    if (!partsResult.success) {
      return {
        success: false,
        message: "Failed to seed parts",
        error: partsResult.error
      };
    }
    
    console.log("================================================");
    console.log("✅ Migration completed successfully!");
    console.log(`   📍 Physical Locations: ${locationsResult.count}`);
    console.log(`   📚 Shelves: ${shelvesResult.count}`);
    console.log(`   📦 Parts: ${partsResult.count}`);
    
    return {
      success: true,
      message: "Migration completed successfully",
      data: {
        locations: locationsResult.count,
        shelves: shelvesResult.count,
        parts: partsResult.count
      }
    };
  } catch (error) {
    console.error("❌ Migration failed:", error);
    return {
      success: false,
      message: "Migration failed",
      error
    };
  }
}

/**
 * Check current database state
 */
export async function checkDatabaseState() {
  try {
    const partsSnapshot = await getDocs(collection(db, "parts"));
    const shelvesSnapshot = await getDocs(collection(db, "shelves"));
    const locationsSnapshot = await getDocs(collection(db, "physicalLocations"));
    const relocationsSnapshot = await getDocs(collection(db, "relocations"));
    
    console.log("📊 Current Database State:");
    console.log(`   Parts: ${partsSnapshot.size}`);
    console.log(`   Shelves: ${shelvesSnapshot.size}`);
    console.log(`   Physical Locations: ${locationsSnapshot.size}`);
    console.log(`   Relocations: ${relocationsSnapshot.size}`);
    
    // Check if using new structure
    if (partsSnapshot.size > 0) {
      const firstPart = partsSnapshot.docs[0].data();
      const hasNewStructure = 'physicalLocations' in firstPart && 'quantities' in firstPart;
      console.log(`   Using New Structure: ${hasNewStructure ? '✅ Yes' : '❌ No'}`);
      
      if (!hasNewStructure) {
        console.log("   ⚠️  Old structure detected - migration needed");
      }
    }
    
    return {
      parts: partsSnapshot.size,
      shelves: shelvesSnapshot.size,
      locations: locationsSnapshot.size,
      relocations: relocationsSnapshot.size
    };
  } catch (error) {
    console.error("Error checking database state:", error);
    return null;
  }
}
