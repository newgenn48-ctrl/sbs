import { Metadata } from 'next'
import SysteembeheerClientPage from './SysteembeheerClientPage'

export const metadata: Metadata = {
  title: 'Systeembeheer Uitbesteden | Servers & Netwerk Beheer | Start Beheer',
  description: 'Systeembeheer uitbesteden? Wij beheren uw servers, netwerk en cloud-omgeving proactief. Voorkom downtime, maximaliseer prestaties. Vast aanspreekpunt.',
  keywords: [
    'systeembeheer uitbesteden',
    'netwerkbeheer',
    'serverbeheer',
    'IT-infrastructuur beheer',
    'cloud systeembeheer',
    'MKB systeembeheer',
    'server onderhoud',
    'netwerk monitoring'
  ],
  openGraph: {
    title: 'Systeembeheer Uitbesteden | Servers & Netwerk Beheer',
    description: 'Systeembeheer uitbesteden? Wij beheren uw servers, netwerk en cloud-omgeving proactief.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/systeembeheer-uitbesteden',
  },
  alternates: {
    canonical: '/systeembeheer-uitbesteden'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Systeembeheer Uitbesteden',
  description: 'Professioneel systeembeheer voor MKB. Server beheer, netwerk beheer, cloud beheer en proactief onderhoud.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT System Administration',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

export default function SysteembeheerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SysteembeheerClientPage />
    </>
  )
}
