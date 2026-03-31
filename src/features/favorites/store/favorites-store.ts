import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { MovieSearchResult } from '@/shared/types/movie'

interface FavoritesState {
  favorites: MovieSearchResult[]
  addFavorite: (movie: MovieSearchResult) => void
  removeFavorite: (imdbID: string) => void
  isFavorite: (imdbID: string) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) =>
        set((state) => {
          if (state.favorites.some((f) => f.imdbID === movie.imdbID)) return state
          return { favorites: [movie, ...state.favorites] }
        }),
      removeFavorite: (imdbID) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f.imdbID !== imdbID),
        })),
      isFavorite: (imdbID) => get().favorites.some((f) => f.imdbID === imdbID),
    }),
    { name: 'favorites' }
  )
)
