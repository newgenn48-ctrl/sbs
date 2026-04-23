import {
  Rocket, Palette, FileText, Users, Code2,
  Store, Utensils, Shirt, Heart, Package, Briefcase,
  Zap, Search, ShieldCheck, Headphones, CreditCard,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================================
// HERO TAGS
// ============================================================================
export const heroTags = [
  'Razendsnel afrekenen',
  'iDEAL, PayPal & Klarna',
  'Zelf producten beheren',
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
    title: 'Uniek design',
    description: 'Geen templates. 100% op maat.',
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
  { icon: Store, title: 'Retail & Winkels', description: 'Fysieke winkels die ook online willen verkopen — met gesynchroniseerde voorraad.' },
  { icon: Utensils, title: 'Food & Beverage', description: 'Producenten, bakkerijen, wijnhandels — verse producten met snelle bezorging.' },
  { icon: Shirt, title: 'Fashion & Accessoires', description: 'Kleding- en accessoire-merken die een sterk visueel verhaal willen vertellen.' },
  { icon: Heart, title: 'Wellness & Gezondheid', description: 'Supplementen, beauty, fitness — vertrouwen wekken én verkopen.' },
  { icon: Package, title: 'Handmade & Ambacht', description: 'Kleinere makers die hun producten persoonlijk willen presenteren.' },
  { icon: Briefcase, title: 'B2B Groothandel', description: 'Zakelijke verkoop met klantspecifieke prijzen en bulk-bestellingen.' },
]

// ============================================================================
// WAT U KRIJGT — Checklist (6 categorieen × 5 items)
// ============================================================================
export const includedChecklist = [
  {
    icon: Palette,
    category: 'Design & gebruiksgemak',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Uniek ontwerp op maat voor uw merk',
      'Werkt perfect op telefoon, tablet en computer',
      'Mooie product- en categoriepagina’s',
      'Soepele afreken-flow in 1-3 stappen',
      'Gebruiksvriendelijke zoek- en filterfunctie',
    ],
  },
  {
    icon: Zap,
    category: 'Snelheid',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Gebouwd met de nieuwste techniek',
      'Topscore in Google’s snelheidstest',
      'Productafbeeldingen laden razendsnel',
      'Afreken-pagina opent in minder dan 1 seconde',
      'Werkt goed, ook bij pieken in bezoekers',
    ],
  },
  {
    icon: CreditCard,
    category: 'Betalen & leveren',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'iDEAL, creditcard, PayPal en Klarna',
      'Automatische BTW- en verzendberekening',
      'Koppeling met PostNL, DHL of DPD',
      'Bestel-bevestigingen via e-mail',
      'Terugbetalingen in één klik',
    ],
  },
  {
    icon: Search,
    category: 'Vindbaar in Google',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Elke productpagina wordt door Google opgepikt',
      'Structured data voor prijzen en voorraad',
      'Mooie preview bij delen op social media',
      'Google Shopping-koppeling mogelijk',
      'Bezoekersstatistieken live inzichtelijk',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Veiligheid & bescherming',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Beveiligde verbinding (het slotje in de browser)',
      'Betaling veilig verwerkt (PCI-compliant)',
      'Privacy-melding volgens de wet (AVG)',
      'Bescherming tegen fraude en misbruik',
      'Elke dag automatisch een reservekopie',
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
      'Hulp bij eerste producten toevoegen',
      'Training om zelf orders te verwerken',
    ],
  },
]

// ============================================================================
// PROCES (4 steps)
// ============================================================================
export const processSteps = [
  {
    step: '01',
    title: 'Gratis Gesprek',
    description: 'Wij luisteren naar uw producten, doelgroep en ambities. Geen verkooppraatjes.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Ontwerp in 24u',
    description: 'U ontvangt een eerste ontwerp van homepage en productpagina. Bevalt het niet? Dan stopt het hier, gratis.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Bouw & Integratie',
    description: 'Wij bouwen, koppelen betaling en verzending, en testen alles met u samen.',
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
  price: 'Vanaf €785',
  description: 'Professionele webshop volledig op maat (excl. BTW)',
}

export const confidencePoints = [
  { title: 'Eenmalige kosten', description: 'Geen maandelijks abonnement voor de webshop zelf, geen verborgen fees' },
  { title: '100% uw eigendom', description: 'U bent eigenaar van de webshop en alle code' },
  { title: 'Alles inbegrepen', description: 'Hosting, betaalkoppeling, training en 2 maanden support zonder extra kosten' },
]

// ============================================================================
// FAQS
// ============================================================================
export const faqs = [
  {
    q: 'Wat kost een webshop laten maken?',
    a: 'Vanaf €785 excl. BTW voor een volledige webshop op maat. U ontvangt vooraf een vaste prijs. De exacte prijs hangt af van het aantal producten en gewenste koppelingen.',
  },
  {
    q: 'Hoe lang duurt het?',
    a: 'Gemiddeld 2-4 weken voor een complete webshop. U ontvangt al binnen 24 uur een eerste ontwerp. Complexere webshops met veel integraties duren 4-8 weken.',
  },
  {
    q: 'Kan ik zelf producten en bestellingen beheren?',
    a: 'Absoluut. Via een gebruiksvriendelijk dashboard voegt u producten toe, past u prijzen aan, verwerkt u bestellingen en beheert u voorraad. Wij geven een training bij oplevering.',
  },
  {
    q: 'Welke betaalmethoden worden ondersteund?',
    a: 'iDEAL, creditcard, PayPal, Klarna, Apple Pay en Google Pay. Automatische BTW- en verzendberekening zijn standaard inbegrepen.',
  },
  {
    q: 'Kunnen jullie koppelen met mijn boekhouding of ERP?',
    a: 'Ja. Wij koppelen met Exact, Moneybird, Afas en andere gangbare systemen. Ook voorraad- en orderkoppelingen met PostNL, DHL of DPD zijn mogelijk.',
  },
  {
    q: 'Wat is wel en niet inbegrepen qua hosting en domein?',
    a: 'Inbegrepen: webshop, hosting, SSL en training. Niet inbegrepen: uw domeinnaam en zakelijke e-mail — die regelt u zelf. Wij koppelen uw domein aan de nieuwe webshop.',
  },
  {
    q: 'Krijg ik support na oplevering?',
    a: 'Ja. De eerste 2 maanden krijgt u gratis support via e-mail, telefoon of WhatsApp — reactie binnen 24 uur. Kleine aanpassingen zijn inbegrepen.',
  },
  {
    q: 'Kan ik later uitbreiden?',
    a: 'Altijd. Extra functies, meer producten, nieuwe koppelingen — uw webshop groeit mee met uw bedrijf.',
  },
]

