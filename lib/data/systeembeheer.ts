import {
  Server, Network, Database, PhoneCall,
  Building2, Briefcase, Stethoscope, Store, Factory, Scale,
  Headphones, ShieldCheck, Wrench, FileCheck, Clock, UserCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Infrastructuur die draait',
  'Vast aanspreekpunt',
  'Maatwerk per bedrijf',
]

export const whyChooseUs = [
  { icon: Clock, title: 'Snelle respons', description: 'Geen callcenter. Uw specialist kent uw omgeving.', stat: '1u', statLabel: 'respons' },
  { icon: ShieldCheck, title: 'Proactief beheer', description: 'Problemen opgelost vóórdat u ze merkt.', stat: '24/7', statLabel: 'monitoring' },
  { icon: FileCheck, title: 'Vaste prijs', description: 'Maandabonnement zonder verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: UserCheck, title: 'Eén aanspreekpunt', description: 'Uw vaste systeembeheerder. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Building2, title: 'MKB met eigen servers', description: 'Heeft u één of meer servers op locatie? Wij zorgen voor onderhoud, updates en monitoring.' },
  { icon: Briefcase, title: 'Professionele diensten', description: 'Accountants, advocaten, consultants — infrastructuur die altijd beschikbaar moet zijn.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Kritieke systemen, patiëntdata en compliance — infrastructuur die uptime én veiligheid vereist.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Warehouse-systemen, ERP en machinekoppelingen — netwerk en servers die niet mogen uitvallen.' },
  { icon: Scale, title: 'Juridisch & Notariaat', description: 'Veilige dossieropslag, backup-strategie en AVG-compliance voor gevoelige data.' },
  { icon: Store, title: 'Retail & Horeca', description: 'Kassasystemen, WiFi voor gasten en stabiele verbindingen over meerdere vestigingen.' },
]

export const includedChecklist = [
  {
    icon: Server,
    category: 'Server- & cloudbeheer',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Windows Server & Linux beheer',
      'Updates, patches en security-fixes',
      'Performance-monitoring en tuning',
      'Virtualisatie (Hyper-V, VMware, Proxmox)',
      'Azure / AWS / hybride advies',
    ],
  },
  {
    icon: Network,
    category: 'Netwerk & WiFi',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Firewall-configuratie en -monitoring',
      'Switches, routers en VLAN-beheer',
      'Zakelijke WiFi met gastnetwerk',
      'Site-survey voor optimale dekking',
      'VPN voor thuiswerkers',
    ],
  },
  {
    icon: Database,
    category: 'Backup & Disaster Recovery',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Dagelijkse geautomatiseerde backups',
      'Off-site opslag (cloud of tweede locatie)',
      'Maandelijkse restore-tests',
      'Disaster Recovery Plan op papier',
      'Ransomware-bestendige retentie',
    ],
  },
  {
    icon: PhoneCall,
    category: 'Telefonie & vergaderruimtes',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'VoIP-telefonie met nummerbehoud',
      'Integratie met Teams / Zoom',
      'Doorschakelingen en wachtrijen',
      'Vergaderruimte-installatie (scherm, camera, audio)',
      'Gebruiksvriendelijke bediening',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Security & compliance',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Endpoint-beveiliging en updates',
      'Multi-factor authentication',
      'Toegangscontrole en logging',
      'AVG-proof configuratie en documentatie',
      'Alarm-, toegangs- en camera-integratie',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & documentatie',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste systeembeheerder, geen callcenter',
      'SLA-gestuurde responstijd bij storingen',
      'Volledige documentatie van uw omgeving',
      'Maandelijks status- en securityrapport',
      'U blijft eigenaar van alle licenties en data',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Infrastructuur-audit',
    description: 'Wij inventariseren uw servers, netwerk, backups en licenties. U krijgt een rapport met risico’s en quick-wins.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Plan op maat',
    description: 'SLA en maandprijs op maat van uw omgeving. Wat doen wij, wat doet u zelf, waar zit het grootste risico?',
    icon: Wrench,
  },
  {
    step: '03',
    title: 'Overname & fixes',
    description: 'Wij nemen het beheer over met minimale verstoring. Achterstallig onderhoud lossen we direct op.',
    icon: Server,
  },
  {
    step: '04',
    title: 'Doorlopend beheer',
    description: 'Proactieve monitoring, updates, maandelijkse rapportage en direct contact bij storingen.',
    icon: ShieldCheck,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'IT-infrastructuur is nooit standaard. Vaste maandprijs op maat van uw aantal gebruikers, servers, locaties en gewenste SLA.',
}

export const confidencePoints = [
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract. U blijft eigenaar van alles' },
  { title: 'Transparante documentatie', description: 'Volledig overzicht van uw IT — altijd inzichtelijk' },
  { title: 'Geen vendor lock-in', description: 'Licenties op uw naam, wachtwoorden in uw kluis' },
]

export const faqs = [
  {
    q: 'Wat kost systeembeheer uitbesteden?',
    a: 'Dat werkt op offerte. Prijs hangt af van aantal servers, gebruikers, locaties en gewenste SLA (4u of 1u respons). Na een gratis infrastructuur-audit ontvangt u een vaste maandprijs. Vaak fors goedkoper én betrouwbaarder dan een interne IT-er.',
  },
  {
    q: 'Wat is het verschil met werkplekbeheer?',
    a: 'Systeembeheer = de achterkant: servers, netwerk, backups, firewall, WiFi. Werkplekbeheer = de voorkant: laptops, PC’s en software van uw medewerkers. Beide combineren geeft volledige IT-ontzorging — wij leveren ze los of samen.',
  },
  {
    q: 'Hoe snel reageren jullie bij een storing?',
    a: 'Afhankelijk van de SLA die u kiest: bij kritieke storingen 1-4 uur responstijd, 24/7 bereikbaar voor noodgevallen. We monitoren proactief zodat veel problemen worden opgelost vóórdat u er last van heeft.',
  },
  {
    q: 'Werken jullie ook met kleine bedrijven?',
    a: 'Ja. Wij bedienen bedrijven van 5 tot 150+ medewerkers. Eén server of een complexe omgeving — wij schalen het beheer op uw situatie en budget. Geen minimale grootte.',
  },
  {
    q: 'Wat met onze bestaande leverancier of licenties?',
    a: 'Licenties blijven op uw naam. Bestaande leveranciers-contracten respecteren we of we helpen ze af te bouwen. We nemen gecontroleerd over zonder u vast te zetten — u kunt altijd overstappen.',
  },
  {
    q: 'Doen jullie ook vergaderruimtes en telefonie?',
    a: 'Ja. VoIP-telefonie (met nummerbehoud), integratie met Teams of Zoom, en complete vergaderruimte-setups (beeldscherm, camera, audio, bediening). Gebouwd voor gebruikers die niet met techniek willen worstelen.',
  },
  {
    q: 'Doen jullie alarmsystemen en camera’s?',
    a: 'Ja. Alarm, toegangscontrole en IP-camerasystemen, geïntegreerd met uw netwerk zodat u altijd op afstand toegang heeft. Vaak gecombineerd met WiFi-infrastructuur in één project.',
  },
  {
    q: 'Wat als we onze eigen servers naar de cloud willen?',
    a: 'Dan adviseren we eerlijk: niet alles hoort in de cloud. Samen bepalen we wat lokaal blijft, wat naar Azure / AWS / Microsoft 365 gaat, en wat hybride blijft. Begeleide migratie met minimale downtime.',
  },
]
