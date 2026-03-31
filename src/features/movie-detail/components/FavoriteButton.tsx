import { useFavoritesStore } from '@/features/favorites/store/favorites-store'
import { Button } from '@/shared/components/ui/Button'
import { cn } from '@/shared/lib/utils'
import type { MovieDetail } from '@/shared/types/movie'
import { Heart } from 'lucide-react'

interface FavoriteButtonProps {
  movie: Pick<MovieDetail, 'imdbID' | 'Title' | 'Year' | 'Type' | 'Poster'>
}

export const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
  const favorite = isFavorite(movie.imdbID)

  const handleClick = () => {
    if (favorite) {
      removeFavorite(movie.imdbID)
    } else {
      addFavorite({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Type: movie.Type as 'movie' | 'series' | 'episode',
        Poster: movie.Poster,
      })
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant={favorite ? 'destructive' : 'default'}
      className="transition-all"
    >
      <Heart className={cn('size-4', favorite && 'fill-current')} />
      {favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    </Button>
  )
}
