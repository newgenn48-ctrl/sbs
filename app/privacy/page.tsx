import { Metadata } from 'next'
import PrivacyClientPage from './PrivacyClientPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Start Beheer',
  description: 'Lees hoe Start Beheer omgaat met uw persoonsgegevens. Transparantie en privacy staan bij ons voorop.',
  keywords: 'privacy policy, privacybeleid, AVG, GDPR, persoonsgegevens',
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
