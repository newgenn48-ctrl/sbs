import {
  FileText, Users, Target, Database,
  Building2, Briefcase, Stethoscope, Store, Scale, Factory,
  Headphones, BarChart3, Settings, RefreshCw, Clock, Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Automatisering volledig op maat',
  'Elk proces, elke tool, elke branche',
  'Van simpele flow tot custom build',
]

export const whyChooseUs = [
  { icon: Sparkles, title: '100% op maat', description: 'Geen template. Wij bouwen exact wat úw proces nodig heeft.', stat: '∞', statLabel: 'mogelijk' },
  { icon: Clock, title: 'Uren terug', description: 'Repetitieve taken die uren duurden — nu automatisch klaar.', stat: '15u', statLabel: 'bespaard/wk' },
  { icon: FileText, title: 'Vaste prijs', description: 'Projectprijs of maandabonnement — altijd vooraf duidelijk.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste automation-specialist. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: 'B2B Dienstverleners', description: 'Offertes, contracten, projectregistratie of rapportages — wat bij u handmatig is, maken wij automatisch.' },
  { icon: Store, title: 'Webshops & Retail', description: 'Orders, voorraad, facturen, reviews — elk punt waar data van A naar B moet, kunnen wij automatiseren.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Dossierstromen, declaraties, afspraak-logistiek — op maat gebouwd binnen uw praktijkregels.' },
  { icon: Scale, title: 'Juridisch & Advies', description: 'Document-workflows, dossier-archivering, cliëntcommunicatie — elk scenario bespreekbaar.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Voorraad-triggers, leveringsschema’s, machine-data — custom integraties met uw systemen.' },
  { icon: Building2, title: 'Iedereen met een repetitief proces', description: 'Doet u het handmatig en bestaan er regels? Dan is het waarschijnlijk te automatiseren — op maat.' },
]

export const includedChecklist = [
  {
    icon: Target,
    category: 'Proces-audit & scoping',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'In-kaart brengen van uw specifieke proces',
      'Bottleneck-analyse: waar zit de pijn écht?',
      'ROI-berekening per automatisering',
      'Maatwerk-scope: wat wél en wat niet',
      'Roadmap voor komende 3-6 maanden',
    ],
  },
  {
    icon: Sparkles,
    category: 'Maatwerk-automatisering',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Gebouwd rond úw proces, niet een template',
      'No-code flows waar dat kan (sneller & goedkoper)',
      'Custom scripts of code waar dat moet',
      'Branche-specifieke logica en regels',
      'Uitbreidbaar als uw proces verandert',
    ],
  },
  {
    icon: Database,
    category: 'Integraties op maat',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Koppelingen met uw bestaande tools',
      'Custom API-integraties waar nodig',
      'Branche-software en legacy-systemen',
      'Real-time sync of scheduled batches',
      'Geen tool-lock-in — u kiest, wij bouwen',
    ],
  },
  {
    icon: FileText,
    category: 'Documentatie & overdracht',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Flow-diagram van elke automatisering',
      'Uitleg in normale taal (geen jargon)',
      'Training voor uw team',
      'Runbook: wat te doen bij problemen',
      'U kunt het altijd zelf overnemen',
    ],
  },
  {
    icon: BarChart3,
    category: 'Monitoring & betrouwbaarheid',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Error-detectie met automatische alerts',
      'Fallback naar handmatig bij storing',
      'Logboek van elke actie (audit-trail)',
      'Performance-monitoring per flow',
      'Maandelijkse gezondheidsrapportage',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & doorontwikkeling',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste automation-specialist als contact',
      'Antwoord binnen 24 uur bij vragen',
      'Snelle fixes bij wijzigingen in uw tools',
      'Advies bij nieuwe processen',
      'Maandelijkse optimalisatie-check',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Proces-audit',
    description: 'Wij lopen uw specifieke werkdag door en vinden de grootste tijdvreters. U krijgt een rapport met concrete maatwerk-kansen.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Plan & ROI',
    description: 'Per automatisering berekenen we de tijdwinst en kosten. U kiest welke wij eerst op maat bouwen — meestal de grootste pijn eerst.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Bouwen op maat',
    description: 'Wij bouwen, testen en zetten gefaseerd live. No-code waar slim, custom code waar nodig — altijd passend bij úw proces.',
    icon: Settings,
  },
  {
    step: '04',
    title: 'Optimaliseren',
    description: 'Maandelijks monitoren en bijsturen. Nieuwe automatiseringen toevoegen wanneer u er klaar voor bent.',
    icon: RefreshCw,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Maatwerk is per definitie nooit standaard. Projectprijs of maandabonnement op maat van úw processen, tools en gewenste complexiteit.',
}

