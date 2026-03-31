import { getMovieDetail } from "@/shared/actions/get-movie-detail";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetailQuery = (imdbId: string | undefined) => {
  return useQuery({
    queryKey: ["movies", "detail", imdbId],
    queryFn: () => getMovieDetail(imdbId!),
    enabled: !!imdbId,
    staleTime: 1000 * 60 * 5,
  });
};
