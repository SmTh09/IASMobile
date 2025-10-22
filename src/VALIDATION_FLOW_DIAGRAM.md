# Parts Relocation Validation Flow - Visual Diagrams

## 🎯 System Overview

```
┌──────────────────────┐
│  physicalLocations   │
│  ┌──────────────┐    │
│  │ bmwParts     │    │
│  │ mainWarehouse│    │
│  └──────────────┘    │
└──────────────────────┘
         ↑ referenced by
         │
┌──────────────────────┐      ┌──────────────────────┐
│      shelves         │      │       parts          │
│  ┌──────────────┐    │      │  ┌──────────────┐    │
│  │ shelfB1      │←───┼──────┼──│ Part A       │    │
│  │ location:    │    │      │  │ location:    │    │
│  │ bmwParts     │    │      │  │ bmwParts     │    │
│  │              │    │      │  │ shelf: B1    │    │
│  │ shelfA1      │    │      │  │              │    │
│  │ location:    │    │      │  │ Part B       │    │
│  │ mainWarehouse│    │      │  │ location:    │    │
│  └──────────────┘    │      │  │ mainWarehouse│    │
└──────────────────────┘      │  └──────────────┘    │
                              └──────────────────────┘
                                       ↓
                              ┌──────────────────────┐
                              │    relocations       │
                              │  ┌──────────────┐    │
                              │  │ from: bmwParts│   │
                              │  │ to: mainWH    │   │
                              │  │ part: Part A  │   │
                              │  └──────────────┘    │
                              └──────────────────────┘
```

## 📊 Validation Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    USER OPENS SELECT PARTS                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              LOAD ALL PARTS FROM FIREBASE                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Part A   │  │ Part B   │  │ Part C   │  │ Part D   │    │
│  │ bmwParts │  │ mainWH   │  │ bmwParts │  │ no loc   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│           FILTER: isPartRelocatable(part)                   │
│                                                              │
│  Part A → ✅ Has location: bmwParts                          │
│           ✅ Not mainWarehouse                               │
│           → SHOW IN LIST                                     │
│                                                              │
│  Part B → ✅ Has location: mainWarehouse                     │
│           ❌ IS mainWarehouse                                │
│           → HIDE FROM LIST                                   │
│                                                              │
│  Part C → ✅ Has location: bmwParts                          │
│           ✅ Not mainWarehouse                               │
│           → SHOW IN LIST                                     │
│                                                              │
│  Part D → ❌ No location                                     │
│           → HIDE FROM LIST                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  DISPLAY FILTERED LIST                       │
│  ┌──────────┐  ┌──────────┐                                 │
│  │ Part A   │  │ Part C   │                                 │
│  │ bmwParts │  │ bmwParts │                                 │
│  └──────────┘  └──────────┘                                 │
│                                                              │
│  (Part B and Part D are hidden)                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   USER SELECTS PART A                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│           NAVIGATE TO NEW PARTS RELOCATION                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│      VALIDATE: getPartRelocationError(partA)                 │
│                                                              │
│  ✅ Has location: bmwParts                                   │
│  ✅ Not mainWarehouse                                        │
│  → Return: null (no error)                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  NO ERROR BANNER SHOWN                       │
│  ┌────────────────────────────────────────────┐              │
│  │  Part A Details                            │              │
│  │  Location: BMW Parts                       │              │
│  │  Shelf: B1                                 │              │
│  │                                            │              │
│  │  Qty to Relocate: [____]                  │              │
│  │  New Shelf: [Select ▼]                    │              │
│  │                                            │              │
│  │  [✓ Confirm] [🗑 Delete]                   │              │
│  └────────────────────────────────────────────┘              │
│                                                              │
│  Submit Button: ✅ ENABLED (when all fields filled)          │
└─────────────────────────────────────────────────────────────┘
```

## 🚫 Invalid Part Flow (Main Warehouse)

```
┌─────────────────────────────────────────────────────────────┐
│        HYPOTHETICAL: Part B Somehow Passed In               │
│        (Should never happen due to SelectParts filter)      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│      VALIDATE: getPartRelocationError(partB)                 │
│                                                              │
│  ✅ Has location: mainWarehouse                              │
│  ❌ IS mainWarehouse                                         │
│  → Return: "This part cannot be relocated from the           │
│             Main Warehouse."                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   ERROR BANNER SHOWN                         │
│  ┌────────────────────────────────────────────┐              │
│  │ ⚠️  This part cannot be relocated from the │              │
│  │     Main Warehouse.                        │              │
│  └────────────────────────────────────────────┘              │
│                                                              │
│  ┌────────────────────────────────────────────┐              │
│  │  Part B Details                            │              │
│  │  Location: Main Warehouse                  │              │
│  │  Shelf: A1                                 │              │
│  │                                            │              │
│  │  Qty to Relocate: [____]                  │              │
│  │  New Shelf: [Select ▼]                    │              │
│  │                                            │              │
│  │  [✓ Confirm] [🗑 Delete]                   │              │
│  └────────────────────────────────────────────┘              │
│                                                              │
│  Submit Button: ❌ DISABLED (validation error)               │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Complete User Journey

