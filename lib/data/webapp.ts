import {
  Rocket, Palette, FileText, Users, Code2,
  Building2, Briefcase, Store, Stethoscope, HardHat, GraduationCap,
  Zap, ShieldCheck, Headphones,
  Database, LayoutDashboard, Link2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// HERO TAGS
// ============================================================================
export const heroTags = [
  'Op maat gebouwd',
  'Uren werk automatiseren',
  'Groeit mee met uw bedrijf',
]

// ============================================================================
// BELOFTES STATS (4 items)
// ============================================================================
export const whyChooseUs = [
  {
    icon: Rocket,
    title: 'Ontwerp in 24 uur',
    description: 'Gratis en vrijblijvend.',
    stat: '24u',
    statLabel: 'eerste ontwerp',
  },
  {
    icon: Palette,
    title: 'Uniek op maat',
    description: 'Gebouwd voor uw proces.',
    stat: '100%',
    statLabel: 'maatwerk',
  },
  {
    icon: FileText,
    title: 'Vaste prijs',
    description: 'Vooraf duidelijk. Geen verrassingen.',
    stat: '0',
    statLabel: 'verborgen kosten',
  },
  {
    icon: Users,
    title: 'Eén aanspreekpunt',
    description: 'Uw vaste developer. Direct bereikbaar.',
    stat: '1',
    statLabel: 'aanspreekpunt',
  },
]

// ============================================================================
// VOOR WIE (target audiences)
// ============================================================================
export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: 'MKB met eigen proces', description: 'Bedrijven die Excel, mail en papier vervangen door één slim systeem.' },
  { icon: Store, title: 'Groothandel & Logistiek', description: 'Orderverwerking, voorraad en planning in één dashboard, altijd actueel.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Patiëntdossiers, afspraken en facturatie in een veilige omgeving.' },
  { icon: HardHat, title: 'Bouw & Installatie', description: 'Projectplanning, werkbonnen en uren-registratie voor onderweg.' },
  { icon: Building2, title: 'Dienstverleners', description: 'Klantportalen, offertes en rapportages volledig op maat.' },
  { icon: GraduationCap, title: 'Scholen & Opleiders', description: 'Leerlingvolgsystemen, registraties en ouderportalen.' },
]

// ============================================================================
// WAT U KRIJGT — Checklist (6 categorieen × 5 items)
// ============================================================================
export const includedChecklist = [
  {
    icon: LayoutDashboard,
    category: 'Interface & gebruiksgemak',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Uniek ontwerp op maat voor uw werkwijze',
      'Werkt perfect op telefoon, tablet en computer',
      'Overzichtelijk dashboard met de juiste info',
      'Zoeken en filteren in grote hoeveelheden data',
      'Exporteren naar Excel of PDF met één klik',
    ],
  },
  {
    icon: Database,
    category: 'Uw data & beheer',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Uw data veilig opgeslagen in Europa',
      'Gebruikersrechten per medewerker instelbaar',
      'Alle wijzigingen worden bijgehouden (audit-log)',
      'Eenvoudig importeren van bestaande lijsten',
      'Data altijd van u — export wanneer u wilt',
    ],
  },
  {
    icon: Link2,
    category: 'Koppelingen',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Koppeling met boekhouding (Exact, Moneybird)',
      'E-mail en agenda (Microsoft 365, Google)',
      'Betalingen (iDEAL, creditcard, automatische incasso)',
      'Verzending (PostNL, DHL, DPD)',
      'API-koppelingen met andere systemen',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Veiligheid & AVG',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Beveiligde inlogpagina met 2-factor (optioneel)',
      'Alle data versleuteld opgeslagen',
      'AVG-proof — verwerkersovereenkomst inbegrepen',
      'Elke dag automatisch een reservekopie',
      'Bescherming tegen onbevoegde toegang',
    ],
  },
  {
    icon: Zap,
    category: 'Snelheid & betrouwbaarheid',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Pagina’s laden in minder dan 1 seconde',
      'Werkt goed, ook bij veel gelijktijdige gebruikers',
      'Hosting op Nederlandse servers',
      'Hoge beschikbaarheid op Nederlandse hosting',
      'Live monitoring — wij zien storingen vóór u',
    ],
  },
  {
    icon: Headphones,
    category: 'Eerste 2 maanden gratis',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Support via e-mail, telefoon of WhatsApp',
      'Antwoord binnen 24 uur op uw vraag',
      'Vaste contactpersoon, geen callcenter',
      'Training voor uw team bij oplevering',
      'Hulp bij eerste weken in productie',
    ],
  },
]

