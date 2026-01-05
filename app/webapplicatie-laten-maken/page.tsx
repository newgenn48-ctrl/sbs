import { Metadata } from 'next'
import WebapplicatiePageClient from './WebapplicatiePageClient'

export const metadata: Metadata = {
  title: 'Webapplicatie Laten Maken | Custom Web Apps op Maat | Start Beheer',
  description: 'Webapplicatie laten maken? Wij bouwen op maat gemaakte webapplicaties die uw bedrijfsprocessen stroomlijnen. Van CRM tot portalen, van dashboards tot integraties.',
  keywords: [
    'webapplicatie laten maken',
    'webapplicatie ontwikkeling',
    'custom web app',
    'webapplicatie op maat',
    'web app laten maken',
    'bedrijfsapplicatie',
    'SaaS ontwikkeling',
    'portaal ontwikkeling',
    'dashboard ontwikkeling',
    'API integraties'
  ],
  openGraph: {
    title: 'Webapplicatie Laten Maken | Custom Web Apps op Maat',
    description: 'Webapplicatie laten maken? Wij bouwen op maat gemaakte webapplicaties die uw bedrijfsprocessen stroomlijnen.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/webapplicatie-laten-maken',
  },
  alternates: {
    canonical: '/webapplicatie-laten-maken'
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het om een webapplicatie te bouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit hangt sterk af van de complexiteit. Een eenvoudige applicatie kan in 2-3 maanden klaar zijn. Complexere projecten kunnen 6-12 maanden duren. Na de discovery fase geven we een realistische planning.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie integreren met onze bestaande systemen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij hebben ervaring met het koppelen aan diverse systemen: CRM (Salesforce, HubSpot), boekhouding (Exact, Moneybird), voorraadbeheer en andere zakelijke software. Als er een API is, kunnen we koppelen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie is eigenaar van de code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U bent volledig eigenaar van de broncode. Na oplevering ontvangt u alle code en documentatie. Er is geen lock-in of afhankelijkheid van ons.'
      }
    },
    {
      '@type': 'Question',
      name: 'Bieden jullie ook onderhoud en support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, we bieden flexibele onderhoudscontracten voor hosting, updates, bugfixes en doorontwikkeling. U kunt ook kiezen voor support op afroep.'
      }
    },
    {
      '@type': 'Question',
      name: 'Waarom geen standaard software zoals Salesforce of HubSpot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard software is prima voor standaard processen. Maar als uw werkwijze uniek is, betaalt u voor functies die u niet gebruikt en mist u functies die u wel nodig heeft. Maatwerk past exact bij uw proces, zonder maandelijkse licentiekosten per gebruiker.'
      }
    }
  ]
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Webapplicatie Laten Maken',
  description: 'Custom webapplicaties op maat. Van dashboards tot portalen, van CRM tot proces automatisering.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Web Application Development',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function WebapplicatiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebapplicatiePageClient />
    </>
  )
}
