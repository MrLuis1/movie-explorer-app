import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import { cn } from '@/shared/lib/utils'
import { useSearchParams } from 'react-router-dom'

const typeOptions = [
  { value: '', label: 'Todos' },
  { value: 'movie', label: 'Películas' },
  { value: 'series', label: 'Series' },
]

export const SearchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type') || ''
  const year = searchParams.get('year') || ''
  const query = searchParams.get('q') || ''

  const updateParams = (updates: Record<string, string>) => {
    const next: Record<string, string> = { q: query, page: '1' }
    const newType = 'type' in updates ? updates.type : type
    const newYear = 'year' in updates ? updates.year : year
    if (newType) next.type = newType
    if (newYear) next.year = newYear
    if (query) setSearchParams(next)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex gap-1 rounded-lg border bg-muted/50 p-1">
        {typeOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            size="sm"
            onClick={() => updateParams({ type: option.value })}
            className={cn(
              'h-7 rounded-md px-3 text-xs transition-all',
              type === option.value && 'bg-background shadow-sm'
            )}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <Input
        type="number"
        name="year"
        placeholder="Año"
        defaultValue={year}
        onChange={(e) => updateParams({ year: e.target.value })}
        className="h-9 w-24 rounded-lg text-sm"
        min="1900"
        max={new Date().getFullYear()}
      />
    </div>
  )
}
