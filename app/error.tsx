'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[route-error]', error)
    }
  }, [error])

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Er ging iets mis</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Er is een onverwachte fout opgetreden. Probeer het opnieuw of ga terug naar de homepagina.
        </p>
        {error.digest && (
          <p className="text-xs text-slate-400 font-mono mb-6">
            Foutreferentie: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-violet text-white font-semibold hover:brightness-110 transition-all"
          >
            Probeer opnieuw
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
          >
            Naar homepagina
          </Link>
        </div>
      </div>
    </section>
  )
}
