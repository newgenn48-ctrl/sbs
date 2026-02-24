import { Metadata } from 'next'
import CybersecurityPageClient from './CybersecurityPageClient'

export const metadata: Metadata = {
  title: 'Cybersecurity voor MKB | Beveiliging | Start Beheer',
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

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe weet ik of mijn bedrijf goed beveiligd is?', acceptedAnswer: { '@type': 'Answer', text: 'Een security audit geeft u inzicht in de huidige staat van uw beveiliging. We testen uw systemen, bekijken configuraties en rapporteren over gevonden kwetsbaarheden.' }},
    { '@type': 'Question', name: 'Is cybersecurity niet alleen voor grote bedrijven?', acceptedAnswer: { '@type': 'Answer', text: 'Juist niet. Kleine bedrijven zijn aantrekkelijke doelwitten omdat ze vaak minder goed beveiligd zijn. Goede beveiliging hoeft niet duur te zijn.' }},
    { '@type': 'Question', name: 'Waarom is security awareness training belangrijk?', acceptedAnswer: { '@type': 'Answer', text: '85% van alle cyberaanvallen begint met een menselijke fout, zoals het klikken op een phishing link. Goed getrainde medewerkers zijn uw beste verdediging.' }},
    { '@type': 'Question', name: 'Wat kost een ransomware aanval?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld kost een ransomware aanval een MKB bedrijf tussen de 50.000 en 250.000 euro aan schade. Preventie is vele malen goedkoper dan herstel.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'IT Support', item: 'https://startbeheer.nl/it-support' },
    { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://startbeheer.nl/cybersecurity' },
  ],
}

export default function CybersecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CybersecurityPageClient />
    </>
  )
}
