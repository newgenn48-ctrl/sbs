import { Metadata } from 'next'
import SysteembeheerClientPage from './SysteembeheerClientPage'

export const metadata: Metadata = {
  title: 'Systeembeheer Uitbesteden | Servers & Netwerk Beheer | Start Beheer',
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
    title: 'Systeembeheer Uitbesteden | Servers & Netwerk Beheer | Start Beheer',
    description: 'Systeembeheer uitbesteden? Wij beheren uw servers, netwerk en cloud-omgeving proactief. Voorkom downtime en maximaliseer prestaties.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
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

export default function SysteembeheerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SysteembeheerClientPage />
    </>
  )
}
