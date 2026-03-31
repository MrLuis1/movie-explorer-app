import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
}

export const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center animate-fade-up">
      <div className="text-muted-foreground">{icon}</div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {action}
    </div>
  )
}
