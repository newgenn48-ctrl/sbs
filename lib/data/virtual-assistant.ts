import type { LucideIcon } from 'lucide-react'
import {
  PhoneCall, Calendar, MessageSquare, Globe, FileText, Bell,
  Clock, Zap, Target, Volume2, Mic, Settings, Phone
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
    icon: PhoneCall,
    title: 'Telefonische Afhandeling',
    description: 'AI die telefoongesprekken voert, doorverbindt en berichten noteert.',
    features: ['Gesprekken beantwoorden', 'Intelligent doorverbinden', 'Voicemail naar tekst', 'Call screening'],
    color: 'warm'
  },
  {
    icon: Calendar,
    title: 'Afspraakplanning',
    description: 'Automatisch afspraken inplannen, verzetten en bevestigen.',
    features: ['Agenda synchronisatie', 'Beschikbaarheid check', 'Automatische bevestiging', 'Herinneringen'],
    color: 'blue'
  },
  {
    icon: MessageSquare,
    title: 'Lead Intake',
    description: 'Kwalificeer leads telefonisch en verzamel alle benodigde informatie.',
    features: ['Gestructureerde intake', 'Lead scoring', 'CRM integratie', 'Follow-up scheduling'],
    color: 'emerald'
  },
  {
    icon: Globe,
    title: 'Meertalig',
    description: 'Communiceer met klanten in hun eigen taal. Nederlands, Engels, Duits en meer.',
    features: ['Nederlands', 'Engels', 'Duits', 'Frans & Spaans'],
    color: 'warm'
  },
  {
    icon: FileText,
    title: 'Transcriptie & Samenvatting',
    description: 'Automatische transcriptie en samenvatting van alle gesprekken.',
    features: ['Real-time transcriptie', 'Samenvatting per gesprek', 'Actie-items extractie', 'Zoekbare historie'],
    color: 'warm'
  },
  {
    icon: Bell,
    title: 'Notificaties & Escalatie',
    description: 'Krijg alerts bij belangrijke oproepen en automatische escalatie.',
    features: ['Urgente oproep alerts', 'VIP klant herkenning', 'Escalatie workflows', 'Real-time notificaties'],
    color: 'blue'
  },
]

export const whyAssistant: WhyItem[] = [
  {
    icon: Clock,
    title: '24/7 Bereikbaar',
    description: 'Nooit meer een gemiste oproep. Uw assistent is altijd beschikbaar.',
    stat: '24/7',
    statLabel: 'bereikbaar'
  },
  {
    icon: Zap,
    title: 'Direct Antwoord',
    description: 'Geen wachttijden. Elke beller wordt direct te woord gestaan.',
    stat: '0s',
    statLabel: 'wachttijd'
  },
  {
    icon: Target,
    title: '95% Afhandeling',
    description: 'De meeste oproepen worden direct afgehandeld zonder tussenkomst.',
    stat: '95%',
    statLabel: 'direct'
  },
  {
    icon: Volume2,
    title: 'Natuurlijke Stem',
    description: 'Natuurlijke AI-stem die niet van een mens te onderscheiden is.',
    stat: 'HD',
    statLabel: 'voice quality'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Intake',
    description: 'We analyseren uw telefonische processen en wensen.',
    icon: Target
  },
  {
    step: '02',
    title: 'Training',
    description: 'De assistent wordt getraind op uw bedrijf, diensten en FAQ.',
    icon: Mic
  },
  {
    step: '03',
    title: 'Integratie',
    description: 'Koppeling met uw telefonie, agenda en CRM systemen.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Go-Live',
    description: 'Na testing gaat uw virtuele assistent live. Wij blijven optimaliseren.',
    icon: Phone
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Klinkt de AI-stem echt natuurlijk?',
    a: 'Ja, we gebruiken de nieuwste text-to-speech technologie. De stemmen zijn nauwelijks van echte mensen te onderscheiden. U kunt kiezen uit verschillende stemmen en we stemmen de intonatie af op uw merk.'
  },
  {
    q: 'Wat als de beller een complex probleem heeft?',
    a: 'De assistent herkent wanneer een gesprek te complex wordt en draagt direct over aan een medewerker. Alle context wordt meegestuurd zodat de klant niet opnieuw hoeft uit te leggen. U bepaalt zelf de escalatieregels.'
  },
  {
    q: 'Kan de assistent mijn agenda beheren?',
    a: 'Ja, de assistent integreert met Google Calendar, Outlook, Calendly en andere agenda-tools. Hij kan afspraken inplannen, verzetten en annuleren, rekening houdend met uw beschikbaarheid en voorkeuren.'
  },
  {
    q: 'Hoe zit het met privacy van telefoongesprekken?',
    a: 'Alle gesprekken worden verwerkt conform AVG. Opnames en transcripties worden veilig opgeslagen in Europa. Bellers worden geïnformeerd dat ze met een AI spreken. U bepaalt zelf wat er wordt bewaard.'
  },
]
