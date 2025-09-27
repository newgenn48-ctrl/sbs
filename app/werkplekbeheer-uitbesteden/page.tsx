import { Metadata } from 'next'
import WerkplekbeheerClientPage from './WerkplekbeheerClientPage'

export const metadata: Metadata = {
  title: 'Werkplekbeheer Uitbesteden | Efficiënte & Veilige Werkplekken | Start Beheer',
  description: 'Zorgeloos werken voor uw medewerkers. Wij beheren en beveiligen al uw laptops, desktops en mobiele apparaten. Voor een vast bedrag per werkplek per maand.',
  keywords: 'werkplekbeheer, werkplekbeheer uitbesteden, device management, laptop beheer, IT werkplek, moderne werkplek',
}

export default function WerkplekbeheerPage() {
  return <WerkplekbeheerClientPage />
}
