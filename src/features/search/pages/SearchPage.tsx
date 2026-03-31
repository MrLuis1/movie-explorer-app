import { useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import { SearchBar } from '@/shared/components/SearchBar'
import { SearchFilters } from '@/features/search/components/SearchFilters'
import { MovieGrid } from '@/features/search/components/MovieGrid'
import { MovieGridSkeleton } from '@/features/search/components/MovieCardSkeleton'
import { Pagination } from '@/features/search/components/Pagination'
import { ErrorMessage } from '@/shared/components/ErrorMessage'
import { EmptyState } from '@/shared/components/EmptyState'
import { useSearchMoviesQuery } from '@/features/search/queries/search-movies-query'
import { RESULTS_PER_PAGE } from '@/shared/lib/constants'

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const page = Number(searchParams.get('page')) || 1
  const type = searchParams.get('type') || ''
  const year = searchParams.get('year') || ''

  const { data, isLoading, isFetching, isError, error } = useSearchMoviesQuery({
    query,
    page,
    type: type as '' | 'movie' | 'series',
    year,
  })

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery, page: '1', ...(type && { type }), ...(year && { year }) })
  }

  const handlePageChange = (newPage: number) => {
    setSearchParams({ q: query, page: String(newPage), ...(type && { type }), ...(year && { year }) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const totalResults = data ? Number(data.totalResults) : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 space-y-4">
        <SearchBar initialQuery={query} onSearch={handleSearch} />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SearchFilters />
          {data && (
            <p className="text-sm text-muted-foreground">
              {totalResults.toLocaleString()} resultado{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}
              {' · '}Página {page} de {Math.ceil(totalResults / RESULTS_PER_PAGE)}
            </p>
          )}
        </div>
      </div>

      {isFetching && <MovieGridSkeleton />}

      {isError && (
        <ErrorMessage
          message={error instanceof Error ? error.message : 'Error al buscar películas.'}
        />
      )}

      {!isFetching && data && data.Search && (
        <>
          <MovieGrid movies={data.Search} />
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {!query && !isLoading && (
        <EmptyState
          icon={<SearchX className="size-16" />}
          title="Comienza tu búsqueda"
          description="Escribe el nombre de una película o serie para comenzar."
        />
      )}
    </div>
  )
}
