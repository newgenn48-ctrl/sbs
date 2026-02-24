import { Metadata } from 'next'
import CookiesClientPage from './CookiesClientPage'

export const metadata: Metadata = {
  title: 'Cookie Policy | Start Beheer',
  description: 'Lees hoe Start Beheer cookies gebruikt op onze website. Transparantie over uw online ervaring.',
  keywords: ['cookies', 'cookie policy', 'cookiebeleid', 'tracking', 'privacy'],
  openGraph: {
    title: 'Cookie Policy | Start Beheer',
    description: 'Lees hoe Start Beheer cookies gebruikt op onze website.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/cookies',
    siteName: 'Start Beheer Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Start Beheer',
    description: 'Lees hoe Start Beheer cookies gebruikt op onze website.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cookies'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Cookies', item: 'https://startbeheer.nl/cookies' },
  ],
}

export default function CookiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CookiesClientPage />
    </>
  )
}
