import { Link, useLocation } from 'react-router-dom'
import { Film, Heart, Moon, Sun } from 'lucide-react'
import { Button } from '@/shared/components/ui/Button'
import { useThemeStore } from '@/shared/store/theme-store'
import { useFavoritesStore } from '@/features/favorites/store/favorites-store'
import { Badge } from '@/shared/components/ui/Badge'

export const Header = () => {
  const { theme, toggleTheme } = useThemeStore()
  const favoritesCount = useFavoritesStore((s) => s.favorites.length)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-primary">
          <Film className="size-6 text-primary" />
          <span className="hidden sm:inline">MovieExplorer</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant={location.pathname === '/favorites' ? 'secondary' : 'ghost'}
            size="sm"
            asChild
          >
            <Link to="/favorites" className="relative">
              <Heart className="size-4" />
              <span className="hidden sm:inline">Favoritos</span>
              {favoritesCount > 0 && (
                <Badge className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full p-0 text-[10px]">
                  {favoritesCount}
                </Badge>
              )}
            </Link>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
