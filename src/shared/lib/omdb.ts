import { OMDB_API_URL, OMDB_API_KEY } from '@/shared/lib/constants'
import type { MovieSearchResponse, MovieDetail, SearchParams } from '@/shared/types/movie'

class OmdbApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'OmdbApiError'
  }
}

export async function searchMovies(params: SearchParams): Promise<MovieSearchResponse> {
  const url = new URL(OMDB_API_URL)
  url.searchParams.set('apikey', OMDB_API_KEY)
  url.searchParams.set('s', params.query)
  url.searchParams.set('page', String(params.page))
  if (params.type) url.searchParams.set('type', params.type)
  if (params.year) url.searchParams.set('y', params.year)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new OmdbApiError('Error al conectar con el servicio. Intenta de nuevo más tarde.')
  }

  const data: MovieSearchResponse = await response.json()

  if (data.Response === 'False') {
    throw new OmdbApiError(data.Error ?? 'No se encontraron resultados.')
  }

  return data
}

export async function getMovieDetail(imdbId: string): Promise<MovieDetail> {
  const url = new URL(OMDB_API_URL)
  url.searchParams.set('apikey', OMDB_API_KEY)
  url.searchParams.set('i', imdbId)
  url.searchParams.set('plot', 'full')

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new OmdbApiError('Error al obtener los detalles de la película.')
  }

  const data: MovieDetail = await response.json()

  if (data.Response === 'False') {
    throw new OmdbApiError(data.Error ?? 'No se encontró la película.')
  }

  return data
}
