import {
  Server, Cloud, Shield, Monitor,
  Clock, Wrench, UserCheck, ThumbsUp,
  CalendarCheck, MessageSquare, Search,
  Headphones, MapPin,
  Activity, ShieldCheck, FileCheck, BookOpen, CheckCircle2
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

export const colorClasses = {
  'quantum-blue': {
    border: 'border-quantum-blue/20',
    borderHover: 'hover:border-quantum-blue/40',
    bg: 'bg-quantum-blue/10',
    bgHover: 'hover:bg-quantum-blue/20',
    text: 'text-quantum-blue',
    btnBorder: 'border-quantum-blue/30',
  },
  'quantum-purple': {
    border: 'border-quantum-purple/20',
    borderHover: 'hover:border-quantum-purple/40',
    bg: 'bg-quantum-purple/10',
    bgHover: 'hover:bg-quantum-purple/20',
    text: 'text-quantum-purple',
    btnBorder: 'border-quantum-purple/30',
  },
  'quantum-green': {
    border: 'border-quantum-green/20',
    borderHover: 'hover:border-quantum-green/40',
    bg: 'bg-quantum-green/10',
    bgHover: 'hover:bg-quantum-green/20',
    text: 'text-quantum-green',
    btnBorder: 'border-quantum-green/30',
  },
  'quantum-orange': {
    border: 'border-quantum-orange/20',
    borderHover: 'hover:border-quantum-orange/40',
    bg: 'bg-quantum-orange/10',
    bgHover: 'hover:bg-quantum-orange/20',
    text: 'text-quantum-orange',
    btnBorder: 'border-quantum-orange/30',
  },
} as const

export type ColorKey = keyof typeof colorClasses

interface ITCategory {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  link: string
  color: ColorKey
  cta: string
}

interface SupportModel {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: ColorKey
}

interface TrustIndicator {
  icon: LucideIcon
  title: string
  description: string
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

// De 4 hoofdcategorieën met links naar subpagina's
export const itCategories: ITCategory[] = [
  {
    icon: Server,
    title: 'Systeembeheer',
    description: 'Volledig IT-beheer uitbesteden. Servers, netwerken, backups en infrastructuur - wij regelen het allemaal.',
    features: ['Server beheer & onderhoud', 'Netwerk & WiFi infrastructuur', 'Backup & disaster recovery', 'VoIP & telefonie'],
    link: '/systeembeheer-uitbesteden',
    color: 'quantum-blue',
    cta: 'Bekijk Systeembeheer'
  },
  {
    icon: Monitor,
    title: 'Werkplekbeheer',
    description: "Al uw werkplekken professioneel beheerd. PC's, laptops en software - altijd up-to-date en veilig.",
    features: ['Device management', 'Software installatie & updates', 'Helpdesk & remote support', 'Gebruikersbeheer'],
    link: '/werkplekbeheer-uitbesteden',
    color: 'quantum-green',
    cta: 'Bekijk Werkplekbeheer'
  },
  {
    icon: Cloud,
    title: 'Cloud & Microsoft 365',
    description: 'Optimaal werken in de cloud. Microsoft 365 beheer, e-mail, opslag en samenwerking.',
    features: ['Microsoft 365 beheer', 'E-mail & Exchange', 'OneDrive & SharePoint', 'Teams implementatie'],
    link: '/microsoft-365-beheer',
    color: 'quantum-purple',
    cta: 'Bekijk Cloud Diensten'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Bescherm uw bedrijf tegen digitale dreigingen. Van antivirus tot complete security audits.',
    features: ['Antivirus & anti-malware', 'Firewall & netwerkbeveiliging', 'Security awareness training', 'AVG & compliance'],
    link: '/cybersecurity',
    color: 'quantum-orange',
    cta: 'Bekijk Security'
  },
]

// Support modellen
export const supportModels: SupportModel[] = [
  {
    icon: Headphones,
    title: 'Remote IT Support',
    description: 'Directe hulp op afstand via telefoon of remote verbinding. Ideaal voor snelle vragen en softwareproblemen.',
    features: ['Directe verbinding met IT-expert', 'Scherm delen voor snelle diagnose', 'Geen reistijd, snelle oplossing', 'Beschikbaar tijdens kantooruren'],
    color: 'quantum-blue'
  },
  {
    icon: MapPin,
    title: 'On-Site IT Support',
    description: 'Een IT-specialist komt naar uw locatie voor hardwareproblemen, installaties of complexe issues.',
    features: ['Hands-on hulp op locatie', 'Hardware reparatie & installatie', 'Netwerk troubleshooting', 'Persoonlijk contact'],
    color: 'quantum-green'
  },
  {
    icon: CalendarCheck,
    title: 'Vaste IT-dag',
    description: 'Een vaste IT\'er op uw locatie, bijvoorbeeld één dag per week. Uw eigen "IT-afdeling" zonder vast dienstverband.',
    features: ['Vaste IT\'er die uw omgeving kent', 'Structurele ondersteuning', 'Direct aanspreekpunt voor medewerkers', 'Preventief onderhoud inbegrepen'],
    color: 'quantum-purple'
  },
]

// Trust indicators
export const trustIndicators: TrustIndicator[] = [
  {
    icon: ShieldCheck,
    title: 'AVG-compliant',
    description: 'Wij werken volgens AVG-richtlijnen en zorgen voor veilige gegevensverwerking.'
  },
  {
    icon: FileCheck,
    title: 'SLA op maat',
    description: 'Duidelijke afspraken over responstijden en serviceniveaus.'
  },
  {
    icon: Activity,
    title: 'Snelle reactie',
    description: 'Direct aan de slag wanneer u ons nodig heeft.'
  },
  {
    icon: BookOpen,
    title: 'Volledige documentatie',
    description: 'Alle wijzigingen worden vastgelegd zodat u altijd inzicht heeft.'
  },
]

// Waarom kiezen voor ons
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Clock,
    title: 'Snelle Respons',
    description: 'Geen eindeloze wachttijden. U spreekt direct met een IT-expert die uw probleem begrijpt en oplost.',
    stat: 'Direct',
    statLabel: 'persoonlijk contact'
  },
  {
    icon: UserCheck,
    title: 'Persoonlijk Contact',
    description: 'Geen anonieme callcenters. U kent uw IT\'er en uw IT\'er kent uw bedrijf en systemen.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Alles Op Maat',
    description: 'Geen standaardpakketten die niet passen. Wij stemmen de support af op úw situatie en budget.',
    stat: '100%',
    statLabel: 'flexibele SLA\'s'
  },
  {
    icon: ThumbsUp,
    title: 'Echte Oplossingen',
    description: 'Wij lossen problemen écht op, geen tijdelijke pleisters. En we leggen uit wat we doen.',
    stat: 'Grondig',
    statLabel: 'geen halve oplossingen'
  },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'U belt of mailt',
    description: 'Probleem? Neem contact op via telefoon, e-mail of ons klantenportaal.',
    icon: MessageSquare
  },
  {
    step: '02',
    title: 'Wij analyseren',
    description: 'Een IT-specialist beoordeelt uw vraag en bepaalt de beste aanpak.',
    icon: Search
  },
  {
    step: '03',
    title: 'Wij lossen op',
    description: 'Remote of on-site - wij werken tot het probleem is opgelost.',
    icon: Wrench
  },
  {
    step: '04',
    title: 'U bent geholpen',
    description: 'Probleem opgelost, uitleg gegeven, en advies voor de toekomst.',
    icon: CheckCircle2
  },
]

