import type { LucideIcon } from 'lucide-react'
import {
  Layers, BarChart3, Plug, Workflow, Database, Shield,
  Users, Settings, FileCheck, Lock, RefreshCw, Rocket, Target, Code2
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

interface Example {
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
    icon: Layers,
    title: 'Custom Webapplicaties',
    description: 'Op maat gemaakte applicaties die precies doen wat u nodig heeft. Geen compromissen met standaard software.',
    features: ['Volledig maatwerk', 'Schaalbare architectuur', 'Moderne UI/UX', 'Progressive Web App'],
    color: 'blue'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Portalen',
    description: 'Overzichtelijke dashboards en klantportalen voor inzicht in uw data en processen.',
    features: ['Real-time data', 'Interactieve grafieken', 'Rol-gebaseerde toegang', 'Custom rapportages'],
    color: 'violet'
  },
  {
    icon: Plug,
    title: 'API Integraties',
    description: 'Koppel uw systemen aan elkaar. CRM, boekhouding, voorraad - alles communiceert naadloos.',
    features: ['REST & GraphQL APIs', 'Webhook integraties', 'Data synchronisatie', 'Legacy systemen'],
    color: 'emerald'
  },
  {
    icon: Workflow,
    title: 'Proces Automatisering',
    description: 'Automatiseer repetitieve taken en workflows. Bespaar tijd en voorkom fouten.',
    features: ['Workflow automation', 'Notificaties & alerts', 'Automatische rapporten', 'Task scheduling'],
    color: 'warm'
  },
  {
    icon: Database,
    title: 'Database Oplossingen',
    description: 'Robuuste data-architectuur voor veilige opslag en snelle toegang tot uw informatie.',
    features: ['Database ontwerp', 'Data migratie', 'Backup strategie', 'Performance tuning'],
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Veilige applicaties die voldoen aan AVG en andere regelgeving.',
    features: ['Authenticatie & autorisatie', 'Data encryptie', 'AVG compliance', 'Security audits'],
    color: 'violet'
  },
]

export const examples: Example[] = [
  {
    title: 'Klantportalen',
    description: 'Geef klanten toegang tot hun gegevens, facturen en documenten via een eigen portaal.',
    icon: Users
  },
  {
    title: 'Interne Tools',
    description: 'CRM, project management, urenregistratie - tools op maat voor uw team.',
    icon: Settings
  },
  {
    title: 'Data Dashboards',
    description: 'Visualiseer uw KPIs en bedrijfsdata in overzichtelijke, realtime dashboards.',
    icon: BarChart3
  },
  {
    title: 'Booking Systemen',
    description: 'Reserveringssystemen voor afspraken, ruimtes of diensten.',
    icon: FileCheck
  },
]

export const whyChooseUs: WhyItem[] = [
  {
    icon: Lock,
    title: 'Volledig Eigendom',
    description: 'U bent 100% eigenaar van de broncode. Geen lock-in, geen licentiekosten.',
    stat: '100%',
    statLabel: 'van u'
  },
  {
    icon: Users,
    title: 'Directe Lijnen',
    description: 'Eén vast aanspreekpunt. Direct contact met uw developer, geen helpdesk.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: RefreshCw,
    title: 'Agile Werkwijze',
    description: 'Regelmatige demos en feedback. U ziet altijd wat we bouwen.',
    stat: '2 weken',
    statLabel: 'sprints'
  },
  {
    icon: Rocket,
    title: 'Nazorg Inbegrepen',
    description: 'Na oplevering staan wij klaar voor support, updates en doorontwikkeling.',
    stat: '∞',
    statLabel: 'support'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyseren uw processen, wensen en technische requirements.',
    icon: Target
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Wireframes, user flows en technische architectuur worden uitgewerkt.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'In korte sprints bouwen we de applicatie met regelmatige demos.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Uitgebreid testen, training voor gebruikers en live gang.',
    icon: Rocket
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Hoe lang duurt het om een webapplicatie te bouwen?',
    a: 'Dit hangt sterk af van de complexiteit. Een eenvoudige applicatie kan in 2-3 maanden klaar zijn. Complexere projecten kunnen 6-12 maanden duren. Na de discovery fase geven we een realistische planning.'
  },
  {
    q: 'Waarom geen standaard software zoals Salesforce of HubSpot?',
    a: 'Standaard software is prima voor standaard processen. Maar als uw werkwijze uniek is, betaalt u voor functies die u niet gebruikt en mist u functies die u wel nodig heeft. Maatwerk past exact bij uw proces, zonder maandelijkse licentiekosten per gebruiker.'
  },
  {
    q: 'Kunnen jullie integreren met onze bestaande systemen?',
    a: 'Ja, wij hebben ervaring met het koppelen aan diverse systemen: CRM (Salesforce, HubSpot), boekhouding (Exact, Moneybird), voorraadbeheer en andere zakelijke software. Als er een API is, kunnen we koppelen.'
  },
  {
    q: 'Wie is eigenaar van de code?',
    a: 'U bent volledig eigenaar van de broncode. Na oplevering ontvangt u alle code en documentatie. Er is geen lock-in of afhankelijkheid van ons.'
  },
  {
    q: 'Bieden jullie ook onderhoud en support?',
    a: 'Ja, we bieden flexibele onderhoudscontracten voor hosting, updates, bugfixes en doorontwikkeling. U kunt ook kiezen voor support op afroep.'
  },
]
