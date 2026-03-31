import { Badge } from '@/shared/components/ui/Badge'
import { Calendar, Clock } from 'lucide-react'

interface MovieHeaderProps {
  title: string
  year: string
  runtime: string
  rated: string
}

export const MovieHeader = ({ title, year, runtime, rated }: MovieHeaderProps) => {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-start gap-2">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        {year !== 'N/A' && (
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {year}
          </span>
        )}
        {runtime !== 'N/A' && (
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {runtime}
          </span>
        )}
        {rated !== 'N/A' && <Badge variant="outline">{rated}</Badge>}
      </div>
    </div>
  )
}
