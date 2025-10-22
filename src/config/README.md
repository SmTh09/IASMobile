# Configuración de la Aplicación

Este directorio contiene la configuración principal de la aplicación.

## Cambiar el Base URL

Para cambiar la URL base de la API, tienes varias opciones:

### Opción 1: Variables de Entorno (Recomendado)

1. Copia el archivo `.env.example` a `.env` en la raíz del proyecto:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y configura la variable:
   ```env
   VITE_API_BASE_URL=https://tu-servidor.com/api
   ```

3. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Opción 2: Modificar Directamente el Código

Si no puedes usar variables de entorno, puedes modificar directamente el archivo `src/config/appConfig.ts`:

```typescript
// Cambiar esta línea:
const DEFAULT_BASE_URL = 'https://srvstealth.incadeacloud-poc.com/idamsWebApi';

// Por tu URL:
const DEFAULT_BASE_URL = 'https://tu-servidor.com/api';
```

## Configuración Actual

La configuración actual incluye:

- **Base URL**: Configurable vía `VITE_API_BASE_URL` o valor por defecto
- **Endpoints de Autenticación**: Se generan automáticamente basados en el base URL
- **Timeouts**: 30 segundos para requests HTTP
- **Umbral de Refresh**: 60 segundos antes de que expire el token

## Estructura de Endpoints

Los endpoints se construyen automáticamente:

- **Login**: `${baseUrl}/api/Authentication/Authenticate`
- **Refresh**: `${baseUrl}/api/Authentication/Refresh`
- **OData**: `${baseUrl}/odata/...`

## Ejemplos de Configuración

### Desarrollo Local
```env
VITE_API_BASE_URL=http://localhost:5000
```

### Staging
```env
VITE_API_BASE_URL=https://staging-api.miempresa.com
```

### Producción
```env
VITE_API_BASE_URL=https://api.miempresa.com
```
