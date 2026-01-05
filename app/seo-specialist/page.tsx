import { Metadata } from 'next'
import SEOServicesClientPage from './SEOServicesClientPage'

export const metadata: Metadata = {
  title: 'SEO Specialist | Hoger in Google & Meer Organisch Verkeer | Start Beheer',
  description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
  keywords: [
    'SEO specialist',
    'SEO uitbesteden',
    'hoger in Google',
    'zoekmachine optimalisatie',
    'linkbuilding',
    'technische SEO',
    'SEO bureau',
    'SEO MKB',
    'organisch verkeer',
    'lokale SEO',
    'SEO audit',
    'keyword onderzoek',
    'content optimalisatie',
    'Google rankings verbeteren'
  ],
  openGraph: {
    title: 'SEO Specialist | Hoger in Google & Meer Organisch Verkeer | Start Beheer',
    description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/seo-specialist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Specialist | Hoger in Google & Meer Organisch Verkeer | Start Beheer',
    description: 'Bereik topposities in Google met onze SEO-diensten. Technische, inhoudelijke en autoriteitsoptimalisatie.',
  },
  alternates: {
    canonical: '/seo-specialist'
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
  name: 'SEO Specialist',
  description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Search Engine Optimization',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technische SEO Audit',
          description: 'Grondige analyse van technische SEO-factoren zoals snelheid, mobiel en indexering'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Keyword Onderzoek & Strategie',
          description: 'Uitgebreid zoekwoordonderzoek om de beste kansen voor organische groei te identificeren'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Optimalisatie',
          description: 'Optimalisatie van bestaande en nieuwe content voor betere rankings en relevantie'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Linkbuilding & Autoriteit',
          description: 'Kwalitatieve linkbuilding strategie om de domeinautoriteit te versterken'
        }
      }
    ]
  }
}

export default function SEOServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SEOServicesClientPage />
    </>
  )
}
