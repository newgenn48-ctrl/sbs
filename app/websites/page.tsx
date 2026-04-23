import { Metadata } from 'next'
import Script from 'next/script'
import WebsitesPageClient from './WebsitesPageClient'

export const metadata: Metadata = {
  title: 'Website Development MKB | Start Beheer Solutions',
  description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd. Vraag een gratis website audit aan.',
  keywords: 'website laten maken MKB Nederland, webdesign Nederland, e-commerce ontwikkeling, SEO website, WordPress development Nederland',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Website Development MKB | Start Beheer Solutions',
    description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd.',
    url: 'https://startbeheer.nl/websites',
    siteName: 'Start Beheer Solutions',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development MKB | Start Beheer Solutions',
    description: 'Professionele websites die écht verkopen voor Nederlandse MKB. SEO-geoptimaliseerd, mobiel-first en snelle laadtijd.',
  },
  robots: { index: true, follow: true },
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
      { '@type': 'ListItem', position: 2, name: 'Websites', item: 'https://startbeheer.nl/websites' },
    ],
  }

  return (
    <>
      <Script
        id="websites-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="websites-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebsitesPageClient />
    </>
  )
}
