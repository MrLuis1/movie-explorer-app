import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchHistoryState {
  history: string[]
  addSearch: (query: string) => void
  removeSearch: (query: string) => void
  clearHistory: () => void
}

const MAX_HISTORY = 10

export const useSearchHistoryStore = create<SearchHistoryState>()(
  persist(
    (set) => ({
      history: [],
      addSearch: (query) =>
        set((state) => {
          const filtered = state.history.filter((q) => q !== query)
          return { history: [query, ...filtered].slice(0, MAX_HISTORY) }
        }),
      removeSearch: (query) =>
        set((state) => ({
          history: state.history.filter((q) => q !== query),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    { name: 'search-history' }
  )
)
