import { Metadata } from 'next'
import MarketingPageClient from './MarketingPageClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Creëer een Geïntegreerd Groei-Ecosysteem',
  description: 'Van Google Ads en SEO tot Social Media en Automation. Wij bouwen geen losse campagnes, maar een geïntegreerd groei-ecosysteem dat uw bedrijf laat domineren.',
  keywords: 'digital marketing, online marketing, SEO, SEA, Google Ads, social media marketing, marketing automation, groei strategie',
}

export default function MarketingPage() {
  return <MarketingPageClient />
}
