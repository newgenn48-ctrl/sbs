import type { ServiceColorKey } from '@/lib/colors'
import {
  Search, Target, MousePointer, TrendingUp,
  LineChart, Eye, Zap, Filter, BarChart3
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface GoogleAdsService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: ServiceColorKey
}

interface WhyGoogleAdsItem {
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

export const services: GoogleAdsService[] = [
  {
    icon: Search,
    title: 'Zoekwoord Strategie',
    description: 'Vind de meest winstgevende zoekwoorden voor uw business met onze diepgaande analyse.',
    features: ['Long-tail keywords', 'Concurrentie analyse', 'Intentie mapping', 'Negatieve keywords'],
    color: 'emerald'
  },
  {
    icon: Target,
    title: 'Doelgroep Targeting',
    description: 'Bereik uw ideale klant op basis van demografie, locatie en online gedrag.',
    features: ['Locatie targeting', 'Demografie filters', 'Remarketing', 'Lookalike audiences'],
    color: 'blue'
  },
  {
    icon: MousePointer,
    title: 'Advertentie Creatie',
    description: 'Overtuigende advertenties die klikken genereren en converteren.',
    features: ['A/B testing', 'Responsive ads', 'Ad extensions', 'Call-to-actions'],
    color: 'violet'
  },
  {
    icon: TrendingUp,
    title: 'Conversie Optimalisatie',
    description: 'Maximaliseer uw ROI met continue optimalisatie van campagnes.',
    features: ['Conversie tracking', 'Landingspagina advies', 'Quality Score', 'Bid management'],
    color: 'warm'
  },
  {
    icon: LineChart,
    title: 'Shopping Campagnes',
    description: 'Voor e-commerce: toon uw producten direct in de zoekresultaten.',
    features: ['Product feed setup', 'Shopping ads', 'Performance Max', 'Merchant Center'],
    color: 'emerald'
  },
  {
    icon: Eye,
    title: 'Rapportage & Inzicht',
    description: 'Real-time inzicht in uw campagne prestaties via ons dashboard.',
    features: ['Live dashboard', 'ROI rapportage', 'Conversie attributie', 'Maandelijkse reviews'],
    color: 'blue'
  },
]

export const whyGoogleAds: WhyGoogleAdsItem[] = [
  {
    icon: Zap,
    title: 'Direct Resultaat',
    description: 'Binnen 24 uur zichtbaar bij klanten die actief zoeken naar uw product of dienst.',
    stat: '24u',
    statLabel: 'tot zichtbaar'
  },
  {
    icon: Target,
    title: 'Meetbare ROI',
    description: 'Precies weten hoeveel elke euro oplevert. Geen giswerk, maar data.',
    stat: '100%',
    statLabel: 'meetbaar'
  },
  {
    icon: Filter,
    title: 'Gerichte Targeting',
    description: 'Bereik alleen de mensen die echt geïnteresseerd zijn in uw aanbod.',
    stat: 'Hyper',
    statLabel: 'targeted'
  },
  {
    icon: TrendingUp,
    title: 'Schaalbaar',
    description: 'Begin klein, schaal op wanneer het werkt. Volledige controle over uw budget.',
    stat: 'Flex',
    statLabel: 'budget'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Audit & Analyse',
    description: 'We analyseren uw huidige situatie, markt en concurrentie.',
    icon: Search
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'We ontwikkelen een campagne strategie gericht op uw doelen.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We bouwen en lanceren uw campagnes met conversie tracking.',
    icon: BarChart3
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Dagelijkse monitoring en wekelijkse optimalisatie voor maximale ROI.',
    icon: TrendingUp
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Wat is het minimale advertentiebudget?',
    a: 'Voor de meeste MKB-bedrijven raden we een minimaal startbudget aan van €500 tot €1000 per maand. Dit geeft ons voldoende data om de campagnes effectief te optimaliseren. Voor zeer competitieve markten kan een hoger budget nodig zijn.'
  },
  {
    q: 'Hoe snel kan ik resultaten verwachten?',
    a: 'De eerste klikken en impressies ziet u vaak binnen 24 uur. Betekenisvolle resultaten zoals een stabiele stroom van leads duren doorgaans 60-90 dagen. Dit is de tijd die nodig is om voldoende data te verzamelen en te optimaliseren.'
  },
  {
    q: 'Wat maakt jullie aanpak anders?',
    a: 'Onze focus ligt op radicale transparantie en een 100% data-gedreven aanpak. U krijgt een live-dashboard met al uw campagnedata. Elke beslissing wordt onderbouwd met data, niet met onderbuikgevoel.'
  },
  {
    q: 'Werken jullie met vaste contracten?',
    a: 'Nee, wij geloven in onze resultaten en bieden maandelijks opzegbare contracten. We zijn ervan overtuigd dat onze prestaties de beste reden zijn om te blijven.'
  },
]
