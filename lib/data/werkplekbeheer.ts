import type { LucideIcon } from 'lucide-react'
import {
  Laptop, Download, Headphones, UserPlus, UserMinus, Smartphone,
  PackageOpen, MoveRight, Clock, UserCheck, Wrench, FileCheck,
  Settings, RefreshCw
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
    icon: Laptop,
    title: 'Device Management',
    description: 'Beheer van alle werkplekken: laptops, desktops en thin clients. Installatie, configuratie en onderhoud.',
    features: ['Nieuwe werkplek inrichten', 'Hardware troubleshooting', 'Vervanging bij defect', 'Inventarisbeheer'],
    color: 'quantum-green'
  },
  {
    icon: Download,
    title: 'Software Beheer',
    description: 'Installatie en updates van alle software die uw medewerkers nodig hebben. Altijd up-to-date en gelicentieerd.',
    features: ['Software installatie', 'Updates & patches', 'Licentie beheer', 'Applicatie support'],
    color: 'quantum-blue'
  },
  {
    icon: Headphones,
    title: 'Helpdesk & Support',
    description: 'Uw medewerkers kunnen bij ons terecht voor al hun IT-vragen. Remote of on-site hulp wanneer nodig.',
    features: ['Remote support', 'Telefonische hulp', 'On-site wanneer nodig', 'Snelle responstijd'],
    color: 'quantum-purple'
  },
  {
    icon: UserPlus,
    title: 'Onboarding',
    description: 'Nieuwe medewerker? Wij zorgen dat de werkplek klaar staat. Laptop, accounts, software - alles geregeld.',
    features: ['Werkplek configuratie', 'Account aanmaken', 'Software installatie', 'Introductie IT'],
    color: 'quantum-orange'
  },
  {
    icon: UserMinus,
    title: 'Offboarding',
    description: 'Medewerker uit dienst? Wij zorgen voor veilige overdracht en opschoning van accounts en apparaten.',
    features: ['Data backup', 'Account deactivatie', 'Apparaat innemen', 'Veilige data wissing'],
    color: 'quantum-green'
  },
  {
    icon: Smartphone,
    title: 'Mobiele Apparaten',
    description: 'Zakelijke telefoons en tablets beheren. Beveiliging, apps en integratie met uw bedrijfsomgeving.',
    features: ['Telefoon configuratie', 'App beheer', 'Beveiliging instellen', 'E-mail & agenda sync'],
    color: 'quantum-blue'
  },
  {
    icon: PackageOpen,
    title: 'Werkplek Installatie',
    description: 'Nieuwe werkplekken opzetten? Wij installeren en configureren alles: hardware, software, accounts en netwerk.',
    features: ['Hardware setup', 'Software installatie', 'Netwerk configuratie', 'Gebruiker klaar maken'],
    color: 'quantum-purple'
  },
  {
    icon: MoveRight,
    title: 'Werkplek Migratie',
    description: 'Overstappen naar nieuwe systemen of hardware? Wij migreren data, instellingen en applicaties zonder productiviteitsverlies.',
    features: ['Data migratie', 'Applicatie overdracht', 'Instellingen behouden', 'Minimale downtime'],
    color: 'quantum-orange'
  },
]

export const whyChooseUs: WhyItem[] = [
  {
    icon: Clock,
    title: 'Snelle Support',
    description: 'Uw medewerkers krijgen snel hulp bij IT-problemen. Geen lange wachttijden.',
    stat: 'Direct',
    statLabel: 'beschikbaar'
  },
  {
    icon: UserCheck,
    title: 'Persoonlijke Aanpak',
    description: 'Wij kennen uw medewerkers en hun werkplekken. Geen anonieme helpdesk.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Alles Inbegrepen',
    description: 'Van installatie tot support, van onboarding tot offboarding. Compleet werkplekbeheer.',
    stat: '100%',
    statLabel: 'ontzorging'
  },
  {
    icon: FileCheck,
    title: 'Duidelijk Overzicht',
    description: 'U weet precies welke apparaten en software u heeft. Altijd actueel.',
    stat: 'Helder',
    statLabel: 'inventaris'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We brengen alle werkplekken in kaart: hardware, software, gebruikers.',
    icon: Settings
  },
  {
    step: '02',
    title: 'Standaardisatie',
    description: 'We bepalen samen de ideale werkplek-configuratie voor uw organisatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Overname Beheer',
    description: 'We nemen het beheer over en zorgen dat alles up-to-date en veilig is.',
    icon: RefreshCw
  },
  {
    step: '04',
    title: 'Doorlopende Support',
    description: 'Uw medewerkers kunnen bij ons terecht. Wij regelen de rest.',
    icon: Headphones
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Hoe snel kan een nieuwe medewerker aan de slag?',
    a: 'Bij standaard onboarding is een nieuwe werkplek binnen 1-2 werkdagen klaar. Bij spoed kunnen we vaak dezelfde dag nog een laptop inrichten. We stemmen dit af op uw wensen.'
  },
  {
    q: 'Hoe werkt een werkplek migratie?',
    a: 'We plannen de migratie samen in. Eerst maken we een complete backup, dan installeren we de nieuwe werkplek met alle software en instellingen. Data en profielen worden overgezet. Uw medewerker merkt minimale onderbreking.'
  },
  {
    q: 'Kunnen jullie meerdere werkplekken tegelijk installeren?',
    a: 'Zeker. Bij grotere projecten - zoals een kantoorverhuizing of hardware refresh - plannen we de uitrol in fases. Zo verstoren we het dagelijks werk minimaal en blijft iedereen productief.'
  },
  {
    q: 'Hoe werkt de support voor medewerkers?',
    a: 'Medewerkers kunnen bellen, mailen of een ticket aanmaken. We helpen eerst remote - vaak is het probleem zo opgelost. Als dat niet lukt, komen we on-site of sturen we vervangende hardware.'
  },
  {
    q: 'Wat kost werkplekbeheer per medewerker?',
    a: 'De kosten hangen af van het pakket dat u kiest en het aantal werkplekken. We werken met vaste maandelijkse tarieven per werkplek, zodat u precies weet waar u aan toe bent. Vraag een offerte aan voor een prijsindicatie op maat.'
  },
]
