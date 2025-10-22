/**
 * Part Validation Utilities
 * 
 * Provides validation functions to ensure parts meet relocation requirements
 */

export interface PartForValidation {
  id: string;
  physicalLocationRef?: string;
  physicalLocation?: string;
}

/**
 * Checks if a part is eligible for relocation
 * 
 * A part is eligible if:
 * 1. It has a physicalLocationRef
 * 2. The physicalLocationRef is NOT "mainWarehouse"
 * 
 * @param part - Part to validate
 * @returns true if part can be relocated, false otherwise
 */
export function isPartRelocatable(part: PartForValidation): boolean {
  // Part must have a physical location reference
  if (!part.physicalLocationRef) {
    return false;
  }

  // Part cannot be in Main Warehouse
  if (part.physicalLocationRef === "mainWarehouse") {
    return false;
  }

  return true;
}

/**
 * Gets validation error message for a part that cannot be relocated
 * 
 * @param part - Part to validate
 * @returns Error message string, or null if part is valid
 */
export function getPartRelocationError(part: PartForValidation): string | null {
  // Check if part has physical location reference
  if (!part.physicalLocationRef) {
    return "This part does not have a valid physical location.";
  }

  // Check if part is in Main Warehouse
  if (part.physicalLocationRef === "mainWarehouse") {
    return "This part cannot be relocated from the Main Warehouse.";
  }

  return null;
}

/**
 * Validates a part before allowing relocation
 * Throws an error if part is not relocatable
 * 
 * @param part - Part to validate
 * @throws Error if part cannot be relocated
 */
export function validatePartForRelocation(part: PartForValidation): void {
  const error = getPartRelocationError(part);
  if (error) {
    throw new Error(error);
  }
}

/**
 * Checks if a part belongs to Main Warehouse
 * 
 * @param part - Part to check
 * @returns true if part is in Main Warehouse
 */
export function isPartInMainWarehouse(part: PartForValidation): boolean {
  return part.physicalLocationRef === "mainWarehouse";
}

/**
 * Checks if a part has a valid physical location reference
 * 
 * @param part - Part to check
 * @returns true if part has physicalLocationRef
 */
export function hasValidPhysicalLocation(part: PartForValidation): boolean {
  return !!part.physicalLocationRef;
}
