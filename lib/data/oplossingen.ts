import type { LucideIcon } from 'lucide-react'
import {
  User, Building2, Globe, Mail, Headphones, ShieldCheck,
  LineChart, Cog, FileSearch, Target, Rocket, Zap, Award
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface TargetGroup {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  benefits: string[]
  color: string
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
}

interface FAQ {
  q: string
  a: string
}

// ============================================================================
// DATA
// ============================================================================

export const targetGroups: TargetGroup[] = [
  {
    icon: User,
    title: 'ZZP\'ers',
    subtitle: 'Zelfstandig ondernemer',
    description: 'Focus op uw expertise terwijl wij uw digitale aanwezigheid regelen. Van website tot marketing.',
    benefits: ['Professionele uitstraling', 'Meer zichtbaarheid online', 'Alles in \u00E9\u00E9n pakket'],
    color: 'emerald'
  },
  {
    icon: Building2,
    title: 'MKB',
    subtitle: 'Klein & middenbedrijf',
    description: 'Schaalbare IT- en marketingoplossingen die meegroeien met uw bedrijf. Van 2 tot 250 medewerkers.',
    benefits: ['Schaalbaar met groei', 'IT \u00E9n marketing beheer', 'E\u00E9n aanspreekpunt'],
    color: 'violet'
  },
]

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Website & Online Presence',
    description: 'Professionele websites die werken als uw beste verkoper. Geoptimaliseerd voor Google en conversie.',
    features: ['Responsive design', 'SEO-geoptimaliseerd', 'Snelle laadtijden', 'SSL beveiliging'],
    color: 'emerald'
  },
  {
    icon: Mail,
    title: 'Zakelijke E-mail & Microsoft 365',
    description: 'Professionele communicatie met uw eigen domeinnaam. Inclusief alle Microsoft 365 tools.',
    features: ['Eigen domein e-mail', 'Microsoft 365 apps', 'Automatische backups', 'Overal toegankelijk'],
    color: 'blue'
  },
  {
    icon: Headphones,
    title: 'IT Support & Beheer',
    description: 'Betrouwbare ondersteuning wanneer u het nodig heeft. Proactief beheer voorkomt problemen.',
    features: ['Helpdesk support', 'Remote ondersteuning', 'Proactief beheer', 'Snelle responstijd'],
    color: 'violet'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Backup',
    description: 'Bescherm uw bedrijfsdata tegen cyberdreigingen. Automatische backups voor gemoedsrust.',
    features: ['Beveiligingsmonitoring', 'Automatische backups', 'Virusprotectie', 'Data recovery'],
    color: 'warm'
  },
  {
    icon: LineChart,
    title: 'Online Marketing',
    description: 'Meer klanten met gerichte online marketing. Van SEO tot Google Ads en social media.',
    features: ['Google Ads campagnes', 'SEO & vindbaarheid', 'Social media marketing', 'Lead generatie'],
    color: 'warm'
  },
  {
    icon: Cog,
    title: 'AI & Automatisering',
    description: 'Werk slimmer met AI-tools en automatisering. Bespaar tijd op repetitieve taken.',
    features: ['Chatbots', 'Process automation', 'AI analytics', 'Workflow optimalisatie'],
    color: 'blue'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'We bespreken uw situatie, uitdagingen en ambities in een vrijblijvend gesprek.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Advies op Maat',
    description: 'U ontvangt een concreet voorstel afgestemd op uw bedrijfsgrootte en behoeften.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Wij regelen alles. Minimale verstoring van uw dagelijkse werkzaamheden.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Doorlopende Support',
    description: 'Proactief beheer en altijd een aanspreekpunt als u vragen heeft.',
    icon: Headphones
  },
]

export const whyUs: WhyItem[] = [
  {
    icon: Target,
    title: 'ZZP & MKB Specialist',
    description: 'Wij begrijpen de uitdagingen van ondernemers en stemmen onze diensten hierop af.',
  },
  {
    icon: Zap,
    title: 'E\u00E9n Aanspreekpunt',
    description: 'Geen gedoe met verschillende leveranciers. Alles via \u00E9\u00E9n vertrouwd contactpersoon.',
  },
  {
    icon: Cog,
    title: 'Schaalbare Oplossingen',
    description: 'Start klein en breid uit wanneer uw bedrijf groeit. Flexibel en toekomstbestendig.',
  },
  {
    icon: Award,
    title: 'Persoonlijke Aanpak',
    description: 'Geen nummertje, maar een partner die uw bedrijf kent en meedenkt.',
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Voor welke bedrijven zijn jullie oplossingen geschikt?',
    a: 'Onze oplossingen zijn geschikt voor ZZP\'ers en MKB-bedrijven van 1 tot circa 250 medewerkers. Of u nu net start of al jaren actief bent, wij hebben passende oplossingen die meegroeien met uw bedrijf.'
  },
  {
    q: 'Ik ben niet technisch. Is dat een probleem?',
    a: 'Absoluut niet, juist niet zelfs. Wij nemen alle technische complexiteit van u over en communiceren in begrijpelijke taal. U hoeft alleen te weten w\u00E1t u wilt bereiken, wij regelen het h\u00F3e.'
  },
  {
    q: 'Kan ik beginnen met \u00E9\u00E9n dienst en later uitbreiden?',
    a: 'Ja, onze oplossingen zijn modulair. Start bijvoorbeeld met een website en voeg later e-mail, IT-support of marketing toe wanneer uw bedrijf daaraan toe is.'
  },
  {
    q: 'Hoe snel kunnen jullie starten?',
    a: 'Na het kennismakingsgesprek kunnen we meestal binnen 1-2 weken van start. Voor een complete website rekenen we 2-4 weken, afhankelijk van de complexiteit.'
  },
  {
    q: 'Werken jullie met lange contracten?',
    a: 'Nee, wij geloven in de kracht van onze dienstverlening. De meeste diensten zijn maandelijks opzegbaar. Wij willen dat u blijft omdat u tevreden bent, niet omdat u vastzit.'
  },
  {
    q: 'Wat maakt jullie anders dan andere IT-bedrijven?',
    a: 'Wij combineren IT, websites \u00E9n marketing onder \u00E9\u00E9n dak, specifiek voor ZZP en MKB. Geen grote corporate aanpak, maar persoonlijke aandacht en oplossingen die passen bij uw schaal en budget.'
  },
]
