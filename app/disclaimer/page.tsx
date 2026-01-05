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
  },
  alternates: {
    canonical: '/disclaimer'
  }
}

export default function DisclaimerPage() {
  return <DisclaimerClientPage />
}
