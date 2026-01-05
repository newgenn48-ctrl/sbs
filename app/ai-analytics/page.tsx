import { Metadata } from 'next'
import AnalyticsPageClient from './AnalyticsPageClient'

export const metadata: Metadata = {
  title: 'AI Analytics | Voorspellende Analyses & Inzichten | Start Beheer',
  description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence. Transformeer data in concrete acties.',
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
    'churn voorspelling'
  ],
  openGraph: {
    title: 'AI Analytics | Voorspellende Analyses & Inzichten',
    description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/ai-analytics',
  },
  alternates: {
    canonical: '/ai-analytics'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Analytics',
  description: 'AI-gedreven analytics voor MKB. Voorspellende analyses, klantinzichten en business intelligence.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'AI Analytics',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function AnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AnalyticsPageClient />
    </>
  )
}
