import { Metadata } from 'next'
import SocialMediaClientPage from './SocialMediaClientPage'

export const metadata: Metadata = {
  title: 'Social Media Marketing | Bouw een Community & Versterk uw Merk | Start Beheer',
  description: 'Effectieve social media marketing die uw doelgroep engageert en converteert. Van strategie en content creatie tot community management en advertising op alle grote platforms.',
  keywords: 'social media marketing, social media beheer, content creatie, community management, social advertising, Instagram marketing',
}

export default function SocialMediaPage() {
  return <SocialMediaClientPage />
}
