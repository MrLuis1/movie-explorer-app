import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/shared/components/layout/Layout'
import { HomePage } from '@/features/home/pages/HomePage'
import { SearchPage } from '@/features/search/pages/SearchPage'
import { MovieDetailPage } from '@/features/movie-detail/pages/MovieDetailPage'
import { FavoritesPage } from '@/features/favorites/pages/FavoritesPage'
import { NotFoundPage } from '@/shared/components/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/movie/:id', element: <MovieDetailPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
