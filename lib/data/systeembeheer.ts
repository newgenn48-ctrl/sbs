import type { LucideIcon } from 'lucide-react'
import {
  Server, Network, Wifi, Database, PhoneCall, Cloud, Video, Bell,
  Clock, UserCheck, Wrench, FileCheck, Settings, RefreshCw
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

interface FAQ {
  q: string
  a: string
}

// ============================================================================
// DATA
// ============================================================================

export const services: Service[] = [
  {
    icon: Server,
    title: 'Serverbeheer',
    description: 'Beheer en onderhoud van uw fysieke en virtuele servers. Windows Server, Linux - wij zorgen dat alles draait.',
    features: ['Installatie & configuratie', 'Updates & patches', 'Performance optimalisatie', 'Troubleshooting'],
    color: 'blue'
  },
  {
    icon: Network,
    title: 'Netwerkbeheer',
    description: 'Uw bedrijfsnetwerk stabiel en veilig. Van switches tot firewalls, wij beheren de complete infrastructuur.',
    features: ['Firewall configuratie', 'Switch & router beheer', 'VPN oplossingen', 'Netwerk troubleshooting'],
    color: 'emerald'
  },
  {
    icon: Wifi,
    title: 'WiFi Infrastructuur',
    description: 'Betrouwbare draadloze dekking in uw hele pand. Zakelijke WiFi met gastnetwerk en beveiliging.',
    features: ['Site survey & ontwerp', 'Access point installatie', 'Gastnetwerk configuratie', 'Dekking optimalisatie'],
    color: 'violet'
  },
  {
    icon: Database,
    title: 'Backup & Recovery',
    description: 'Uw data veilig bewaard. Automatische backups en een helder herstelplan voor als het misgaat.',
    features: ['Automatische backups', 'Off-site opslag', 'Restore tests', 'Disaster recovery plan'],
    color: 'warm'
  },
  {
    icon: PhoneCall,
    title: 'VoIP & Telefonie',
    description: 'Moderne zakelijke telefonie via internet. Flexibel, schaalbaar en kosteneffici\u00EBnt.',
    features: ['VoIP implementatie', 'Nummerbehoud', 'Doorschakelingen', 'Integratie met Teams'],
    color: 'blue'
  },
  {
    icon: Cloud,
    title: 'Hybride Cloud',
    description: 'Het beste van beide werelden. Lokale servers gecombineerd met cloud diensten waar dat zinvol is.',
    features: ['Cloud migratie advies', 'Azure / AWS basics', 'Hybride oplossingen', 'Kostenoptimalisatie'],
    color: 'emerald'
  },
  {
    icon: Video,
    title: 'Vergaderruimtes',
    description: 'Professionele meeting rooms met video conferencing. Teams, Zoom of andere oplossingen - wij installeren en configureren.',
    features: ['Beeldscherm & camera setup', 'Audio configuratie', 'Teams/Zoom integratie', 'Gebruiksvriendelijke bediening'],
    color: 'violet'
  },
  {
    icon: Bell,
    title: 'Alarm & Beveiliging',
    description: 'Fysieke beveiliging van uw pand. Alarmsystemen, toegangscontrole en camerabewaking.',
    features: ['Alarmsysteem installatie', 'Toegangscontrole', 'IP-camera systemen', 'Integratie met netwerk'],
    color: 'warm'
  },
]

export const whyChooseUs: WhyItem[] = [
  {
    icon: Clock,
    title: 'Snelle Respons',
    description: 'Geen eindeloze wachttijden. U spreekt direct met een specialist die uw infrastructuur kent.',
    stat: 'Direct',
    statLabel: 'persoonlijk contact'
  },
  {
    icon: UserCheck,
    title: 'Vaste Contactpersoon',
    description: 'E\u00E9n aanspreekpunt die uw omgeving door en door kent. Geen steeds wisselende technici.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Maatwerk Oplossingen',
    description: 'Geen standaardpakketten. Wij stemmen het beheer af op \u00FAw infrastructuur en budget.',
    stat: '100%',
    statLabel: 'op maat'
  },
  {
    icon: FileCheck,
    title: 'Volledige Documentatie',
    description: 'Alles wordt gedocumenteerd. U heeft altijd inzicht in uw IT-omgeving.',
    stat: 'Helder',
    statLabel: 'overzicht'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We brengen uw huidige infrastructuur in kaart: servers, netwerk, backups.',
    icon: Settings
  },
  {
    step: '02',
    title: 'Advies & Plan',
    description: 'U ontvangt een helder advies met concrete verbeterpunten en kostenindicatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We voeren verbeteringen door en nemen het beheer over - met minimale verstoring.',
    icon: Wrench
  },
  {
    step: '04',
    title: 'Doorlopend Beheer',
    description: 'Regelmatig onderhoud, updates en support wanneer u ons nodig heeft.',
    icon: RefreshCw
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Wat is het verschil tussen systeembeheer en werkplekbeheer?',
    a: 'Systeembeheer richt zich op de "achterkant": servers, netwerken, backups en infrastructuur. Werkplekbeheer gaat over de apparaten van uw medewerkers: laptops, PC\'s en software. Vaak combineren bedrijven beide diensten voor volledige IT-ontzorging.'
  },
  {
    q: 'Kunnen jullie ook onze vergaderruimtes inrichten?',
    a: 'Jazeker. We installeren complete meeting room oplossingen: beeldschermen, camera\'s, microfoons en integratie met Teams of Zoom. Zodat uw vergaderingen soepel verlopen.'
  },
  {
    q: 'Doen jullie ook alarmsystemen en camera\'s?',
    a: 'Ja, we installeren en beheren alarmsystemen, toegangscontrole en IP-camerasystemen. Deze integreren we met uw netwerk zodat u overal toegang heeft.'
  },
  {
    q: 'Werken jullie ook met kleine bedrijven met maar \u00E9\u00E9n server?',
    a: 'Absoluut. We werken met bedrijven van 5 tot 150+ medewerkers. Of u nu \u00E9\u00E9n server heeft of een complexe omgeving - we stemmen het beheer af op uw situatie en budget.'
  },
  {
    q: 'Hoe snel kunnen jullie reageren bij een storing?',
    a: 'De responstijd hangt af van de SLA die u kiest. Bij kritieke storingen reageren we binnen 1-4 uur, afhankelijk van uw contract. We monitoren uw systemen proactief, waardoor we problemen vaak al oplossen voordat u er last van heeft.'
  },
]
