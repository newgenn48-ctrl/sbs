import {
  Shield, Clock, Eye, Key,
  Users, FileCheck, HardDrive,
  Headphones, Settings, RefreshCw,
  ShieldCheck, Scan
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface CyberService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface WhyChooseUsItem {
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

// Cybersecurity diensten
export const services: CyberService[] = [
  {
    icon: Scan,
    title: 'Security Audit',
    description: 'Een grondige analyse van uw IT-beveiliging. We identificeren kwetsbaarheden en geven concrete aanbevelingen.',
    features: ['Netwerk scan', 'Configuratie check', 'Rapport met prioriteiten', 'Actieplan'],
    color: 'quantum-blue'
  },
  {
    icon: ShieldCheck,
    title: 'Endpoint Security',
    description: 'Bescherming van alle werkplekken tegen malware, virussen en andere bedreigingen. Centraal beheerd.',
    features: ['Antivirus & antimalware', 'Firewall beheer', 'Updates automatiseren', 'Monitoring'],
    color: 'quantum-blue'
  },
  {
    icon: Users,
    title: 'Security Awareness Training',
    description: 'Train uw medewerkers om phishing en social engineering te herkennen. De mens is vaak de zwakste schakel.',
    features: ['Phishing simulaties', 'Interactieve trainingen', 'Bewustwording campagnes', 'Certificering medewerkers'],
    color: 'quantum-purple'
  },
  {
    icon: Key,
    title: 'Toegangsbeheer',
    description: 'Wie heeft toegang tot wat? Multi-factor authenticatie en goed wachtwoordbeleid beschermen uw data.',
    features: ['MFA implementatie', 'Wachtwoordbeleid', 'Rechten beheer', 'Single sign-on'],
    color: 'quantum-orange'
  },
  {
    icon: HardDrive,
    title: 'Backup & Recovery',
    description: 'Veilige backups zodat u snel kunt herstellen na een incident. Ransomware hoeft geen ramp te zijn.',
    features: ['Automatische backups', 'Off-site opslag', 'Regelmatige tests', 'Snelle recovery'],
    color: 'quantum-green'
  },
  {
    icon: Eye,
    title: 'Monitoring & Response',
    description: 'We houden uw systemen in de gaten en reageren snel bij verdachte activiteit.',
    features: ['Log monitoring', 'Alerting', 'Incident response', 'Forensisch onderzoek'],
    color: 'quantum-blue'
  },
]

// Waarom cybersecurity
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Shield,
    title: 'Praktische Aanpak',
    description: 'Geen overdreven complexiteit. Wij focussen op de maatregelen die voor uw organisatie het meeste verschil maken.',
    stat: 'Focus',
    statLabel: 'op wat werkt'
  },
  {
    icon: Clock,
    title: 'Snelle Hulp',
    description: 'Bij een incident bent u niet alleen. Wij helpen u snel de schade te beperken en te herstellen.',
    stat: 'Direct',
    statLabel: 'beschikbaar'
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'AVG, NIS2, ISO 27001 - wij helpen u voldoen aan de eisen die voor uw branche gelden.',
    stat: 'AVG',
    statLabel: 'compliant'
  },
  {
    icon: Headphones,
    title: 'Nederlandse Support',
    description: 'Geen buitenlandse helpdesk. Persoonlijk contact met IT-beveiligingsexperts die uw taal spreken.',
    stat: '100%',
    statLabel: 'Nederlands'
  },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We brengen uw huidige beveiliging in kaart en identificeren de belangrijkste risico\'s.',
    icon: Scan,
  },
  {
    step: '02',
    title: 'Prioriteiten',
    description: 'Samen bepalen we welke maatregelen het meeste impact hebben voor uw situatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We voeren de beveiligingsmaatregelen stap voor stap door met minimale verstoring.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Onderhoud',
    description: 'Beveiliging is geen eenmalige actie. Wij houden uw systemen veilig.',
    icon: RefreshCw
  },
]

// FAQ
export const faqs: FAQ[] = [
  {
    q: 'Hoe weet ik of mijn bedrijf goed beveiligd is?',
    a: 'Een security audit geeft u inzicht in de huidige staat van uw beveiliging. We testen uw systemen, bekijken configuraties en rapporteren over gevonden kwetsbaarheden met concrete aanbevelingen.'
  },
  {
    q: 'Is cybersecurity niet alleen voor grote bedrijven?',
    a: 'Juist niet. Kleine bedrijven zijn aantrekkelijke doelwitten omdat ze vaak minder goed beveiligd zijn. Gelukkig hoeft goede beveiliging niet duur te zijn - het gaat om de juiste basismaatregelen.'
  },
  {
    q: 'Waarom is security awareness training belangrijk?',
    a: '85% van alle cyberaanvallen begint met een menselijke fout, zoals het klikken op een phishing link. Goed getrainde medewerkers herkennen bedreigingen en weten hoe ze moeten handelen. Dit is vaak uw beste verdediging.'
  },
  {
    q: 'Wat kost een ransomware aanval?',
    a: 'Gemiddeld kost een ransomware aanval een MKB bedrijf tussen de 50.000 en 250.000 euro aan schade, losgeld, herstelkosten en gemiste omzet. Preventie is vele malen goedkoper dan herstel.'
  },
  {
    q: 'Hoe lang duurt het om basis beveiliging op orde te krijgen?',
    a: 'De belangrijkste maatregelen - MFA, goede backups, endpoint security - kunnen we vaak binnen enkele weken implementeren. Een volledig beveiligingsplan is een doorlopend proces.'
  },
]
