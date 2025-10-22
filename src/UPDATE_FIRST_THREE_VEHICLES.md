# 🚗 Actualizar Primeros Tres Vehículos

Guía rápida para agregar imágenes a CF-545-YA, TK-271-GT y QX-504-AP.

---

## ✅ Imágenes Confirmadas

| Vehículo | Placa | Modelo | Imagen | Status |
|----------|-------|--------|--------|--------|
| 1️⃣ | CF-545-YA | BMW 330i xDrive | Rojo | ✅ Lista |
| 2️⃣ | TK-271-GT | BMW 540i xDrive | Gris | ✅ Lista |
| 3️⃣ | QX-504-AP | BMW 330I XDRIVE A | Blanco | ✅ Lista |

**Todas las imágenes están importadas desde Figma y listas para usar!**

---

## 🚀 Opción 1: Los Tres a la Vez (RECOMENDADO)

Abre la **consola del navegador** (F12) y ejecuta:

```javascript
await updateFirstThreeVehicles();
```

**Resultado:**
```
🚗 Updating first three vehicles with images...

1️⃣ CF-545-YA (Red BMW 330i)...
✅ Red BMW created/updated successfully!
   Plate: CF-545-YA
   Model: BMW 330i xDrive
   Chassis: WBSWD9C54HP123456
   Customer: Theo Floyd
   ✅ Image included from Figma assets

2️⃣ TK-271-GT (Gray BMW 540i)...
✅ Gray BMW created/updated successfully!
   Plate: TK-271-GT
   Model: BMW 540i xDrive
   Chassis: WBAKB8C51BE252341
   Customer: Theo Floyd
   ✅ Image included from Figma assets

3️⃣ QX-504-AP (White BMW 330i)...
✅ White BMW created/updated successfully!
   Plate: QX-504-AP
   Model: BMW 330I XDRIVE A
   Chassis: WBA8E5G58HNU12345
   Customer: Theo Floyd
   ✅ Image included from Figma assets

🎉 All three vehicles updated successfully!
✅ CF-545-YA - Red BMW 330i xDrive
✅ TK-271-GT - Gray BMW 540i xDrive
✅ QX-504-AP - White BMW 330I XDRIVE A
```

---

## 🎯 Opción 2: Individual

### Solo CF-545-YA (Rojo)

```javascript
await seedRedBMWVehicle();
```

### Solo TK-271-GT (Gris)

```javascript
await seedGrayBMWVehicle();
```

### Solo QX-504-AP (Blanco)

```javascript
await seedWhiteBMWVehicle();
```

---

## 🔄 Opción 3: Solo Actualizar Imágenes

Si los vehículos ya existen pero quieres actualizar solo las imágenes:

```javascript
// CF-545-YA
await updateRedBMW();

// TK-271-GT
await updateGrayBMW();

// QX-504-AP
await updateWhiteBMW();
```

---

## 🎉 Opción 4: Todos los Vehículos (5 en total)

Si quieres crear los 5 vehículos a la vez:

```javascript
await seedVehiclesWithFigmaImages('customer-theo-floyd');
```

Esto creará:
1. ✅ CF-545-YA - BMW 330i xDrive (Rojo)
2. ✅ TK-271-GT - BMW 540i xDrive (Gris)
3. ✅ QX-504-AP - BMW 330I XDRIVE A (Blanco)
4. ✅ WW-896-BA - BMW 330I XDRIVE A (Naranja)
5. ✅ QR-759-HY - BMW X6 XDRIVE35I US

---

## 🔍 Verificar que Funcionó

```javascript
import { getCustomerVehicles } from './utils/firebase/vehicles';

const vehicles = await getCustomerVehicles('customer-theo-floyd');

// Ver tabla resumen
console.table(vehicles.map(v => ({
  Plate: v.plate,
  Model: v.model,
  'Has Image': v.imageUrl ? '✅' : '❌',
  'Image Type': v.imageUrl?.startsWith('figma:') ? 'Figma' : 
                v.imageUrl?.startsWith('data:') ? 'Base64' : 
                v.imageUrl?.startsWith('http') ? 'URL' : 'None'
})));
```

**Esperado:**
```
┌─────────┬───────────┬─────────────────┬───────────┬────────────┐
│ (index) │  Plate    │     Model       │ Has Image │ Image Type │
├─────────┼───────────┼─────────────────┼───────────┼────────────┤
│    0    │'CF-545-YA'│'330i xDrive'    │   '✅'    │  'Figma'   │
│    1    │'TK-271-GT'│'540i xDrive'    │   '✅'    │  'Figma'   │
│    2    │'QX-504-AP'│'330I XDRIVE A'  │   '✅'    │  'Figma'   │
└─────────┴───────────┴─────────────────┴───────────┴────────────┘
```

---

## 📸 Detalles de las Imágenes

### CF-545-YA (Rojo)
```typescript
{
  plate: 'CF-545-YA',
  model: '330i xDrive',
  imageUrl: 'figma:asset/901479a00ad97f34e4ecce86fafd722e5c231ff4.png'
}
```

