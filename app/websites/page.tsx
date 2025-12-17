import { Metadata } from 'next'
import WebsitesPageClient from './WebsitesPageClient'

export const metadata: Metadata = {
  title: 'Website Development MKB | Verhoog Conversie met 200%+',
  description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first, snelle laadtijd. Gratis website audit.',
  keywords: 'website laten maken MKB Nederland, webdesign Nederland, e-commerce ontwikkeling, SEO website, WordPress development Nederland',
}

export default function WebsitesPage() {
  return <WebsitesPageClient />
}
