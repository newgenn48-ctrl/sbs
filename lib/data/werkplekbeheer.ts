import {
  Laptop, Download, UserPlus, Smartphone,
  Building2, Briefcase, Stethoscope, Store, Factory, Scale,
  Headphones, ShieldCheck, Monitor, FileCheck, Clock, UserCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Medewerkers snel productief',
  'IT-support op één nummer',
  'Onboarding & offboarding geregeld',
]

export const whyChooseUs = [
  { icon: Clock, title: 'Snelle hulp', description: 'Remote support binnen minuten — geen wachtrij, geen scripts.', stat: '< 15m', statLabel: 'respons' },
  { icon: Laptop, title: 'Snelle uitrol', description: 'Nieuwe medewerker? Werkplek klaar binnen 1-2 dagen.', stat: '1-2', statLabel: 'werkdagen' },
  { icon: FileCheck, title: 'Vaste prijs', description: 'Vast bedrag per werkplek per maand — geen verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: UserCheck, title: 'Eén aanspreekpunt', description: 'Uw vaste werkplekbeheerder. Kent uw mensen bij naam.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Building2, title: 'Groeiend MKB', description: 'Veel nieuwe medewerkers per kwartaal? Wij zorgen dat iedereen dag 1 productief is.' },
  { icon: Briefcase, title: 'Professionele diensten', description: 'Accountants, advocaten, consultants — werkplekken die altijd moeten werken tijdens klantwerk.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Praktijksoftware, patiëntdata, mobiele werkplekken — beheer met aandacht voor compliance.' },
  { icon: Store, title: 'Retail & Horeca', description: 'Kantoor én winkelvloer. Laptops, kassa-pc’s, tablets — allemaal centraal beheerd.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Kantoorwerkplekken, productie-terminals en mobiele scanners — alles in één contract.' },
  { icon: Scale, title: 'Juridisch & Notariaat', description: 'Veilige werkplekken voor gevoelige dossiers, met encryptie en strikte toegangscontrole.' },
]

export const includedChecklist = [
  {
    icon: Laptop,
    category: 'Device management',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Windows, macOS en Linux werkplekken',
      'Installatie, configuratie en onderhoud',
      'Hardware-troubleshooting en vervanging',
      'Inventaris-overzicht altijd actueel',
      'Lifecycle-planning (vervangingstermijn)',
    ],
  },
  {
    icon: Download,
    category: 'Software & licenties',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Microsoft 365, branche-apps, browsers',
      'Updates en security-patches automatisch',
      'Licentie-beheer op uw naam',
      'Adobe, boekhoudpakket, CRM — wat u ook gebruikt',
      'Standaard-image voor snelle uitrol',
    ],
  },
  {
    icon: UserPlus,
    category: 'Onboarding & offboarding',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Werkplek klaar op dag 1 van nieuwe medewerker',
      'Accounts, e-mail en toegangsrechten geregeld',
      'Welkom-mail met IT-instructies',
      'Offboarding: data backup en veilige wipe',
      'Accounts direct deactiveren bij vertrek',
    ],
  },
  {
    icon: Headphones,
    category: 'Helpdesk & support',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Bellen, mailen of ticket aanmaken',
      'Remote support binnen minuten',
      'On-site bij hardware-problemen',
      'Vervangende hardware bij defect',
      'Duidelijke SLA per support-niveau',
    ],
  },
  {
    icon: Smartphone,
    category: 'Mobiel & hybride werken',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Zakelijke telefoons en tablets beheren',
      'Mobile Device Management (MDM)',
      'E-mail en agenda veilig op elk toestel',
      'Remote wipe bij verlies of diefstal',
      'Thuiswerken met VPN of Zero Trust',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Security op de werkplek',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Endpoint-bescherming (antivirus, anti-malware)',
      'Encryptie van harde schijven',
      'Multi-factor authentication standaard',
      'Automatische schermvergrendeling',
      'Phishing-training voor medewerkers',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Werkplek-audit',
    description: 'Wij brengen alle werkplekken, software en licenties in kaart. U krijgt een rapport met risico’s en standaardisatie-kansen.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Standaard op maat',
    description: 'Samen definiëren we de ideale werkplek per rol. Welke hardware, welke software, welke toegang — helder op papier.',
    icon: Monitor,
  },
  {
    step: '03',
    title: 'Overname & inrichting',
    description: 'Wij nemen het beheer over. Licenties op uw naam, inventaris ingevoerd, support-lijnen opgezet — zonder verstoring.',
    icon: Laptop,
  },
  {
    step: '04',
    title: 'Doorlopende ontzorging',
    description: 'Medewerkers bellen of mailen ons. Onboarding, offboarding, incidenten — u hoort alleen het eindresultaat.',
    icon: Headphones,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Werkplekbeheer is nooit standaard. Vaste prijs per werkplek per maand op maat van software, hardware en gewenst support-niveau.',
}

