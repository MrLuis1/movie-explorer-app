import type { MovieSearchResult } from '@/shared/types/movie'
import { MovieCard } from './MovieCard'

interface MovieGridProps {
  movies: MovieSearchResult[]
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}
