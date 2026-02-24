import { Metadata } from 'next'
import AIPageClient from './AIPageClient'

export const metadata: Metadata = {
  title: 'AI Automatisering & Chatbots voor MKB | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost AI implementatie voor een MKB?', acceptedAnswer: { '@type': 'Answer', text: 'AI-oplossingen variëren sterk in prijs. Een eenvoudige chatbot begint vanaf €2.000, terwijl uitgebreide proces automatisering vanaf €5.000 kan kosten. We maken altijd eerst een business case om de ROI te berekenen.' }},
    { '@type': 'Question', name: 'Hoe snel zien we resultaat van AI?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste klanten zien binnen 4-8 weken na implementatie meetbare resultaten. Chatbots leveren direct tijdsbesparing, terwijl proces automatisering vaak 2-3 maanden nodig heeft voor volledig effect.' }},
    { '@type': 'Question', name: 'Is ons bedrijf groot genoeg voor AI?', acceptedAnswer: { '@type': 'Answer', text: 'AI is niet alleen voor grote bedrijven. Juist MKB-bedrijven met 5-50 medewerkers profiteren enorm. Repetitieve taken kosten relatief meer tijd, waardoor de ROI van automatisering vaak hoger is.' }},
    { '@type': 'Question', name: 'Moeten onze medewerkers technisch zijn?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Wij bouwen gebruiksvriendelijke oplossingen die iedereen kan bedienen. Daarnaast geven we training en blijven we beschikbaar voor support. Technische kennis is niet vereist.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automatisering', item: 'https://startbeheer.nl/ai' },
  ],
}

export default function AIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIPageClient />
    </>
  )
}
