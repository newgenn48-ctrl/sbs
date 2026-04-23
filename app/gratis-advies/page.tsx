import type { Metadata } from 'next'
import GratisAdviesClient from './GratisAdviesClient'

export const metadata: Metadata = {
  title: 'Contact opnemen | Start Beheer Solutions',
  description: 'Stel uw vraag via het formulier. Wij reageren binnen 24 uur met een concreet voorstel op maat — gratis en vrijblijvend.',
  alternates: { canonical: '/gratis-advies' },
  openGraph: {
    title: 'Contact opnemen | Start Beheer Solutions',
    description: 'Stel uw vraag via het formulier. Wij reageren binnen 24 uur met een concreet voorstel op maat — gratis en vrijblijvend.',
    url: 'https://startbeheer.nl/gratis-advies',
    siteName: 'Start Beheer Solutions',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact opnemen | Start Beheer Solutions',
    description: 'Stel uw vraag via het formulier. Wij reageren binnen 24 uur.',
  },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Contact opnemen', item: 'https://startbeheer.nl/gratis-advies' },
  ],
}

export default function GratisAdviesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GratisAdviesClient />
    </>
  )
}
