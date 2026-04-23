import { Metadata } from 'next'
import WerkplekbeheerClientPage from './WerkplekbeheerClientPage'

export const metadata: Metadata = {
  title: 'Werkplekbeheer & Device Management | Start Beheer',
  description: 'Werkplekbeheer uitbesteden? Wij zorgen voor veilige, gestandaardiseerde en optimaal presterende werkplekken. Van installatie tot support, proactief beheer en 24/7 monitoring.',
  keywords: [
    'werkplekbeheer uitbesteden',
    'managed werkplek',
    'device management',
    'endpoint beheer',
    'IT werkplek',
    'laptop beheer',
    'desktop beheer',
    'werkplek support',
    'Microsoft Intune',
    'werkplek monitoring',
    'software deployment',
    'patch management',
    'werkplek as a service',
    'DaaS'
  ],
  openGraph: {
    title: 'Werkplekbeheer & Device Management | Start Beheer',
    description: 'Werkplekbeheer uitbesteden? Veilige, gestandaardiseerde en optimaal presterende werkplekken met proactief beheer.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/werkplekbeheer-uitbesteden',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werkplekbeheer Uitbesteden | Start Beheer',
    description: 'Werkplekbeheer uitbesteden? Veilige, gestandaardiseerde werkplekken met proactief beheer en support.',
  },
  alternates: {
    canonical: '/werkplekbeheer-uitbesteden'
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
  name: 'Werkplekbeheer Uitbesteden',
  description: 'Professioneel werkplekbeheer voor MKB. Device management, endpoint beheer, software updates en support met proactieve monitoring.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT Workplace Management',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Werkplekbeheer Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Device Management',
          description: 'Volledig beheer van laptops, desktops en mobiele apparaten via Microsoft Intune'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Deployment',
          description: 'Geautomatiseerde installatie en updates van software op alle werkplekken'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Patch Management',
          description: 'Proactief beveiligingsupdates en patches uitrollen om kwetsbaarheden te voorkomen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Werkplek Support',
          description: 'Helpdesk en remote support voor al uw eindgebruikers bij problemen'
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
    { '@type': 'Question', name: 'Hoe snel kan een nieuwe medewerker aan de slag?', acceptedAnswer: { '@type': 'Answer', text: 'Bij standaard onboarding is een nieuwe werkplek binnen 1-2 werkdagen klaar. Bij spoed kunnen we vaak dezelfde dag nog een laptop inrichten.' }},
    { '@type': 'Question', name: 'Hoe werkt een werkplek migratie?', acceptedAnswer: { '@type': 'Answer', text: 'We plannen de migratie samen in. Eerst maken we een complete backup, dan installeren we de nieuwe werkplek met alle software en instellingen. Data en profielen worden overgezet.' }},
    { '@type': 'Question', name: 'Hoe werkt de support voor medewerkers?', acceptedAnswer: { '@type': 'Answer', text: 'Medewerkers kunnen bellen, mailen of een ticket aanmaken. We helpen eerst remote - vaak is het probleem zo opgelost. Als dat niet lukt, komen we on-site.' }},
    { '@type': 'Question', name: 'Wat kost werkplekbeheer per medewerker?', acceptedAnswer: { '@type': 'Answer', text: 'We werken met vaste maandelijkse tarieven per werkplek, zodat u precies weet waar u aan toe bent. Vraag een offerte aan voor een prijsindicatie op maat.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'IT Support', item: 'https://startbeheer.nl/it-support' },
    { '@type': 'ListItem', position: 3, name: 'Werkplekbeheer', item: 'https://startbeheer.nl/werkplekbeheer-uitbesteden' },
  ],
}

export default function WerkplekbeheerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WerkplekbeheerClientPage />
    </>
  )
}
