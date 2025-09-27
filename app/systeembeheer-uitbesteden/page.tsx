import { Metadata } from 'next'
import SysteembeheerClientPage from './SysteembeheerClientPage'

export const metadata: Metadata = {
  title: 'Systeembeheer Uitbesteden | Betrouwbare & Veilige IT-Infrastructuur | Start Beheer',
  description: 'Zorg voor een stabiele, veilige en snelle IT-infrastructuur. Wij beheren uw servers, netwerk en cloud-omgeving proactief. Voorkom downtime en maximaliseer prestaties.',
  keywords: 'systeembeheer uitbesteden, netwerkbeheer, serverbeheer, IT-infrastructuur beheer, cloud systeembeheer, MKB systeembeheer',
}

export default function SysteembeheerPage() {
  return <SysteembeheerClientPage />
}
