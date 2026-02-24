import {
  Bot, Workflow, BarChart, Phone, FileSearch,
  Target, Rocket, TrendingUp, Puzzle,
  ShieldCheck, HeartHandshake
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface AIService {
  icon: LucideIcon
  title: string
  description: string
  href: string
  features: string[]
  stat: string
  statLabel: string
}

interface WhyUsItem {
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

// AI diensten/subdiensten
export const services: AIService[] = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: '24/7 klantenservice met een AI die vragen beantwoordt, leads kwalificeert en afspraken inplant.',
    href: '/ai/chatbots',
    features: ['24/7 beschikbaarheid', 'Lead kwalificatie', 'CRM integratie', 'Menselijke overdracht'],
    stat: '80%',
    statLabel: 'vragen direct beantwoord'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automatiseer repetitieve taken zoals data-invoer, facturatie en rapportages.',
    href: '/ai/process-automation',
    features: ['Data-invoer automatisering', 'Document verwerking', 'Workflow automatisering', 'Software koppelingen'],
    stat: '40%',
    statLabel: 'tijdsbesparing'
  },
  {
    icon: BarChart,
    title: 'AI Analytics',
    description: 'Transformeer data in acties met voorspellende analyses en real-time inzichten.',
    href: '/ai/analytics',
    features: ['Voorspellende analyses', 'Klantgedrag inzicht', 'Trend detectie', 'Real-time dashboards'],
    stat: '3x',
    statLabel: 'snellere inzichten'
  },
  {
    icon: Phone,
    title: 'Virtuele Assistent',
    description: 'Een slimme assistent voor telefoongesprekken, afspraakplanning en agendabeheer.',
    href: '/ai/virtual-assistant',
    features: ['Intelligente call routing', 'Automatische planning', 'Transcriptie', '24/7 bereikbaar'],
    stat: '95%',
    statLabel: 'bereikbaarheid'
  },
]

// Werkwijze/Proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Gratis AI Scan',
    description: 'We analyseren uw processen en identificeren de beste AI kansen voor uw bedrijf.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Oplossing & ROI',
    description: 'We presenteren concrete AI oplossingen met een duidelijke business case en ROI berekening.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Snelle implementatie met minimale verstoring. Uw team wordt volledig getraind.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue monitoring en optimalisatie voor maximale resultaten.',
    icon: TrendingUp
  },
]

// Waarom Start Beheer voor AI
export const whyUs: WhyUsItem[] = [
  {
    icon: BarChart,
    title: 'Meetbare ROI',
    description: 'We implementeren alleen AI die zichzelf gegarandeerd terugverdient, met duidelijke KPIs.',
    stat: '100%',
    statLabel: 'ROI focus'
  },
  {
    icon: Puzzle,
    title: 'Naadloze Integratie',
    description: 'Onze AI werkt perfect samen met uw bestaande software en processen.',
    stat: 'Alle',
    statLabel: 'systemen'
  },
  {
    icon: ShieldCheck,
    title: 'Veilig & Ethisch',
    description: 'Uw data is veilig en onze AI wordt ethisch en verantwoordelijk ingezet.',
    stat: 'AVG',
    statLabel: 'compliant'
  },
  {
    icon: HeartHandshake,
    title: 'Jargon-vrij',
    description: 'Wij spreken uw taal, geen technische termen. U begrijpt precies wat u krijgt.',
    stat: '1',
    statLabel: 'aanspreekpunt'
  },
]

// FAQ - geoptimaliseerd voor SEO
export const faqs: FAQ[] = [
  {
    q: 'Wat kost AI implementatie voor het MKB?',
    a: 'De kosten voor AI implementatie variëren sterk per oplossing. Een eenvoudige chatbot start vanaf €500/maand, terwijl complexe process automation projecten een eenmalige investering van €5.000-€15.000 vragen. Belangrijk: onze focus ligt altijd op ROI - de investering moet zichzelf terugverdienen.'
  },
  {
    q: 'Vervangt AI mijn medewerkers?',
    a: 'Nee, AI vervangt taken, geen mensen. Het doel is om uw medewerkers te "augmenteren": bevrijd hen van saai, repetitief werk, zodat zij zich kunnen richten op creativiteit, strategie en complex klantcontact. AI maakt uw team productiever, niet kleiner.'
  },
  {
    q: 'Hoe snel zie ik resultaat van AI?',
    a: 'Afhankelijk van de complexiteit, maar onze projecten leveren vaak al binnen 4 tot 6 weken de eerste meetbare resultaten op. Bij chatbots ziet u direct effect, bij process automation duurt de implementatie iets langer maar is de impact groter.'
  },
  {
    q: 'Is mijn bedrijf geschikt voor AI?',
    a: 'Als uw bedrijf processen heeft die herhaaldelijk worden uitgevoerd, of als u veel klantcontact heeft, is de kans 99% dat u kunt profiteren van AI. Onze gratis AI Scan is de perfecte manier om vrijblijvend uw specifieke kansen te ontdekken.'
  },
  {
    q: 'Welke AI oplossing levert het meeste op?',
    a: 'Dit hangt af van uw situatie. Voor bedrijven met veel klantcontact is een AI chatbot vaak het meest impactvol. Voor administratie-intensieve bedrijven is process automation de winnaar. Onze AI Scan helpt u de beste keuze te maken.'
  },
  {
    q: 'Hoe werkt AI samen met mijn huidige software?',
    a: 'Onze AI-oplossingen integreren naadloos met populaire software zoals Microsoft 365, HubSpot, Salesforce, en vele anderen. We gebruiken standaard API-koppelingen en kunnen custom integraties bouwen waar nodig.'
  },
]
