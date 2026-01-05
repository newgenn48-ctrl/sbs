import { Metadata } from 'next'
import VirtualAssistantPageClient from './VirtualAssistantPageClient'

export const metadata: Metadata = {
  title: 'Virtuele Assistent | AI Telefoon & Afsprakenplanning | Start Beheer',
  description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording, afspraakplanning en agenda beheer. 24/7 bereikbaar zonder extra personeel.',
  keywords: [
    'virtuele assistent',
    'AI assistent',
    'telefoon automatisering',
    'afspraakplanning AI',
    'agenda beheer',
    'voice AI',
    'telefonische bereikbaarheid',
    'AI receptionist',
    'call handling',
    'appointment scheduling',
    'virtuele secretaresse',
    'telefoonservice uitbesteden',
    'AI telefoon beantwoording',
    '24/7 bereikbaarheid'
  ],
  openGraph: {
    title: 'Virtuele Assistent | AI Telefoon & Afsprakenplanning | Start Beheer',
    description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording, afspraakplanning en agenda beheer. 24/7 bereikbaar zonder extra personeel.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/virtuele-assistent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtuele Assistent | AI Telefoon & Afsprakenplanning | Start Beheer',
    description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording en afspraakplanning. 24/7 bereikbaar.',
  },
  alternates: {
    canonical: '/virtuele-assistent'
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
  name: 'Virtuele Assistent',
  description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording, afspraakplanning en agenda beheer. 24/7 bereikbaar zonder extra personeel.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Virtual Assistant',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Virtuele Assistent Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Telefoonbeantwoording',
          description: 'Intelligente AI die inkomende telefoongesprekken professioneel afhandelt en doorverbindt'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automatische Afspraakplanning',
          description: 'AI-gestuurde agenda integratie die direct afspraken inplant met klanten'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Voice AI Receptionist',
          description: 'Natuurlijke spraakherkenning voor een professionele eerste indruk bij elk gesprek'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Bereikbaarheidsservice',
          description: 'Rond de klok beschikbaar voor uw klanten, ook buiten kantooruren'
        }
      }
    ]
  }
}

export default function VirtualAssistantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VirtualAssistantPageClient />
    </>
  )
}
