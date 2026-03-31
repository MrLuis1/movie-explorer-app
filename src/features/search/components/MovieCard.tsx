import { useFavoritesStore } from "@/features/favorites/store/favorites-store";
import { PosterImage } from "@/shared/components/PosterImage";
import { Badge } from "@/shared/components/ui/Badge";
import { Button } from "@/shared/components/ui/Button";
import { cn } from "@/shared/lib/utils";
import type { MovieSearchResult } from "@/shared/types/movie";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: MovieSearchResult;
}

const typeLabels: Record<string, string> = {
  movie: "Película",
  series: "Serie",
  episode: "Episodio",
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(movie.imdbID);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-up"
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <PosterImage
          src={movie.Poster}
          alt={movie.Title}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-2 top-2 size-8 rounded-full bg-black/40 backdrop-blur-sm transition-all hover:bg-black/60",
            favorite ? "text-red-500" : "text-white",
          )}
          onClick={handleFavoriteClick}
        >
          <Heart className={cn("size-4", favorite && "fill-current")} />
        </Button>
        <Badge className="absolute left-2 top-2 bg-primary/90 text-[10px] uppercase backdrop-blur-sm">
          {typeLabels[movie.Type] || movie.Type}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-card-foreground">
          {movie.Title}
        </h3>
        <p className="text-xs text-muted-foreground">{movie.Year}</p>
      </div>
    </Link>
  );
};
