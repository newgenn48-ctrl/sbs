import {
  Rocket, FileText, Users,
  Building2, Briefcase, Store, Stethoscope, HardHat, GraduationCap,
  ShieldCheck, Headphones, MessageCircle,
  Brain, BarChart3, Link2, Clock,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  '24/7 beschikbaar',
  'Leert uw bedrijf kennen',
  'Spreekt uw klant’s taal',
]

export const whyChooseUs = [
  { icon: Clock, title: '24/7 beschikbaar', description: 'Uw chatbot slaapt nooit.', stat: '24/7', statLabel: 'bereikbaar' },
  { icon: Brain, title: 'Getraind op uw bedrijf', description: 'Weet precies wat u aanbiedt.', stat: '100%', statLabel: 'op maat' },
  { icon: FileText, title: 'Vaste prijs', description: 'Vooraf duidelijk. Geen verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste developer. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Webshops & Retail', description: 'Vragen over producten, voorraad en bestellingen direct beantwoord.' },
  { icon: Briefcase, title: 'Dienstverleners', description: 'Kwalificeer leads automatisch en plan afspraken zonder handmatig werk.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Veelgestelde vragen en afspraakplanning, ook buiten openingstijden.' },
  { icon: Building2, title: 'Vastgoed', description: 'Interessepeilingen, bezichtigingen inplannen en antwoorden op FAQ.' },
  { icon: HardHat, title: 'Installatie & Bouw', description: 'Offerte-aanvragen kwalificeren en urgente storingen triageren.' },
  { icon: GraduationCap, title: 'Opleiders', description: 'Cursusinformatie, inschrijvingen en studentvragen volledig geautomatiseerd.' },
]

export const includedChecklist = [
  {
    icon: Brain,
    category: 'AI & intelligentie',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Getraind op uw bedrijfsinformatie',
      'Begrijpt natuurlijke vragen in plain Nederlands',
      'Leert continu van nieuwe gesprekken',
      'Schakelt naar een mens wanneer nodig',
      'Meerdere talen (Nederlands + Engels standaard)',
    ],
  },
  {
    icon: MessageCircle,
    category: 'Gebruikservaring',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Natuurlijke gesprekken, geen robot-gevoel',
      'Werkt op elke website (1 regel code)',
      'Mooi ontwerp passend bij uw merk',
      'Werkt perfect op telefoon, tablet en computer',
      'Snelle reacties — geen wachten',
    ],
  },
  {
    icon: Link2,
    category: 'Integraties',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'WhatsApp Business koppeling',
      'Agenda-integratie voor afspraken',
      'CRM-koppeling (HubSpot, Salesforce)',
      'E-mail doorsturen bij complexe vragen',
      'Koppeling met uw webshop of systeem',
    ],
  },
  {
    icon: BarChart3,
    category: 'Inzicht & verbetering',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Dashboard met alle gesprekken',
      'Zie welke vragen het meest voorkomen',
      'Maandelijkse rapportages over prestaties',
      'Welke chats leiden tot leads?',
      'Optimalisatie-voorstellen elke maand',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Veiligheid & privacy',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'AVG-compliant — data veilig in Europa',
      'Geen training op persoonlijke gegevens',
      'Gesprekken worden versleuteld opgeslagen',
      'Cookie-banner en privacy-statement',
      'Uw klanten blijven van u, niet van OpenAI',
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
      'Training van uw chatbot op nieuwe info',
      'Wekelijkse check op prestaties',
      'Hulp bij eerste weken live',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'Wij luisteren naar uw klantvragen en huidige werkwijze in de klantenservice.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Content verzamelen',
    description: 'Wij inventariseren uw FAQ’s, product-info en gesprekshistorie om de chatbot te trainen.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Training & testen',
    description: 'Wij trainen de AI op uw bedrijf en u test de chatbot uitgebreid voor livegang.',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Live & Support',
    description: 'Wij zetten de chatbot live op uw site. 2 maanden gratis support en doorlopende training.',
    icon: Rocket,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'AI-chatbots verschillen sterk in omvang. U krijgt een vaste offerte op basis van uw FAQ’s, integraties en gespreksvolume — geen uurtje-factuurtje.',
}

export const confidencePoints = [
  { title: 'Eenmalige bouwkosten', description: 'Plus maandelijks AI-credit voor gebruik (pay-as-you-go)' },
  { title: '100% uw eigendom', description: 'U bent eigenaar van de chatbot-configuratie en gesprekken' },
  { title: 'Alles inbegrepen', description: 'Training, integratie, dashboard en 2 maanden support zonder extra kosten' },
]

export const faqs = [
  {
    q: 'Wat kost een AI-chatbot?',
    a: 'Dat werkt op offerte. De prijs hangt af van hoeveel bedrijfsinformatie we trainen, welke integraties u wenst (WhatsApp, CRM, agenda) en verwacht gespreksvolume. Na een gratis gesprek ontvangt u een vaste bouwprijs. Daarnaast zijn er maandelijkse AI-credit-kosten (pay-as-you-go, meestal €20-100/maand afhankelijk van gebruik).',
  },
  {
    q: 'Hoe lang duurt het om een chatbot te maken?',
    a: 'Gemiddeld 2-3 weken. Binnen 24 uur krijgt u een eerste demo-versie met basis-antwoorden. Complexe chatbots met meerdere integraties duren 4-6 weken.',
  },
  {
    q: 'Kan de chatbot leren van onze eigen documenten?',
    a: 'Ja. Wij trainen de chatbot op uw website, FAQ’s, productinfo, handleidingen en eerdere klantgesprekken. Hoe meer goede input, hoe slimmer de bot.',
  },
  {
    q: 'Wat als de chatbot een vraag niet kan beantwoorden?',
    a: 'Dan schakelt de bot automatisch naar een menselijke collega, of stuurt het bericht door naar uw e-mail of WhatsApp. De klant wacht niet — er wordt altijd gereageerd.',
  },
  {
    q: 'Is het veilig om klantdata door AI te laten gaan?',
    a: 'Ja. Wij gebruiken AVG-compliant oplossingen met data opgeslagen in Europa. Geen training op persoonlijke gegevens van uw klanten, geen deling met derden. Een verwerkersovereenkomst is inbegrepen.',
  },
  {
    q: 'Kan de chatbot afspraken inplannen of leads kwalificeren?',
    a: 'Absoluut. Koppeling met agenda-systemen (Calendly, Google Calendar) en CRM-tools (HubSpot, Salesforce) is standaard mogelijk. De bot kan kwalificatievragen stellen en leads doorsturen.',
  },
  {
    q: 'Op welke website-platforms werkt dit?',
    a: 'Op elke website. Wij leveren een simpele code-snippet die u of uw developer in de site plakt. Werkt op WordPress, Shopify, custom-websites — maakt niet uit.',
  },
  {
    q: 'Krijg ik support na oplevering?',
    a: 'Ja. De eerste 2 maanden krijgt u gratis support en doorlopende training van de bot. Daarna zijn onderhoudspakketten beschikbaar.',
  },
]
