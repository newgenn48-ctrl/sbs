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
  },
  alternates: {
    canonical: '/privacy'
  }
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
