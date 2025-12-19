import { Metadata } from 'next'
import TermsClientPage from './TermsClientPage'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Start Beheer',
  description: 'Lees onze algemene voorwaarden. Duidelijke afspraken voor een prettige samenwerking.',
  keywords: 'algemene voorwaarden, voorwaarden, terms, Start Beheer',
}

export default function TermsPage() {
  return <TermsClientPage />
}
