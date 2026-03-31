# Movie Explorer App

Aplicación web para buscar y explorar películas y series utilizando la API de OMDb.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Bundler
- **Tailwind CSS v4** - Estilos
- **React Router v7** - Enrutamiento
- **TanStack Query** - Manejo de estado del servidor
- **Zustand** - Estado global (favoritos, historial)
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos

## Requisitos previos

- Node.js >= 18
- npm

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd movie-explorer-app
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

4. Editar el archivo `.env` y agregar tu API Key de OMDb:

```
VITE_OMDB_API_KEY=tu_api_key
```

> Puedes obtener una API Key gratuita en [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) seleccionando el plan FREE (1,000 peticiones/día).

5. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Scripts disponibles

| Comando           | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo                   |
| `npm run build`   | Compila TypeScript y genera el build de producción  |
| `npm run preview` | Previsualiza el build de producción                |
| `npm run lint`    | Ejecuta ESLint                                     |

## Estructura del proyecto

```
src/
  app/              # Configuración de la app (router, providers)
  features/         # Módulos por dominio
    favorites/      # Gestión de favoritos
    home/           # Página principal
    movie-detail/   # Detalle de película
    search/         # Búsqueda y filtros
  shared/           # Componentes, utilidades y tipos compartidos
    actions/        # Acciones de fetch (API)
    components/     # Componentes reutilizables (UI, layout, etc.)
    lib/            # Utilidades
    types/          # Tipos globales
```

## Funcionalidades

- Búsqueda de películas y series por título
- Filtros por tipo (película/serie) y año
- Paginación de resultados
- Vista de detalle con información completa
- Favoritos con persistencia en localStorage
- Historial de búsquedas recientes
- Dark/Light mode
- Skeleton loading
- Diseño responsive
