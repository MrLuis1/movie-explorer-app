# Movie Explorer App

Aplicacion web para buscar y explorar peliculas y series utilizando la API de OMDb.

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

## Instalacion

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

> Puedes obtener una API Key gratuita en [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) seleccionando el plan FREE (1,000 peticiones/dia).

5. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripcion |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila TypeScript y genera el build de produccion |
| `npm run preview` | Previsualiza el build de produccion |
| `npm run lint` | Ejecuta ESLint |

## Estructura del proyecto

```
src/
  app/              # Configuracion de la app (router, providers)
  features/         # Modulos por dominio
    favorites/      # Gestion de favoritos
    home/           # Pagina principal
    movie-detail/   # Detalle de pelicula
    search/         # Busqueda y filtros
  shared/           # Componentes, utilidades y tipos compartidos
    components/     # Componentes reutilizables (UI, layout, etc.)
    lib/            # Utilidades y cliente de API
    types/          # Tipos globales
```

## Funcionalidades

- Busqueda de peliculas y series por titulo
- Filtros por tipo (pelicula/serie) y ano
- Paginacion de resultados
- Vista de detalle con informacion completa
- Favoritos con persistencia en localStorage
- Historial de busquedas recientes
- Dark/Light mode
- Skeleton loading
- Diseno responsive
