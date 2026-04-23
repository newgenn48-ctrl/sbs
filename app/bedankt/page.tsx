import type { Metadata } from 'next'
import BedanktClient from './BedanktClient'

export const metadata: Metadata = {
  title: 'Bedankt | Start Beheer Solutions',
  description: 'Bedankt voor uw bericht. Wij nemen binnen 24 uur contact met u op.',
  alternates: { canonical: '/bedankt' },
  robots: { index: false, follow: true },
}

export default function BedanktPage() {
  return <BedanktClient />
}
