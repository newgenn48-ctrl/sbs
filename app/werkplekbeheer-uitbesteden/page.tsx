import { Metadata } from 'next'
import WerkplekbeheerClientPage from './WerkplekbeheerClientPage'

export const metadata: Metadata = {
  title: 'Werkplekbeheer Uitbesteden | Productieve & Veilige Werkplekken | Start Beheer',
  description: 'Zorgeloos werkplekbeheer voor het MKB. Wij zorgen voor veilige, gestandaardiseerde en optimaal presterende werkplekken. Van installatie tot support.',
  keywords: 'werkplekbeheer uitbesteden, managed werkplek, device management, endpoint beheer, IT werkplek',
}

export default function WerkplekbeheerPage() {
  return <WerkplekbeheerClientPage />
}
