import { Metadata } from 'next'
import MarketingAutomationClientPage from './MarketingAutomationClientPage'

export const metadata: Metadata = {
  title: 'Marketing Automatisering voor MKB | Start Beheer',
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
    title: 'Marketing Automatisering voor MKB | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welke marketing automation tool is het beste?', acceptedAnswer: { '@type': 'Answer', text: 'Dit hangt af van uw behoeften en budget. HubSpot is uitgebreid maar duurder. ActiveCampaign biedt goede balans prijs/functionaliteit. Mailchimp is prima voor starters. Wij adviseren op basis van uw specifieke situatie.' }},
    { '@type': 'Question', name: 'Hoelang duurt een implementatie?', acceptedAnswer: { '@type': 'Answer', text: 'Een basis implementatie duurt 2-4 weken. Complexere setups met CRM-integraties en uitgebreide workflows kosten 6-8 weken. We werken in fases zodat u snel waarde ziet.' }},
    { '@type': 'Question', name: 'Kunnen jullie koppelen met ons CRM?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we hebben ervaring met koppelingen naar Salesforce, HubSpot, Pipedrive, ActiveCampaign en andere CRM systemen. Integratie zorgt voor naadloze dataflow tussen marketing en sales.' }},
    { '@type': 'Question', name: 'Wat kost marketing automation?', acceptedAnswer: { '@type': 'Answer', text: 'Software kost €50-500 per maand afhankelijk van de tool en contacten. Implementatie is een eenmalige investering van €2.000-5.000. Doorlopend beheer vanaf €300 per maand.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Online Marketing', item: 'https://startbeheer.nl/marketing' },
    { '@type': 'ListItem', position: 3, name: 'Marketing Automatisering', item: 'https://startbeheer.nl/marketing-automatisering' },
  ],
}

export default function MarketingAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketingAutomationClientPage />
    </>
  )
}
