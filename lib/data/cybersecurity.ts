import {
  FileText, Users, ShieldCheck,
  Building2, Briefcase, Stethoscope, Store, GraduationCap, Scale,
  Search, Headphones, AlertTriangle,
  Database, Fingerprint, ClipboardCheck, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Grondige audit in 1-2 dagen',
  'Training in plain Nederlands',
  'Concrete actieplannen',
]

export const whyChooseUs = [
  { icon: Search, title: 'Grondige nulmeting', description: 'Alle risico’s zwart op wit.', stat: '48u', statLabel: 'rapport gereed' },
  { icon: BookOpen, title: 'Praktische training', description: 'Uw team leert phishing herkennen.', stat: '100%', statLabel: 'medewerkers' },
  { icon: FileText, title: 'Vaste prijs', description: 'Per audit of training. Geen verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste security-expert. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Scale, title: 'Advocatuur & Accountancy', description: 'Klantvertrouwelijkheid, AVG en tuchtrecht — audits en training niet optioneel.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'NEN 7510 audits en bewustwording voor personeel dat met patiëntdata werkt.' },
  { icon: Store, title: 'Webshops & Retail', description: 'PCI-compliance checks en phishing-training voor klantenservice-teams.' },
  { icon: GraduationCap, title: 'Onderwijs', description: 'NEN 7510 voor scholen, awareness-training voor docenten en ICT-coördinatoren.' },
  { icon: Building2, title: 'MKB met gevoelige data', description: 'HR, klantdata, intellectueel eigendom — weten waar u zwak staat is stap 1.' },
  { icon: Briefcase, title: 'Bedrijven na een incident', description: 'Na een near-miss of aanval: uitgebreide audit én team-training voor herhalingspreventie.' },
]

export const includedChecklist = [
  {
    icon: ClipboardCheck,
    category: 'Security audit (nulmeting)',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Grondige check van firewall, servers en apparaten',
      'Wachtwoord-policy en MFA-gebruik beoordeeld',
      'Back-up setup getest op herstelbaarheid',
      'AVG en NEN-compliance geaudit',
      'Uitgebreid rapport met risico’s en prioriteiten',
    ],
  },
  {
    icon: BookOpen,
    category: 'Awareness-training',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Interactieve training (1-2 uur) op locatie of online',
      'Plain Nederlands, geen tech-jargon',
      'Phishing-simulaties — leer door te doen',
      'Certificaat per medewerker na afronding',
      'Updates bij nieuwe aanvalstechnieken',
    ],
  },
  {
    icon: Fingerprint,
    category: 'Toegang & identiteit',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Multi-factor authenticatie (MFA) uitrollen',
      'Password manager inrichten voor uw team',
      'Single sign-on (SSO) waar mogelijk',
      'Rechten per medewerker op maat',
      'Checklist voor uitdiensttreding',
    ],
  },
  {
    icon: Database,
    category: 'Data & backup',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Back-up strategie op maat (3-2-1 regel)',
      'Ransomware-bestendige kluis-backup',
      'Kwartaal-test van herstelprocedure',
      'Encryptie van gevoelige data',
      'AVG-proof verwerking met logging',
    ],
  },
  {
    icon: AlertTriangle,
    category: 'Incident-respons plan',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Stappenplan: wat doen bij een aanval?',
      'Contactpersonen en rollen helder vastgelegd',
      'Communicatietemplate voor klanten',
      'Draaiboek voor datalek-melding (AP)',
      'Jaarlijkse oefening met uw team',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & opvolging',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste contactpersoon, geen callcenter',
      'Antwoord binnen 24 uur op vragen',
      'Kwartaalreview na implementatie',
      'Hulp bij vragen na training',
      'Advies bij nieuwe tools of leveranciers',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'Gratis gesprek over uw bedrijf, huidige setup en grootste zorgen — zonder jargon.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Nulmeting',
    description: 'Grondige audit op locatie of remote. Binnen 48 uur ontvangt u een rapport met risico’s en aanbevelingen.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Training & actieplan',
    description: 'Awareness-training voor uw team en concrete stappen om de grootste risico’s weg te nemen.',
    icon: BookOpen,
  },
  {
    step: '04',
    title: 'Implementatie & review',
    description: 'Wij helpen met implementatie en komen terug voor een review na 3 maanden.',
    icon: ShieldCheck,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Audits en trainingen zijn nooit standaard. Vaste prijs per audit of training, geen uurtje-factuurtje.',
}

export const confidencePoints = [
  { title: 'Vaste prijs per audit', description: 'Nulmeting, rapport en adviesgesprek in één pakket' },
  { title: 'Vaste prijs per training', description: 'Awareness-training voor uw team met certificaten' },
  { title: 'Gratis intakegesprek', description: 'Eerst weten wat u nodig heeft, dan pas een offerte' },
]

export const faqs = [
  {
    q: 'Wat kost een security-audit?',
    a: 'Dat werkt op offerte. De prijs hangt af van grootte van uw bedrijf, aantal apparaten en de diepgang van de audit. Na een gratis intakegesprek ontvangt u een vaste prijs. Een standaard MKB-audit is meestal binnen 1-2 dagen afgerond.',
  },
  {
    q: 'Wat kost een awareness-training?',
    a: 'Ook op offerte, afhankelijk van teamgrootte en gewenste diepgang. Een basistraining (1-2 uur) voor een team van 10-20 mensen zit meestal tussen €495 en €1.250 excl. BTW, inclusief phishing-simulaties en certificaten.',
  },
  {
    q: 'Mijn bedrijf is klein — is een audit wel nodig?',
    a: '43% van cyberaanvallen treft juist kleine bedrijven, omdat hackers weten dat de beveiliging daar zwakker is. Eén ransomware-aanval kost gemiddeld €30.000+ en weken downtime. Een audit kost een fractie daarvan en maakt concreet waar uw grootste risico’s liggen.',
  },
  {
    q: 'Wat gebeurt er tijdens een nulmeting?',
    a: 'Wij checken in 1-2 dagen uw firewall, wachtwoord-beleid, MFA-gebruik, back-up setup, apparaatbeveiliging en medewerker-bewustwording. U krijgt een rapport met concrete risico’s, prioriteiten en een actieplan.',
  },
  {
    q: 'Zit er implementatie bij?',
    a: 'Optioneel. De audit en training zijn onafhankelijk. Wilt u dat wij ook helpen bij het doorvoeren van de aanbevelingen (MFA uitrollen, backup opzetten, enz.)? Dat kan tegen vaste prijzen per onderdeel.',
  },
  {
    q: 'Hoe werkt de awareness-training?',
    a: 'Interactieve sessie van 1-2 uur op locatie of online. Uw team leert phishing herkennen door echte voorbeelden en simulaties. Na afloop krijgt elke medewerker een certificaat. Updates sturen wij bij nieuwe aanvalstechnieken.',
  },
  {
    q: 'Kunnen jullie ook 24/7 monitoring bieden?',
    a: 'Nee, wij zijn geen managed security provider. Wij doen audits, trainingen en implementatie. Voor 24/7 SOC-diensten verwijzen wij naar gespecialiseerde partners — vaak is dat voor MKB ook niet nodig als de basis op orde is.',
  },
  {
    q: 'Hoe vaak moet een audit herhaald worden?',
    a: 'Jaarlijks is standaard voor MKB. Bij grote wijzigingen (nieuwe software, personeelsgroei, verhuizing) raden we een tussentijdse check aan. Compliance-eisen (NEN 7510, AVG) kunnen frequentere audits vereisen.',
  },
]
