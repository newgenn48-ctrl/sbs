import { Metadata } from 'next'
import MarketingAutomationClientPage from './MarketingAutomationClientPage'

export const metadata: Metadata = {
  title: 'Marketing Automation MKB | Automatiseer uw Groei & Bespaar Tijd',
  description: 'Stop met leads laten lekken. Wij bouwen intelligente systemen die uw marketing- en salesprocessen automatiseren voor maximale efficiëntie en ROI. Gratis automation scan.',
  keywords: 'marketing automation MKB, HubSpot partner, ActiveCampaign expert, lead nurturing, e-mail marketing automation, CRM integratie',
}

export default function MarketingAutomationPage() {
  return <MarketingAutomationClientPage />
}
