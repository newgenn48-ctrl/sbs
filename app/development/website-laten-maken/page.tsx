import { Metadata } from 'next'
import WebsitePageClient from './WebsitePageClient'

export const metadata: Metadata = {
  title: 'Website Laten Maken | Professionele Websites op Maat | Start Beheer',
  description: 'Professionele website laten maken? Wij bouwen snelle, moderne websites die converteren. Custom design, SEO-geoptimaliseerd, mobile-first. Vraag vrijblijvend een offerte.',
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
    'zakelijke website'
  ],
  openGraph: {
    title: 'Website Laten Maken | Professionele Websites op Maat',
    description: 'Professionele website laten maken? Wij bouwen snelle, moderne websites die converteren.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: '/development/website-laten-maken'
  }
}

export default function WebsitePage() {
  return <WebsitePageClient />
}
