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

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Oplossingen voor ZZP & MKB',
  description: 'Complete IT-oplossingen voor ZZP\'ers en MKB. Website, e-mail, IT-support en marketing in één pakket.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT Solutions',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat maakt Start Beheer anders dan andere IT-bedrijven?', acceptedAnswer: { '@type': 'Answer', text: 'Wij combineren IT-support, development en marketing onder één dak. Geen geschuif tussen leveranciers. Eén aanspreekpunt voor al uw digitale behoeften, met persoonlijke service.' }},
    { '@type': 'Question', name: 'Werken jullie met vaste contracten?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, we werken zonder langlopende verplichtingen. U kunt maandelijks opzeggen. We verdienen uw vertrouwen door resultaat, niet door contractuele binding.' }},
    { '@type': 'Question', name: 'Is jullie service geschikt voor kleine bedrijven?', acceptedAnswer: { '@type': 'Answer', text: 'Absoluut. We werken met ZZP\'ers en bedrijven van 1 tot 150+ medewerkers. Onze diensten schalen mee met uw groei. U betaalt alleen voor wat u nodig heeft.' }},
    { '@type': 'Question', name: 'Hoe snel kunnen jullie starten?', acceptedAnswer: { '@type': 'Answer', text: 'Meestal kunnen we binnen 1-2 weken starten. Na een gratis oriëntatiegesprek maken we een plan op maat en gaan we aan de slag.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Oplossingen', item: 'https://startbeheer.nl/oplossingen' },
  ],
}

export default function OplossingenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OplossingenClientPage />
    </>
  )
}
