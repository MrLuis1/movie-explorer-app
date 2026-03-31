import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/shared/components/ui/Button'
import { RESULTS_PER_PAGE } from '@/shared/lib/constants'

interface PaginationProps {
  currentPage: number
  totalResults: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalResults, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE)

  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const pages: number[] = []
    const start = Math.max(1, currentPage - 2)
    const end = Math.min(totalPages, currentPage + 2)
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-1 py-8">
      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4" />
      </Button>

      {getVisiblePages()[0] > 1 && (
        <>
          <Button variant="outline" size="sm" onClick={() => onPageChange(1)}>1</Button>
          {getVisiblePages()[0] > 2 && (
            <span className="px-1 text-sm text-muted-foreground">...</span>
          )}
        </>
      )}

      {getVisiblePages().map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'outline'}
          size="sm"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {getVisiblePages()[getVisiblePages().length - 1] < totalPages && (
        <>
          {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
            <span className="px-1 text-sm text-muted-foreground">...</span>
          )}
          <Button variant="outline" size="sm" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}
