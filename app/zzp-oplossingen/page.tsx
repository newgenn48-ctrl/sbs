import { Metadata } from 'next'
import ZZPClientPage from './ZZPClientPage'

export const metadata: Metadata = {
  title: 'ZZP IT Oplossingen | Website, E-mail & SEO voor Zelfstandigen',
  description: 'Complete digitale oplossingen voor ZZP\'ers: professionele website, zakelijke e-mail, lokale SEO en IT-support. Vanaf €99/mnd. ✓ Maandelijks opzegbaar ✓ Eén aanspreekpunt ✓ Bespaar 5-10 uur/mnd',
  keywords: 'ZZP IT oplossingen, website voor zzp, zakelijke e-mail zzp, lokale SEO zelfstandigen, IT support zzp, digitale oplossingen freelancer, ZZP pakket, ZZP website laten maken',
  openGraph: {
    title: 'ZZP Oplossingen | Website, E-mail & SEO | Start Beheer',
    description: 'Complete digitale oplossingen voor ZZP\'ers. Website, e-mail, SEO en IT-support in één pakket. Vanaf €99/mnd, maandelijks opzegbaar.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/zzp-oplossingen',
  },
  alternates: {
    canonical: '/zzp-oplossingen'
  }
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ZZP IT Oplossingen',
  description: 'Complete digitale oplossingen voor ZZP\'ers. Website, e-mail, SEO en IT-support in één pakket. Vanaf €99/mnd.',
  provider: {
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    url: 'https://startbeheer.nl'
  },
  serviceType: 'IT Solutions for Freelancers',
  areaServed: {
    '@type': 'Country',
    name: 'Nederland'
  },
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '99',
      priceCurrency: 'EUR',
      unitText: 'maand',
      valueAddedTaxIncluded: false
    }
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat krijg ik precies voor €99 per maand?', acceptedAnswer: { '@type': 'Answer', text: 'Een professionele website, zakelijke e-mail, basis SEO en IT-support. Alles wat je als ZZP\'er nodig hebt om professioneel online te zijn. Inclusief hosting, updates en ondersteuning.' }},
    { '@type': 'Question', name: 'Kan ik maandelijks opzeggen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, er zijn geen langlopende contracten. Je kunt elke maand opzeggen. We geloven in verdienen door kwaliteit, niet door contractuele binding.' }},
    { '@type': 'Question', name: 'Hoe lang duurt het voordat mijn website live staat?', acceptedAnswer: { '@type': 'Answer', text: 'Meestal staat je website binnen 1-2 weken live. We vragen alleen om je logo, teksten en foto\'s. De rest regelen wij.' }},
    { '@type': 'Question', name: 'Is dit ook geschikt als ik ga groeien?', acceptedAnswer: { '@type': 'Answer', text: 'Absoluut. Veel van onze klanten starten als ZZP\'er en groeien door. We schalen mee: van ZZP-pakket naar volledige IT-support, marketing en development.' }},
  ],
}

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Oplossingen', item: 'https://startbeheer.nl/oplossingen' },
    { '@type': 'ListItem', position: 3, name: 'ZZP Oplossingen', item: 'https://startbeheer.nl/zzp-oplossingen' },
  ],
}

export default function ZZPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ZZPClientPage />
    </>
  )
}
