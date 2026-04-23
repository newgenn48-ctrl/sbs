import { Metadata } from 'next'
import SysteembeheerClientPage from './SysteembeheerClientPage'

export const metadata: Metadata = {
  title: 'Systeembeheer Uitbesteden | Server Beheer | Start Beheer',
  description: 'Systeembeheer uitbesteden? Wij beheren uw servers, netwerk en cloud-omgeving proactief. Voorkom downtime, maximaliseer prestaties. Vast aanspreekpunt en 24/7 monitoring.',
  keywords: [
    'systeembeheer uitbesteden',
    'netwerkbeheer',
    'serverbeheer',
    'IT-infrastructuur beheer',
    'cloud systeembeheer',
    'MKB systeembeheer',
    'server onderhoud',
    'netwerk monitoring',
    'Azure beheer',
    'Microsoft 365 beheer',
    'IT outsourcing',
    'managed services',
    'proactief beheer',
    'IT infrastructuur'
  ],
  openGraph: {
    title: 'Systeembeheer Uitbesteden | Server Beheer | Start Beheer',
    description: 'Systeembeheer uitbesteden? Wij beheren uw servers, netwerk en cloud-omgeving proactief. Voorkom downtime en maximaliseer prestaties.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/systeembeheer-uitbesteden',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systeembeheer Uitbesteden | Start Beheer',
    description: 'Systeembeheer uitbesteden? Proactief beheer van servers, netwerk en cloud-omgeving.',
  },
  alternates: {
    canonical: '/systeembeheer-uitbesteden'
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
  name: 'Systeembeheer Uitbesteden',
  description: 'Professioneel systeembeheer voor MKB. Server beheer, netwerk beheer, cloud beheer en proactief onderhoud met 24/7 monitoring.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT System Administration',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Systeembeheer Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Server Beheer',
          description: 'Volledig beheer van fysieke en virtuele servers inclusief updates en monitoring'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Netwerk Beheer',
          description: 'Configuratie en onderhoud van uw complete netwerkinfrastructuur'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Beheer',
          description: 'Beheer van Microsoft Azure, Microsoft 365 en andere cloud-omgevingen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Proactieve Monitoring',
          description: '24/7 monitoring van uw systemen om problemen te voorkomen voordat ze ontstaan'
        }
      }
    ]
  }
}

// FAQ data voor schema
const faqData = [
  {
    question: 'Wat is het verschil tussen systeembeheer en werkplekbeheer?',
    answer: 'Systeembeheer richt zich op de "achterkant": servers, netwerken, backups en infrastructuur. Werkplekbeheer gaat over de apparaten van uw medewerkers: laptops, PC\'s en software. Vaak combineren bedrijven beide diensten voor volledige IT-ontzorging.'
  },
  {
    question: 'Kunnen jullie ook onze vergaderruimtes inrichten?',
    answer: 'Jazeker. We installeren complete meeting room oplossingen: beeldschermen, camera\'s, microfoons en integratie met Teams of Zoom. Zodat uw vergaderingen soepel verlopen.'
  },
  {
    question: 'Werken jullie ook met kleine bedrijven met maar één server?',
    answer: 'Absoluut. We werken met bedrijven van 5 tot 150+ medewerkers. Of u nu één server heeft of een complexe omgeving - we stemmen het beheer af op uw situatie en budget.'
  },
  {
    question: 'Hoe snel kunnen jullie reageren bij een storing?',
    answer: 'De responstijd hangt af van de SLA die u kiest. Bij kritieke storingen reageren we binnen 1-4 uur, afhankelijk van uw contract. We monitoren uw systemen proactief, waardoor we problemen vaak al oplossen voordat u er last van heeft.'
  },
]

// FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'IT Support', item: 'https://startbeheer.nl/it-support' },
    { '@type': 'ListItem', position: 3, name: 'Systeembeheer Uitbesteden', item: 'https://startbeheer.nl/systeembeheer-uitbesteden' },
  ],
}

export default function SysteembeheerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SysteembeheerClientPage />
    </>
  )
}
