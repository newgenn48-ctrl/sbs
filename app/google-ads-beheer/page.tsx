import { Metadata } from 'next'
import GoogleAdsClientPage from './GoogleAdsClientPage'

export const metadata: Metadata = {
  title: 'Google Ads Beheer | Maximaal Rendement uit uw Advertentiebudget | Start Beheer',
  description: 'Professioneel Google Ads beheer door Start Beheer. Krijg meer gekwalificeerde leads en klanten via gerichte advertentiecampagnes. Data-gedreven en resultaatgericht.',
  keywords: [
    'Google Ads beheer',
    'SEA uitbesteden',
    'Google Ads specialist',
    'advertentiebeheer',
    'online adverteren',
    'MKB adverteren',
    'Google advertenties',
    'PPC beheer',
    'zoekmachine adverteren',
    'Google Ads bureau'
  ],
  openGraph: {
    title: 'Google Ads Beheer | Maximaal Rendement uit uw Advertentiebudget',
    description: 'Professioneel Google Ads beheer. Krijg meer gekwalificeerde leads via gerichte advertentiecampagnes.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/google-ads-beheer',
  },
  alternates: {
    canonical: '/google-ads-beheer'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Beheer',
  description: 'Professioneel Google Ads beheer. Krijg meer gekwalificeerde leads en klanten via gerichte advertentiecampagnes.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Google Ads Management',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GoogleAdsClientPage />
    </>
  )
}
