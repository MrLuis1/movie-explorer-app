import { Badge } from '@/shared/components/ui/Badge'
import { Separator } from '@/shared/components/ui/Separator'
import { Award, Film } from 'lucide-react'

interface MovieInfoProps {
  genre: string
  plot: string
  director: string
  writer: string
  actors: string
  language: string
  country: string
  released: string
  awards: string
  boxOffice: string
  ratings: { Source: string; Value: string }[]
}

export const MovieInfo = ({
  genre,
  plot,
  director,
  writer,
  actors,
  language,
  country,
  released,
  awards,
  boxOffice,
  ratings,
}: MovieInfoProps) => {
  const details = [
    { label: 'Director', value: director },
    { label: 'Escritor', value: writer },
    { label: 'Actores', value: actors },
    { label: 'Idioma', value: language },
    { label: 'País', value: country },
    { label: 'Estreno', value: released },
  ].filter((item) => item.value && item.value !== 'N/A')

  return (
    <>
      {genre !== 'N/A' && (
        <div className="flex flex-wrap gap-2">
          {genre.split(', ').map((g) => (
            <Badge key={g} variant="secondary">{g}</Badge>
          ))}
        </div>
      )}

      {plot !== 'N/A' && (
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Sinopsis
          </h2>
          <p className="leading-relaxed text-foreground">{plot}</p>
        </div>
      )}

      <Separator />

      {details.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {details.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {awards !== 'N/A' && (
        <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
          <Award className="mt-0.5 size-5 shrink-0 text-yellow-500" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Premios
            </p>
            <p className="mt-1 text-sm text-foreground">{awards}</p>
          </div>
        </div>
      )}

      {boxOffice && boxOffice !== 'N/A' && (
        <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
          <Film className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Taquilla
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{boxOffice}</p>
          </div>
        </div>
      )}

      {ratings && ratings.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Otras calificaciones
          </h2>
          <div className="flex flex-wrap gap-3">
            {ratings.map((r) => (
              <div key={r.Source} className="rounded-lg border bg-card px-4 py-3">
                <p className="text-lg font-bold text-foreground">{r.Value}</p>
                <p className="text-xs text-muted-foreground">{r.Source}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
