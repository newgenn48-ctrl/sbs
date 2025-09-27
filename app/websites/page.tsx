import { Metadata } from 'next'
import WebsitesPageClient from './WebsitesPageClient'

export const metadata: Metadata = {
  title: 'Website Development MKB | Verhoog Conversie met 200%+',
  description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first, snelle laadtijd. Gratis website audit ✅ 30 dagen garantie ✅ Vanaf €1.199',
  keywords: 'website laten maken MKB Nederland, webdesign Nederland, e-commerce ontwikkeling, SEO website, WordPress development Nederland, website optimalisatie landelijk',
}

export default function WebsitesPage() {
  return <WebsitesPageClient />
}
