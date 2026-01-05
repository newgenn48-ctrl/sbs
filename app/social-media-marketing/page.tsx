import { Metadata } from 'next'
import SocialMediaClientPage from './SocialMediaClientPage'

export const metadata: Metadata = {
  title: 'Social Media Marketing | Bouw een Community & Versterk uw Merk | Start Beheer',
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
    title: 'Social Media Marketing | Bouw een Community & Versterk uw Merk',
    description: 'Effectieve social media marketing die uw doelgroep engageert en converteert.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/social-media-marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing | Bouw een Community & Versterk uw Merk | Start Beheer',
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

export default function SocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SocialMediaClientPage />
    </>
  )
}
