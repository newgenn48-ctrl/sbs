import { Metadata } from 'next'
import AnalyticsPageClient from './AnalyticsPageClient'

export const metadata: Metadata = {
  title: 'AI Analytics | Voorspellende Analyses & Inzichten | Start Beheer',
  description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence. Transformeer data in concrete acties voor betere besluitvorming.',
  keywords: [
    'AI analytics',
    'voorspellende analyse',
    'business intelligence',
    'data analyse',
    'klantinzichten',
    'predictive analytics',
    'data visualisatie',
    'KPI dashboard',
    'trend analyse',
    'churn voorspelling',
    'data driven besluitvorming',
    'AI rapportages',
    'machine learning analytics',
    'realtime data inzichten'
  ],
  openGraph: {
    title: 'AI Analytics | Voorspellende Analyses & Inzichten | Start Beheer',
    description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence. Transformeer data in concrete acties.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/ai-analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Analytics | Voorspellende Analyses & Inzichten | Start Beheer',
    description: 'AI-gedreven analytics voor MKB. Voorspellende analyses en business intelligence voor betere besluitvorming.',
  },
  alternates: {
    canonical: '/ai-analytics'
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
  name: 'AI Analytics',
  description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence. Transformeer data in concrete acties voor betere besluitvorming.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'AI Analytics',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Analytics Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Voorspellende Analyses',
          description: 'AI-modellen die trends voorspellen en toekomstige kansen identificeren'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'KPI Dashboards',
          description: 'Realtime dashboards met alle belangrijke prestatie-indicatoren op een plek'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Klantgedrag Analyse',
          description: 'Deep learning inzichten in klantgedrag, voorkeuren en churn-risico'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Geautomatiseerde Rapportages',
          description: 'AI-gestuurde rapportages die automatisch inzichten en aanbevelingen genereren'
        }
      }
    ]
  }
}

export default function AnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnalyticsPageClient />
    </>
  )
}
