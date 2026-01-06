import { Metadata } from 'next'
import DevelopmentPageClient from './DevelopmentPageClient'

export const metadata: Metadata = {
  title: 'Web Development | Websites & Webapplicaties op Maat | Start Beheer',
  description: 'Professionele web development voor MKB. Custom websites, webapplicaties en e-commerce oplossingen. Modern, snel en schaalbaar. Vraag vrijblijvend advies.',
  keywords: [
    'web development',
    'website laten maken',
    'webapplicatie ontwikkeling',
    'custom website',
    'webshop laten maken',
    'e-commerce ontwikkeling',
    'Next.js development',
    'React development',
    'MKB website',
    'professionele website'
  ],
  openGraph: {
    title: 'Web Development | Websites & Webapplicaties op Maat',
    description: 'Professionele web development voor MKB. Custom websites, webapplicaties en e-commerce oplossingen.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/development',
  },
  alternates: {
    canonical: '/development'
  }
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development',
  description: 'Professionele web development voor MKB. Custom websites, webapplicaties en e-commerce oplossingen.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'Web Development',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Welke technologieën gebruiken jullie?', acceptedAnswer: { '@type': 'Answer', text: 'Wij bouwen met moderne technologieën: Next.js, React, TypeScript en Tailwind CSS. Voor e-commerce gebruiken we Shopify of WooCommerce. We kiezen altijd de beste tool voor uw specifieke project.' }},
    { '@type': 'Question', name: 'Kunnen jullie ook bestaande websites overnemen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we nemen regelmatig bestaande websites en webshops over van andere bureaus. We analyseren de huidige situatie en adviseren over onderhoud, verbetering of een nieuw platform.' }},
    { '@type': 'Question', name: 'Hoe werkt het onderhoud na oplevering?', acceptedAnswer: { '@type': 'Answer', text: 'Na oplevering kunt u kiezen voor een onderhoudscontract of support op afroep. Het onderhoudscontract dekt updates, backups, monitoring en kleine aanpassingen.' }},
    { '@type': 'Question', name: 'Bieden jullie ook hosting aan?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we verzorgen professionele hosting op snelle, betrouwbare servers. Inclusief SSL-certificaat, dagelijkse backups en 24/7 monitoring. U hoeft zich nergens zorgen over te maken.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Development', item: 'https://startbeheer.nl/development' },
  ],
}

export default function DevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DevelopmentPageClient />
    </>
  )
}
