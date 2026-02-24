import { Metadata } from 'next'
import MarketingPageClient from './MarketingPageClient'

export const metadata: Metadata = {
  title: 'Marketing Bureau voor MKB | Ads & SEO | Start Beheer',
  description: 'Professioneel online marketing bureau voor het MKB. Van Google Ads en SEO tot Social Media en Marketing Automation. Wij bouwen een geïntegreerd groei-ecosysteem. Geen vaste contracten. Meetbare resultaten.',
  keywords: [
    'online marketing bureau',
    'marketing bureau MKB',
    'online marketing uitbesteden',
    'digital marketing',
    'SEO bureau',
    'Google Ads beheer',
    'social media marketing',
    'marketing automation',
    'online marketing strategie',
    'marketing partner'
  ],
  openGraph: {
    title: 'Marketing Bureau voor MKB | Ads & SEO | Start Beheer',
    description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation in een geïntegreerde aanpak.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Bureau voor MKB | Ads & SEO | Start Beheer',
    description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation.',
  },
  alternates: {
    canonical: '/marketing'
  },
  robots: {
    index: true,
    follow: true,
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Marketing',
  description: 'Professioneel online marketing bureau voor het MKB. Google Ads, SEO, Social Media en Marketing Automation.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Digital Marketing',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Online Marketing Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google Ads Beheer',
          description: 'Professioneel Google Ads beheer met continue optimalisatie voor maximale ROI'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimalisatie',
          description: 'Zoekmachine optimalisatie voor duurzame organische groei en hogere rankings'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing',
          description: 'Strategische social media campagnes op LinkedIn, Facebook, Instagram en meer'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation',
          description: 'Geautomatiseerde marketing workflows voor leadnurturing en conversie optimalisatie'
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
    { '@type': 'Question', name: 'Wat onderscheidt jullie van andere marketing bureaus?', acceptedAnswer: { '@type': 'Answer', text: 'Wij combineren marketing met IT-expertise. Hierdoor bouwen we geïntegreerde systemen: van website tot CRM tot marketing automation. Geen losse tools, maar een samenhangend ecosysteem.' }},
    { '@type': 'Question', name: 'Werken jullie met vaste contracten?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, we werken zonder langlopende contracten. U kunt maandelijks opzeggen. We geloven dat resultaat de beste reden is om te blijven, niet een contract.' }},
    { '@type': 'Question', name: 'Hoeveel budget heb ik nodig voor online marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Dit hangt af van uw doelen en markt. Voor lokale dienstverleners kan €500-1000 per maand al effectief zijn. Landelijke campagnes vragen meer. We adviseren eerlijk over wat realistisch is.' }},
    { '@type': 'Question', name: 'Hoe meten jullie resultaat?', acceptedAnswer: { '@type': 'Answer', text: 'We rapporteren maandelijks over concrete KPIs: leads, conversies, kosten per lead en ROI. Geen vanity metrics, maar cijfers die er toe doen voor uw bedrijf.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Online Marketing', item: 'https://startbeheer.nl/marketing' },
  ],
}

export default function MarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketingPageClient />
    </>
  )
}
