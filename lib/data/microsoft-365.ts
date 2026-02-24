import type { LucideIcon } from 'lucide-react'
import {
  Mail, HardDrive, Video, FileText, Calendar, Shield,
  RefreshCw, Settings, Headphones, Cloud, Users, Lock,
  TrendingUp, Zap, Target, Award, Building2
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface M365App {
  icon: LucideIcon
  name: string
  description: string
  color: string
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
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
  stat: string
  statLabel: string
}

// ============================================================================
// DATA
// ============================================================================

export const m365Apps: M365App[] = [
  {
    icon: Mail,
    name: 'Exchange Online',
    description: 'Professionele zakelijke e-mail met 50GB opslag, gedeelde agenda\'s en contacten. Overal toegang via web, desktop en mobiel.',
    color: '#0078D4'
  },
  {
    icon: Video,
    name: 'Microsoft Teams',
    description: 'Videobellen, chatten en samenwerken in \u00E9\u00E9n platform. De centrale hub voor al uw teamcommunicatie.',
    color: '#6264A7'
  },
  {
    icon: HardDrive,
    name: 'OneDrive',
    description: '1TB cloudopslag per gebruiker. Bestanden veilig opslaan, delen en synchroniseren tussen al uw apparaten.',
    color: '#0078D4'
  },
  {
    icon: FileText,
    name: 'SharePoint',
    description: 'Intranet en documentbeheer voor uw organisatie. Centrale plek voor bedrijfsinformatie en samenwerking.',
    color: '#038387'
  },
  {
    icon: Calendar,
    name: 'Outlook & Agenda',
    description: 'E-mail, agenda en taken ge\u00EFntegreerd. Plan vergaderingen, beheer uw tijd en blijf georganiseerd.',
    color: '#0078D4'
  },
  {
    icon: Shield,
    name: 'Security & Compliance',
    description: 'Ingebouwde beveiliging, AVG-compliance en data loss prevention. Uw data is veilig.',
    color: '#D83B01'
  },
]

export const services: Service[] = [
  {
    icon: RefreshCw,
    title: 'Migratie & Implementatie',
    description: 'Soepele overgang naar Microsoft 365. Van Google Workspace, on-premise Exchange of andere systemen - wij migreren uw e-mail, bestanden en agenda\'s zonder dataverlies.',
    features: ['E-mail migratie', 'Data migratie', 'Gebruikers training', 'Minimale downtime']
  },
  {
    icon: Settings,
    title: 'Configuratie & Optimalisatie',
    description: 'Microsoft 365 optimaal inrichten voor uw organisatie. Security policies, gebruikersbeheer, groepen en alle instellingen precies zoals u het wilt.',
    features: ['Tenant configuratie', 'Security policies', 'Groepen & rechten', 'Best practices']
  },
  {
    icon: Headphones,
    title: 'Beheer & Support',
    description: 'Doorlopend beheer van uw M365 omgeving. Wij handelen gebruikersaanvragen af, lossen problemen op en houden alles up-to-date.',
    features: ['Gebruikersbeheer', 'Licentie beheer', 'Troubleshooting', 'Updates & patches']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Beveilig uw Microsoft 365 omgeving. Multi-factor authenticatie, conditional access, data loss prevention en AVG-compliance.',
    features: ['MFA implementatie', 'Conditional access', 'DLP policies', 'Audit logging']
  },
]

export const benefits: Benefit[] = [
  {
    icon: Cloud,
    title: 'Overal Werken',
    description: 'Toegang tot al uw bestanden, e-mail en applicaties vanaf elk apparaat, waar u ook bent.'
  },
  {
    icon: Users,
    title: 'Betere Samenwerking',
    description: 'Teams, SharePoint en OneDrive maken samenwerken eenvoudig - intern en met externe partners.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Microsoft investeert miljarden in security. Profiteer van dezelfde beveiliging als grote enterprises.'
  },
  {
    icon: TrendingUp,
    title: 'Schaalbaar',
    description: 'Eenvoudig gebruikers toevoegen of verwijderen. Betaal alleen voor wat u gebruikt.'
  },
  {
    icon: RefreshCw,
    title: 'Altijd Up-to-date',
    description: 'Automatische updates zorgen dat u altijd de nieuwste features en security patches heeft.'
  },
  {
    icon: Zap,
    title: 'Verhoogde Productiviteit',
    description: 'Ge\u00EFntegreerde tools die naadloos samenwerken. Minder schakelen, meer gedaan krijgen.'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We analyseren uw huidige situatie, wensen en eisen voor de perfecte M365 configuratie.',
    icon: Target
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Een gedetailleerd migratieplan met tijdlijn, zodat u precies weet wat u kunt verwachten.',
    icon: Calendar
  },
  {
    step: '03',
    title: 'Migratie',
    description: 'Wij voeren de migratie uit - meestal in het weekend om verstoring te minimaliseren.',
    icon: RefreshCw
  },
  {
    step: '04',
    title: 'Training & Support',
    description: 'Uw team leert de nieuwe tools kennen. En wij blijven beschikbaar voor vragen.',
    icon: Users
  },
]

export const whyUs: WhyItem[] = [
  {
    icon: Award,
    title: 'Microsoft Partner',
    description: 'Gecertificeerd Microsoft Partner met jarenlange M365 ervaring.',
    stat: 'Certified',
    statLabel: 'Microsoft Partner'
  },
  {
    icon: Building2,
    title: 'MKB Specialist',
    description: 'Wij begrijpen de uitdagingen van het MKB en stemmen onze aanpak daarop af.',
    stat: '500+',
    statLabel: 'MKB klanten'
  },
  {
    icon: Headphones,
    title: 'Persoonlijke Support',
    description: 'Geen helpdesk in het buitenland. Directe toegang tot Nederlandse M365 experts.',
    stat: '<1 uur',
    statLabel: 'responstijd'
  },
  {
    icon: Target,
    title: 'Vaste Prijzen',
    description: 'Transparante tarieven voor migratie en beheer. Geen verrassingen achteraf.',
    stat: '100%',
    statLabel: 'transparant'
  },
]