```
START
  │
  ├─► SelectParts
  │     │
  │     ├─► Load all parts
  │     │     │
  │     │     └─► Filter with isPartRelocatable()
  │     │           │
  │     │           ├─► ✅ bmwParts → Show
  │     │           ├─► ❌ mainWarehouse → Hide
  │     │           └─► ❌ no location → Hide
  │     │
  │     └─► Display filtered list
  │           │
  │           └─► User clicks part
  │                 │
  ├─► NewPartsRelocation
  │     │
  │     ├─► Validate part (useEffect)
  │     │     │
  │     │     ├─► getPartRelocationError()
  │     │     │     │
  │     │     │     ├─► If error → Show banner
  │     │     │     └─► If valid → No banner
  │     │     │
  │     │     └─► Update canSubmit state
  │     │
  │     ├─► User enters quantity
  │     │     │
  │     │     └─► Real-time validation
  │     │           │
  │     │           ├─► > available? → Show error
  │     │           └─► <= available? → Clear error
  │     │
  │     ├─► User selects new shelf
  │     │     │
  │     │     └─► Dropdown shows available shelves
  │     │           (excluding current shelf)
  │     │
  │     └─► User clicks Submit
  │           │
  │           ├─► Final validation
  │           │     │
  │           │     ├─► Part valid?
  │           │     ├─► Quantity valid?
  │           │     └─► Shelf selected?
  │           │
  │           ├─► If all valid
  │           │     │
  │           │     ├─► Create relocation in Firebase
  │           │     ├─► Update part location/shelf
  │           │     └─► Navigate back to list
  │           │
  │           └─► If invalid
  │                 │
  │                 └─► Show error, prevent save
  │
END
```

## 🏗️ Data Structure Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                  PHYSICAL LOCATIONS                          │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  id: "bmwParts"                                        │  │
│  │  name: "BMW Parts"                                     │  │
│  └────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  id: "mainWarehouse"                                   │  │
│  │  name: "Main Warehouse"                                │  │
│  └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                    ↑                        ↑
                    │                        │
        physicalLocationRef      physicalLocationRef
                    │                        │
┌───────────────────────────┐   ┌───────────────────────────┐
│        SHELVES            │   │         PARTS             │
│  ┌─────────────────────┐  │   │  ┌─────────────────────┐  │
│  │ id: "shelfB1"       │  │   │  │ id: "part123"       │  │
│  │ label: "B1"         │  │   │  │ partNumber: "..."   │  │
│  │ physicalLocationRef:│  │   │  │ physicalLocationRef:│  │
│  │   "bmwParts"        │──┼───┼──│   "bmwParts"        │  │
│  └─────────────────────┘  │   │  │ shelfRef:           │  │
│  ┌─────────────────────┐  │   │  │   "shelfB1" ────────┼──┼─┐
│  │ id: "shelfA1"       │  │   │  └─────────────────────┘  │ │
│  │ label: "A1"         │  │   └───────────────────────────┘ │
│  │ physicalLocationRef:│  │                                 │
│  │   "mainWarehouse"   │  │          shelfRef               │
│  └─────────────────────┘  │                                 │
└───────────────────────────┘                                 │
                                                              │
┌─────────────────────────────────────────────────────────────┘
│
│  REFERENCES MUST BE VALID
│  ├─► physicalLocationRef must exist in physicalLocations
│  └─► shelfRef must exist in shelves
```

## ✅ Validation Decision Tree

```
                    Is Part Relocatable?
                            │
                ┌───────────┴───────────┐
                │                       │
         Has physicalLocationRef?      No → ❌ INVALID
                │                           "This part does not have
                │                            a valid physical location."
               Yes
                │
                ├───────────┬───────────┐
                │           │           │
         physicalLocationRef =    =bmwParts   =customLoc
          "mainWarehouse"          │           │
                │                  │           │
                ↓                  ↓           ↓
            ❌ INVALID          ✅ VALID    ✅ VALID
        "This part cannot
         be relocated from
         the Main Warehouse."
