import { Metadata } from 'next'
import AboutClientPage from './AboutClientPage'

export const metadata: Metadata = {
  title: 'Over Ons - IT Partner voor ZZP & MKB | Start Beheer',
  description: 'Maak kennis met Start Beheer. Wij zijn uw betrouwbare IT-partner voor ZZP en MKB. Persoonlijke aandacht, transparante tarieven en complete IT-oplossingen.',
  keywords: ['over ons', 'start beheer', 'IT partner', 'ZZP IT', 'MKB IT', 'IT bedrijf Nederland'],
  openGraph: {
    title: 'Over Ons | Start Beheer',
    description: 'Maak kennis met Start Beheer. Uw betrouwbare IT-partner voor ZZP en MKB.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over Ons - IT Partner voor ZZP & MKB | Start Beheer',
    description: 'Maak kennis met Start Beheer. Uw betrouwbare IT-partner voor ZZP en MKB.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/about'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://startbeheer.nl/about' },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutClientPage />
    </>
  )
}
