import {
  Mail, HardDrive, FileText, Calendar,
  Building2, Briefcase, Stethoscope, Store, Factory, Scale,
  Headphones, ShieldCheck, Cloud, RefreshCw, Lock, Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Migratie zonder dataverlies',
  'Security standaard ingericht',
  'Nederlandse M365-specialisten',
]

export const whyChooseUs = [
  { icon: Cloud, title: 'Overal werken', description: 'E-mail, bestanden en Teams op elk apparaat — veilig.', stat: '100%', statLabel: 'cloud-native' },
  { icon: Lock, title: 'Security vanaf dag 1', description: 'MFA, Conditional Access en AVG-compliance ingericht.', stat: 'Hardened', statLabel: 'configuratie' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement inclusief licenties en beheer.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Headphones, title: 'Eén aanspreekpunt', description: 'Uw vaste M365-specialist. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Building2, title: 'MKB op oude systemen', description: 'Werkt u nog met on-premise Exchange, losse mailservers of Google Workspace? Wij migreren naar M365 zonder gedoe.' },
  { icon: Briefcase, title: 'Professionele diensten', description: 'Accountants, advocaten, consultants — veilige e-mail en documentdeling met cliënten, altijd auditable.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'M365 ingericht voor AVG-compliance, met zorg-specifieke policies en data-locatie in Europa.' },
  { icon: Store, title: 'Retail & Horeca', description: 'Werknemers met gedeelde M365-accounts, front-of-house én kantoor — licenties slim verdeeld.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Kantoor, vloer en mobiele teams op één tenant — consistent én veilig.' },
  { icon: Scale, title: 'Juridisch & Notariaat', description: 'eDiscovery, Data Loss Prevention en retentie-policies geconfigureerd voor gevoelige dossiers.' },
]

export const includedChecklist = [
  {
    icon: RefreshCw,
    category: 'Migratie & implementatie',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Migratie van Gmail, Exchange, IMAP of Google Workspace',
      'E-mail, contacten en agenda’s zonder dataverlies',
      'SharePoint en OneDrive inrichten',
      'Migratie in het weekend voor minimale verstoring',
      'Rollback-plan als iets onverwachts gebeurt',
    ],
  },
  {
    icon: Mail,
    category: 'E-mail & communicatie',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Exchange Online volledig ingericht',
      'Gedeelde mailboxen en distributielijsten',
      'E-mail-signaturen centraal beheerd',
      'SPF, DKIM en DMARC correct ingesteld',
      'Teams voor chat, calls en meetings',
    ],
  },
  {
    icon: HardDrive,
    category: 'Bestanden & samenwerking',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'OneDrive per gebruiker (1TB)',
      'SharePoint-sites voor teams en projecten',
      'Permissies en externe deling op maat',
      'Versiebeheer en herstel bij fouten',
      'Koppeling met Teams voor directe toegang',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Security & compliance',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Multi-factor authentication verplicht',
      'Conditional Access (locatie, apparaat, risico)',
      'Data Loss Prevention (DLP) policies',
      'Anti-phishing en Safe Links / Safe Attachments',
      'AVG-proof configuratie en documentatie',
    ],
  },
  {
    icon: Users,
    category: 'Gebruikers- & licentiebeheer',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Gebruikers aanmaken en wijzigen',
      'Groepen, rollen en rechten op maat',
      'Licentie-optimalisatie (geen overbodige seats)',
      'Onboarding: account klaar op dag 1',
      'Offboarding: veilig en AVG-proof afhandelen',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & doorontwikkeling',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste M365-specialist, geen callcenter',
      'Snelle hulp bij vragen en incidenten',
      'Gebruikerstraining voor Teams, SharePoint, Outlook',
      'Maandelijks status- en security-rapport',
      'Advies bij nieuwe M365-features',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'M365-audit',
    description: 'Wij analyseren uw huidige e-mail, bestanden en agenda’s. U krijgt een rapport met risico’s, besparing en migratieplan.',
    icon: Cloud,
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Gedetailleerd migratieplan met tijdlijn, verantwoordelijkheden en licentie-advies. U weet precies wat er gaat gebeuren.',
    icon: Calendar,
  },
  {
    step: '03',
    title: 'Migratie',
    description: 'Wij voeren de migratie in het weekend uit om verstoring te minimaliseren. Maandagochtend draait iedereen op M365.',
    icon: RefreshCw,
  },
  {
    step: '04',
    title: 'Support & beheer',
    description: 'Doorlopend beheer, gebruikers-support en maandelijkse security-check. U heeft één vast aanspreekpunt.',
    icon: Headphones,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Microsoft 365 is nooit standaard. Vaste maandprijs op maat van aantal gebruikers, migratie-complexiteit en gewenst support-niveau.',
}

export const confidencePoints = [
  { title: 'Licenties op uw naam', description: 'Uw tenant, uw data — altijd overdraagbaar' },
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract op ons beheer' },
  { title: 'Transparante migratie', description: 'Vaste migratieprijs vooraf — geen nacalculaties' },
]

export const faqs = [
  {
    q: 'Wat kost Microsoft 365-beheer?',
    a: 'Vaste prijs per gebruiker per maand, inclusief licenties én beheer. Na een gratis M365-audit ontvangt u een heldere offerte met drie smaken: basis, standaard en premium. U weet vooraf precies wat u betaalt.',
  },
  {
    q: 'Kunnen jullie ons migreren vanuit Google Workspace of Exchange?',
    a: 'Ja. Wij migreren vanuit Gmail, Google Workspace, on-premise Exchange, IMAP of andere M365-tenants. E-mail, contacten, agenda’s en bestanden gaan mee zonder dataverlies. Migratie in het weekend voor minimale verstoring.',
  },
  {
    q: 'Hoe zit het met security en AVG?',
    a: 'Wij richten M365 standaard in met MFA, Conditional Access, DLP, Safe Links en AVG-proof policies. Data-opslag in Europa, audit-logging aan, en een documentatie-pakket voor uw AVG-administratie.',
  },
  {
    q: 'Wat als een medewerker uit dienst gaat?',
    a: 'Offboarding doen wij AVG-proof: account direct deactiveren, licentie vrijmaken, mailbox archiveren of doorsturen, OneDrive-bestanden overdragen, en apparaat extern wipen. Gedocumenteerd zodat u kunt aantonen dat het correct is gedaan.',
  },
  {
    q: 'Moeten we alle medewerkers dezelfde licentie geven?',
    a: 'Nee. Wij adviseren licentie-mix op basis van rol: Business Basic voor frontline, Business Standard voor kantoor, Business Premium voor gebruikers met gevoelige data. Dat scheelt fors in kosten zonder in te leveren op functionaliteit.',
  },
  {
    q: 'Geven jullie ook training aan medewerkers?',
    a: 'Ja. Bij migratie is training inbegrepen: Teams, Outlook, SharePoint en OneDrive. Daarna op aanvraag korte sessies of video-handleidingen. Uw medewerkers zijn binnen een week productief in M365.',
  },
  {
    q: 'Wat als Microsoft zelf uitvalt?',
    a: 'Microsoft garandeert 99,9% uptime (SLA). Bij storingen aan Microsoft-kant informeren wij u direct en monitoren de herstelstatus. Voor kritieke e-mail adviseren we desgewenst een secundair kanaal (bv. Teams of mobiel).',
  },
  {
    q: 'Kunnen wij het beheer zelf overnemen?',
    a: 'Ja. De tenant staat op uw naam, licenties op uw naam. Bij beëindiging dragen wij het beheer over met volledige documentatie. U of een andere partij kan direct verder — geen lock-in.',
  },
]
