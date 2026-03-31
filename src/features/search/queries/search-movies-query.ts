import { searchMovies } from "@/shared/actions/search-movies";
import type { SearchParams } from "@/shared/types/movie";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useSearchMoviesQuery = ({
  query,
  page,
  type,
  year,
}: SearchParams) => {
  return useQuery({
    queryKey: ["movies", "search", { query, page, type, year }],
    queryFn: () => searchMovies({ query, page, type, year }),
    enabled: query.trim().length > 0,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};
