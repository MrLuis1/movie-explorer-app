import { cn } from '@/shared/lib/utils'
import { Star } from 'lucide-react'

interface MovieRatingProps {
  imdbRating: string
  imdbVotes: string
}

export const MovieRating = ({ imdbRating, imdbVotes }: MovieRatingProps) => {
  if (imdbRating === 'N/A') return null

  const rating = parseFloat(imdbRating)
  const ratingColor =
    rating >= 7 ? 'text-green-500' : rating >= 5 ? 'text-yellow-500' : 'text-red-500'

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 rounded-xl bg-card p-4 shadow-sm border">
        <Star className={cn('size-8 fill-current', ratingColor)} />
        <div>
          <p className={cn('text-2xl font-bold', ratingColor)}>{imdbRating}</p>
          <p className="text-xs text-muted-foreground">/ 10 IMDb</p>
        </div>
      </div>
      {imdbVotes !== 'N/A' && (
        <p className="text-sm text-muted-foreground">
          {Number(imdbVotes.replace(/,/g, '')).toLocaleString()} votos
        </p>
      )}
    </div>
  )
}
