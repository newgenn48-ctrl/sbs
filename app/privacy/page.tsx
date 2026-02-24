import { Metadata } from 'next'
import PrivacyClientPage from './PrivacyClientPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Start Beheer',
  description: 'Lees hoe Start Beheer omgaat met uw persoonsgegevens. Transparantie en privacy staan bij ons voorop.',
  keywords: ['privacy policy', 'privacybeleid', 'AVG', 'GDPR', 'persoonsgegevens'],
  openGraph: {
    title: 'Privacy Policy | Start Beheer',
    description: 'Lees hoe Start Beheer omgaat met uw persoonsgegevens.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/privacy',
    siteName: 'Start Beheer Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Start Beheer',
    description: 'Lees hoe Start Beheer omgaat met uw persoonsgegevens.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Privacy', item: 'https://startbeheer.nl/privacy' },
  ],
}

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrivacyClientPage />
    </>
  )
}
