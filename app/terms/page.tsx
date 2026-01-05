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
  },
  alternates: {
    canonical: '/terms'
  }
}

export default function TermsPage() {
  return <TermsClientPage />
}
