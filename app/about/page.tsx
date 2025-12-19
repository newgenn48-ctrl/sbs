import { Metadata } from 'next'
import AboutClientPage from './AboutClientPage'

export const metadata: Metadata = {
  title: 'Over Ons | Start Beheer - Uw IT Partner voor ZZP & MKB',
  description: 'Maak kennis met Start Beheer. Wij zijn uw betrouwbare IT-partner voor ZZP en MKB. Persoonlijke aandacht, transparante tarieven en complete IT-oplossingen.',
  keywords: 'over ons, start beheer, IT partner, ZZP IT, MKB IT, IT bedrijf Nederland',
}

export default function AboutPage() {
  return <AboutClientPage />
}
