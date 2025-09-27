import { Metadata } from 'next'
import SEOServicesClientPage from './SEOServicesClientPage'

export const metadata: Metadata = {
  title: 'SEO Services | Hoger in Google & Meer Organisch Verkeer | Start Beheer',
  description: 'Bereik topposities in Google met onze SEO-diensten. Wij optimaliseren uw website technisch, inhoudelijk en qua autoriteit voor duurzame, organische groei.',
  keywords: 'SEO services, SEO uitbesteden, hoger in Google, zoekmachine optimalisatie, linkbuilding, technische SEO',
}

export default function SEOServicesPage() {
  return <SEOServicesClientPage />
}
