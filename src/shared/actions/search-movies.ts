import { OMDB_API_URL, OMDB_API_KEY } from '@/shared/lib/constants'
import type { MovieSearchResponse, SearchParams } from '@/shared/types/movie'

export async function searchMovies({ query, page, type, year }: SearchParams): Promise<MovieSearchResponse> {
  const url = new URL(OMDB_API_URL)
  url.searchParams.set('apikey', OMDB_API_KEY)
  url.searchParams.set('s', query)
  url.searchParams.set('page', String(page))
  if (type) url.searchParams.set('type', type)
  if (year) url.searchParams.set('y', year)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error('Error al conectar con el servicio. Intenta de nuevo mas tarde.')
  }

  const data: MovieSearchResponse = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'No se encontraron resultados.')
  }

  return data
}
