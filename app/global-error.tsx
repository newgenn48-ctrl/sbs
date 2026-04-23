'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[global-error]', error)
    }
  }, [error])

  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#ffffff', color: '#0f172a' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '9999px',
                background: '#fee2e2',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontSize: '28px' }} aria-hidden="true">⚠</span>
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 12px' }}>Er ging iets grondig mis</h1>
            <p style={{ color: '#475569', margin: '0 0 24px', lineHeight: 1.6 }}>
              De applicatie kon niet geladen worden. Probeer de pagina te vernieuwen of neem contact op.
            </p>
            {error.digest && (
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 24px', fontFamily: 'monospace' }}>
                Foutreferentie: {error.digest}
              </p>
            )}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Opnieuw proberen
              </button>
              <a
                href="/"
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Naar homepagina
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
