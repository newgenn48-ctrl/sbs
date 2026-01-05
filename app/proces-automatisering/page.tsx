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
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/proces-automatisering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proces Automatisering | Start Beheer',
    description: 'Automatiseer repetitieve taken en workflows met RPA en AI voor maximale productiviteit.',
  },
  alternates: {
    canonical: '/proces-automatisering'
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
  name: 'Proces Automatisering',
  description: 'RPA en AI-gedreven proces automatisering voor MKB bedrijven. Workflow automation, taak automatisering en bedrijfsproces optimalisatie.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Process Automation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Proces Automatisering Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Workflow Automation',
          description: 'Automatisering van bedrijfsprocessen en workflows voor hogere efficiëntie'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'RPA Implementatie',
          description: 'Robotic Process Automation voor automatisering van repetitieve taken'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Systeem Integraties',
          description: 'Koppeling van verschillende systemen via Zapier, Make en custom integraties'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Administratie Automatisering',
          description: 'Automatisering van administratieve processen zoals facturatie en rapportage'
        }
      }
    ]
  }
}

export default function ProcessAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProcessAutomationPageClient />
    </>
  )
}
