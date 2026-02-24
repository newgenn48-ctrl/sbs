import { Metadata } from 'next'
import TermsClientPage from './TermsClientPage'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Start Beheer',
  description: 'Lees onze algemene voorwaarden. Duidelijke afspraken voor een prettige samenwerking.',
  keywords: ['algemene voorwaarden', 'voorwaarden', 'terms', 'Start Beheer'],
  openGraph: {
    title: 'Algemene Voorwaarden | Start Beheer',
    description: 'Lees onze algemene voorwaarden. Duidelijke afspraken voor een prettige samenwerking.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/terms',
    siteName: 'Start Beheer Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algemene Voorwaarden | Start Beheer',
    description: 'Lees onze algemene voorwaarden. Duidelijke afspraken voor een prettige samenwerking.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Algemene Voorwaarden', item: 'https://startbeheer.nl/terms' },
  ],
}

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TermsClientPage />
    </>
  )
}
