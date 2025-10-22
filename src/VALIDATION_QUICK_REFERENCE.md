# Parts Validation - Quick Reference

## 🎯 Quick Summary

The Parts Relocation system now enforces **strict validation** using **mandatory reference fields**.

## ✅ Core Rules

### 1. Mandatory Fields
```typescript
interface Part {
  physicalLocationRef: string;  // ✅ REQUIRED
  shelfRef: string;             // ✅ REQUIRED
}
```

### 2. Relocation Rules
```typescript
✅ Can Relocate:  physicalLocationRef ≠ "mainWarehouse"
❌ Cannot Relocate: physicalLocationRef === "mainWarehouse"
❌ Cannot Relocate: physicalLocationRef === "" or undefined
```

### 3. Validation Points
```
SelectParts       →  Filter list (visual)
NewPartsRelocation →  Show error banner (logical)
Submit            →  Final check (prevent save)
```

## 🔧 Key Functions

### `isPartRelocatable(part)`
**Use:** Filter parts in SelectParts  
**Returns:** `true` if part can be relocated  
**Logic:** Has location ref AND not Main Warehouse

```typescript
import { isPartRelocatable } from "../utils/firebase/partValidation";

const relocatableParts = allParts.filter(part => isPartRelocatable(part));
```

### `getPartRelocationError(part)`
**Use:** Get validation error message  
**Returns:** Error string or `null`  
**Logic:** Returns specific error or null if valid

```typescript
import { getPartRelocationError } from "../utils/firebase/partValidation";

const error = getPartRelocationError(selectedPart);
if (error) {
  // Show error to user
}
```

### `validatePartForRelocation(part)`
**Use:** Throw exception if invalid  
**Returns:** Nothing (throws on error)  
**Logic:** Throws Error with message

```typescript
import { validatePartForRelocation } from "../utils/firebase/partValidation";

try {
  validatePartForRelocation(part);
  // Proceed with relocation
} catch (error) {
  console.error(error.message);
}
```

## 🚫 Error Messages

| Scenario | Error Message |
|----------|---------------|
| No `physicalLocationRef` | "This part does not have a valid physical location." |
| `physicalLocationRef === "mainWarehouse"` | "This part cannot be relocated from the Main Warehouse." |
| Valid part | `null` (no error) |

## 📋 Validation Checklist

### For SelectParts Component
- [x] Import `isPartRelocatable`
- [x] Filter parts using `isPartRelocatable(part)`
- [x] Only relocatable parts appear in list

### For NewPartsRelocation Component
- [x] Import `getPartRelocationError`
- [x] Validate part on selection
- [x] Show error banner if invalid
- [x] Disable submit button if invalid
- [x] Final validation on submit

### For Database Schema
- [x] `physicalLocationRef` is mandatory
- [x] `shelfRef` is mandatory
- [x] All seed parts have references
- [x] Legacy fields preserved

## 🎨 Error UI

### Error Banner (Part Validation)
```tsx
{partValidationError && (
  <div className="bg-[#fff1f1] border-l-4 border-[#da1e28] p-[16px] w-full">
    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] text-[#da1e28] text-[14px]">
      {partValidationError}
    </p>
  </div>
)}
```

### Field Error (Quantity Validation)
```tsx
{quantityError && (
  <p className="font-['IBM_Plex_Sans:Light',_sans-serif] text-[#da1e28] text-[12px]">
    {quantityError}
  </p>
)}
```

## 📊 Validation Flow

```
Load Parts
    ↓
Filter with isPartRelocatable()
    ↓
Show in List
    ↓
User Selects
    ↓
Validate with getPartRelocationError()
    ↓
Show Error Banner if Invalid
    ↓
Disable Submit if Invalid
    ↓
Final Check on Submit
    ↓
Create Relocation
```

## 🧪 Quick Tests

### Test Valid Part
```typescript
const validPart = {
  id: "123",
  physicalLocationRef: "bmwParts"
};

isPartRelocatable(validPart);        // true
getPartRelocationError(validPart);   // null
```

### Test Main Warehouse Part
```typescript
const warehousePart = {
  id: "456",
  physicalLocationRef: "mainWarehouse"
};

isPartRelocatable(warehousePart);       // false
getPartRelocationError(warehousePart);  // "This part cannot be relocated from the Main Warehouse."
```

### Test Part Without Location
```typescript
const orphanedPart = {
  id: "789",
  physicalLocationRef: ""
};

isPartRelocatable(orphanedPart);       // false
getPartRelocationError(orphanedPart);  // "This part does not have a valid physical location."
```

## 📁 File Locations

| File | Purpose |
|------|---------|
| `/utils/firebase/partValidation.ts` | Validation functions |
| `/components/SelectParts.tsx` | Part filtering |
| `/components/NewPartsRelocation.tsx` | Validation display |
| `/utils/firebase/seedParts.ts` | Sample data with refs |

## 🔗 Related Documentation

- [DATA_LOGIC_REFINEMENT.md](/DATA_LOGIC_REFINEMENT.md) - Complete documentation
- [FIREBASE_RELATIONAL_STRUCTURE.md](/FIREBASE_RELATIONAL_STRUCTURE.md) - Database structure
- [PARTS_SELECTION_FILTERING.md](/PARTS_SELECTION_FILTERING.md) - Selection logic

## ✅ Remember

1. **Always** check `physicalLocationRef` (not legacy fields)
2. **Main Warehouse** parts cannot be relocated
3. **Mandatory** references for all parts
4. **Validate** at multiple checkpoints
5. **Show** clear error messages to users

---

**Need help?** Check the full documentation in `/DATA_LOGIC_REFINEMENT.md`