### TK-271-GT (Gris)
```typescript
{
  plate: 'TK-271-GT',
  model: '540i xDrive',
  imageUrl: 'figma:asset/d79143797154b720e7bfa61ecddf09ca1a3e97e3.png'
}
```

### QX-504-AP (Blanco)
```typescript
{
  plate: 'QX-504-AP',
  model: '330I XDRIVE A',
  imageUrl: 'figma:asset/69bec7266b37b74dca7051ae59a49c1da43b254c.png'
}
```

---

## 🛠️ Comandos Útiles

### Ver vehículos específicos

```javascript
import { getVehicleById } from './utils/firebase/vehicles';

// Ver CF-545-YA
const redBMW = await getVehicleById('vehicle-cf-545-ya');
console.log('Red BMW:', redBMW);

// Ver TK-271-GT
const grayBMW = await getVehicleById('vehicle-tk-271-gt');
console.log('Gray BMW:', grayBMW);

// Ver QX-504-AP
const whiteBMW = await getVehicleById('vehicle-qx-504-ap');
console.log('White BMW:', whiteBMW);
```

### Actualizar datos individuales

```javascript
import { updateVehicle } from './utils/firebase/vehicles';

// Actualizar solo un campo
await updateVehicle('vehicle-cf-545-ya', {
  registrationDate: '26.02.2020' // Por ejemplo
});
```

### Limpiar y recrear

```javascript
import { clearVehicles } from './utils/api';

// Limpiar todos
await clearVehicles();

// Recrear los tres
await updateFirstThreeVehicles();
```

---

## 📱 Integración en CarList

Una vez ejecutado el comando, actualiza CarList para ver las imágenes:

### Paso 1: Editar `/imports/CarList.tsx`

```tsx
import { useState, useEffect } from "react";
import { getCustomerVehicles } from "../utils/firebase/vehicles";

export default function CarList({ 
  onCancel, 
  onSelectCar, 
  onMenuClick,
  customerId = "customer-theo-floyd" 
}: CarListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [carsData, setCarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadVehicles() {
      try {
        const vehicles = await getCustomerVehicles(customerId);
        
        const formatted = vehicles.map((v, index) => ({
          id: index + 1,
          plate: v.plate,
          registrationDate: v.registrationDate,
          brand: v.brand,
          model: v.model,
          chassis: v.chassis,
          image: v.imageUrl // ← Imagen desde Firestore
        }));
        
        setCarsData(formatted);
      } catch (error) {
        console.error('Error loading vehicles:', error);
      } finally {
        setLoading(false);
      }
    }

    loadVehicles();
  }, [customerId]);
  
  if (loading) {
    return (
      <div className="relative w-[430px] h-[932px] bg-white flex items-center justify-center">
        <p>Loading vehicles...</p>
      </div>
    );
  }
  
  // ... resto del código
}
```

### Paso 2: Actualizar `App.tsx`

```tsx
{currentView === "carList" && (
  <CarList
    onCancel={handleCancelToNewAppointment}
    onSelectCar={handleSelectCar}
    onMenuClick={() => setSidebarOpen(true)}
    customerId="customer-theo-floyd" // ← Agregar esto
  />
)}
```

---

## 🎨 Cómo se Verán

### En CarList

```
┌─────────────────────────────────┐
│  [🚗 Imagen Roja]               │
│  Plate: CF-545-YA               │
│  Registration: 25.02.2020       │
│  Brand: BMW                     │
│  Model: 330i xDrive          → │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  [🚗 Imagen Gris]               │
│  Plate: TK-271-GT               │
│  Registration: 21.02.2020       │
│  Brand: BMW                     │
│  Model: 540i xDrive          → │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  [🚗 Imagen Blanca]             │
│  Plate: QX-504-AP               │
│  Registration: 18.02.2020       │
│  Brand: BMW                     │
│  Model: 330I XDRIVE A        → │
└─────────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Abrir consola del navegador (F12)
- [ ] Ejecutar `await updateFirstThreeVehicles()`
- [ ] Verificar que dice "All three vehicles updated successfully"
- [ ] Actualizar CarList.tsx con useEffect
- [ ] Pasar customerId desde App.tsx
- [ ] Recargar la app
- [ ] Verificar que se ven las 3 imágenes
- [ ] Probar búsqueda de vehículos
- [ ] Probar selección de vehículo

---

## 🎯 Resumen

**Un solo comando actualiza los 3 vehículos:**

```javascript
await updateFirstThreeVehicles();
```

**Resultado:**
- ✅ CF-545-YA con imagen roja de Figma
- ✅ TK-271-GT con imagen gris de Figma
- ✅ QX-504-AP con imagen blanca de Figma
- ✅ Todo guardado en Firestore
- ✅ Listo para mostrar en CarList

**Total time:** ~5 segundos ⚡

---

## 📚 Referencias

- **Guía Completa:** `/VEHICLE_IMAGES_GUIDE.md`
- **Quick Start:** `/VEHICLE_IMAGES_QUICK_START.md`
- **Primer Vehículo:** `/ADD_VEHICLE_IMAGES.md`

¡Listo para usar! 🚗✨
