import { type ReactNode, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useThemeStore } from '@/shared/store/theme-store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function ThemeInitializer({ children }: { children: ReactNode }) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <>{children}</>
}

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeInitializer>
        {children}
      </ThemeInitializer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
