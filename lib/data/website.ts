import type { ServiceColorKey } from '@/lib/colors'
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
  color: ServiceColorKey
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

export const services: WebService[] = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Professionele uitstraling die bij uw merk past. Geen templates.',
    features: ['Uniek ontwerp op maat', 'UI/UX doordacht', 'Responsive op elk scherm'],
    color: 'violet'
  },
  {
    icon: Zap,
    title: 'Razendsnelle Laadtijd',
    description: 'Onder 2 seconden. Beter voor Google, beter voor conversie.',
    features: ['Laadtijd <2s', 'Betere Google-positie', 'Meer conversies'],
    color: 'emerald'
  },
  {
    icon: Search,
    title: 'Vindbaar in Google',
    description: 'SEO zit in de fundering. Uw klanten vinden u, niet uw concurrent.',
    features: ['Technische SEO ingebouwd', 'Schema markup', 'Core Web Vitals'],
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: '60%+ van uw bezoekers zit op een telefoon. Als dat niet werkt, verliest u omzet.',
    features: ['Ontworpen voor mobiel', 'Touch-vriendelijk', 'Snelle mobiele laadtijd'],
    color: 'warm'
  },
  {
    icon: FileText,
    title: 'Zelf Aanpassen',
    description: 'U wijzigt zelf teksten en foto\'s via een simpel CMS. Geen developer nodig.',
    features: ['Zelf content beheren', 'Geen technische kennis nodig', 'Training inbegrepen'],
    color: 'violet'
  },
  {
    icon: Lock,
    title: 'Veilig & Hackproof',
    description: 'Moderne code zonder kwetsbare plugins. SSL en backups inbegrepen.',
    features: ['SSL certificaat', 'Geen kwetsbare plugins', 'Dagelijkse backups'],
    color: 'emerald'
  },
]

export const priceInfo: PriceInfo = {
  price: 'Vanaf €585',
  description: 'Professionele website volledig op maat (excl. BTW)',
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

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Rocket,
    title: 'Eerste ontwerp binnen 24 uur',
    description: 'Ontvang binnen 24 uur een eerste ontwerp van uw nieuwe homepage. Geheel vrijblijvend — bevalt het niet, geen kosten.',
    stat: '24u',
    statLabel: 'eerste ontwerp'
  },
  {
    icon: Palette,
    title: 'Modern & uniek design',
    description: 'Geen standaard templates. Uw website wordt volledig op maat ontworpen met een strakke, moderne uitstraling die uw merk versterkt.',
    stat: '100%',
    statLabel: 'maatwerk'
  },
  {
    icon: FileText,
    title: 'Vaste prijs, geen verrassingen',
    description: 'U weet vooraf exact wat het kost. Geen uurtje-factuurtje, geen bijkomende kosten. Wat we afspreken, dat betaalt u.',
    stat: '€',
    statLabel: 'vaste prijs'
  },
  {
    icon: Users,
    title: 'Eén vast aanspreekpunt',
    description: 'U belt, appt of mailt uw vaste developer direct. Geen callcenter, geen ticket-systeem. Voor, tijdens én na het project.',
    stat: '1',
    statLabel: 'aanspreekpunt'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Gratis Gesprek',
    description: 'Geen verkooppraatjes. Wij luisteren, stellen vragen en brengen uw situatie in kaart.',
    icon: Users
  },
  {
    step: '02',
    title: 'Ontwerp in 24u',
    description: 'U ontvangt een eerste ontwerp van uw homepage. Bevalt het niet? Dan stopt het hier, gratis.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Bouw & Feedback',
    description: 'U ziet elke stap en geeft feedback. Wij bouwen pas verder als u tevreden bent.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Live & Support',
    description: 'Wij regelen alles: hosting, domein, lancering. En daarna zijn wij er nog steeds.',
    icon: Rocket
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Wat kost een website laten maken?',
    a: 'Vanaf €585 excl. BTW voor een volledige website op maat. U ontvangt vooraf een vaste prijs — wat we afspreken, dat betaalt u. Geen verrassingen.'
  },
  {
    q: 'Hoe lang duurt het?',
    a: 'Gemiddeld 1-3 weken. U ontvangt al binnen 24 uur een eerste ontwerp. Complexere projecten duren 4-6 weken.'
  },
  {
    q: 'Waarom geen WordPress of Wix?',
    a: 'Onze websites laden sneller, zijn veiliger en volledig op maat. Geen maandelijkse licentiekosten, geen kwetsbare plugins, geen beperkingen van een template.'
  },
  {
    q: 'Kan ik zelf teksten en foto\'s aanpassen?',
    a: 'Ja. U krijgt een simpel CMS en een korte training. Daarna past u zelf alles aan, zonder ons nodig te hebben.'
  },
  {
    q: 'Kan ik later uitbreiden?',
    a: 'Altijd. Extra pagina\'s, blog, webshop, nieuwe functionaliteiten — uw website groeit mee met uw bedrijf.'
  },
  {
    q: 'Regelen jullie ook hosting en domein?',
    a: 'Ja. Domein, hosting, SSL, e-mail — wij regelen de complete technische setup. Eén aanspreekpunt voor alles.'
  },
  {
    q: 'Wat als ik het ontwerp niet mooi vind?',
    a: 'Dan passen we het aan totdat u tevreden bent. Bevalt het eerste ontwerp helemaal niet? Dan stopt het daar, zonder kosten.'
  },
  {
    q: 'Krijg ik support na oplevering?',
    a: 'Ja. Kleine aanpassingen, vragen en technische support zijn inbegrepen. U staat er niet alleen voor.'
  },
]