// FAQ
export const faqs: FAQ[] = [
  {
    q: 'Hoe snel kunnen jullie reageren bij een storing?',
    a: 'Dat hangt af van uw SLA. Bij kritieke storingen reageren we meestal binnen 30 minuten. Voor minder urgente zaken hanteren we responstijden van 4 uur tot next-business-day, afhankelijk van uw afspraken.'
  },
  {
    q: 'Kunnen jullie ook op locatie komen?',
    a: 'Ja, wij bieden zowel remote support als on-site ondersteuning. Voor hardwareproblemen, installaties of complexe netwerkissues komen we naar uw locatie. Remote support is vaak sneller en wordt daarom als eerste optie ingezet.'
  },
  {
    q: 'Wat kost IT support bij jullie?',
    a: 'Wij werken met flexibele tariefmodellen: strippenkaart, vast uurtarief of een vast maandbedrag. De kosten hangen af van het aantal werkplekken, de gewenste responstijd en de scope van het beheer. Vraag een vrijblijvende offerte aan voor een prijs op maat.'
  },
  {
    q: 'Nemen jullie bestaande IT-omgevingen over?',
    a: 'Ja, wij nemen regelmatig IT-omgevingen over van andere partijen of interne IT-ers. We beginnen met een grondige inventarisatie, documenteren alles en zorgen voor een soepele transitie zonder onderbreking van uw bedrijfsvoering.'
  },
  {
    q: 'Werken jullie ook voor kleine bedrijven of ZZP\'ers?',
    a: 'Zeker. Wij ondersteunen bedrijven van ZZP tot 150+ medewerkers. Voor kleinere bedrijven is een strippenkaart vaak de beste optie - u betaalt alleen voor de support die u daadwerkelijk gebruikt.'
  },
]
