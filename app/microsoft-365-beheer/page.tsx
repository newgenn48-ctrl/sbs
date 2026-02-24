import { Metadata } from 'next'
import Microsoft365PageClient from './Microsoft365PageClient'

export const metadata: Metadata = {
  title: 'Microsoft 365 Beheer | M365 Support | Start Beheer',
  description: 'Professioneel Microsoft 365 beheer voor MKB. Implementatie, migratie, beheer en support van Teams, SharePoint, OneDrive en Exchange.',
  keywords: [
    'Microsoft 365 beheer',
    'M365 beheer',
    'Office 365 beheer',
    'Microsoft 365 implementatie',
    'Microsoft 365 migratie',
    'Teams implementatie',
    'SharePoint beheer',
    'OneDrive beheer',
    'Exchange Online',
    'Microsoft 365 support',
    'M365 MKB',
    'Microsoft 365 partner'
  ],
  openGraph: {
    title: 'Microsoft 365 Beheer | M365 Support | Start Beheer',
    description: 'Professioneel Microsoft 365 beheer voor MKB. Implementatie, migratie, beheer en support.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/microsoft-365-beheer',
    siteName: 'Start Beheer Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft 365 Beheer | M365 Support | Start Beheer',
    description: 'Professioneel Microsoft 365 beheer voor MKB. Implementatie, migratie, beheer en support.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/microsoft-365-beheer'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft 365 Beheer',
  description: 'Professioneel Microsoft 365 beheer. Implementatie, migratie en support van Teams, SharePoint, OneDrive en Exchange.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Microsoft 365 Management',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'IT Support', item: 'https://startbeheer.nl/it-support' },
    { '@type': 'ListItem', position: 3, name: 'Microsoft 365 Beheer', item: 'https://startbeheer.nl/microsoft-365-beheer' },
  ],
}

export default function Microsoft365Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Microsoft365PageClient />
    </>
  )
}
