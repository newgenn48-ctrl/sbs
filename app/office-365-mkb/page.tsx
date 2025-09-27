import { Metadata } from 'next'
import Office365MKBClientPage from './Office365MKBClientPage'

export const metadata: Metadata = {
  title: 'Microsoft Office 365 voor MKB | Start Beheer Solutions',
  description: 'Verhoog de productiviteit en samenwerking binnen uw MKB met Microsoft 365. Inclusief Teams, SharePoint, en geavanceerde beveiliging. Volledig beheerd door Start Beheer.',
  keywords: 'Office 365 MKB, Microsoft 365 Business, Teams voor MKB, SharePoint MKB, IT-beheer MKB, cloud werkplek',
}

export default function Office365MKBPage() {
  return <Office365MKBClientPage />
}