import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-gradient mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Pagina niet gevonden</h1>
        <p className="text-muted-foreground mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Naar homepagina
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  )
}
