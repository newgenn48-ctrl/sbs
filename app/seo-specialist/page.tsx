import { Metadata } from 'next'
import SEOServicesClientPage from './SEOServicesClientPage'

export const metadata: Metadata = {
  title: 'SEO Specialist | Hoger in Google | Start Beheer',
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
    title: 'SEO Specialist | Hoger in Google | Start Beheer',
    description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/seo-specialist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Specialist | Hoger in Google | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang duurt het voordat ik hoger in Google sta?', acceptedAnswer: { '@type': 'Answer', text: 'SEO is een langetermijninvestering. Eerste resultaten zien we vaak na 3-4 maanden. Stabiele topposities kosten 6-12 maanden. We zijn eerlijk over deze tijdlijnen.' }},
    { '@type': 'Question', name: 'Garanderen jullie een #1 positie?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, niemand kan dat garanderen. Bureaus die dit beloven zijn niet eerlijk. Wij werken data-gedreven en laten zien wat realistisch haalbaar is voor uw zoekwoorden en markt.' }},
    { '@type': 'Question', name: 'Wat kost SEO per maand?', acceptedAnswer: { '@type': 'Answer', text: 'Effectieve SEO begint vanaf €500 per maand voor lokale bedrijven. Voor landelijke concurrentie is €1000-2500 per maand realistischer. We stemmen altijd af op uw budget en doelen.' }},
    { '@type': 'Question', name: 'Doen jullie ook linkbuilding?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, maar alleen kwalitatieve linkbuilding. Geen spammy links die uw site kunnen schaden. We focussen op relevante, natuurlijke backlinks van betrouwbare websites in uw branche.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Online Marketing', item: 'https://startbeheer.nl/marketing' },
    { '@type': 'ListItem', position: 3, name: 'SEO Specialist', item: 'https://startbeheer.nl/seo-specialist' },
  ],
}

export default function SEOServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOServicesClientPage />
    </>
  )
}
