import { Skeleton } from "@/shared/components/ui/Skeleton";

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-card">
      <Skeleton className="aspect-2/3 w-full" />
      <div className="flex flex-col gap-2 p-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  );
};

export const MovieGridSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
};
