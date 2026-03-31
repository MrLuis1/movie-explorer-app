import { Link } from 'react-router-dom'
import { FileQuestion } from 'lucide-react'
import { Button } from '@/shared/components/ui/Button'
import { EmptyState } from '@/shared/components/EmptyState'

export const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <EmptyState
        icon={<FileQuestion className="size-16" />}
        title="Página no encontrada"
        description="La página que buscas no existe o fue movida."
        action={
          <Button asChild>
            <Link to="/">Ir al inicio</Link>
          </Button>
        }
      />
    </div>
  )
}
