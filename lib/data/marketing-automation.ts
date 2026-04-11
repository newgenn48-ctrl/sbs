import type { ServiceColorKey } from '@/lib/colors'
import {
  Mail, Workflow, Target, Filter, Users,
  BarChart3, Clock, RefreshCw, TrendingUp,
  Zap, Settings
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface AutomationService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: ServiceColorKey
}

interface WhyAutomationItem {
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

// Marketing Automation diensten
export const services: AutomationService[] = [
  {
    icon: Mail,
    title: 'Lead Nurturing',
    description: 'Automatische e-mailreeksen die koude leads omzetten in warme, gekwalificeerde prospects.',
    features: ['Drip campaigns', 'Triggered emails', 'A/B testing', 'Personalisatie'],
    color: 'blue'
  },
  {
    icon: Workflow,
    title: 'Email Automation',
    description: 'Complete e-mailworkflows die automatisch reageren op klantgedrag en -acties.',
    features: ['Welcome series', 'Abandoned cart', 'Re-engagement', 'Transactional mails'],
    color: 'blue'
  },
  {
    icon: Target,
    title: 'CRM Integratie',
    description: 'Naadloze koppeling met uw CRM voor perfecte data-sync en lead tracking.',
    features: ['HubSpot', 'Salesforce', 'Pipedrive', 'Custom CRM'],
    color: 'blue'
  },
  {
    icon: Filter,
    title: 'Behavior-based Triggers',
    description: 'Automatische acties op basis van websitebezoek, downloads en klantgedrag.',
    features: ['Pagina bezoeken', 'Content downloads', 'Event tracking', 'Score updates'],
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Sales Handoff',
    description: 'Intelligente overdracht van marketing naar sales op het perfecte moment.',
    features: ['Lead scoring', 'Auto-assignment', 'Sales notifications', 'Deal creation'],
    color: 'blue'
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Realtime inzicht in campagneprestaties, conversies en ROI.',
    features: ['Conversie tracking', 'Attribution', 'ROI dashboards', 'Custom reports'],
    color: 'blue'
  },
]

// Waarom Marketing Automation
export const whyAutomation: WhyAutomationItem[] = [
  {
    icon: Clock,
    title: 'Tijdsbesparing',
    description: 'Automatiseer repetitieve taken en besteed meer tijd aan strategie en creativiteit.',
    stat: '15u',
    statLabel: 'per week'
  },
  {
    icon: RefreshCw,
    title: 'Consistente Opvolging',
    description: 'Elke lead krijgt de juiste boodschap op het juiste moment, automatisch.',
    stat: '100%',
    statLabel: 'follow-up'
  },
  {
    icon: TrendingUp,
    title: 'Hogere Conversie',
    description: 'Gepersonaliseerde nurturing verhoogt uw conversieratio significant.',
    stat: '+35%',
    statLabel: 'conversie'
  },
  {
    icon: Zap,
    title: 'Schaalbaar',
    description: 'Groei zonder evenredig meer mankracht. Uw systemen groeien mee.',
    stat: '10x',
    statLabel: 'capaciteit'
  },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse',
    description: 'We analyseren uw huidige processen, klantreis en identificeren automatiseringskansen.',
    icon: Target
  },
  {
    step: '02',
    title: 'Setup',
    description: 'We bouwen uw workflows, e-mailcampagnes en lead scoring in het gekozen platform.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Integratie',
    description: 'We koppelen alle systemen (CRM, website, analytics) voor naadloze data-flow.',
    icon: RefreshCw
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue verbetering op basis van data, A/B testing en performance metrics.',
    icon: TrendingUp
  },
]

// FAQ
export const faqs: FAQ[] = [
  {
    q: 'Met welke marketing automation platforms werken jullie?',
    a: 'Wij zijn platform-agnostisch en hebben expertise in HubSpot, ActiveCampaign, Mailchimp, Klaviyo en andere platforms. We adviseren altijd het platform dat het beste bij uw bedrijf, doelen en budget past.'
  },
  {
    q: 'Hoe complex is marketing automation om te implementeren?',
    a: 'De complexiteit hangt af van uw bestaande systemen en doelen. Wij zorgen voor de volledige implementatie - van strategie tot technische setup. U hoeft geen technische kennis te hebben, wij regelen alles.'
  },
  {
    q: 'Wat moeten wij aanleveren om te starten?',
    a: 'Uw kennis van uw klanten en verkoopproces is de belangrijkste input. Daarnaast hebben we toegang nodig tot uw huidige systemen (CRM, website, etc.). Wij vertalen uw strategie naar geautomatiseerde workflows.'
  },
  {
    q: 'Hoe wordt het succes gemeten?',
    a: 'We focussen op KPIs die er echt toe doen: hogere conversieratio\'s, verhoogde Customer Lifetime Value (CLV), tijd bespaard door uw team, en uiteraard ROI. U krijgt toegang tot realtime dashboards met alle belangrijke metrics.'
  },
  {
    q: 'Kunnen jullie ook bestaande automation workflows overnemen of verbeteren?',
    a: 'Absoluut. Veel klanten hebben al een begin gemaakt met marketing automation maar halen er niet het maximale uit. Wij auditen uw huidige setup, identificeren verbeterpunten en optimaliseren de workflows. Dit levert vaak sneller resultaat op dan volledig opnieuw beginnen.'
  },
]
