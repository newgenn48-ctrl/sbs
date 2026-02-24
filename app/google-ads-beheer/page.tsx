import { Metadata } from 'next'
import GoogleAdsClientPage from './GoogleAdsClientPage'

export const metadata: Metadata = {
  title: 'Google Ads Beheer | Maximaal Rendement | Start Beheer',
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
    title: 'Google Ads Beheer | Maximaal Rendement | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoeveel moet ik uitgeven aan Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Dit hangt af van uw markt en concurrentie. We adviseren minimaal €500-1000 per maand aan advertentiebudget voor lokale bedrijven. Landelijk kan €2000+ nodig zijn. We beginnen klein en schalen op basis van resultaat.' }},
    { '@type': 'Question', name: 'Hoe snel zie ik resultaat?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads levert direct verkeer. De eerste leads komen vaak binnen een week. Volledige optimalisatie duurt 2-3 maanden. We monitoren dagelijks en sturen bij waar nodig.' }},
    { '@type': 'Question', name: 'Wat kost Google Ads beheer?', acceptedAnswer: { '@type': 'Answer', text: 'Onze beheerkosten zijn afhankelijk van de omvang van uw campagnes. We rekenen een vast bedrag per maand zodat u precies weet waar u aan toe bent. Vraag een offerte voor exacte prijzen.' }},
    { '@type': 'Question', name: 'Kan ik mijn eigen Google Ads account houden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, u blijft altijd eigenaar van uw account en data. We werken in uw account en u heeft volledige toegang. Bij stopzetting behoudt u alle historische data en campagnes.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Online Marketing', item: 'https://startbeheer.nl/marketing' },
    { '@type': 'ListItem', position: 3, name: 'Google Ads Beheer', item: 'https://startbeheer.nl/google-ads-beheer' },
  ],
}

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GoogleAdsClientPage />
    </>
  )
}
