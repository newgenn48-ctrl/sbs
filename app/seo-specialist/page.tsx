import { Metadata } from 'next'
import SEOServicesClientPage from './SEOServicesClientPage'

export const metadata: Metadata = {
  title: 'SEO Specialist | Hoger in Google & Meer Organisch Verkeer | Start Beheer',
  description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
  keywords: [
    'SEO specialist',
    'SEO uitbesteden',
    'hoger in Google',
    'zoekmachine optimalisatie',
    'linkbuilding',
    'technische SEO',
    'SEO bureau',
    'SEO MKB',
    'organisch verkeer',
    'lokale SEO'
  ],
  openGraph: {
    title: 'SEO Specialist | Hoger in Google & Meer Organisch Verkeer',
    description: 'Bereik topposities in Google met onze SEO-diensten. Technische, inhoudelijke en autoriteitsoptimalisatie.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/seo-specialist',
  },
  alternates: {
    canonical: '/seo-specialist'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Specialist',
  description: 'Bereik topposities in Google met onze SEO-diensten. Technische, inhoudelijke en autoriteitsoptimalisatie.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Search Engine Optimization',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function SEOServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SEOServicesClientPage />
    </>
  )
}
