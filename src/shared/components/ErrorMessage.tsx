import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  title?: string
  message: string
}

export const ErrorMessage = ({ title = 'Algo salió mal', message }: ErrorMessageProps) => {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center animate-fade-up">
      <AlertCircle className="size-10 text-destructive" />
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
}
