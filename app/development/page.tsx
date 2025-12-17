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
  },
  alternates: {
    canonical: '/development'
  }
}

export default function DevelopmentPage() {
  return <DevelopmentPageClient />
}
