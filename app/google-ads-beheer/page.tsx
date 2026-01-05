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
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/google-ads-beheer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Beheer | Start Beheer',
    description: 'Professioneel Google Ads beheer. Meer leads en klanten via gerichte advertentiecampagnes.',
  },
  alternates: {
    canonical: '/google-ads-beheer'
  },
  robots: {
    index: true,
    follow: true,
  }
}

// JSON-LD Structured Data voor SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Beheer',
  description: 'Professioneel Google Ads beheer voor MKB bedrijven. Data-gedreven campagnes, conversie optimalisatie en maximaal rendement uit uw advertentiebudget.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Google Ads Management',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Google Ads Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Ads Campagne Setup',
          description: 'Professionele opzet van nieuwe Google Ads campagnes met keyword research en advertentieteksten'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campagne Optimalisatie',
          description: 'Continue optimalisatie van bestaande campagnes voor hogere ROI en lagere kosten per conversie'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Conversie Tracking',
          description: 'Implementatie van conversie tracking en analytics voor meetbare resultaten'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Remarketing Campagnes',
          description: 'Gerichte remarketing om bezoekers terug te halen en conversies te verhogen'
        }
      }
    ]
  }
}

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GoogleAdsClientPage />
    </>
  )
}
