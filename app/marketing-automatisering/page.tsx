import { Metadata } from 'next'
import MarketingAutomationClientPage from './MarketingAutomationClientPage'

export const metadata: Metadata = {
  title: 'Marketing Automatisering | Automatiseer uw Groei & Bespaar Tijd | Start Beheer',
  description: 'Stop met leads laten lekken. Wij bouwen intelligente systemen die uw marketing- en salesprocessen automatiseren voor maximale efficiëntie en ROI. Gratis automation scan.',
  keywords: [
    'marketing automatisering',
    'marketing automation MKB',
    'HubSpot partner',
    'ActiveCampaign expert',
    'lead nurturing',
    'e-mail marketing automation',
    'CRM integratie',
    'sales automation',
    'lead scoring',
    'marketing funnel'
  ],
  openGraph: {
    title: 'Marketing Automatisering | Automatiseer uw Groei & Bespaar Tijd',
    description: 'Intelligente systemen die uw marketing- en salesprocessen automatiseren voor maximale efficiëntie en ROI.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/marketing-automatisering',
  },
  alternates: {
    canonical: '/marketing-automatisering'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marketing Automatisering',
  description: 'Intelligente systemen die uw marketing- en salesprocessen automatiseren voor maximale efficiëntie en ROI.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Marketing Automation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function MarketingAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MarketingAutomationClientPage />
    </>
  )
}
