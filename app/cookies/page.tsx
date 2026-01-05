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
  },
  alternates: {
    canonical: '/cookies'
  }
}

export default function CookiesPage() {
  return <CookiesClientPage />
}
