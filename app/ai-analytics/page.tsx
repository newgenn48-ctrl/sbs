import { Metadata } from 'next'
import AnalyticsPageClient from './AnalyticsPageClient'

export const metadata: Metadata = {
  title: 'AI Analytics | Voorspellende Analyses | Start Beheer',
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
    title: 'AI Analytics | Voorspellende Analyses | Start Beheer',
    description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence. Transformeer data in concrete acties.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/ai-analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Analytics | Voorspellende Analyses | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welke data hebben we nodig?', acceptedAnswer: { '@type': 'Answer', text: 'We werken met de data die u al heeft: verkoopcijfers, websitedata, klantgegevens. Vaak is er meer bruikbare data dan bedrijven denken. We beginnen met een data-inventarisatie.' }},
    { '@type': 'Question', name: 'Kunnen jullie koppelen met ons huidige systeem?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we integreren met de meeste CRM\'s, boekhoudpakketten en bedrijfssoftware. Denk aan Exact, Afas, Salesforce, HubSpot en Google Analytics. Geen data-silos meer.' }},
    { '@type': 'Question', name: 'Hoe betrouwbaar zijn AI-voorspellingen?', acceptedAnswer: { '@type': 'Answer', text: 'De betrouwbaarheid hangt af van datakwaliteit en -volume. We starten altijd met een pilotfase waarin we de nauwkeurigheid meten en verbeteren voordat we live gaan.' }},
    { '@type': 'Question', name: 'Hebben we een data scientist nodig?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Wij bouwen dashboards die voor iedereen begrijpelijk zijn. Geen technische kennis nodig. Inzichten worden vertaald naar concrete actiepunten in begrijpelijke taal.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automatisering', item: 'https://startbeheer.nl/ai' },
    { '@type': 'ListItem', position: 3, name: 'AI Analytics', item: 'https://startbeheer.nl/ai-analytics' },
  ],
}

export default function AnalyticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AnalyticsPageClient />
    </>
  )
}
