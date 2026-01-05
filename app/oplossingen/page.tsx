import { Metadata } from 'next'
import OplossingenClientPage from './OplossingenClientPage'

export const metadata: Metadata = {
  title: 'IT Oplossingen voor ZZP & MKB | Complete Digitale Ondersteuning',
  description: 'Complete IT-oplossingen voor ZZP\'ers en MKB. Website, e-mail, IT-support, marketing en meer. Wij groeien met uw bedrijf mee. ✓ Eén aanspreekpunt ✓ Schaalbare oplossingen ✓ Persoonlijke aanpak',
  keywords: 'IT oplossingen ZZP, IT oplossingen MKB, digitale oplossingen bedrijven, IT partner ZZP MKB, website ZZP, IT support MKB, zakelijke IT diensten',
  openGraph: {
    title: 'IT Oplossingen voor ZZP & MKB | Start Beheer',
    description: 'Complete IT-oplossingen voor ZZP\'ers en MKB. Website, e-mail, IT-support en marketing in één pakket.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/oplossingen',
  },
  alternates: {
    canonical: '/oplossingen'
  }
}

export default function OplossingenPage() {
  return <OplossingenClientPage />
}
