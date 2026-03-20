'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-display text-4xl tracking-tight text-mist-950 dark:text-white">Something went wrong</h1>
      <p className="max-w-md text-base text-mist-600 dark:text-mist-400">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-rose-600"
      >
        Try again
      </button>
    </div>
  )
}
