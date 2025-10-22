# 🎯 CÓMO SUBIR FOTOS DE VEHÍCULOS

## ⚡ MÉTODO RÁPIDO (3 pasos)

### 1️⃣ Recarga la página
Presiona **F5**

### 2️⃣ Abre la consola
Presiona **F12** (o clic derecho → Inspeccionar → Console)

### 3️⃣ Ejecuta este comando
```javascript
goToVehiclePhotos()
```

¡Eso es todo! 🎉

---

## ✨ SISTEMA LOCAL

Las fotos se guardan directamente en Firestore (base de datos), no en Google Drive.

### Ventajas:
- ✅ **Siempre funciona** - Sin problemas de permisos
- ✅ **100% gratis** - Usa el tier gratuito de Firestore
- ✅ **Compresión automática** - Optimiza las imágenes
- ✅ **Sin dependencias** - No necesita servicios externos

### Cómo funciona:
1. Seleccionas una foto desde tu computadora o teléfono
2. La app la comprime automáticamente a ~800KB
3. Se guarda como base64 directamente en Firestore
4. Aparece inmediatamente en la lista de vehículos

---

## 📋 COMANDOS DISPONIBLES

Después de recargar la página (F5), puedes usar estos comandos en la consola:

```javascript
// 📸 Subir fotos (RECOMENDADO)
goToVehiclePhotos()

// 🔍 Ver estado de las imágenes
await checkVehicleImages()

// 🛠️ Crear vehículos (si no existen)
await seedVehicles("customer-theo-floyd")

// 🗑️ Limpiar todos los vehículos
await clearVehicles()
```

---

## 🚀 ¿QUÉ PASA DESPUÉS?

Cuando ejecutes `goToVehiclePhotos()`:

1. Se abre una página con la lista de todos los vehículos
2. Cada vehículo tiene un botón "Upload Photo"
3. Haces clic y seleccionas la foto
4. La foto se sube y aparece inmediatamente
5. Puedes cambiar la foto cuando quieras

---

## 💡 TIPS

- **Tamaño máximo:** 5MB por imagen (antes de comprimir)
- **Formatos:** JPG, PNG, WebP, etc.
- **Compresión:** Automática a ~800KB
- **Almacenamiento:** Directamente en Firestore como base64

---

## ❓ PREGUNTAS FRECUENTES

### ¿Por qué no usar Google Drive?
Google Drive tiene problemas de permisos y las URLs pueden dejar de funcionar. El sistema local es más confiable.

### ¿Las fotos ocupan mucho espacio?
No. Firestore free tier incluye 1GB de almacenamiento. Cada foto comprimida es ~800KB, así que puedes almacenar más de 1000 fotos.

### ¿Puedo cambiar una foto después?
Sí. Solo vuelve a subir una nueva foto para ese vehículo.

### ¿Las fotos se ven en la app?
Sí. Inmediatamente aparecen en:
- Lista de vehículos (Car List)
- Nuevo appointment (selección de vehículo)

---

## 🎉 ¡LISTO!

Ejecuta `goToVehiclePhotos()` en la consola y empieza a subir fotos.

**Recuerda:** Primero recarga la página con **F5** para cargar las funciones.