```

## 🎨 UI States

### State 1: No Part Selected
```
┌─────────────────────────────────────┐
│  New Parts Relocation               │
│                                     │
│  Physical Location: [BMW Parts ▼]  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │       📦                      │  │
│  │   No parts selected           │  │
│  │                               │  │
│  │   [+ Add Part]                │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  [×]  [← Go Back]  [Submit] (disabled)
└─────────────────────────────────────┘
```

### State 2: Valid Part Selected
```
┌─────────────────────────────────────┐
│  New Parts Relocation               │
│                                     │
│  Physical Location: [BMW Parts ▼]  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Part No: 83210398511          │  │
│  │ Part: test package part       │  │
│  │ Physical Location: BMW Parts  │  │
│  │ Shelf Address: DEFB           │  │
│  │ Current Avail: 56             │  │
│  │                               │  │
│  │ Qty to Relocate: [5___]       │  │
│  │                               │  │
│  │ New Shelf: [B1 ▼]             │  │
│  │                               │  │
│  │ [✓ Confirm] [🗑 Delete]        │  │
│  └───────────────────────────────┘  │
│                                     │
│  [×]  [← Go Back]  [Submit] ✅
└─────────────────────────────────────┘
```

### State 3: Invalid Part (Main Warehouse)
```
���─────────────────────────────────────┐
│  New Parts Relocation               │
│                                     │
│  Physical Location: [Main WH ▼]    │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ⚠️  This part cannot be        │  │
│  │     relocated from the Main    │  │
│  │     Warehouse.                 │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Part No: ABC123               │  │
│  │ Part: Completed Part          │  │
│  │ Physical Location: Main WH    │  │
│  │ Shelf Address: A1             │  │
│  │ Current Avail: 30             │  │
│  │                               │  │
│  │ Qty to Relocate: [____]       │  │
│  │                               │  │
│  │ New Shelf: [Select ▼]         │  │
│  │                               │  │
│  │ [✓ Confirm] [🗑 Delete]        │  │
│  └───────────────────────────────┘  │
│                                     │
│  [×]  [← Go Back]  [Submit] ❌
└─────────────────────────────────────┘
```

## 🔐 Security & Validation Layers

```
┌─────────────────────────────────────────────────────────┐
│                  VALIDATION LAYERS                       │
└─────────────────────────────────────────────────────────┘

Layer 1: UI Filtering (SelectParts)
├─► isPartRelocatable()
├─► Only show valid parts in list
└─► User cannot see/select invalid parts

Layer 2: Component Validation (NewPartsRelocation)
├─► getPartRelocationError()
├─► Show error banner if invalid
├─► Disable submit button
└─► Prevent user from proceeding

Layer 3: Submit Validation (handleSubmit)
├─► getPartRelocationError()
├─► Final check before Firebase write
├─► Reject if invalid
└─► Ensure data integrity

Layer 4: Type Safety (TypeScript)
├─► physicalLocationRef: string (required)
├─► shelfRef: string (required)
├─► Compile-time checks
└─► Prevent missing fields
```

## 📈 Success Metrics

```
Before Refinement:
├─► Parts without location could be selected
├─► Main Warehouse parts appeared in list
├─► No validation on selection
├─► No error feedback to users
└─► Data integrity issues possible

After Refinement:
├─► ✅ Only valid parts selectable
├─► ✅ Main Warehouse parts filtered
├─► ✅ Multiple validation checkpoints
├─► ✅ Clear error messages
└─► ✅ Strong data integrity
```

## 🎯 Summary

```
┌─────────────────────────────────────────────────────────┐
│              PARTS RELOCATION SYSTEM                     │
│                                                          │
│  Data Layer:     Mandatory references                   │
│  Validation:     Multiple checkpoints                   │
│  UI:             Clear error feedback                   │
│  Security:       4 validation layers                    │
│  Type Safety:    TypeScript enforcement                 │
│  UX:             Guided workflow                        │
│                                                          │
│  Result:         Robust, user-friendly system           │
└─────────────────────────────────────────────────────────┘
```
