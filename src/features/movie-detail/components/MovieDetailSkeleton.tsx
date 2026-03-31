import { Skeleton } from '@/shared/components/ui/Skeleton'

export const MovieDetailSkeleton = () => {
  return (
    <div>
      <div className="h-48 bg-linear-to-b from-primary/10 to-background sm:h-64" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-32 flex flex-col gap-8 sm:-mt-40 sm:flex-row">
          <Skeleton className="aspect-2/3 w-full shrink-0 rounded-xl sm:w-72" />
          <div className="flex-1 space-y-4 pt-8">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
