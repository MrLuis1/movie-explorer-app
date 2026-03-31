import { OMDB_API_URL, OMDB_API_KEY } from '@/shared/lib/constants'
import type { MovieDetail } from '@/shared/types/movie'

export async function getMovieDetail(imdbId: string): Promise<MovieDetail> {
  const url = new URL(OMDB_API_URL)
  url.searchParams.set('apikey', OMDB_API_KEY)
  url.searchParams.set('i', imdbId)
  url.searchParams.set('plot', 'full')

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error('Error al obtener los detalles de la pelicula.')
  }

  const data: MovieDetail = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'No se encontro la pelicula.')
  }

  return data
}
