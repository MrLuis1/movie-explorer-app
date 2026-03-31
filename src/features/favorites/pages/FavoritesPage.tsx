import { Heart, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/components/ui/Button'
import { MovieGrid } from '@/features/search/components/MovieGrid'
import { EmptyState } from '@/shared/components/EmptyState'
import { useFavoritesStore } from '@/features/favorites/store/favorites-store'

export const FavoritesPage = () => {
  const favorites = useFavoritesStore((s) => s.favorites)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Favoritos</h1>
            <p className="text-sm text-muted-foreground">
              {favorites.length} película{favorites.length !== 1 ? 's' : ''} guardada{favorites.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <EmptyState
          icon={<Heart className="size-16" />}
          title="Sin favoritos"
          description="Aún no has guardado ninguna película. Busca y marca tus favoritas."
          action={
            <Button asChild>
              <Link to="/">Explorar películas</Link>
            </Button>
          }
        />
      )}
    </div>
  )
}
