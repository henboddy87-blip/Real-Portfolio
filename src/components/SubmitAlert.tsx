import { useEffect } from 'react'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

export type AlertType = 'success' | 'error'

interface SubmitAlertProps {
  type: AlertType
  title: string
  message: string
  onClose: () => void
}

export function SubmitAlert({ type, title, message, onClose }: SubmitAlertProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="alert-title"
      aria-describedby="alert-desc"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl dark:border-forest-900 dark:bg-forest-950">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
            isSuccess
              ? 'bg-gold text-forest-950 shadow-lg shadow-gold/30'
              : 'bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400'
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 size={32} strokeWidth={2.5} />
          ) : (
            <AlertCircle size={32} strokeWidth={2.5} />
          )}
        </div>

        <h2
          id="alert-title"
          className="mt-6 text-center font-display text-2xl font-bold text-forest-950 dark:text-white"
        >
          {title}
        </h2>

        <p
          id="alert-desc"
          className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-300"
        >
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="btn-pill-action mt-8 w-full justify-center text-center"
        >
          <span>Continue</span>
          <span className="btn-arrow-badge">
            <X size={14} />
          </span>
        </button>
      </div>
    </div>
  )
}