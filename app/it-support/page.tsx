import { Metadata } from 'next'
import ITSupportPageClient from './ITSupportPageClient'

export const metadata: Metadata = {
  title: 'Complete IT Support & Ontzorging voor MKB | Staart Beheer Solutions',
  description: 'Op zoek naar een betrouwbare IT-partner? Ontdek onze complete IT-ontzorging voor het MKB. Van werkplekbeheer tot cyberbeveiliging. Vraag uw gratis IT-scan aan.',
}

export default function ITSupportPage() {
  return <ITSupportPageClient />
}