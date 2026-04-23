import type { Metadata } from 'next'
import { Suspense } from 'react'
import DemoClientPage from './DemoClientPage'

export const metadata: Metadata = {
  title: 'Gratis Demo Aanvragen | Start Beheer Solutions',
  description: 'Vraag een gratis demo aan en ontdek hoe wij uw website, webshop of webapplicatie bouwen. Binnen 24 uur een persoonlijke demonstratie.',
  alternates: { canonical: '/demo' },
  openGraph: {
    title: 'Gratis Demo Aanvragen | Start Beheer Solutions',
    description: 'Vraag een gratis demo aan. Binnen 24 uur een persoonlijk ontwerp van uw website, webshop of webapplicatie.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/demo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gratis Demo Aanvragen - Start Beheer Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis Demo Aanvragen | Start Beheer Solutions',
    description: 'Vraag een gratis demo aan. Binnen 24 uur een persoonlijk ontwerp van uw website, webshop of webapplicatie.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Gratis Demo Aanvragen', item: 'https://startbeheer.nl/demo' },
  ],
}

export default function DemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={null}>
        <DemoClientPage />
      </Suspense>
    </>
  )
}
