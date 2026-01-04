import { Metadata } from 'next'
import GoogleAdsClientPage from './GoogleAdsClientPage'

export const metadata: Metadata = {
  title: 'Google Ads Beheer | Maximaal Rendement uit uw Advertentiebudget | Start Beheer',
  description: 'Professioneel Google Ads beheer door Start Beheer. Krijg meer gekwalificeerde leads en klanten via gerichte advertentiecampagnes. Data-gedreven en resultaatgericht.',
  keywords: 'Google Ads beheer, SEA uitbesteden, Google Ads specialist, advertentiebeheer, online adverteren, MKB adverteren',
}

export default function GoogleAdsPage() {
  return <GoogleAdsClientPage />
}
