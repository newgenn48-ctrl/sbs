import { Metadata } from 'next'
import WebsitePageClient from './WebsitePageClient'

export const metadata: Metadata = {
  title: 'Professionele Website Laten Maken | Start Beheer',
  description: 'Professionele website laten maken? Wij bouwen snelle, moderne websites die converteren. Custom design, SEO-geoptimaliseerd, mobile-first. Vraag vrijblijvend een offerte aan.',
  keywords: [
    'website laten maken',
    'professionele website',
    'website op maat',
    'custom website',
    'website ontwikkeling',
    'webdesign',
    'responsive website',
    'SEO website',
    'website MKB',
    'zakelijke website',
    'website laten bouwen',
    'website maken kosten'
  ],
  openGraph: {
    title: 'Professionele Website Laten Maken | Start Beheer',
    description: 'Professionele website laten maken? Wij bouwen snelle, moderne websites die converteren. Custom design, SEO-geoptimaliseerd, mobile-first.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/website-laten-maken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Laten Maken | Start Beheer',
    description: 'Professionele website laten maken? Snelle, moderne websites die converteren met custom design en SEO.',
  },
  alternates: {
    canonical: '/website-laten-maken'
  },
  robots: {
    index: true,
    follow: true,
  }
}

// FAQ Schema data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het om een website te maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard website is meestal binnen 1-3 weken klaar. Dit hangt af van de complexiteit en hoe snel feedback wordt gegeven. Complexere projecten kunnen 4-6 weken duren.'
      }
    },
    {
      '@type': 'Question',
      name: 'Waarom geen WordPress of Wix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress en Wix zijn prima voor eenvoudige websites, maar hebben nadelen: tragere laadtijden, beveiligingsrisico\'s door plugins, en beperkte flexibiliteit. Onze websites zijn sneller, veiliger en volledig op maat - zonder maandelijkse licentiekosten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf content aanpassen na oplevering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, u krijgt een gebruiksvriendelijk CMS waarmee u zelf teksten en afbeeldingen kunt aanpassen. Wij geven ook een korte training zodat u direct aan de slag kunt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat als ik later meer pagina\'s of functies wil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geen probleem. Onze websites zijn gebouwd om te groeien. U kunt altijd uitbreiden met extra pagina\'s, blog, webshop of andere functionaliteit.'
      }
    },
    {
      '@type': 'Question',
      name: 'Regelen jullie ook hosting en domein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij kunnen de volledige technische setup verzorgen: domeinregistratie, hosting, SSL certificaat en e-mail. Zo heeft u een aanspreekpunt voor alles.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat voor support krijg ik na oplevering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na oplevering blijven wij beschikbaar voor vragen, kleine aanpassingen en technische ondersteuning. Voor grotere wijzigingen maken we een offerte op maat. Zo bent u nooit alleen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat kost een website laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een professionele website op maat begint vanaf 785 euro. De exacte prijs hangt af van uw wensen, het aantal pagina\'s en de gewenste functionaliteiten. U ontvangt altijd een vrijblijvende offerte op maat.'
      }
    }
  ]
}

// JSON-LD Structured Data voor SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Laten Maken',
  description: 'Professionele website laten maken op maat. Custom design, SEO-geoptimaliseerd, mobile-first en razendsnelle laadtijden.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Web Development',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  offers: {
    '@type': 'Offer',
    price: '785',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '785',
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false
    }
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Design',
          description: 'Uniek maatwerk design dat perfect past bij uw merk en doelgroep'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimalisatie',
          description: 'Technische en content SEO voor betere vindbaarheid in Google'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Responsive Development',
          description: 'Mobile-first websites die perfect werken op elk apparaat'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CMS Integratie',
          description: 'Gebruiksvriendelijk content management systeem voor eenvoudig beheer'
        }
      }
    ]
  }
}

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Website Laten Maken', item: 'https://startbeheer.nl/website-laten-maken' },
  ],
}

export default function WebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebsitePageClient />
    </>
  )
}
