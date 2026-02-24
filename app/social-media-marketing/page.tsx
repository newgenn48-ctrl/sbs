import { Metadata } from 'next'
import SocialMediaClientPage from './SocialMediaClientPage'

export const metadata: Metadata = {
  title: 'Social Media Marketing voor MKB | Start Beheer',
  description: 'Effectieve social media marketing die uw doelgroep engageert en converteert. Van strategie en content creatie tot community management en advertising op alle grote platforms.',
  keywords: [
    'social media marketing',
    'social media beheer',
    'content creatie',
    'community management',
    'social advertising',
    'Instagram marketing',
    'LinkedIn marketing',
    'Facebook advertenties',
    'social media bureau',
    'social media MKB'
  ],
  openGraph: {
    title: 'Social Media Marketing voor MKB | Start Beheer',
    description: 'Effectieve social media marketing die uw doelgroep engageert en converteert.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/social-media-marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing voor MKB | Start Beheer',
    description: 'Effectieve social media marketing die uw doelgroep engageert en converteert op alle grote platforms.',
  },
  alternates: {
    canonical: '/social-media-marketing'
  },
  robots: {
    index: true,
    follow: true,
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Marketing',
  description: 'Effectieve social media marketing die uw doelgroep engageert en converteert. Content creatie, community management en advertising.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Social Media Marketing',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Marketing Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Strategie',
          description: 'Data-gedreven social media strategie afgestemd op uw doelgroep en bedrijfsdoelen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Creatie',
          description: 'Professionele content voor alle platforms: posts, stories, reels en video content'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Community Management',
          description: 'Actief beheer van uw social media kanalen inclusief reacties en engagement'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Advertising',
          description: 'Gerichte advertentiecampagnes op Facebook, Instagram, LinkedIn en TikTok'
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
    { '@type': 'Question', name: 'Welke social media kanalen zijn belangrijk voor B2B?', acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn is essentieel voor B2B. Afhankelijk van uw doelgroep kunnen Instagram en YouTube ook waardevol zijn voor employer branding en thought leadership. We adviseren op basis van waar uw doelgroep actief is.' }},
    { '@type': 'Question', name: 'Hoe vaak moeten we posten?', acceptedAnswer: { '@type': 'Answer', text: 'Kwaliteit boven kwantiteit. Voor de meeste B2B bedrijven adviseren we 2-3 LinkedIn posts per week. Consistentie is belangrijker dan volume. Liever 2 sterke posts dan 5 middelmatige.' }},
    { '@type': 'Question', name: 'Maken jullie ook de content?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we verzorgen complete content creatie: teksten, afbeeldingen, video en stories. We werken nauw samen met u voor authentieke content die bij uw merk past.' }},
    { '@type': 'Question', name: 'Wat kost social media beheer?', acceptedAnswer: { '@type': 'Answer', text: 'Basis community management begint vanaf €400 per maand. Volledige content creatie en beheer vanaf €800-1500 per maand. Advertising budgetten komen hier bovenop.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Online Marketing', item: 'https://startbeheer.nl/marketing' },
    { '@type': 'ListItem', position: 3, name: 'Social Media Marketing', item: 'https://startbeheer.nl/social-media-marketing' },
  ],
}

export default function SocialMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SocialMediaClientPage />
    </>
  )
}
