import { Metadata } from 'next'
import WerkplekbeheerClientPage from './WerkplekbeheerClientPage'

export const metadata: Metadata = {
  title: 'Werkplekbeheer Uitbesteden | Device Management | Start Beheer',
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
    title: 'Werkplekbeheer Uitbesteden | Device Management | Start Beheer',
    description: 'Werkplekbeheer uitbesteden? Veilige, gestandaardiseerde en optimaal presterende werkplekken met proactief beheer.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
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

export default function WerkplekbeheerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WerkplekbeheerClientPage />
    </>
  )
}
