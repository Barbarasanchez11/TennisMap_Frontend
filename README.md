# TennisMap Frontend

Aplicación web para visualizar torneos de tenis en un mapa interactivo.

## 🚀 Características

- **Mapa interactivo** con Google Maps
- **Marcadores de torneos** con colores según su estado
- **Información detallada** de cada torneo
- **Diseño responsive** mobile-first
- **Navegación intuitiva** entre secciones

## 🛠️ Tecnologías

- React 19
- Vite
- Google Maps JavaScript API
- React Router DOM
- CSS3 con media queries

## 📋 Requisitos previos

- Node.js 20.19.0 o superior
- npm o yarn
- API Key de Google Maps

## ⚙️ Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Google Maps API

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Maps JavaScript API**
4. Crea credenciales (API Key)
5. Copia tu API Key

### 3. Crear archivo de variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_de_google_maps_aqui
```

### 4. Ejecutar la aplicación

```bash
npm run dev
```

## 🎨 Estructura del proyecto

```
src/
├── components/
│   ├── Header/
│   ├── Map/          # Componente principal del mapa
│   ├── Navbar/
│   └── PlayerCard/
├── data/
│   └── tournamentsData.js  # Datos de torneos
├── pages/
│   ├── Home/         # Página principal con mapa
│   └── Players/
└── styles/
```

## 🗺️ Funcionalidades del mapa

- **Marcadores de colores**:
  - 🟢 Verde: Torneos en curso
  - 🔴 Rojo: Torneos finalizados
  - 🔵 Azul: Torneos próximos
- **Popups informativos** con detalles del torneo
- **Navegación fluida** con controles de zoom
- **Vista responsive** para todos los dispositivos

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints** optimizados para diferentes dispositivos
- **Adaptación automática** del header y controles

## 🔧 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run lint` - Verificar código
- `npm run format` - Formatear código

## 📄 Licencia

Este proyecto es privado y está destinado para uso educativo.
