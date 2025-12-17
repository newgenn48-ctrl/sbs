import { Metadata } from 'next'
import Microsoft365PageClient from './Microsoft365PageClient'

export const metadata: Metadata = {
  title: 'Microsoft 365 Beheer | M365 Implementatie & Support | Start Beheer',
  description: 'Professioneel Microsoft 365 beheer voor MKB. Implementatie, migratie, beheer en support van Teams, SharePoint, OneDrive en Exchange. Haal meer uit uw M365 investering.',
  keywords: [
    'Microsoft 365 beheer',
    'M365 beheer',
    'Office 365 beheer',
    'Microsoft 365 implementatie',
    'Microsoft 365 migratie',
    'Teams implementatie',
    'SharePoint beheer',
    'OneDrive beheer',
    'Exchange Online',
    'Microsoft 365 support',
    'M365 MKB',
    'Microsoft 365 partner',
    'Cloud beheer',
    'Microsoft 365 licenties'
  ],
  openGraph: {
    title: 'Microsoft 365 Beheer | M365 Implementatie & Support',
    description: 'Professioneel Microsoft 365 beheer voor MKB. Implementatie, migratie, beheer en support.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: '/microsoft-365-beheer'
  }
}

export default function Microsoft365Page() {
  return <Microsoft365PageClient />
}
