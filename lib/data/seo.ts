import {
  Zap, FileText, Link as LinkIcon, Globe,
  Target, BarChart, TrendingUp, Award,
  Shield, Search
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface SEOService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface WhySEOItem {
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

// SEO diensten
export const services: SEOService[] = [
  {
    icon: Zap,
    title: 'Technische SEO',
    description: 'Een waterdicht technisch fundament dat Google begrijpt en snel kan crawlen.',
    features: ['Core Web Vitals optimalisatie', 'Schema markup', 'Crawl budget optimalisatie', 'Internationale SEO'],
    color: 'blue'
  },
  {
    icon: FileText,
    title: 'Content Strategie',
    description: 'Content die niet alleen informeert, maar ook autoriteit en rankings bouwt.',
    features: ['Diepgaand keyword research', 'Content gap analyse', 'Topical authority mapping', '10x content creatie'],
    color: 'emerald'
  },
  {
    icon: LinkIcon,
    title: 'Linkbuilding',
    description: 'Hoogwaardige backlinks die vertrouwen en autoriteit opbouwen.',
    features: ['Digitale PR campagnes', 'Link-earning strategieën', 'Concurrentie backlink analyse', 'Broken link recovery'],
    color: 'violet'
  },
  {
    icon: Globe,
    title: 'Local SEO',
    description: 'Domineer lokale zoekresultaten en Google Maps voor uw regio.',
    features: ['Google Business optimalisatie', 'Lokale citations', 'Review management', 'Local pack rankings'],
    color: 'warm'
  },
  {
    icon: Target,
    title: 'Keyword Research',
    description: 'Ontdek de zoekwoorden waar uw klanten daadwerkelijk naar zoeken.',
    features: ['Search intent analyse', 'Long-tail opportunities', 'Concurrentie keyword analyse', 'Keyword clustering'],
    color: 'blue'
  },
  {
    icon: BarChart,
    title: 'Reporting & Analyse',
    description: 'Transparante rapportage met focus op resultaten die ertoe doen.',
    features: ['Live dashboard 24/7', 'Traffic & conversie tracking', 'ROI rapportage', 'Maandelijkse strategiesessies'],
    color: 'emerald'
  },
]

// Waarom SEO
export const whySEO: WhySEOItem[] = [
  {
    icon: TrendingUp,
    title: 'Duurzame Groei',
    description: 'SEO bouwt een fundament dat maanden en jaren blijft renderen, geen tijdelijke boost.',
    stat: 'Langetermijn',
    statLabel: 'investering'
  },
  {
    icon: Award,
    title: 'Gratis Verkeer',
    description: 'Organisch verkeer kost geen klik-kosten. Elke bezoeker is pure winst.',
    stat: '€0',
    statLabel: 'per klik'
  },
  {
    icon: Shield,
    title: 'Autoriteit Opbouwen',
    description: 'Hoge rankings positioneren u als expert en marktleider in uw vakgebied.',
    stat: 'Top 3',
    statLabel: 'posities'
  },
  {
    icon: BarChart,
    title: 'Lagere Kosten',
    description: 'Minder afhankelijk van betaalde advertenties met steeds hogere kosten.',
    stat: '-60%',
    statLabel: 'ad spend'
  },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Diepgaande analyse van uw website, concurrentie en groeikansen.',
    icon: Search
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'Datagedreven SEO-strategie afgestemd op uw bedrijfsdoelen.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Technische optimalisaties, content creatie en linkbuilding campagnes.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Monitoring',
    description: 'Continue optimalisatie op basis van data en Google updates.',
    icon: TrendingUp
  },
]

// FAQ
export const faqs: FAQ[] = [
  {
    q: 'Hoe lang duurt het voordat we resultaten zien?',
    a: 'SEO is een marathon, geen sprint. Technische verbeteringen kunnen binnen weken effect hebben, maar duurzame autoriteit en top rankings duren meestal 3-6 maanden. Dit is een investering in structurele groei, in tegenstelling tot betaalde advertenties die stoppen zodra u stopt met betalen.'
  },
  {
    q: 'Garanderen jullie nummer 1 posities?',
    a: 'Nee, en elk bureau dat dit doet is onbetrouwbaar. Google\'s algoritme is complex en verandert constant. Wat we wel garanderen is meetbare verbetering in organische zichtbaarheid, verkeer en leads door bewezen white-hat SEO-strategieën toe te passen.'
  },
  {
    q: 'Gebruiken jullie alleen white-hat SEO methoden?',
    a: 'Absoluut. We gebruiken alleen door Google goedgekeurde, duurzame strategieën. Geen riskante trucjes, spam of manipulatie. Onze focus ligt op het bouwen van echte waarde en autoriteit die bestand is tegen alle Google updates.'
  },
  {
    q: 'Hoe meten jullie het succes van een SEO-campagne?',
    a: 'We kijken verder dan alleen rankings. Onze rapportages focussen op wat echt belangrijk is: groei in organisch verkeer, toename in conversies (leads, verkopen), en verbetering van uw keyword footprint. Alles wordt bijgehouden in een transparant live-dashboard dat u 24/7 kunt raadplegen.'
  },
]
