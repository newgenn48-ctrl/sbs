import type { LucideIcon } from 'lucide-react'
import {
  MessageSquare, Target, Headphones, Globe, Sparkles, Settings,
  Clock, Zap, TrendingUp, Users, Bot
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
    icon: MessageSquare,
    title: 'Klantenservice Chatbot',
    description: 'Beantwoord 80% van de vragen automatisch. 24/7 beschikbaar, direct antwoord.',
    features: ['FAQ automatisering', 'Product informatie', 'Order status', 'Retour handling'],
    color: 'quantum-purple'
  },
  {
    icon: Target,
    title: 'Lead Kwalificatie',
    description: 'Kwalificeer leads automatisch. Vraag de juiste vragen en plan afspraken in.',
    features: ['Intake formulieren', 'Lead scoring', 'Afspraak planning', 'CRM integratie'],
    color: 'quantum-blue'
  },
  {
    icon: Headphones,
    title: 'Support Escalatie',
    description: 'Intelligente overdracht naar menselijke medewerkers wanneer nodig.',
    features: ['Sentiment analyse', 'Prioriteit bepaling', 'Gesprekscontext', 'Naadloze overdracht'],
    color: 'quantum-green'
  },
  {
    icon: Globe,
    title: 'Multi-channel',
    description: 'Dezelfde chatbot op uw website, WhatsApp, Facebook en meer.',
    features: ['Website widget', 'WhatsApp Business', 'Facebook Messenger', 'Instagram DM'],
    color: 'quantum-orange'
  },
  {
    icon: Sparkles,
    title: 'Personalisatie',
    description: 'Chatbot die uw klanten herkent en gepersonaliseerde service biedt.',
    features: ['Klantherkenning', 'Bestelhistorie', 'Voorkeuren onthouden', 'Proactieve suggesties'],
    color: 'quantum-purple'
  },
  {
    icon: Settings,
    title: 'Integraties',
    description: 'Koppel uw chatbot aan bestaande systemen voor naadloze workflows.',
    features: ['CRM systemen', 'E-commerce platforms', 'Helpdesk software', 'Agenda integratie'],
    color: 'quantum-blue'
  },
]

export const whyChatbots: WhyItem[] = [
  {
    icon: Clock,
    title: '24/7 Beschikbaar',
    description: 'Uw chatbot is altijd bereikbaar. Ook buiten kantooruren, in het weekend en op feestdagen.',
    stat: '24/7',
    statLabel: 'online'
  },
  {
    icon: Zap,
    title: 'Direct Antwoord',
    description: 'Geen wachttijd. Klanten krijgen direct antwoord op hun vragen.',
    stat: '<1s',
    statLabel: 'reactietijd'
  },
  {
    icon: TrendingUp,
    title: '80% Automatisering',
    description: 'De meeste vragen worden automatisch beantwoord. Uw team focust op complexe cases.',
    stat: '80%',
    statLabel: 'automatisch'
  },
  {
    icon: Users,
    title: 'Tevreden Klanten',
    description: 'Snelle, consistente service leidt tot hogere klanttevredenheid.',
    stat: '+25%',
    statLabel: 'NPS score'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse',
    description: 'We analyseren uw meest gestelde vragen en customer journey.',
    icon: Target
  },
  {
    step: '02',
    title: 'Ontwerp',
    description: 'We ontwerpen de gespreksflows en trainen de chatbot met uw content.',
    icon: Bot
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Chatbot wordt ge\u00EFntegreerd met uw website en systemen.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue verbetering op basis van gesprekken en feedback.',
    icon: TrendingUp
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Hoe slim is de chatbot echt?',
    a: 'Onze chatbots gebruiken de nieuwste AI technologie (GPT-4, Claude) en kunnen complexe vragen begrijpen. Ze leren continu bij op basis van gesprekken. Wel trainen we ze specifiek op uw content en bedrijf.'
  },
  {
    q: 'Kan de chatbot mijn merk/tone of voice overnemen?',
    a: 'Absoluut. We trainen de chatbot met uw merkrichtlijnen, tone of voice en voorbeeldgesprekken. De chatbot communiceert precies zoals u dat wilt.'
  },
  {
    q: 'Wat als de chatbot het antwoord niet weet?',
    a: 'De chatbot herkent wanneer hij het antwoord niet weet en draagt het gesprek naadloos over aan een medewerker. Alle context blijft behouden zodat de klant niet opnieuw hoeft uit te leggen.'
  },
  {
    q: 'Hoe zit het met privacy en data?',
    a: 'Alle data wordt verwerkt conform AVG. Gesprekken worden veilig opgeslagen in Europa. U kunt zelf bepalen welke data wordt bewaard en voor hoe lang.'
  },
  {
    q: 'Hoe lang duurt het om een chatbot te implementeren?',
    a: 'Een basis chatbot kan binnen 2-3 weken live staan. Voor complexere implementaties met meerdere integraties en uitgebreide kennisbanken rekenen we 4-6 weken. Na de livegang blijven we de chatbot optimaliseren op basis van echte gesprekken.'
  },
]
