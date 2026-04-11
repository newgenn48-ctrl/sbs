import { Metadata } from 'next'
import WebsitePageClient from './WebsitePageClient'

export const metadata: Metadata = {
  title: 'Professionele Website Laten Maken | Start Beheer',
  description: 'Website laten maken? Professionele websites op maat vanaf €585 excl. BTW. Custom design, SEO-geoptimaliseerd, mobile-first. Gratis demo binnen 24 uur.',
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
    title: 'Website Laten Maken | Professioneel & op Maat | Start Beheer',
    description: 'Website laten maken? Professionele websites op maat vanaf €785. Custom design, SEO-geoptimaliseerd, mobile-first.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl/website-laten-maken',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Laten Maken - Start Beheer Solutions',
      },
    ],
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
      name: 'Wat kost een website laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vanaf €585 excl. BTW voor een volledige website op maat. U ontvangt vooraf een vaste prijs — wat we afspreken, dat betaalt u. Geen verrassingen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemiddeld 1-3 weken. U ontvangt al binnen 24 uur een eerste ontwerp. Complexere projecten duren 4-6 weken.'
      }
    },
    {
      '@type': 'Question',
      name: 'Waarom geen WordPress of Wix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze websites laden sneller, zijn veiliger en volledig op maat. Geen maandelijkse licentiekosten, geen kwetsbare plugins, geen beperkingen van een template.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf teksten en foto\'s aanpassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. U krijgt een simpel CMS en een korte training. Daarna past u zelf alles aan, zonder ons nodig te hebben.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik later uitbreiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Altijd. Extra pagina\'s, blog, webshop, nieuwe functionaliteiten — uw website groeit mee met uw bedrijf.'
      }
    },
    {
      '@type': 'Question',
      name: 'Regelen jullie ook hosting en domein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Domein, hosting, SSL, e-mail — wij regelen de complete technische setup. Eén aanspreekpunt voor alles.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat als ik het ontwerp niet mooi vind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dan passen we het aan totdat u tevreden bent. Bevalt het eerste ontwerp helemaal niet? Dan stopt het daar, zonder kosten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Krijg ik support na oplevering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Kleine aanpassingen, vragen en technische support zijn inbegrepen. U staat er niet alleen voor.'
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
    price: '585',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '585',
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
