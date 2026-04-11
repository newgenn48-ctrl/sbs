import type { LucideIcon } from 'lucide-react'
import {
  TrendingUp, Users, PieChart, Activity, AlertCircle, Lightbulb,
  Eye, Zap, Target, Database, Settings
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
    icon: TrendingUp,
    title: 'Voorspellende Analyses',
    description: 'AI die trends voorspelt voordat ze zichtbaar zijn. Anticipeer op veranderingen.',
    features: ['Sales forecasting', 'Demand prediction', 'Trend identificatie', 'Seizoenspatronen'],
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Klantinzichten',
    description: 'Begrijp uw klanten beter. Segmentatie, gedragsanalyse en churn voorspelling.',
    features: ['Klantsegmentatie', 'Gedragsanalyse', 'Churn prediction', 'Customer lifetime value'],
    color: 'violet'
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    description: 'Real-time dashboards met KPIs en metrics die er toe doen.',
    features: ['Real-time dashboards', 'Custom KPIs', 'Drill-down analyse', 'Benchmark data'],
    color: 'emerald'
  },
  {
    icon: Activity,
    title: 'Performance Analytics',
    description: 'Meet en optimaliseer de prestaties van uw campagnes en kanalen.',
    features: ['Marketing ROI', 'Channel performance', 'Conversion tracking', 'Attribution modelling'],
    color: 'warm'
  },
  {
    icon: AlertCircle,
    title: 'Anomalie Detectie',
    description: 'Automatische detectie van afwijkingen en onverwachte patronen in uw data.',
    features: ['Fraud detection', 'Error alerts', 'Outlier detection', 'Quality monitoring'],
    color: 'blue'
  },
  {
    icon: Lightbulb,
    title: 'AI Recommendations',
    description: 'Concrete aanbevelingen op basis van uw data. Van pricing tot content.',
    features: ['Pricing optimization', 'Product recommendations', 'Content suggestions', 'Next best action'],
    color: 'violet'
  },
]

export const whyAnalytics: WhyItem[] = [
  {
    icon: Eye,
    title: 'Diepe Inzichten',
    description: 'AI ontdekt patronen die menselijk oog niet ziet.',
    stat: '10x',
    statLabel: 'meer inzicht'
  },
  {
    icon: TrendingUp,
    title: 'Voorspellend',
    description: 'Voorspel trends voordat ze zichtbaar worden.',
    stat: '85%',
    statLabel: 'accuratesse'
  },
  {
    icon: Zap,
    title: 'Real-time',
    description: 'Direct inzicht, geen wachten op rapporten.',
    stat: 'Live',
    statLabel: 'data'
  },
  {
    icon: Target,
    title: 'Actionable',
    description: 'Concrete aanbevelingen, niet alleen data.',
    stat: 'ROI',
    statLabel: 'focused'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Data Audit',
    description: 'We inventariseren uw databronnen en bepalen de mogelijkheden.',
    icon: Database
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'We bepalen welke inzichten het meest waardevol zijn voor uw bedrijf.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We bouwen dashboards en AI-modellen op maat.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue verbetering van modellen en inzichten.',
    icon: TrendingUp
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Welke data hebben jullie nodig?',
    a: 'Dat hangt af van de doelstellingen. Typisch werken we met CRM data, sales data, website analytics, marketing data, en operationele data. We kunnen vrijwel elk data formaat verwerken en integreren met bestaande systemen.'
  },
  {
    q: 'Hoe accuraat zijn de voorspellingen?',
    a: 'De accuratesse hangt af van de kwaliteit en hoeveelheid data, en de complexiteit van wat voorspeld wordt. Typisch behalen onze modellen 75-90% accuratesse. We zijn altijd transparant over de betrouwbaarheid en monitoren de prestaties continu.'
  },
  {
    q: 'Is onze data veilig?',
    a: 'Absoluut. Alle data wordt verwerkt conform AVG en opgeslagen in beveiligde omgevingen in Europa. We werken met encryptie en strikte toegangscontroles. U behoudt volledige eigendom van uw data.'
  },
  {
    q: 'Kunnen we de dashboards zelf aanpassen?',
    a: 'Ja, we bouwen dashboards die u zelf kunt aanpassen en uitbreiden. U krijgt training en documentatie. Voor complexe aanpassingen of nieuwe AI-modellen kunt u altijd bij ons terecht.'
  },
  {
    q: 'Hoe lang duurt het voordat we resultaten zien?',
    a: 'De eerste dashboards en inzichten zijn meestal binnen 2-4 weken operationeel. Voorspellende modellen hebben wat meer tijd nodig om te trainen - reken op 4-8 weken voor betrouwbare voorspellingen, afhankelijk van de complexiteit en beschikbare data.'
  },
]
