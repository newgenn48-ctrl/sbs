import { Metadata } from 'next'
import EcommercePageClient from './EcommercePageClient'

export const metadata: Metadata = {
  title: 'Webshop Laten Maken | Shopify & WooCommerce | Start Beheer',
  description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen. Betalingsintegraties, voorraadbeheer en conversie optimalisatie.',
  keywords: [
    'webshop laten maken',
    'e-commerce ontwikkeling',
    'Shopify webshop',
    'WooCommerce webshop',
    'online winkel',
    'webwinkel laten maken',
    'e-commerce oplossingen',
    'betalingsintegraties',
    'conversie optimalisatie',
    'webshop bouwen',
    'online verkopen',
    'webshop op maat',
    'professionele webshop',
    'webshop MKB'
  ],
  openGraph: {
    title: 'Webshop Laten Maken | Shopify & WooCommerce',
    description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen. Betalingsintegraties en conversie optimalisatie.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Start Beheer',
    url: 'https://startbeheer.nl/webshop-laten-maken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webshop Laten Maken | Start Beheer',
    description: 'Webshop laten maken? E-commerce oplossingen op Shopify en WooCommerce die verkopen.',
  },
  alternates: {
    canonical: '/webshop-laten-maken'
  },
  robots: {
    index: true,
    follow: true,
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Shopify of WooCommerce - wat is beter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van uw situatie. Shopify is ideaal voor wie snel wil starten met een betrouwbaar hosted platform. WooCommerce is perfect als u al een WordPress site heeft of meer controle wilt. Wij helpen u de juiste keuze te maken.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik zelf producten en bestellingen beheren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut. Beide platformen hebben een gebruiksvriendelijk dashboard. U kunt zelf producten toevoegen, prijzen aanpassen, bestellingen verwerken en voorraad beheren. Wij geven een training bij oplevering.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de maandelijkse kosten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify kost vanaf 36 euro per maand. WooCommerce is gratis, maar u betaalt voor hosting (vanaf 15 euro per maand). Beide hebben transactiekosten voor betalingen. Wij adviseren u over de totale kosten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie integreren met mijn boekhouding/ERP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, we hebben ervaring met koppelingen naar Exact, Moneybird, Afas, Picqer en andere systemen. Beide platformen hebben uitgebreide mogelijkheden voor integraties.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat kost een webshop laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een professionele webshop op Shopify of WooCommerce begint vanaf 785 euro. De exacte prijs hangt af van uw wensen, aantal producten en gewenste integraties.'
      }
    }
  ]
}

// JSON-LD Structured Data voor SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Webshop Laten Maken',
  description: 'Professionele webshops op Shopify en WooCommerce. Betalingsintegraties, voorraadbeheer en conversie optimalisatie voor maximale omzet.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'E-commerce Development',
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
    name: 'Webshop Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shopify Webshop',
          description: 'Complete webshop op Shopify met professioneel design en alle essentials'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WooCommerce Webshop',
          description: 'Flexibele WordPress webshop met WooCommerce voor volledige controle'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Betalingsintegraties',
          description: 'Koppeling met iDEAL, creditcards, Klarna, PayPal en andere betaalmethoden'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ERP/Boekhouding Koppelingen',
          description: 'Integratie met Exact, Moneybird, Afas, Picqer en andere bedrijfssoftware'
        }
      }
    ]
  }
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Development', item: 'https://startbeheer.nl/development' },
    { '@type': 'ListItem', position: 3, name: 'Webshop Laten Maken', item: 'https://startbeheer.nl/webshop-laten-maken' },
  ],
}

export default function EcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EcommercePageClient />
    </>
  )
}
