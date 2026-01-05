import { Metadata } from 'next'
import CybersecurityPageClient from './CybersecurityPageClient'

export const metadata: Metadata = {
  title: 'Cybersecurity voor MKB | Beveiliging & Bescherming | Start Beheer',
  description: 'Professionele cybersecurity voor het MKB. Bescherm uw bedrijf tegen hackers, ransomware en datalekken. Security audits, awareness training en beveiligingsoplossingen op maat.',
  keywords: [
    'cybersecurity MKB',
    'IT beveiliging',
    'ransomware bescherming',
    'security audit',
    'phishing bescherming',
    'MFA implementatie',
    'endpoint security',
    'firewall beheer',
    'backup oplossingen',
    'security awareness',
    'AVG compliance',
    'data bescherming',
    'hacker bescherming',
    'cybersecurity uitbesteden'
  ],
  openGraph: {
    title: 'Cybersecurity voor MKB | Start Beheer',
    description: 'Professionele cybersecurity voor het MKB. Bescherm uw bedrijf tegen hackers, ransomware en datalekken.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/cybersecurity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity voor MKB | Start Beheer',
    description: 'Professionele cybersecurity voor het MKB. Bescherm uw bedrijf tegen hackers en ransomware.',
  },
  alternates: {
    canonical: '/cybersecurity'
  },
  robots: {
    index: true,
    follow: true,
  }
}

// JSON-LD Structured Data voor SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cybersecurity voor MKB',
  description: 'Professionele cybersecurity diensten voor MKB bedrijven. Security audits, awareness training, endpoint security en ransomware bescherming.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Cybersecurity',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Security Audit',
          description: 'Grondige analyse van uw IT-beveiliging met concrete verbeterpunten'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Endpoint Security',
          description: 'Bescherming van alle werkplekken tegen malware en virussen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Security Awareness Training',
          description: 'Train uw medewerkers om phishing en social engineering te herkennen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backup & Recovery',
          description: 'Veilige backups zodat u snel kunt herstellen na een incident'
        }
      }
    ]
  }
}

export default function CybersecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CybersecurityPageClient />
    </>
  )
}
