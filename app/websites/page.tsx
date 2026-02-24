import { Metadata } from 'next'
import Script from 'next/script'
import WebsitesPageClient from './WebsitesPageClient'

export const metadata: Metadata = {
  title: 'Website Development MKB | Start Beheer',
  description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd. Vraag een gratis website audit aan.',
  keywords: 'website laten maken MKB Nederland, webdesign Nederland, e-commerce ontwikkeling, SEO website, WordPress development Nederland',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Website Development MKB | Start Beheer',
    description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd.',
    url: 'https://startbeheer.nl/websites',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development MKB | Start Beheer',
    description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd.',
  },
}

export default function WebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development',
    description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd.',
    provider: { '@id': 'https://startbeheer.nl/#organization' },
    url: 'https://startbeheer.nl/websites',
    areaServed: { '@type': 'Country', name: 'Nederland' },
  }

  return (
    <>
      <Script
        id="websites-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebsitesPageClient />
    </>
  )
}
