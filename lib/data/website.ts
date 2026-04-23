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
  price: 'Vanaf € 695',
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
    title: 'Ontwerp in 24 uur',
    description: 'Gratis en vrijblijvend.',
    stat: '24u',
    statLabel: 'eerste ontwerp'
  },
  {
    icon: Palette,
    title: 'Uniek design',
    description: 'Geen templates. 100% op maat.',
    stat: '100%',
    statLabel: 'maatwerk'
  },
  {
    icon: FileText,
    title: 'Vaste prijs',
    description: 'Vooraf duidelijk. Geen verrassingen.',
    stat: '0',
    statLabel: 'verborgen kosten'
  },
  {
    icon: Users,
    title: 'Eén aanspreekpunt',
    description: 'Uw vaste developer. Direct bereikbaar.',
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
    description: 'Wij zorgen voor de lancering en hosting. Daarna 2 maanden gratis support voor een soepele start.',
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
    q: 'Wat is wel en niet inbegrepen qua hosting en domein?',
    a: 'Inbegrepen: de website, hosting op Nederlandse servers, SSL-certificaat en training. Niet inbegrepen: uw domeinnaam (www.uwbedrijf.nl) en zakelijke e-mail — die regelt u zelf bij een provider naar keuze. Wij koppelen uw domein moeiteloos aan de nieuwe website.'
  },
  {
    q: 'Wat als ik het ontwerp niet mooi vind?',
    a: 'Dan passen we het aan totdat u tevreden bent. Bevalt het eerste ontwerp helemaal niet? Dan stopt het daar, zonder kosten.'
  },
  {
    q: 'Krijg ik support na oplevering?',
    a: 'Ja. De eerste 2 maanden krijgt u gratis support via e-mail, telefoon of WhatsApp — reactie binnen 24 uur. Kleine aanpassingen en vragen zijn inbegrepen, met altijd dezelfde vaste contactpersoon.'
  },
]