export const confidencePoints = [
  { title: 'Volledig op maat', description: 'Gebouwd rond úw proces — geen ingedikte template' },
  { title: 'Transparante ROI', description: 'Vooraf berekende tijdwinst per automatisering' },
  { title: 'Geen lock-in', description: 'Documentatie altijd inbegrepen, uw team kan verder' },
]

export const faqs = [
  {
    q: 'Wat voor soort processen automatiseren jullie?',
    a: 'Alles op maat. Van simpele Zapier-flows (nieuwe lead \u2192 CRM \u2192 bevestigingsmail) tot complexe custom integraties (ERP \u2194 webshop \u2194 boekhouding met branche-specifieke logica). Documenten, data, notificaties, rapportages, workflows, approvals — als er regels voor zijn, kunnen we het automatiseren.',
  },
  {
    q: 'Wat kost proces-automatisering op maat?',
    a: 'Dat werkt op offerte. Simpele flows beginnen vanaf enkele honderden euro’s, complexe custom builds met meerdere systeemintegraties zijn projectmatig of maandabonnement. Na een gratis proces-audit ontvangt u een vaste prijs met berekende ROI — geen verrassingen achteraf.',
  },
  {
    q: 'Welke tools gebruiken jullie?',
    a: 'Wat past bij uw situatie. No-code (Zapier, Make, Power Automate, n8n) voor snelle flows. Custom scripts (Python, Node.js) voor complexe logica. Custom API-integraties voor branche-software. We kiezen altijd de meest kosteneffectieve route — geen vendor lock-in, geen ideologische voorkeur.',
  },
  {
    q: 'Ik heb een heel specifiek proces — kan dat ook?',
    a: 'Juist dat is ons werk. Wij bouwen geen templates; wij bouwen rond úw proces. Of het nu gaat om een legacy-systeem uit 2003, een branche-specifieke workflow, of een integratie die niemand anders aandurft — als er een logica achter zit, is er een oplossing.',
  },
  {
    q: 'Wat als er iets misgaat in een automatisering?',
    a: 'Alle flows bouwen we met error-handling en fallback naar handmatig. Bij problemen krijgt u direct een notificatie en kunnen wij snel ingrijpen. Elke actie wordt gelogd zodat we precies kunnen zien wat er is gebeurd.',
  },
  {
    q: 'Hoe zit het met de terugverdientijd?',
    a: 'De meeste automatiseringen verdienen zich binnen 3-6 maanden terug. Bij elk voorstel berekenen we vooraf de tijdwinst x uurtarief zodat u een onderbouwde keuze kunt maken. Quick wins doen we eerst, complexe trajecten daarna.',
  },
  {
    q: 'Kunnen mijn medewerkers de flows zelf beheren?',
    a: 'Ja. We leveren bij elke automatisering een flow-diagram, uitleg in normale taal en een runbook. Uw team kan monitoren en kleine aanpassingen maken. Voor complexere wijzigingen zijn wij er altijd — maar u zit nooit vast.',
  },
  {
    q: 'Is mijn data veilig bij deze tools?',
    a: 'Ja. Standaard-tools zoals Zapier en Make zijn AVG-proof en gebruiken encryptie. Voor gevoelige data kunnen we self-hosted oplossingen (n8n, custom scripts) inzetten zodat alles op uw eigen server blijft. We adviseren per situatie — wat past bij uw risico-profiel.',
  },
]
