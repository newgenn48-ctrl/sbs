import AIPageClient from './AIPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automatisering voor MKB | Bespaar 40% Tijd + €2500/maand Kosten',
  description: 'AI automatisering bespaart Nederlandse MKB 40% tijd + €2500/maand aan kosten. Chatbots, process automation, analytics. Gratis AI-scan ✅ Resultaat binnen 4 weken ✅ ROI gegarandeerd',
  keywords: 'AI automatisering MKB, chatbot Nederland, process automation, RPA, business intelligence, AI consultant Utrecht',
}

export default function AIPage() {
  return <AIPageClient />
}