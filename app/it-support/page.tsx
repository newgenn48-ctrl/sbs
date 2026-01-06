import { Metadata } from 'next'
import ITSupportPageClient from './ITSupportPageClient'

export const metadata: Metadata = {
  title: 'IT Support & Beheer voor MKB | Remote & On-Site | Start Beheer',
  description: 'Professionele IT support voor het MKB. Remote hulp binnen minuten of on-site ondersteuning. Systeembeheer, werkplekbeheer, Microsoft 365 en cybersecurity. Flexibele contracten, vast aanspreekpunt. Vraag gratis advies.',
  keywords: [
    'IT support',
    'IT support MKB',
    'IT ondersteuning bedrijven',
    'IT beheer uitbesteden',
    'remote IT support',
    'on-site IT support',
    'IT helpdesk MKB',
    'systeembeheer MKB',
    'werkplekbeheer',
    'Microsoft 365 beheer',
    'cybersecurity MKB',
    'IT specialist inhuren',
    'IT uitbesteden',
    'managed IT services',
    'IT partner MKB',
    'IT beheer op maat',
    'IT problemen oplossen',
    'netwerk beheer',
    'server beheer',
    'cloud beheer'
  ],
  openGraph: {
    title: 'IT Support & Beheer voor MKB | Start Beheer',
    description: 'Professionele IT support voor het MKB. Remote hulp binnen minuten of on-site ondersteuning. Vast aanspreekpunt, flexibele contracten.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/it-support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Support & Beheer voor MKB | Start Beheer',
    description: 'Professionele IT support voor het MKB. Remote of on-site, flexibele contracten.',
  },
  alternates: {
    canonical: 'https://startbeheer.nl/it-support'
  },
  robots: {
    index: true,
    follow: true,
  }
}

// FAQ data voor schema
const faqData = [
  {
    question: 'Hoe snel kunnen jullie reageren bij een storing?',
    answer: 'Dat hangt af van uw SLA. Bij kritieke storingen reageren we meestal binnen 30 minuten. Voor minder urgente zaken hanteren we responstijden van 4 uur tot next-business-day, afhankelijk van uw afspraken.'
  },
  {
    question: 'Kunnen jullie ook op locatie komen?',
    answer: 'Ja, wij bieden zowel remote support als on-site ondersteuning. Voor hardwareproblemen, installaties of complexe netwerkissues komen we naar uw locatie. Remote support is vaak sneller en wordt daarom als eerste optie ingezet.'
  },
  {
    question: 'Wat kost IT support bij jullie?',
    answer: 'Wij werken met flexibele tariefmodellen: strippenkaart, vast uurtarief of een vast maandbedrag. De kosten hangen af van het aantal werkplekken, de gewenste responstijd en de scope van het beheer. Vraag een vrijblijvende offerte aan voor een prijs op maat.'
  },
  {
    question: 'Nemen jullie bestaande IT-omgevingen over?',
    answer: 'Ja, wij nemen regelmatig IT-omgevingen over van andere partijen of interne IT-ers. We beginnen met een grondige inventarisatie, documenteren alles en zorgen voor een soepele transitie zonder onderbreking van uw bedrijfsvoering.'
  },
]

// JSON-LD Structured Data voor SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Support & Beheer',
  description: 'Professionele IT support en beheer voor MKB bedrijven. Remote hulp, on-site ondersteuning, systeembeheer, werkplekbeheer, Microsoft 365 en cybersecurity.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT Support',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Remote IT Support',
          description: 'Directe IT hulp op afstand via beveiligde verbinding'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'On-Site IT Support',
          description: 'IT specialist op locatie voor hardware en complexe issues'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Systeembeheer',
          description: 'Volledig beheer van servers, netwerken en backups'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Werkplekbeheer',
          description: 'Beheer van werkplekken, devices en software'
        }
      }
    ]
  }
}

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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://startbeheer.nl',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'IT Support & Beheer',
      item: 'https://startbeheer.nl/it-support',
    },
  ],
}

export default function ITSupportPage() {
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
      <ITSupportPageClient />
    </>
  )
}
