import { Metadata } from 'next'
import WebsiteBouwenClientPage from './WebsiteBouwenClientPage'

export const metadata: Metadata = {
  title: 'Website Laten Bouwen | Maatwerk Webapplicaties & Complexe Systemen | Start Beheer',
  description: 'Van geavanceerde e-commerce platformen tot complexe maatwerk webapplicaties. Wij bouwen schaalbare, high-performance digitale producten met de nieuwste technologieën.',
  keywords: 'website laten bouwen, webapplicatie ontwikkeling, maatwerk website, e-commerce platform, custom web development, React developer',
}

export default function WebsiteBouwenPage() {
  return <WebsiteBouwenClientPage />
}
