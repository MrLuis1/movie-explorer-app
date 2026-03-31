import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

interface PosterImageProps {
  src: string
  alt: string
  className?: string
}

export const PosterImage = ({ src, alt, className }: PosterImageProps) => {
  const [error, setError] = useState(false)
  const isInvalid = !src || src === 'N/A' || error

  if (isInvalid) {
    return (
      <div className={cn('flex items-center justify-center bg-muted', className)}>
        <ImageOff className="size-10 text-muted-foreground" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('object-cover', className)}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
