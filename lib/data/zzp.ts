import type { LucideIcon } from 'lucide-react'
import {
  Globe, Mail, Search, ShieldCheck,
  FileSearch, Target, Rocket, TrendingUp,
  Zap, BarChart3, Award
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

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
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
    icon: Globe,
    title: 'Professionele Website',
    description: 'Een website die werkt als uw beste verkoper. 24/7 online, geoptimaliseerd voor Google.',
    features: ['Conversiegericht design', 'Mobiel geoptimaliseerd', 'Sub-seconde laadtijden', 'SSL beveiliging'],
    color: '#00FF88'
  },
  {
    icon: Mail,
    title: 'Zakelijke E-mail',
    description: 'Microsoft 365 e-mail met uw eigen domeinnaam. Professioneel en betrouwbaar.',
    features: ['Eigen domein e-mail', 'Microsoft 365 apps', 'Automatische backups', '50GB opslag'],
    color: '#00D9FF'
  },
  {
    icon: Search,
    title: 'Lokale SEO',
    description: 'Word gevonden door klanten in uw regio. Domineer de lokale zoekresultaten.',
    features: ['Google Mijn Bedrijf', 'Lokale zoekwoorden', 'Review management', 'Maandrapportages'],
    color: '#A855F7'
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Security',
    description: 'Technische ondersteuning wanneer u het nodig heeft. Altijd bereikbaar.',
    features: ['Helpdesk support', 'Beveiligingsmonitoring', 'Software updates', 'Probleemoplossing'],
    color: '#FF6B6B'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Gratis Intake',
    description: 'We bespreken uw situatie, doelen en waar u nu tegenaan loopt.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Maatwerkplan',
    description: 'U ontvangt een concreet plan met exacte kosten en verwachte resultaten.',
    icon: Target
  },
  {
    step: '03',
    title: 'Snelle Setup',
    description: 'Binnen 2 weken staat alles live en werkt uw digitale basis perfect.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Continue Groei',
    description: 'Wij optimaliseren continu terwijl u focust op uw klanten.',
    icon: TrendingUp
  },
]

export const whyUs: WhyItem[] = [
  {
    icon: Target,
    title: 'ZZP Specialist',
    description: 'Wij begrijpen de uitdagingen van zelfstandigen en stemmen onze diensten hierop af.',
    stat: '100+',
    statLabel: 'ZZP klanten'
  },
  {
    icon: Zap,
    title: 'Alles-in-\u00E9\u00E9n',
    description: 'Geen gedoe met verschillende leveranciers. E\u00E9n aanspreekpunt voor al uw digitale zaken.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: BarChart3,
    title: 'Betaalbaar',
    description: 'Professionele oplossingen tegen tarieven die passen bij een ZZP-budget.',
    stat: 'Vanaf',
    statLabel: '\u20AC99/mnd'
  },
  {
    icon: Award,
    title: 'Resultaatgericht',
    description: 'Wij focussen op wat telt: meer zichtbaarheid, meer klanten, meer omzet.',
    stat: 'Meetbare',
    statLabel: 'resultaten'
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Wat kost een complete digitale oplossing voor een ZZP\'er?',
    a: 'Onze complete pakketten beginnen vanaf \u20AC99 per maand, inclusief website, e-mail, basis SEO en support. Voor een volledige prijsopgave op maat plannen we graag een gratis intake gesprek.'
  },
  {
    q: 'Is dit niet te duur voor een ZZP\'er?',
    a: 'Zie het als uw meest rendabele "medewerker". De tijd die u bespaart (gemiddeld 5-10 uur per maand) en de extra klanten die het oplevert, maken de investering ruimschoots terug. Bovendien zijn de kosten zakelijk aftrekbaar.'
  },
  {
    q: 'Ik ben niet technisch. Is dit moeilijk te begrijpen?',
    a: 'Juist niet. Wij nemen alle technische complexiteit weg en vertalen alles naar duidelijke taal. U focust op uw vak, wij op de technologie. Bij vragen staat onze helpdesk altijd klaar.'
  },
  {
    q: 'Hoe snel kan mijn website live staan?',
    a: 'Een professionele website hebben wij binnen 1-2 weken live staan. De snelheid hangt af van hoe snel u feedback geeft en content aanlevert. Wij zorgen voor een gestroomlijnd proces.'
  },
  {
    q: 'Kan ik klein beginnen en later uitbreiden?',
    a: 'Absoluut. Onze oplossingen zijn modulair opgebouwd. Start met wat u nu nodig heeft en breid uit naarmate uw bedrijf groeit. Geen langlopende contracten, maandelijks opzegbaar.'
  },
  {
    q: 'Wat als ik al een website heb?',
    a: 'Geen probleem. We kunnen uw bestaande website overnemen en optimaliseren, of adviseren of een nieuwe website meer oplevert. In een gratis intake bespreken we de beste optie voor uw situatie.'
  },
]
