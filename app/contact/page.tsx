import { Metadata } from 'next'
import ContactClientPage from './ContactClientPage'

export const metadata: Metadata = {
  title: 'Contact | Start Beheer - Neem Contact Op',
  description: 'Neem contact op met Start Beheer. Bel, mail of plan een gratis adviesgesprek. Wij reageren binnen 24 uur op uw vraag.',
  keywords: ['contact', 'start beheer', 'IT support', 'gratis adviesgesprek', 'IT partner'],
  openGraph: {
    title: 'Contact | Start Beheer',
    description: 'Neem contact op met Start Beheer. Wij reageren binnen 24 uur op uw vraag.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://startbeheer.nl/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Start Beheer - Neem Contact Op',
    description: 'Neem contact op met Start Beheer. Bel, mail of plan een gratis adviesgesprek. Wij reageren binnen 24 uur op uw vraag.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact'
  }
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact',
  description: 'Neem contact op met Start Beheer Solutions',
  url: 'https://startbeheer.nl/contact',
  mainEntity: { '@id': 'https://startbeheer.nl/#organization' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://startbeheer.nl/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactClientPage />
    </>
  )
}
