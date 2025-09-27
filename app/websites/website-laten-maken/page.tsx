import { Metadata } from 'next'
import WebsiteLatenMakenClient from './WebsiteLatenMakenClient'

export const metadata: Metadata = {
  title: 'Website Laten Maken? Bouw Een Groeimachine, Geen Digitale Folder.',
  description: 'Stop met standaard websites. Wij bouwen data-gedreven, AI-ready digitale platformen op Next.js die uw bedrijf laten domineren. Razendsnel, schaalbaar en gebouwd voor conversie.',
  keywords: 'website laten maken, nextjs development, web development, professionele website, website bouwen, conversie optimalisatie, seo website',
}

export default function WebsiteLatenMakenPage() {
  return <WebsiteLatenMakenClient />
}
