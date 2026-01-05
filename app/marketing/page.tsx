import { Metadata } from 'next'
import MarketingPageClient from './MarketingPageClient'

export const metadata: Metadata = {
  title: 'Online Marketing Bureau voor het MKB | Google Ads, SEO & Social Media',
  description: 'Professioneel online marketing bureau voor het MKB. Van Google Ads en SEO tot Social Media en Marketing Automation. Wij bouwen een geintegreerd groei-ecosysteem. Geen vaste contracten. Meetbare resultaten.',
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
    description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation in een geintegreerde aanpak.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Marketing Bureau voor het MKB | Start Beheer',
    description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation.',
  },
  alternates: {
    canonical: '/marketing'
  },
  robots: {
    index: true,
    follow: true,
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
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Online Marketing Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Ads Beheer',
          description: 'Professioneel Google Ads beheer met continue optimalisatie voor maximale ROI'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimalisatie',
          description: 'Zoekmachine optimalisatie voor duurzame organische groei en hogere rankings'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing',
          description: 'Strategische social media campagnes op LinkedIn, Facebook, Instagram en meer'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation',
          description: 'Geautomatiseerde marketing workflows voor leadnurturing en conversie optimalisatie'
        }
      }
    ]
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
