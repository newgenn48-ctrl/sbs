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
    'chat automatisering',
    'chatbot implementatie',
    'intelligente chatbot',
    'klantenservice bot',
    'WhatsApp chatbot'
  ],
  openGraph: {
    title: 'AI Chatbots | 24/7 Klantenservice Automatiseren | Start Beheer',
    description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots die 24/7 vragen beantwoorden, leads kwalificeren en afspraken inplannen.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/ai-chatbots',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbots | 24/7 Klantenservice Automatiseren | Start Beheer',
    description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots die 24/7 beschikbaar zijn.',
  },
  alternates: {
    canonical: '/ai-chatbots'
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
  name: 'AI Chatbots',
  description: 'AI chatbots voor MKB. Automatiseer uw klantenservice met intelligente chatbots die 24/7 vragen beantwoorden, leads kwalificeren en afspraken inplannen.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'AI Chatbot Implementation',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Chatbot Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Chatbot',
          description: 'Intelligente chatbot voor uw website die bezoekers helpt en vragen beantwoordt'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Kwalificatie Bot',
          description: 'AI-chatbot die leads automatisch kwalificeert en doorgeeft aan uw salesteam'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Klantenservice Automatisering',
          description: '24/7 automatische beantwoording van veelgestelde vragen en support tickets'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multichannel Chatbot',
          description: 'Chatbot integratie voor website, WhatsApp, Facebook Messenger en meer'
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
    { '@type': 'Question', name: 'Kan de chatbot ook in het Nederlands?', acceptedAnswer: { '@type': 'Answer', text: 'Absoluut. Onze chatbots werken perfect in het Nederlands én Engels. Ze begrijpen ook dialect, typos en informeel taalgebruik. De AI leert continu bij van gesprekken.' }},
    { '@type': 'Question', name: 'Hoe traint de chatbot op onze kennis?', acceptedAnswer: { '@type': 'Answer', text: 'We voeden de chatbot met uw FAQ\'s, productinfo en procedures. De AI leert van elk gesprek en wordt slimmer. U kunt antwoorden aanpassen via een dashboard.' }},
    { '@type': 'Question', name: 'Wat als de chatbot het antwoord niet weet?', acceptedAnswer: { '@type': 'Answer', text: 'Bij complexe vragen schakelt de chatbot door naar een medewerker met alle context. Zo hoeft de klant niet opnieuw te beginnen. U bepaalt wanneer wordt doorgeschakeld.' }},
    { '@type': 'Question', name: 'Werkt de chatbot ook op WhatsApp?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen de chatbot koppelen aan WhatsApp Business, Facebook Messenger, uw website en andere kanalen. Eén chatbot, meerdere kanalen, één inbox voor uw team.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'AI & Automatisering', item: 'https://startbeheer.nl/ai' },
    { '@type': 'ListItem', position: 3, name: 'AI Chatbots', item: 'https://startbeheer.nl/ai-chatbots' },
  ],
}

export default function ChatbotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ChatbotsPageClient />
    </>
  )
}
