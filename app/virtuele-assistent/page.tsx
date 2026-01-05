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
    'appointment scheduling'
  ],
  openGraph: {
    title: 'Virtuele Assistent | AI Telefoon & Afsprakenplanning',
    description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording en afspraakplanning.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/virtuele-assistent',
  },
  alternates: {
    canonical: '/virtuele-assistent'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Virtuele Assistent',
  description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording, afspraakplanning en agenda beheer.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Virtual Assistant',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function VirtualAssistantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <VirtualAssistantPageClient />
    </>
  )
}
