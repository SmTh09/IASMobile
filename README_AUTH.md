# Sistema de Autenticación - Guía de Uso

Este documento explica cómo usar y probar el sistema de autenticación implementado.

## 🚀 Inicio Rápido

### 1. Configurar la URL de la API

```bash
# Copiar archivo de configuración
cp .env.example .env

# Editar .env (opcional - ya tiene valores por defecto)
VITE_API_BASE_URL=https://srvstealth.incadeacloud-poc.com/idamsWebApi
```

### 2. Instalar dependencias y ejecutar

```bash
npm install
npm run dev
```

### 3. Probar el login

Usa las credenciales de ejemplo:
- **Usuario**: `admin@company4.com`
- **Contraseña**: `1`

## 🔐 Funcionalidades Implementadas

### ✅ Autenticación Completa
- Login con credenciales
- Logout automático
- Refresh automático de tokens
- Manejo de errores de red y autenticación

### ✅ Interceptores HTTP
- Inyección automática de `Authorization: Bearer <token>`
- Refresh automático en caso de 401
- Pre-refresh cuando el token está próximo a expirar
- Prevención de múltiples refresh simultáneos

### ✅ Almacenamiento Seguro
- Tokens guardados en localStorage
- Cache en memoria para mejor rendimiento
- Limpieza automática en caso de errores

### ✅ Rutas Protegidas
- Redirección automática a login si no está autenticado
- Protección de rutas sensibles
- Preservación de la ruta de destino después del login

## 🧪 Pruebas Manuales

### Probar Login Exitoso

1. Ir a `http://localhost:3000`
2. Usar credenciales: `admin@company4.com` / `1`
3. Verificar redirección a `/home`
4. Ver información del usuario en la página principal

### Probar Tokens en Requests

1. Después del login, abrir DevTools → Network
2. Observar el **Smoke Test OData** en la página Home
3. Verificar que la request incluye `Authorization: Bearer ...`

### Probar Refresh de Token

#### Método 1: Esperar Expiración Natural
1. Hacer login
2. Esperar hasta que el token esté próximo a expirar (según `expirationDate`)
3. Hacer cualquier request (recargar página)
4. Verificar en Network que se hace refresh automático

#### Método 2: Simular Token Expirado
1. Hacer login
2. En DevTools → Application → Local Storage
3. Modificar `auth_expires_at` a un timestamp pasado
4. Recargar la página o hacer cualquier request
5. Verificar que se intenta refresh automático

### Probar Logout

1. Hacer login
2. Hacer clic en "Cerrar Sesión"
3. Verificar redirección a `/login`
4. Verificar que localStorage se limpia

### Probar Errores de Red

1. Desconectar internet
2. Intentar hacer login
3. Verificar mensaje de error apropiado

## 🔍 Inspeccionar el Estado

### Ver Tokens Guardados

```javascript
// En DevTools Console
localStorage.getItem('auth_token')
localStorage.getItem('auth_refresh_token')
localStorage.getItem('auth_expires_at')
localStorage.getItem('auth_user')
```

### Ver Configuración Actual

```javascript
// En DevTools Console
console.log('Base URL:', window.location.origin)
// La configuración se muestra en la página Home
```

## 🛠️ Configuración Avanzada

### Cambiar Endpoints de Autenticación

Editar `src/config/appConfig.ts`:

```typescript
export const authEndpoints = {
  login: `${baseUrl}/api/Authentication/Authenticate`,
  refresh: `${baseUrl}/api/Authentication/CustomRefresh` // Cambiar aquí
};
```

### Ajustar Timeouts

```typescript
export const appConfig = {
  // ...
  tokenRefreshThreshold: 120000, // 2 minutos antes de expirar
  httpTimeout: 60000, // 60 segundos para requests
};
```

### Personalizar Manejo de Errores

Editar `src/auth/authService.ts` función `handleAuthError()`.

## 🔧 Smoke Test OData

El sistema incluye un smoke test automático que:

1. **Se ejecuta al cargar la página Home**
2. **Hace una request a** `${baseUrl}/odata/$metadata`
3. **Verifica que se envía el header Authorization**
4. **Muestra el resultado en la UI**

### Interpretar Resultados

- ✅ **Verde**: Header Authorization enviado correctamente
- ❌ **Rojo**: Error de autenticación (401/403)
- ⚠️ **Amarillo**: Otros errores (red, servidor, etc.)

### Request de Ejemplo

```http
GET /odata/$metadata HTTP/1.1
Host: srvstealth.incadeacloud-poc.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5c...
Content-Type: application/json
```

## 📋 Checklist de Validación

- [ ] Puedo cambiar baseUrl desde `.env`
- [ ] Puedo iniciar sesión con credenciales válidas
- [ ] Veo el nombre completo del usuario en Home
- [ ] Cada request HTTP incluye `Authorization: Bearer ...`
- [ ] El token se refresca automáticamente antes de expirar
- [ ] Si el refresh falla, me redirige a login
- [ ] El smoke test OData muestra el header correcto
- [ ] Puedo hacer logout correctamente
- [ ] Las rutas están protegidas (no puedo acceder a /home sin login)

## 🚨 Solución de Problemas

### Error: "Cannot connect to server"
- Verificar que `VITE_API_BASE_URL` sea correcta
- Verificar conectividad de red
- Verificar que el servidor esté ejecutándose

### Error: "Invalid credentials"
- Verificar usuario y contraseña
- Verificar que el endpoint de login sea correcto

### Token no se refresca
- Verificar que el endpoint de refresh esté configurado
- Verificar que el refreshToken sea válido
- Ver logs en DevTools Console

### Redirección infinita
- Limpiar localStorage: `localStorage.clear()`
- Verificar configuración de rutas
- Verificar que no haya tokens corruptos

## 📚 Arquitectura

```
src/
├── auth/                 # Sistema de autenticación
│   ├── AuthContext.tsx   # Contexto React
│   ├── authService.ts    # Lógica de negocio
│   ├── tokenStorage.ts   # Almacenamiento
│   └── useAuth.ts        # Hooks personalizados
├── config/               # Configuración
│   └── appConfig.ts      # Config principal
├── http/                 # Cliente HTTP
│   └── httpClient.ts     # Axios + interceptores
├── pages/                # Páginas
│   ├── Login.tsx         # Página de login
│   └── Home.tsx          # Página principal
├── router/               # Enrutamiento
│   ├── index.tsx         # Router principal
│   └── ProtectedRoute.tsx # Rutas protegidas
└── types/                # Tipos TypeScript
    └── auth.ts           # Tipos de autenticación
```
