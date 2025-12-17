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
  },
  alternates: {
    canonical: '/ai/analytics'
  }
}

export default function AnalyticsPage() {
  return <AnalyticsPageClient />
}
