import {
  Palette, Zap, Search, Smartphone, FileText, Lock,
  Users, Rocket, Code2
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface WebService {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface PriceInfo {
  price: string
  description: string
  features: string[]
}

interface WhyChooseUsItem {
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

// Website diensten
export const services: WebService[] = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Uniek ontwerp dat perfect past bij uw merk. Geen templates, alleen maatwerk.',
    features: ['Merkidentiteit verwerkt', 'Unieke look & feel', 'UI/UX design', 'Responsive design'],
    color: 'quantum-purple'
  },
  {
    icon: Zap,
    title: 'Razendsnelle Performance',
    description: 'Websites die laden in minder dan 2 seconden. Cruciaal voor SEO en conversie.',
    features: ['Laadtijd <2s', 'Geoptimaliseerde code', 'CDN integratie', 'Image optimization'],
    color: 'quantum-green'
  },
  {
    icon: Search,
    title: 'SEO Geoptimaliseerd',
    description: 'Technisch SEO-fundament zodat u gevonden wordt in Google.',
    features: ['Meta tags & schema', 'Sitemap & robots.txt', 'Core Web Vitals', 'Keyword onderzoek'],
    color: 'quantum-blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Meer dan 60% van uw bezoekers komt via mobiel. Wij ontwerpen daar eerst voor.',
    features: ['Responsive design', 'Touch-friendly', 'Mobiele snelheid', 'App-achtige ervaring'],
    color: 'quantum-orange'
  },
  {
    icon: FileText,
    title: 'CMS Integratie',
    description: 'Beheer zelf uw content via een gebruiksvriendelijk CMS.',
    features: ['Strapi / Sanity', 'Eenvoudig beheer', 'Media library', 'Meerdere gebruikers'],
    color: 'quantum-purple'
  },
  {
    icon: Lock,
    title: 'Veilig & Betrouwbaar',
    description: 'Moderne, veilige code zonder kwetsbare plugins of verouderde themas.',
    features: ['SSL certificaat', 'Geen plugins nodig', 'Regelmatige updates', 'Backup strategie'],
    color: 'quantum-green'
  },
]

// Prijs info
export const priceInfo: PriceInfo = {
  price: 'Vanaf €785',
  description: 'Professionele website volledig op maat',
  features: [
    'Custom design op maat',
    'Mobile-first & responsive',
    'SEO geoptimaliseerd',
    'Razendsnelle laadtijd',
    'Contactformulier',
    'SSL certificaat',
    'CMS voor zelf beheren',
    'Analytics integratie',
  ],
}

// Waarom wij - focus op bedrijf/samenwerking, niet product (dat staat bij Diensten)
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Lock,
    title: 'Volledig Eigendom',
    description: 'U bent 100% eigenaar van uw website. Geen lock-in, geen doorlopende licentiekosten.',
    stat: '100%',
    statLabel: 'van u'
  },
  {
    icon: Users,
    title: 'Directe Lijnen',
    description: 'Eén vast aanspreekpunt. Geen helpdesk, geen wachtrijen. Direct contact met uw developer.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: FileText,
    title: 'Vaste Prijs',
    description: 'Vooraf een duidelijke offerte. Geen verrassingen achteraf, geen uurtje-factuurtje.',
    stat: '€',
    statLabel: 'vast'
  },
  {
    icon: Rocket,
    title: 'Nazorg Inbegrepen',
    description: 'Na oplevering staan wij voor u klaar. Updates, kleine aanpassingen en technische support.',
    stat: '∞',
    statLabel: 'support'
  },
]

// Het proces
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'We bespreken uw wensen, doelen en doelgroep in een vrijblijvend gesprek.',
    icon: Users
  },
  {
    step: '02',
    title: 'Ontwerp',
    description: 'Uw unieke design wordt uitgewerkt. U ziet het resultaat voordat we bouwen.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'We bouwen uw website met moderne technologie en uitgebreide testing.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Lancering',
    description: 'Na uw goedkeuring gaan we live. Wij regelen hosting en technische setup.',
    icon: Rocket
  },
]

// FAQ
export const faqs: FAQ[] = [
  {
    q: 'Hoe lang duurt het om een website te maken?',
    a: 'Een standaard website is meestal binnen 1-3 weken klaar. Dit hangt af van de complexiteit en hoe snel feedback wordt gegeven. Complexere projecten kunnen 4-6 weken duren.'
  },
  {
    q: 'Waarom geen WordPress of Wix?',
    a: 'WordPress en Wix zijn prima voor eenvoudige websites, maar hebben nadelen: tragere laadtijden, beveiligingsrisico\'s door plugins, en beperkte flexibiliteit. Onze websites zijn sneller, veiliger en volledig op maat - zonder maandelijkse licentiekosten.'
  },
  {
    q: 'Kan ik zelf content aanpassen na oplevering?',
    a: 'Ja, u krijgt een gebruiksvriendelijk CMS waarmee u zelf teksten en afbeeldingen kunt aanpassen. Wij geven ook een korte training zodat u direct aan de slag kunt.'
  },
  {
    q: 'Wat als ik later meer pagina\'s of functies wil?',
    a: 'Geen probleem. Onze websites zijn gebouwd om te groeien. U kunt altijd uitbreiden met extra pagina\'s, blog, webshop of andere functionaliteit.'
  },
  {
    q: 'Regelen jullie ook hosting en domein?',
    a: 'Ja, wij kunnen de volledige technische setup verzorgen: domeinregistratie, hosting, SSL certificaat en e-mail. Zo heeft u één aanspreekpunt voor alles.'
  },
  {
    q: 'Wat voor support krijg ik na oplevering?',
    a: 'Na oplevering blijven wij beschikbaar voor vragen, kleine aanpassingen en technische ondersteuning. Voor grotere wijzigingen maken we een offerte op maat. Zo bent u nooit alleen.'
  },
]
