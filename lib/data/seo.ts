import {
  FileText, Users, Search, TrendingUp,
  Building2, Stethoscope, Store, GraduationCap, Scale,
  Headphones, BarChart3,
  Link2, BookOpen, MapPin,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Meer organisch verkeer',
  'Duurzame groei',
  'Maandelijkse rapportages',
]

export const whyChooseUs = [
  { icon: TrendingUp, title: 'Meetbare groei', description: 'Elke maand groei in posities en verkeer.', stat: '3x', statLabel: 'meer verkeer' },
  { icon: Search, title: 'Diepgaande audit', description: 'Alle technische én inhoudelijke kansen in kaart.', stat: '100+', statLabel: 'checkpunten' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement zonder verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste SEO-expert. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Webshops & Retail', description: 'Product- en categoriepagina’s hoger in Google, meer organisch verkeer en verkoop.' },
  { icon: Scale, title: 'Advocatuur & Advies', description: 'Vindbaar op specifieke praktijkgebieden en lokale zoekopdrachten in uw regio.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Lokale patiënten bereiken via "fysiotherapeut + stad" en specialisatie-zoekopdrachten.' },
  { icon: GraduationCap, title: 'Opleiders & Trainers', description: 'Gevonden worden op cursus-, vaardigheid- en regiozoekopdrachten.' },
  { icon: Building2, title: 'B2B Dienstverleners', description: 'Gekwalificeerd verkeer aantrekken via zoekwoorden die kopers écht gebruiken.' },
  { icon: MapPin, title: 'Lokale ondernemers', description: 'Topposities in Google Maps en "near me" zoekopdrachten.' },
]

export const includedChecklist = [
  {
    icon: Search,
    category: 'Technische SEO',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Site-snelheid optimaliseren (Core Web Vitals)',
      'Mobile-first check en aanpassingen',
      'Sitemap en robots.txt inrichten',
      'Structured data (Schema.org) per pagina',
      'Crawl-budget optimaliseren',
    ],
  },
  {
    icon: BookOpen,
    category: 'Keyword & content',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Grondig keyword-onderzoek voor uw branche',
      'Content-strategie met realistische targets',
      'Pagina-titels en meta-beschrijvingen op maat',
      'Interne linking-structuur geoptimaliseerd',
      'Content-briefings voor nieuwe teksten',
    ],
  },
  {
    icon: Link2,
    category: 'Autoriteit & backlinks',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Analyse van uw huidige backlink-profiel',
      'Kwalitatieve link-building strategie',
      'Lokale citations (Google, Bing, branche-sites)',
      'Partnerships en gastpublicaties',
      'Monitoring op schadelijke backlinks',
    ],
  },
  {
    icon: MapPin,
    category: 'Lokale SEO',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Google Business-profiel optimaliseren',
      'NAP-consistentie (naam, adres, telefoon)',
      'Lokale landingspagina’s per regio/stad',
      'Review-management strategie',
      'Lokale backlinks en vermeldingen',
    ],
  },
  {
    icon: BarChart3,
    category: 'Meten & rapporteren',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Google Search Console inrichten',
      'Google Analytics 4 koppelen',
      'Posities van 50+ keywords live volgen',
      'Maandelijkse rapportage met inzichten',
      'Live dashboard voor uzelf',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & advies',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste SEO-expert, geen callcenter',
      'Maandelijks strategiegesprek',
      'Antwoord binnen 24 uur op vragen',
      'Content-aanpassingen in overleg',
      'Advies bij nieuwe pagina’s of producten',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'SEO-audit',
    description: 'Grondige audit van uw site — technisch, content, links en concurrentie. Rapport binnen 1 week.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Strategie & plan',
    description: 'Samen met u stellen we doelen en prioriteiten — welke zoekwoorden, welke pagina’s, welk tempo.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Optimaliseren',
    description: 'Wij voeren maand-na-maand de technische én inhoudelijke verbeteringen door.',
    icon: TrendingUp,
  },
  {
    step: '04',
    title: 'Meten & bijsturen',
    description: 'Elke maand rapportage over groei, posities en verkeer. Strategie bijsturen waar nodig.',
    icon: BarChart3,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'SEO is nooit één-grootte-past-alles. Maandabonnement op maat van uw branche, concurrentie en ambities.',
}

export const confidencePoints = [
  { title: 'Maandabonnement', description: 'Vaste maandprijs met concrete activiteiten en deliverables' },
  { title: 'Gratis SEO-audit', description: 'Eerst weten wat er nodig is, dan pas een offerte' },
  { title: 'Alles inbegrepen', description: 'Audit, optimalisatie, rapportages en strategie zonder extra kosten' },
]

export const faqs = [
  {
    q: 'Wat kost SEO?',
    a: 'Dat werkt op offerte via een maandabonnement. De prijs hangt af van uw branche, concurrentie-intensiteit en ambities. Na een gratis SEO-audit ontvangt u een vaste maandprijs met concrete activiteiten en deliverables.',
  },
  {
    q: 'Hoe lang duurt het voor ik resultaat zie?',
    a: 'SEO is een lange-termijn strategie. Eerste kleinere winsten (long-tail keywords, technische verbeteringen) zijn vaak binnen 1-2 maanden zichtbaar. Voor competitieve zoekwoorden duurt het meestal 4-8 maanden voor echte positie-verbetering.',
  },
  {
    q: 'Garanderen jullie een #1 positie?',
    a: 'Nee — en iedereen die dat wel doet, liegt. Google’s algoritme is complex en verandert constant. Wij garanderen wel: grondige aanpak, transparante rapportage en duurzame groei in verkeer en rankings op relevante zoekwoorden.',
  },
  {
    q: 'Wat is het verschil met Google Ads?',
    a: 'Google Ads zijn betaalde advertenties — u betaalt per klik en verdwijnt zodra u stopt. SEO is organisch: u investeert in content en techniek, en blijft daarna maandenlang verkeer krijgen zonder per-klik kosten. Vaak werken ze goed samen.',
  },
  {
    q: 'Moet ik mijn website herschrijven?',
    a: 'Zelden helemaal. Meestal passen we bestaande pagina’s strategisch aan en voegen we waar nodig nieuwe content toe. Bij zware technische problemen (verouderd CMS, trage site) adviseren we eerst dat op te lossen.',
  },
  {
    q: 'Werken jullie met blog-teksten?',
    a: 'Ja. Wij doen keyword-research en content-briefings, en kunnen zelf teksten schrijven of uw schrijver begeleiden. Content is ongeveer 40% van modern SEO — we nemen het serieus.',
  },
  {
    q: 'Kunnen jullie ook lokale SEO doen?',
    a: 'Ja. Google Business-profiel, lokale landingspagina’s, citations in branche-sites, review-management — alles wat nodig is om lokaal gevonden te worden in Google Maps en "near me" zoekopdrachten.',
  },
  {
    q: 'Kan ik stoppen wanneer ik wil?',
    a: 'Ja. Maandelijks opzegbaar. Bij beëindiging leveren we alle setups (Search Console, Analytics, content) aan u over — u bent eigenaar van het werk, niet gijzelaar.',
  },
]
