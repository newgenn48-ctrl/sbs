import { Metadata } from 'next'
import WerkplekbeheerClientPage from './WerkplekbeheerClientPage'

export const metadata: Metadata = {
  title: 'Werkplekbeheer Uitbesteden | Device Management | Start Beheer',
  description: 'Werkplekbeheer uitbesteden? Wij zorgen voor veilige, gestandaardiseerde en optimaal presterende werkplekken. Van installatie tot support.',
  keywords: [
    'werkplekbeheer uitbesteden',
    'managed werkplek',
    'device management',
    'endpoint beheer',
    'IT werkplek',
    'laptop beheer',
    'desktop beheer',
    'werkplek support'
  ],
  openGraph: {
    title: 'Werkplekbeheer Uitbesteden | Device Management',
    description: 'Werkplekbeheer uitbesteden? Veilige, gestandaardiseerde en optimaal presterende werkplekken.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/werkplekbeheer-uitbesteden',
  },
  alternates: {
    canonical: '/werkplekbeheer-uitbesteden'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Werkplekbeheer Uitbesteden',
  description: 'Professioneel werkplekbeheer voor MKB. Device management, endpoint beheer, software updates en support.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT Workplace Management',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function WerkplekbeheerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WerkplekbeheerClientPage />
    </>
  )
}
