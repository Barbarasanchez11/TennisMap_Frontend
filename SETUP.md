# 🗺️ Configuración de Google Maps API

## 📋 Pasos para obtener tu API Key

### 1. Ir a Google Cloud Console
- Ve a [https://console.cloud.google.com/](https://console.cloud.google.com/)
- Inicia sesión con tu cuenta de Google

### 2. Crear o seleccionar proyecto
- Crea un nuevo proyecto o selecciona uno existente
- Dale un nombre descriptivo (ej: "TennisMap Project")

### 3. Habilitar APIs necesarias
- En el menú lateral, ve a **"APIs y servicios" > "Biblioteca"**
- Busca y habilita estas APIs:
  - **Maps JavaScript API**
  - **Places API** (opcional, para funcionalidades futuras)

### 4. Crear credenciales
- Ve a **"APIs y servicios" > "Credenciales"**
- Haz clic en **"Crear credenciales" > "Clave de API"**
- Copia la API key generada

### 5. Configurar restricciones (recomendado)
- Haz clic en la API key creada
- En **"Restricciones de aplicación"** selecciona **"Sitios web HTTP"**
- Agrega tu dominio (ej: `localhost:5173` para desarrollo)

### 6. Crear archivo .env
En la raíz del proyecto, crea un archivo `.env`:

```env
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

### 7. Reiniciar el servidor
```bash
npm run dev
```

## ⚠️ Importante
- **Nunca subas** el archivo `.env` al repositorio
- **Restringe tu API key** a solo los dominios necesarios
- **Monitorea el uso** en Google Cloud Console

## 🔍 Verificar que funciona
- El mapa debería cargar sin errores en consola
- Los marcadores de torneos deberían aparecer
- Los popups deberían funcionar al hacer clic

## 🆘 Si hay problemas
1. Verifica que la API key esté correctamente copiada
2. Asegúrate de que las APIs estén habilitadas
3. Revisa las restricciones de la API key
4. Verifica la consola del navegador para errores específicos 