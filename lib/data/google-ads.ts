import {
  FileText, Users, Search, TrendingUp, MousePointerClick,
  Building2, Briefcase, Stethoscope, Store, GraduationCap, HardHat,
  Headphones, BarChart3, Target, DollarSign, Eye,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Meer leads, minder budget',
  'Live campagne-inzicht',
  'Maandelijks opzegbaar',
]

export const whyChooseUs = [
  { icon: MousePointerClick, title: 'Hogere CTR', description: 'Advertenties die écht aanklikbaar zijn.', stat: '2x', statLabel: 'hogere CTR' },
  { icon: DollarSign, title: 'Lagere CPA', description: 'Minder euro’s per conversie.', stat: '40%', statLabel: 'lagere CPA' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement voor beheer. Geen verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste ads-expert. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Webshops & Retail', description: 'Shopping-campagnes en productadvertenties die direct verkopen.' },
  { icon: HardHat, title: 'Installatie & Bouw', description: 'Leadgeneratie voor offertes via lokale zoekwoorden.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Lokale patiënten bereiken op specifieke behandelingen.' },
  { icon: Briefcase, title: 'B2B Dienstverleners', description: 'Gekwalificeerde leads via zakelijke keywords en LinkedIn integratie.' },
  { icon: GraduationCap, title: 'Opleiders & Cursussen', description: 'Inschrijvingen genereren via cursus-gerichte campagnes.' },
  { icon: Building2, title: 'MKB die nú leads wil', description: 'Snel zichtbaar voor koopbereide zoekers, zonder te wachten op SEO.' },
]

export const includedChecklist = [
  {
    icon: Target,
    category: 'Campagne-strategie',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Doelgroep en buyer-journey in kaart',
      'Keyword-strategie op koop-intentie',
      'Negatieve keywords om budget te beschermen',
      'Bieding-strategie (CPC, CPA of ROAS)',
      'Budget-verdeling per campagne-type',
    ],
  },
  {
    icon: MousePointerClick,
    category: 'Advertenties & creatief',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Meerdere ad-varianten per campagne',
      'Responsive Search Ads met A/B-testen',
      'Zorgvuldig geschreven headlines en beschrijvingen',
      'Ad-extensions (sitelinks, callouts, locatie)',
      'Banners voor Display en YouTube',
    ],
  },
  {
    icon: Eye,
    category: 'Landing pages & conversie',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Landing page-analyse en aanbevelingen',
      'Conversie-tracking (formulieren, calls, aankopen)',
      'A/B-testen van CTA’s en pagina-varianten',
      'Tag Manager en Analytics goed ingericht',
      'Call-tracking voor telefoon-leads',
    ],
  },
  {
    icon: BarChart3,
    category: 'Optimalisatie',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Wekelijkse bid-aanpassingen per keyword',
      'Ad-performance analyse (pauzeer verliezers)',
      'Zoektermen-rapport elke week doornemen',
      'Quality Score-verbetering per ad-groep',
      'Dayparting: budget op de juiste tijden',
    ],
  },
  {
    icon: TrendingUp,
    category: 'Rapportage & inzicht',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Live dashboard voor uzelf',
      'Maandelijkse rapportage met inzichten',
      'ROI per campagne duidelijk zichtbaar',
      'Concurrentie-analyse (Auction Insights)',
      'Voorstellen voor volgende maand',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & advies',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste ads-expert, geen callcenter',
      'Maandelijks strategiegesprek',
      'Antwoord binnen 24 uur op vragen',
      'Advies bij nieuwe producten of diensten',
      'Uw eigen Google Ads-account — u blijft eigenaar',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Audit & strategie',
    description: 'Wij analyseren uw huidige ads (of setup zonder ads), concurrentie en markt. Concreet plan binnen 1 week.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Setup & lancering',
    description: 'Campagnes inrichten, tracking koppelen, landingspagina’s optimaliseren, ads schrijven. Live binnen 2 weken.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Optimaliseren',
    description: 'Wekelijks bij-stellen: biedingen, keywords, ads. Snoeien wat niet werkt, opschalen wat wél werkt.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Rapporteren & bijsturen',
    description: 'Maandelijks strategiegesprek. Transparant over wat werkt, wat niet, en wat de volgende stap is.',
    icon: BarChart3,
  },
]

export const priceInfo = {
  price: 'Vanaf €345',
  description: 'Maandabonnement voor campagne-beheer (excl. BTW). Advertentie-budget betaalt u direct aan Google — geen opslag.',
}

export const confidencePoints = [
  { title: 'Vaste beheervergoeding', description: 'Maandprijs voor ons werk — advertentie-budget apart' },
  { title: 'U blijft eigenaar', description: 'Uw Google Ads-account blijft van u. Geen gijzeling van data.' },
  { title: 'Maandelijks opzegbaar', description: 'Geen langdurig contract. Resultaat telt.' },
]

export const faqs = [
  {
    q: 'Wat kost Google Ads beheer?',
    a: 'Vanaf \u20ac345 excl. BTW per maand voor het campagne-beheer. De exacte prijs hangt af van campagne-omvang en aantal campagnes. Daarnaast betaalt u de advertentie-kosten (klikken) direct aan Google — geen opslag van ons.',
  },
  {
    q: 'Hoeveel budget heb ik minimaal nodig?',
    a: 'Voor zinvolle resultaten adviseren we vanaf €500-1.000 per maand ad-budget. Minder kan, maar geeft weinig data om op te optimaliseren. Voor lokale bedrijven kan al vanaf €300 — afhankelijk van de concurrentie.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Google Ads is snel: zichtbaar binnen 24 uur, eerste klikken binnen dagen. De eerste 2-4 weken optimaliseren we intensief om de CPA omlaag te brengen. Verwacht na 1 maand serieuze resultaten.',
  },
  {
    q: 'Wat is het verschil met SEO?',
    a: 'Google Ads = betaalde klikken, direct zichtbaar, direct resultaat — zodra u stopt, stopt het verkeer. SEO = organisch verkeer, traag opbouwen maar lang profijt. Vaak werken ze goed samen: ads voor nu, SEO voor de lange termijn.',
  },
  {
    q: 'Wie is eigenaar van het Google Ads-account?',
    a: 'U. Altijd. Wij krijgen toegang tot uw eigen account (of maken een nieuw account op uw naam). Bij beëindiging loggen we gewoon uit. Geen gijzeling van data of campagnes.',
  },
  {
    q: 'Kunnen jullie ook Meta (Facebook/Instagram) ads doen?',
    a: 'Ja. Meta Ads werken anders (visueel, doelgroep-gericht) maar hebben dezelfde logica. Voor veel branches is een combinatie van Google + Meta het sterkst. We adviseren over de juiste mix.',
  },
  {
    q: 'Moet mijn landingspagina perfect zijn?',
    a: 'Nee, maar wel goed. Slechte landing pages verpesten iedere ads-investering. We doen een landing page-check voor de start en geven concrete verbeter-adviezen — of bouwen er een voor u.',
  },
  {
    q: 'Garanderen jullie een bepaalde ROI?',
    a: 'Nee, en wees voorzichtig met agencies die dat wel doen. Google Ads is afhankelijk van uw aanbod, prijs, concurrentie en landing page. Wij garanderen: grondige aanpak, transparante rapportage en constante optimalisatie richting maximale ROI.',
  },
]
