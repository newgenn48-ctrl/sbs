import { Metadata } from 'next'
import ProcessAutomationPageClient from './ProcessAutomationPageClient'

export const metadata: Metadata = {
  title: 'Proces Automatisering | RPA & Workflow Automation | Start Beheer',
  description: 'Automatiseer repetitieve taken en workflows. RPA en AI-gedreven proces automatisering voor MKB. Bespaar tijd, verminder fouten en verhoog productiviteit.',
  keywords: [
    'proces automatisering',
    'RPA',
    'workflow automation',
    'bedrijfsprocessen automatiseren',
    'taak automatisering',
    'administratie automatiseren',
    'business automation',
    'no-code automatisering',
    'Zapier integratie',
    'Make automatisering'
  ],
  openGraph: {
    title: 'Proces Automatisering | RPA & Workflow Automation',
    description: 'Automatiseer repetitieve taken en workflows. RPA en AI-gedreven proces automatisering voor MKB.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/proces-automatisering',
  },
  alternates: {
    canonical: '/proces-automatisering'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Proces Automatisering',
  description: 'Automatiseer repetitieve taken en workflows. RPA en AI-gedreven proces automatisering voor MKB.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Process Automation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function ProcessAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ProcessAutomationPageClient />
    </>
  )
}
