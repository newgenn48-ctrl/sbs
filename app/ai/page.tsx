import { Metadata } from 'next'
import AIPageClient from './AIPageClient'

export const metadata: Metadata = {
  title: 'AI & Automatisering voor het MKB | Chatbots, RPA & Process Automation',
  description: 'Professionele AI-oplossingen voor het MKB. Van intelligente chatbots en process automation tot AI analytics. Bespaar 40% tijd en verhoog efficiëntie. ✓ Meetbare ROI ✓ Gratis AI Scan',
  keywords: 'AI voor MKB, AI implementatie, chatbot implementatie, process automation, RPA, AI analytics, kunstmatige intelligentie bedrijf, AI automatisering, AI oplossingen, business automation',
  openGraph: {
    title: 'AI & Automatisering voor het MKB | Start Beheer',
    description: 'Professionele AI-oplossingen voor het MKB. Chatbots, process automation en AI analytics met meetbare ROI.',
    type: 'website',
  },
}

export default function AIPage() {
  return <AIPageClient />
}
