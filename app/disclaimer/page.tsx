import { Metadata } from 'next'
import DisclaimerClientPage from './DisclaimerClientPage'

export const metadata: Metadata = {
  title: 'Disclaimer | Start Beheer',
  description: 'Lees onze disclaimer over het gebruik van deze website en de informatie die wij verstrekken.',
  keywords: ['disclaimer', 'aansprakelijkheid', 'website', 'Start Beheer'],
  openGraph: {
    title: 'Disclaimer | Start Beheer',
    description: 'Lees onze disclaimer over het gebruik van deze website.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/disclaimer',
    siteName: 'Start Beheer Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer | Start Beheer',
    description: 'Lees onze disclaimer over het gebruik van deze website.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/disclaimer'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: 'https://startbeheer.nl/disclaimer' },
  ],
}

export default function DisclaimerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DisclaimerClientPage />
    </>
  )
}