// ============================================================================
// PROCES (4 steps)
// ============================================================================
export const processSteps = [
  {
    step: '01',
    title: 'Proces in kaart',
    description: 'Wij luisteren naar uw huidige werkwijze en achterhalen welke stappen tijd kosten.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Ontwerp in 24u',
    description: 'U krijgt een eerste ontwerp van de belangrijkste schermen. Bevalt het niet? Dan stopt het hier, gratis.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Bouwen in sprints',
    description: 'Wij bouwen in wekelijkse sprints, u ziet elke week progressie en geeft feedback.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Live & Support',
    description: 'Wij zorgen voor lancering en hosting. 2 maanden gratis support voor een soepele start.',
    icon: Rocket,
  },
]

// ============================================================================
// PRIJS
// ============================================================================
export const priceInfo = {
  price: 'Op offerte',
  description: 'Webapplicaties verschillen sterk in complexiteit. U krijgt een vaste offerte op basis van uw proces — geen uurtje-factuurtje.',
}

export const confidencePoints = [
  { title: 'Eenmalige bouwkosten', description: 'Geen maandelijkse licenties per gebruiker voor de applicatie zelf' },
  { title: '100% uw eigendom', description: 'U bent eigenaar van de applicatie, de code en uw data' },
  { title: 'Alles inbegrepen', description: 'Hosting, training en 2 maanden support zonder extra kosten' },
]

// ============================================================================
// FAQS
// ============================================================================
export const faqs = [
  {
    q: 'Hoe lang duurt het om een webapplicatie te bouwen?',
    a: 'Simpele applicaties zijn live binnen 4-6 weken. Complexere systemen met meerdere koppelingen duren 8-16 weken. U ontvangt binnen 24 uur een eerste schermontwerp.',
  },
  {
    q: 'Wat kost een webapplicatie laten maken?',
    a: 'Dat werkt op offerte. Webapplicaties verschillen enorm in complexiteit — een simpel klantportaal kost minder dan een uitgebreid ERP-systeem. Na een gratis gesprek ontvangt u een vaste prijs op basis van uw proces. Geen uurtje-factuurtje, geen verrassingen.',
  },
  {
    q: 'Wat is het verschil met een website?',
    a: 'Een website is vooral om bezoekers te informeren. Een webapplicatie is een werkomgeving — gebruikers loggen in, werken met data, en uw bedrijfsproces draait erop. Denk aan een CRM, klantportaal of dashboard.',
  },
  {
    q: 'Kan ik de applicatie zelf beheren?',
    a: 'Ja. U krijgt een beheer-omgeving om gebruikers toe te voegen, rechten in te stellen en basisgegevens aan te passen. Voor functionele uitbreidingen helpen wij u graag.',
  },
  {
    q: 'Kunnen jullie koppelen met onze bestaande software?',
    a: 'Ja. Wij hebben ervaring met koppelingen naar Exact, Moneybird, Afas, Microsoft 365, Google Workspace en vele andere systemen. Ook maatwerk API-koppelingen zijn mogelijk.',
  },
  {
    q: 'Is mijn data veilig?',
    a: 'Absoluut. Data wordt versleuteld opgeslagen op Nederlandse servers, alle wijzigingen worden gelogd, en u krijgt een AVG-verwerkersovereenkomst. 2-factor authenticatie is optioneel beschikbaar.',
  },
  {
    q: 'Wat is wel en niet inbegrepen qua hosting en domein?',
    a: 'Inbegrepen: applicatie, hosting, SSL en training. Niet inbegrepen: uw domeinnaam en zakelijke e-mail — die regelt u zelf. Wij koppelen uw domein aan de nieuwe applicatie.',
  },
  {
    q: 'Krijg ik support na oplevering?',
    a: 'Ja. De eerste 2 maanden gratis support via e-mail, telefoon of WhatsApp — reactie binnen 24 uur. Daarna zijn onderhoudspakketten beschikbaar.',
  },
]