export const confidencePoints = [
  { title: 'Prijs per werkplek', description: 'Groeit u? Betaalt u meer. Krimpt u? Betaalt u minder' },
  { title: 'U blijft eigenaar', description: 'Licenties en hardware op uw naam — altijd' },
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract. Werkt het niet, stopt u' },
]

export const faqs = [
  {
    q: 'Wat kost werkplekbeheer?',
    a: 'Vaste prijs per werkplek per maand. Hoogte hangt af van software-behoefte, support-niveau (office-only of 24/7) en hardware-afspraken. Na een gratis werkplek-audit ontvangt u een heldere offerte — u weet vooraf precies wat elke werkplek kost.',
  },
  {
    q: 'Hoe snel kan een nieuwe medewerker aan de slag?',
    a: 'Standaard onboarding: werkplek klaar binnen 1-2 werkdagen. Bij spoed vaak dezelfde dag, mits de hardware beschikbaar is. Wij leveren een welkom-instructie mee zodat de eerste dag soepel verloopt.',
  },
  {
    q: 'Werken jullie met alle merken laptops?',
    a: 'Ja. Dell, HP, Lenovo, Apple — wat u ook gebruikt. We adviseren graag op basis van use-case en budget, maar u bepaalt. Geen verplichte merken of leveranciers.',
  },
  {
    q: 'Hoe werkt de support voor medewerkers?',
    a: 'Uw medewerkers bellen, mailen of openen een ticket. Wij helpen eerst remote — meestal is het probleem binnen minuten opgelost. Lukt dat niet? Dan komen we on-site of leveren we vervangende hardware.',
  },
  {
    q: 'Wat gebeurt er bij een kantoorverhuizing of hardware-refresh?',
    a: 'Grote projecten plannen we in fases zodat uw team productief blijft. Data, instellingen en profielen gaan mee. Oude hardware wordt veilig afgevoerd of overgedragen aan een recycler — AVG-proof gedocumenteerd.',
  },
  {
    q: 'Kunnen jullie ook mobiele telefoons en tablets beheren?',
    a: 'Ja. Via Mobile Device Management regelen we zakelijke e-mail, apps en beveiliging. Bij verlies of diefstal kan het toestel direct op afstand gewipet worden. Werkt met iPhone, Android en iPad.',
  },
  {
    q: 'Wat bij offboarding van een medewerker?',
    a: 'Op de afgesproken datum: accounts direct deactiveren, data backuppen, toegang intrekken, apparaat veilig wipen of doorgeven aan opvolger. Gedocumenteerd zodat u altijd kunt aantonen dat het AVG-proof is verlopen.',
  },
  {
    q: 'Wat is het verschil met systeembeheer?',
    a: 'Werkplekbeheer = de voorkant: laptops, PC’s, mobiele apparaten en software van uw medewerkers. Systeembeheer = de achterkant: servers, netwerk, backup, WiFi. Wij leveren ze los of samen — volledige IT-ontzorging in één contract.',
  },
]
