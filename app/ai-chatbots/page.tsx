import { Metadata } from 'next'
import ChatbotsPageClient from './ChatbotsPageClient'

export const metadata: Metadata = {
  title: 'AI Chatbots | 24/7 Klantenservice Automatiseren | Start Beheer',
  description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots die 24/7 vragen beantwoorden, leads kwalificeren en afspraken inplannen.',
  keywords: [
    'AI chatbot',
    'chatbot MKB',
    'klantenservice automatiseren',
    '24/7 chatbot',
    'conversational AI',
    'lead kwalificatie chatbot',
    'chatbot website',
    'customer service AI',
    'virtuele assistent',
    'chat automatisering'
  ],
  openGraph: {
    title: 'AI Chatbots | 24/7 Klantenservice Automatiseren',
    description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/ai-chatbots',
  },
  alternates: {
    canonical: '/ai-chatbots'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbots',
  description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots die 24/7 vragen beantwoorden.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'AI Chatbot Implementation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function ChatbotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ChatbotsPageClient />
    </>
  )
}
