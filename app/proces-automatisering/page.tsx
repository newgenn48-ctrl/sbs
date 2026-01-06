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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welke processen zijn geschikt voor automatisering?', acceptedAnswer: { '@type': 'Answer', text: 'Processen met vaste regels, herhaling en handmatige data-invoer zijn ideaal. Denk aan factuurverwerking, leadregistratie, rapportages en gegevensoverdracht tussen systemen.' }},
    { '@type': 'Question', name: 'Gebruiken jullie Zapier of Make?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, voor veel automatiseringen gebruiken we no-code tools zoals Zapier, Make of Power Automate. Voor complexere cases bouwen we custom oplossingen. We kiezen de beste tool voor uw situatie.' }},
    { '@type': 'Question', name: 'Hoeveel tijd besparen we met automatisering?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld besparen onze klanten 10-20 uur per week op administratieve taken. We maken vooraf een business case met een realistische inschatting voor uw situatie.' }},
    { '@type': 'Question', name: 'Wat als er iets misgaat in de automatisering?', acceptedAnswer: { '@type': 'Answer', text: 'We bouwen foutafhandeling in elke automatisering. Bij fouten krijgt u een notificatie en loggen we wat er misging. Kritieke processen hebben altijd een fallback naar handmatig.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automatisering', item: 'https://startbeheer.nl/ai' },
    { '@type': 'ListItem', position: 3, name: 'Proces Automatisering', item: 'https://startbeheer.nl/proces-automatisering' },
  ],
}

export default function ProcessAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProcessAutomationPageClient />
    </>
  )
}
