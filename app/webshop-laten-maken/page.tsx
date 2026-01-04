import { Metadata } from 'next'
import EcommercePageClient from './EcommercePageClient'

export const metadata: Metadata = {
  title: 'E-commerce Ontwikkeling | Webshop Laten Maken | Start Beheer',
  description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen. Betalingsintegraties en conversie optimalisatie. Van startup tot scale-up.',
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
    title: 'E-commerce Ontwikkeling | Webshop Laten Maken',
    description: 'Webshop laten maken? Wij bouwen e-commerce oplossingen op Shopify en WooCommerce die verkopen.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: '/development/ecommerce'
  }
}

export default function EcommercePage() {
  return <EcommercePageClient />
}
