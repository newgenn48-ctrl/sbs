import { Metadata } from 'next'
import AboutClientPage from './AboutClientPage'

export const metadata: Metadata = {
  title: 'Over Ons | Start Beheer - Uw IT Partner voor ZZP & MKB',
  description: 'Maak kennis met Start Beheer. Wij zijn uw betrouwbare IT-partner voor ZZP en MKB. Persoonlijke aandacht, transparante tarieven en complete IT-oplossingen.',
  keywords: ['over ons', 'start beheer', 'IT partner', 'ZZP IT', 'MKB IT', 'IT bedrijf Nederland'],
  openGraph: {
    title: 'Over Ons | Start Beheer',
    description: 'Maak kennis met Start Beheer. Uw betrouwbare IT-partner voor ZZP en MKB.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/about',
  },
  alternates: {
    canonical: '/about'
  }
}

export default function AboutPage() {
  return <AboutClientPage />
}
