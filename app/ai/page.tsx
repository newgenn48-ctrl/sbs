import { Metadata } from 'next'
import AIPageClient from './AIPageClient'

export const metadata: Metadata = {
  title: 'AI & Automatisering voor het MKB | Chatbots, RPA & Process Automation',
  description: 'Professionele AI-oplossingen voor het MKB. Van intelligente chatbots en process automation tot AI analytics. Bespaar 40% tijd en verhoog efficientie. Meetbare ROI. Gratis AI Scan.',
  keywords: [
    'AI voor MKB',
    'AI implementatie',
    'chatbot implementatie',
    'process automation',
    'RPA',
    'AI analytics',
    'kunstmatige intelligentie bedrijf',
    'AI automatisering',
    'AI oplossingen',
    'business automation'
  ],
  openGraph: {
    title: 'AI & Automatisering voor het MKB | Start Beheer',
    description: 'Professionele AI-oplossingen voor het MKB. Chatbots, process automation en AI analytics met meetbare ROI.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automatisering voor het MKB | Start Beheer',
    description: 'Professionele AI-oplossingen voor het MKB. Chatbots, process automation en AI analytics met meetbare ROI.',
  },
  alternates: {
    canonical: '/ai'
  },
  robots: {
    index: true,
    follow: true,
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI & Automatisering',
  description: 'Professionele AI-oplossingen voor het MKB. Chatbots, process automation en AI analytics met meetbare ROI.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'AI Implementation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI & Automatisering Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbots',
          description: 'Intelligente chatbots voor klantenservice, leadgeneratie en interne support'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Process Automation (RPA)',
          description: 'Automatisering van repetitieve taken met Robotic Process Automation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Analytics',
          description: 'Data-analyse en voorspellende modellen voor betere bedrijfsbeslissingen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Virtuele AI Assistent',
          description: 'Slimme virtuele assistenten die uw team ondersteunen bij dagelijkse werkzaamheden'
        }
      }
    ]
  }
}

export default function AIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AIPageClient />
    </>
  )
}
