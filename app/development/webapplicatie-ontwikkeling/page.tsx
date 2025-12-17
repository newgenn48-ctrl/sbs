import { Metadata } from 'next'
import WebapplicatiePageClient from './WebapplicatiePageClient'

export const metadata: Metadata = {
  title: 'Webapplicatie Ontwikkeling | Custom Web Apps op Maat | Start Beheer',
  description: 'Webapplicatie laten ontwikkelen? Wij bouwen op maat gemaakte webapplicaties die uw bedrijfsprocessen stroomlijnen. Van CRM tot portalen, van dashboards tot integraties.',
  keywords: [
    'webapplicatie ontwikkeling',
    'custom web app',
    'webapplicatie op maat',
    'web app laten maken',
    'bedrijfsapplicatie',
    'SaaS ontwikkeling',
    'portaal ontwikkeling',
    'dashboard ontwikkeling',
    'API integraties',
    'React development'
  ],
  openGraph: {
    title: 'Webapplicatie Ontwikkeling | Custom Web Apps op Maat',
    description: 'Webapplicatie laten ontwikkelen? Wij bouwen op maat gemaakte webapplicaties die uw bedrijfsprocessen stroomlijnen.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: '/development/webapplicatie-ontwikkeling'
  }
}

export default function WebapplicatiePage() {
  return <WebapplicatiePageClient />
}
