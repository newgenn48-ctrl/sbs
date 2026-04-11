import {
  Globe, Layers, ShoppingCart, Zap, Lock,
  Palette, Gauge, Users, Code2, Rocket
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface DevelopmentService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  link: string
  color: string
  cta: string
}

interface WhyCustomDevItem {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

interface Technology {
  name: string
  description: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

// ============================================================================
// DATA
// ============================================================================

// Development diensten - links naar subpagina's
export const developmentServices: DevelopmentService[] = [
  {
    icon: Globe,
    title: 'Website Laten Maken',
    description: 'Professionele websites die resultaat opleveren. Modern design, razendsnel en SEO-geoptimaliseerd.',
    features: ['Custom design', 'Mobile-first', 'SEO geoptimaliseerd', 'CMS integratie'],
    link: '/development/website-laten-maken',
    color: 'violet',
    cta: 'Bekijk Website Diensten'
  },
  {
    icon: Layers,
    title: 'Webapplicatie Ontwikkeling',
    description: 'Op maat gemaakte webapplicaties die uw bedrijfsprocessen stroomlijnen en automatiseren.',
    features: ['Custom functionaliteit', 'API integraties', 'Schaalbare architectuur', 'Real-time features'],
    link: '/development/webapplicatie-ontwikkeling',
    color: 'blue',
    cta: 'Bekijk Webapplicaties'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Oplossingen',
    description: 'Webshops die verkopen. Van Shopify tot custom e-commerce, wij bouwen uw online winkel.',
    features: ['Shopify development', 'Betalingsintegraties', 'Voorraadbeheer', 'Conversie optimalisatie'],
    link: '/development/ecommerce',
    color: 'emerald',
    cta: 'Bekijk E-commerce'
  },
]

// Waarom custom development
export const whyCustomDev: WhyCustomDevItem[] = [
  {
    icon: Zap,
    title: 'Razendsnel',
    description: 'Onze websites laden onder de 2 seconden. Snelheid is cruciaal voor SEO en gebruikerservaring.',
    stat: '<2s',
    statLabel: 'laadtijd'
  },
  {
    icon: Lock,
    title: 'Veilig & Robuust',
    description: 'Geen kwetsbare plugins of verouderde themas. Moderne, veilige code die bestand is tegen aanvallen.',
    stat: '100%',
    statLabel: 'custom code'
  },
  {
    icon: Palette,
    title: 'Uniek Design',
    description: 'Geen templates. Elk project krijgt een uniek ontwerp dat perfect past bij uw merk en doelgroep.',
    stat: '0',
    statLabel: 'templates'
  },
  {
    icon: Gauge,
    title: 'Schaalbaar',
    description: 'Gebouwd om mee te groeien met uw bedrijf. Van startup tot enterprise, de architectuur past zich aan.',
    stat: '∞',
    statLabel: 'schaalbaarheid'
  },
]

// Technologieën
export const technologies: Technology[] = [
  { name: 'Next.js', description: 'React framework voor snelle websites' },
  { name: 'React', description: 'Moderne UI development' },
  { name: 'TypeScript', description: 'Type-safe development' },
  { name: 'Tailwind CSS', description: 'Utility-first styling' },
  { name: 'Node.js', description: 'Backend development' },
  { name: 'Shopify', description: 'E-commerce platform' },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyseren uw wensen, doelgroep en concurrentie om de perfecte strategie te bepalen.',
    icon: Users
  },
  {
    step: '02',
    title: 'Design',
    description: 'Uw unieke ontwerp wordt uitgewerkt in gedetailleerde designs en prototypes.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'Onze developers bouwen uw project met moderne technologieën en best practices.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Na uitgebreide tests gaan we live. Daarna blijven we beschikbaar voor support.',
    icon: Rocket
  },
]
