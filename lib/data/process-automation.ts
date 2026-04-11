import type { ServiceColorKey } from '@/lib/colors'
import type { LucideIcon } from 'lucide-react'
import {
  FileText, Mail, Database, Calculator, Upload, AlertCircle,
  Clock, TrendingUp, Zap, Target, Cog, Settings, RefreshCw
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: ServiceColorKey
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
    icon: FileText,
    title: 'Document Processing',
    description: 'Automatisch verwerken van facturen, contracten en formulieren met AI.',
    features: ['Factuurherkenning', 'Contract extractie', 'Form processing', 'Data validatie'],
    color: 'violet'
  },
  {
    icon: Mail,
    title: 'Email Automatisering',
    description: 'Sorteer, classificeer en beantwoord emails automatisch.',
    features: ['Email routing', 'Auto-responses', 'Attachment processing', 'Spam filtering'],
    color: 'blue'
  },
  {
    icon: Database,
    title: 'Data Synchronisatie',
    description: 'Houd al uw systemen automatisch up-to-date en gesynchroniseerd.',
    features: ['Multi-system sync', 'Real-time updates', 'Conflict resolution', 'Data mapping'],
    color: 'emerald'
  },
  {
    icon: Calculator,
    title: 'Rapportage Automatisering',
    description: 'Genereer automatisch rapporten en dashboards uit uw data.',
    features: ['Scheduled reports', 'Custom templates', 'Data aggregatie', 'Auto-distributie'],
    color: 'warm'
  },
  {
    icon: Upload,
    title: 'Workflow Triggers',
    description: 'Start automatisch workflows op basis van events en condities.',
    features: ['Event-based triggers', 'Conditional logic', 'Approval flows', 'Notificaties'],
    color: 'violet'
  },
  {
    icon: AlertCircle,
    title: 'Monitoring & Alerts',
    description: 'Krijg automatisch notificaties bij afwijkingen of belangrijke events.',
    features: ['Error detection', 'Threshold alerts', 'Performance monitoring', 'Audit logging'],
    color: 'blue'
  },
]

export const whyAutomation: WhyItem[] = [
  {
    icon: Clock,
    title: 'Tijd Besparen',
    description: 'Bespaar gemiddeld 15-20 uur per week op repetitieve taken.',
    stat: '40%',
    statLabel: 'tijdwinst'
  },
  {
    icon: AlertCircle,
    title: 'Minder Fouten',
    description: 'Elimineer menselijke fouten in data-invoer en processen.',
    stat: '95%',
    statLabel: 'accuratesse'
  },
  {
    icon: TrendingUp,
    title: 'Schaalbaarheid',
    description: 'Groei zonder extra personeel. Automatisering schaalt mee.',
    stat: '10x',
    statLabel: 'schaalbaar'
  },
  {
    icon: Zap,
    title: 'Snelheid',
    description: 'Processen die uren duurden nu in seconden afgerond.',
    stat: '100x',
    statLabel: 'sneller'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Process Mapping',
    description: 'We brengen uw huidige processen en bottlenecks in kaart.',
    icon: Target
  },
  {
    step: '02',
    title: 'Ontwerp',
    description: 'We ontwerpen de geoptimaliseerde, geautomatiseerde workflow.',
    icon: Cog
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We bouwen en testen de automatisering in uw omgeving.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue monitoring en verbetering van de workflows.',
    icon: RefreshCw
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Welke processen kunnen geautomatiseerd worden?',
    a: 'Bijna elk repetitief proces kan geautomatiseerd worden: data-invoer, email verwerking, rapportages, factuurverwerking, lead follow-up, social media posting, backup processen, en veel meer. Als u het vaker dan 3x per week doet, is het waarschijnlijk te automatiseren.'
  },
  {
    q: 'Welke tools gebruiken jullie?',
    a: 'We werken met tools als Zapier, Make (Integromat), n8n, en custom scripting. De keuze hangt af van uw bestaande systemen en de complexiteit van de automatisering. We adviseren altijd de meest kosteneffectieve oplossing.'
  },
  {
    q: 'Wat als er iets mis gaat in de automatisering?',
    a: 'Alle automatiseringen worden gebouwd met uitgebreide error handling en fallback mechanismen. U krijgt direct notificaties bij problemen. Daarnaast monitoren wij de flows en kunnen snel ingrijpen indien nodig.'
  },
  {
    q: 'Kunnen bestaande medewerkers de automatisering beheren?',
    a: 'Ja, we zorgen ervoor dat uw team de automatisering kan monitoren en kleine aanpassingen kan maken. We leveren documentatie en training. Voor complexe wijzigingen kunt u altijd bij ons terecht.'
  },
  {
    q: 'Wat is de gemiddelde terugverdientijd van proces automatisering?',
    a: 'De meeste automatiseringsprojecten verdienen zichzelf binnen 3-6 maanden terug. Dit hangt af van de tijdwinst, het uurtarief van de betrokken medewerkers en de vermindering van fouten. We berekenen vooraf de verwachte ROI zodat u een onderbouwde beslissing kunt nemen.'
  },
]
