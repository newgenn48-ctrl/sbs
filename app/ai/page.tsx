import { Metadata } from 'next'
import AIPageClient from './AIPageClient'

export const metadata: Metadata = {
  title: 'AI & Automatisering voor het MKB | Chatbots, RPA & Process Automation',
  description: 'Professionele AI-oplossingen voor het MKB. Van intelligente chatbots en process automation tot AI analytics. Bespaar 40% tijd en verhoog efficiëntie. ✓ Meetbare ROI ✓ Gratis AI Scan',
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
    url: 'https://startbeheer.nl/ai',
  },
  alternates: {
    canonical: '/ai'
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
