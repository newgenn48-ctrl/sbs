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
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/marketing-automatisering',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Automatisering | Start Beheer',
    description: 'Automatiseer uw marketing- en salesprocessen voor maximale efficiëntie en ROI.',
  },
  alternates: {
    canonical: '/marketing-automatisering'
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
  name: 'Marketing Automatisering',
  description: 'Intelligente marketing automation systemen voor MKB bedrijven. Lead nurturing, e-mail automation, CRM integratie en sales automation voor maximale ROI.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Marketing Automation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Automation Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-mail Marketing Automation',
          description: 'Geautomatiseerde e-mail flows voor lead nurturing en klantbehoud'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Scoring & Nurturing',
          description: 'Automatische lead scoring en gepersonaliseerde nurturing journeys'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM Integratie',
          description: 'Koppeling van marketing automation met uw CRM systeem voor naadloze dataflow'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Funnel Optimalisatie',
          description: 'Analyse en optimalisatie van uw complete marketing funnel voor hogere conversies'
        }
      }
    ]
  }
}

export default function MarketingAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingAutomationClientPage />
    </>
  )
}
