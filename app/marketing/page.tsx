import { Metadata } from 'next'
import MarketingPageClient from './MarketingPageClient'

export const metadata: Metadata = {
  title: 'Online Marketing Bureau voor het MKB | Google Ads, SEO & Social Media',
  description: 'Professioneel online marketing bureau voor het MKB. Van Google Ads en SEO tot Social Media en Marketing Automation. Wij bouwen een geïntegreerd groei-ecosysteem. ✓ Geen vaste contracten ✓ Meetbare resultaten',
  keywords: [
    'online marketing bureau',
    'marketing bureau MKB',
    'online marketing uitbesteden',
    'digital marketing',
    'SEO bureau',
    'Google Ads beheer',
    'social media marketing',
    'marketing automation',
    'online marketing strategie',
    'marketing partner'
  ],
  openGraph: {
    title: 'Online Marketing Bureau voor het MKB | Start Beheer',
    description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation in één geïntegreerde aanpak.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/marketing',
  },
  alternates: {
    canonical: '/marketing'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Marketing',
  description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Digital Marketing',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function MarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MarketingPageClient />
    </>
  )
}
