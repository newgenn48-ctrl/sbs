import {
  BarChart3, Search, MessageCircle, Zap,
  FileSearch, Settings, Rocket, TrendingUp,
  Eye, ShieldCheck, Infinity, Users
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface MarketingService {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
  features: string[]
}

interface IntegratedApproachItem {
  title: string
  description: string
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

// Marketing diensten/subdiensten
export const services: MarketingService[] = [
  {
    icon: BarChart3,
    title: 'Google Ads Beheer',
    description: 'Direct resultaat met hyper-gerichte advertentiecampagnes die converteren.',
    href: '/marketing/google-ads-beheer',
    color: 'quantum-green',
    features: ['Zoekwoord strategie', 'Conversie optimalisatie', 'Shopping campagnes', 'Live dashboard']
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Verover de top van de zoekresultaten voor duurzame, organische groei.',
    href: '/marketing/seo-services',
    color: 'quantum-blue',
    features: ['Technische SEO', 'Content strategie', 'Linkbuilding', 'Local SEO']
  },
  {
    icon: MessageCircle,
    title: 'Social Media Marketing',
    description: 'Transformeer uw kanalen in een actieve community die converteert.',
    href: '/marketing/social-media',
    color: 'quantum-purple',
    features: ['LinkedIn B2B', 'Instagram & Meta', 'Content creatie', 'Community management']
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automatiseer uw marketing en sales voor schaalbare groei.',
    href: '/marketing/marketing-automation',
    color: 'quantum-orange',
    features: ['Lead nurturing', 'Email automation', 'CRM integratie', 'Sales handoff']
  },
]

// Geïntegreerde aanpak
export const integratedApproach: IntegratedApproachItem[] = [
  {
    title: 'Ads → SEO',
    description: 'Winstgevende zoekwoorden uit Google Ads campagnes vormen de directe input voor onze SEO content strategie, waardoor we sneller scoren op termen die converteren.'
  },
  {
    title: 'SEO → Social',
    description: 'Bezoekers die via organisch verkeer op uw website komen, retargeten we met specifieke campagnes op social media om top-of-mind te blijven.'
  },
  {
    title: 'All → Automation',
    description: 'Leads die binnenkomen via Ads, SEO of Social worden automatisch opgenomen in nurture-campagnes om ze te converteren naar betalende klanten.'
  },
]

// Werkwijze/Proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse & Strategie',
    description: 'We analyseren uw markt, concurrentie en doelgroep om een winnende strategie te bepalen.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Kanaal Setup',
    description: 'We richten de juiste kanalen in met optimale tracking en meetbaarheid.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Uitvoering & Optimalisatie',
    description: 'Continue campagne-optimalisatie op basis van real-time data en resultaten.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Rapportage & Groei',
    description: 'Transparante rapportage en strategische bijsturing voor continue groei.',
    icon: TrendingUp
  },
]

// Waarom Start Beheer
export const whyUs: WhyUsItem[] = [
  {
    icon: Eye,
    title: 'Radicale Transparantie',
    description: 'Eén geïntegreerd dashboard met al uw marketingdata. Volledig inzicht, geen verrassingen.',
    stat: '24/7',
    statLabel: 'live inzicht'
  },
  {
    icon: ShieldCheck,
    title: 'Data-Gedreven',
    description: 'Elke beslissing wordt onderbouwd met data. We testen, meten en weten wat werkt.',
    stat: '100%',
    statLabel: 'meetbaar'
  },
  {
    icon: Infinity,
    title: 'Geen Vaste Contracten',
    description: 'We geloven in onze resultaten. Daarom bent u vrij om maandelijks aan te passen.',
    stat: 'Flex',
    statLabel: 'opzegbaar'
  },
  {
    icon: Users,
    title: 'Uw Groei-Partner',
    description: 'Geen externe leverancier, maar uw strategische partner. Uw succes is ons succes.',
    stat: '1',
    statLabel: 'aanspreekpunt'
  },
]

// FAQ - geoptimaliseerd voor SEO
export const faqs: FAQ[] = [
  {
    q: 'Wat kost online marketing uitbesteden?',
    a: 'De kosten voor online marketing uitbesteden variëren op basis van uw doelen en de gekozen kanalen. Wij werken met transparante maandbudgetten waarbij u vooraf weet wat de investering is. Een typische MKB-campagne start vanaf €1.500 per maand inclusief beheer. We maken altijd een vrijblijvende offerte op maat.'
  },
  {
    q: 'Waarom een geïntegreerde marketing aanpak?',
    a: 'Losse marketing-inspanningen zijn als een orkest zonder dirigent. Google Ads, SEO en Social Media versterken elkaar exponentieel wanneer ze vanuit één centrale strategie worden aangestuurd. Dit vliegwieleffect zorgt voor lagere kosten per lead en hogere conversies.'
  },
  {
    q: 'Welke marketingdienst levert het snelste resultaat?',
    a: 'Voor direct resultaat is Google Ads de snelste route - binnen 24 uur kunt u al zichtbaar zijn. Voor duurzame groei op lange termijn is SEO essentieel. De meeste klanten kiezen voor een combinatie waarbij Ads voor directe leads zorgt terwijl SEO organisch groeit.'
  },
  {
    q: 'Hoe meten jullie marketing succes?',
    a: 'We focussen op metrics die ertoe doen: Cost per Acquisition (CPA), Return on Ad Spend (ROAS) en Customer Lifetime Value (CLV). Alle data komt samen in één overzichtelijk live-dashboard dat u 24/7 kunt raadplegen. Geen vanity metrics, maar echte business resultaten.'
  },
  {
    q: 'Werken jullie met vaste contracten?',
    a: 'Nee, wij geloven in onze resultaten. Al onze marketing diensten zijn maandelijks opzegbaar. Dit dwingt ons om elke maand te presteren en houdt ons scherp. Onze resultaten zijn de beste reden om te blijven samenwerken.'
  },
  {
    q: 'Voor welke bedrijven is jullie marketing geschikt?',
    a: 'Wij werken voornamelijk met MKB-bedrijven die serieus willen groeien online. Van ZZP\'ers tot bedrijven met 100+ medewerkers. Onze aanpak is vooral effectief voor B2B dienstverleners, e-commerce en lokale ondernemers die hun online zichtbaarheid willen vergroten.'
  },
]
