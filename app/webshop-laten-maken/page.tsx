import { Metadata } from 'next'
import EcommercePageClient from './EcommercePageClient'

export const metadata: Metadata = {
  title: 'Webshop Laten Maken | Shopify & WooCommerce | Start Beheer',
  description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen. Betalingsintegraties en conversie optimalisatie.',
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
    'webshop bouwen'
  ],
  openGraph: {
    title: 'Webshop Laten Maken | Shopify & WooCommerce',
    description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/webshop-laten-maken',
  },
  alternates: {
    canonical: '/webshop-laten-maken'
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
        text: 'Shopify kost vanaf €36/maand. WooCommerce is gratis, maar u betaalt voor hosting (vanaf €15/maand). Beide hebben transactiekosten voor betalingen. Wij adviseren u over de totale kosten.'
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
        text: 'Een professionele webshop op Shopify of WooCommerce begint vanaf €785. De exacte prijs hangt af van uw wensen, aantal producten en gewenste integraties.'
      }
    }
  ]
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Webshop Laten Maken',
  description: 'Professionele webshops op Shopify en WooCommerce. Betalingsintegraties, voorraadbeheer en conversie optimalisatie.',
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
    priceCurrency: 'EUR'
  }
}

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <EcommercePageClient />
    </>
  )
}
