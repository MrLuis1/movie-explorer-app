import { useMovieDetailQuery } from '@/features/movie-detail/queries/movie-detail-query'
import { ErrorMessage } from '@/shared/components/ErrorMessage'
import { PosterImage } from '@/shared/components/PosterImage'
import { Button } from '@/shared/components/ui/Button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { FavoriteButton } from '../components/FavoriteButton'
import { MovieDetailSkeleton } from '../components/MovieDetailSkeleton'
import { MovieHeader } from '../components/MovieHeader'
import { MovieInfo } from '../components/MovieInfo'
import { MovieRating } from '../components/MovieRating'

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: movie, isLoading, isError, error } = useMovieDetailQuery(id)

  if (isLoading) return <MovieDetailSkeleton />

  if (isError) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="size-4" />
          Volver
        </Button>
        <ErrorMessage
          message={error instanceof Error ? error.message : 'Error al cargar los detalles.'}
        />
      </div>
    )
  }

  if (!movie) return null

  return (
    <div className="animate-fade-in">
      <div className="h-48 bg-linear-to-b from-primary/10 to-background sm:h-64" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-32 sm:-mt-40">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 text-foreground">
            <ArrowLeft className="size-4" />
            Volver
          </Button>

          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="w-full shrink-0 sm:w-72">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <PosterImage src={movie.Poster} alt={movie.Title} className="aspect-2/3 w-full" />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <MovieHeader
                title={movie.Title}
                year={movie.Year}
                runtime={movie.Runtime}
                rated={movie.Rated}
              />
              <MovieRating imdbRating={movie.imdbRating} imdbVotes={movie.imdbVotes} />
              <FavoriteButton movie={movie} />
              <MovieInfo
                genre={movie.Genre}
                plot={movie.Plot}
                director={movie.Director}
                writer={movie.Writer}
                actors={movie.Actors}
                language={movie.Language}
                country={movie.Country}
                released={movie.Released}
                awards={movie.Awards}
                boxOffice={movie.BoxOffice}
                ratings={movie.Ratings}
              />
            </div>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </div>
  )
}
