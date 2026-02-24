import { Metadata } from 'next'
import VirtualAssistantPageClient from './VirtualAssistantPageClient'

export const metadata: Metadata = {
  title: 'Virtuele Assistent | AI Telefoonservice | Start Beheer',
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
    title: 'Virtuele Assistent | AI Telefoonservice | Start Beheer',
    description: 'AI-gedreven virtuele assistent voor MKB. Automatische telefoonbeantwoording, afspraakplanning en agenda beheer. 24/7 bereikbaar zonder extra personeel.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/virtuele-assistent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtuele Assistent | AI Telefoonservice | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Klinkt de AI-stem natuurlijk?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we gebruiken de nieuwste voice AI technologie. De stem klinkt natuurlijk en menselijk, met de juiste intonatie en pauzes. Bellers merken vaak niet dat ze met AI spreken.' }},
    { '@type': 'Question', name: 'Kan de assistent ook afspraken inplannen?', acceptedAnswer: { '@type': 'Answer', text: 'Absoluut. De virtuele assistent koppelt met uw agenda (Google Calendar, Outlook) en plant direct afspraken in op beschikbare momenten. Inclusief bevestigingsmails naar de klant.' }},
    { '@type': 'Question', name: 'Wat gebeurt er buiten kantooruren?', acceptedAnswer: { '@type': 'Answer', text: 'De virtuele assistent is 24/7 beschikbaar. Buiten kantooruren neemt hij berichten aan, plant afspraken en stuurt een samenvatting naar u. Dringende zaken kunnen doorgeschakeld worden.' }},
    { '@type': 'Question', name: 'Hoeveel kost een virtuele assistent?', acceptedAnswer: { '@type': 'Answer', text: 'Kosten variëren van €200-500 per maand afhankelijk van belvolume en functionaliteiten. Veel goedkoper dan een parttime medewerker, en 24/7 beschikbaar.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automatisering', item: 'https://startbeheer.nl/ai' },
    { '@type': 'ListItem', position: 3, name: 'Virtuele Assistent', item: 'https://startbeheer.nl/virtuele-assistent' },
  ],
}

export default function VirtualAssistantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VirtualAssistantPageClient />
    </>
  )
}
