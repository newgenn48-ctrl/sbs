import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden (404) | Start Beheer Solutions',
  description: 'De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepagina of neem contact op.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-gradient mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Pagina niet gevonden</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          De pagina die u zoekt bestaat niet of is verplaatst. Wij helpen u graag verder.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-violet text-white font-semibold hover:brightness-110 transition-all"
          >
            Naar homepagina
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
          >
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  )
}
