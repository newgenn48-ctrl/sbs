import {
  FileText, Users, Heart, TrendingUp, Camera,
  Building2, Briefcase, Stethoscope, Store, GraduationCap, Palette,
  Headphones, BarChart3, MessageCircle, Calendar, Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Consistent posten',
  'Groeiende community',
  'Maandelijkse rapportages',
]

export const whyChooseUs = [
  { icon: Calendar, title: 'Consistent actief', description: 'Elke week posts zonder dat u omkijkt.', stat: '3x', statLabel: 'per week' },
  { icon: Heart, title: 'Betrokken volgers', description: 'Likes, comments en DM’s die doorstromen.', stat: '10x', statLabel: 'meer engagement' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement zonder verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste contentmanager. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Retail & Horeca', description: 'Lokaal zichtbaar blijven met aantrekkelijke posts en stories.' },
  { icon: Palette, title: 'Creatieve ondernemers', description: 'Portfolio en werk consistent laten zien aan nieuwe klanten.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Vertrouwen opbouwen via educatieve content en patiënt-stories.' },
  { icon: GraduationCap, title: 'Opleiders & Coaches', description: 'Expertise laten zien en inschrijvingen genereren via LinkedIn en Instagram.' },
  { icon: Building2, title: 'B2B Dienstverleners', description: 'Thought leadership opbouwen op LinkedIn voor gekwalificeerde leads.' },
  { icon: Briefcase, title: 'ZZP & Freelancers', description: 'Personal brand laten groeien zonder zelf uren te hoeven posten.' },
]

export const includedChecklist = [
  {
    icon: Target,
    category: 'Strategie & planning',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Content-strategie per platform (Insta, FB, LinkedIn)',
      'Tone-of-voice en merkrichtlijnen',
      'Content-kalender voor de komende maand',
      'Doelgroep-analyse en persona’s',
      'Concurrentie-analyse op social',
    ],
  },
  {
    icon: Camera,
    category: 'Content creatie',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Professioneel ontworpen posts per week',
      'Stories en reels op maat van uw merk',
      'Copywriting: pakkende captions',
      'Hashtag-onderzoek per post',
      'Seizoens- en trendcontent',
    ],
  },
  {
    icon: Calendar,
    category: 'Publicatie & timing',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Posten op de beste tijden voor uw doelgroep',
      'Automatische planning via Meta Business Suite',
      'Cross-posting naar relevante platforms',
      'Gebeurtenissen en promoties op schema',
      'Flexibiliteit voor spontane updates',
    ],
  },
  {
    icon: MessageCircle,
    category: 'Community management',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Reacties op comments binnen 24 uur',
      'DM-beantwoording en leadkwalificatie',
      'Community-bouw in comment-secties',
      'Moderatie van ongepaste reacties',
      'Escalatie van verkoopkansen naar u',
    ],
  },
  {
    icon: BarChart3,
    category: 'Analyse & groei',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Maandelijkse rapportage per platform',
      'Engagement, bereik en follower-groei',
      'Best performing content identificeren',
      'A/B-testen van content-formats',
      'Voorstellen voor volgende maand',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & advies',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste contentmanager, geen callcenter',
      'Maandelijks strategiegesprek',
      'Antwoord binnen 24 uur op vragen',
      'Advies bij nieuwe campagnes of producten',
      'Uw eigen accounts — u blijft eigenaar',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'Gratis gesprek over uw merk, doelgroep en ambities. Welke platforms passen en welke juist niet.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Strategie & kalender',
    description: 'Binnen 1 week ontvangt u een content-strategie en de eerste maand-kalender ter goedkeuring.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Live & consistent',
    description: 'Wij maken content, plannen, publiceren en beantwoorden reacties. U focust op uw bedrijf.',
    icon: Calendar,
  },
  {
    step: '04',
    title: 'Groei & bijsturen',
    description: 'Maandelijks rapport en strategiegesprek. We schalen wat werkt, snoeien wat niet werkt.',
    icon: TrendingUp,
  },
]

export const priceInfo = {
  price: 'Vanaf €495',
  description: 'Maandabonnement voor social media-beheer (excl. BTW). Inclusief content, publicatie, community-management en rapportage.',
}

export const confidencePoints = [
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract. Resultaat telt, niet bindingen' },
  { title: 'U blijft eigenaar', description: 'Uw accounts, content en volgers blijven van u — altijd' },
  { title: 'Alles inbegrepen', description: 'Content, planning, community, rapportage zonder extra fees' },
]

export const faqs = [
  {
    q: 'Wat kost social media-beheer?',
    a: 'Vanaf €495 excl. BTW per maand. De exacte prijs hangt af van aantal platforms, frequentie van posten en of er video-content nodig is. Na een gratis intake ontvangt u een vaste offerte.',
  },
  {
    q: 'Welke platforms beheren jullie?',
    a: 'Instagram, Facebook, LinkedIn en TikTok zijn standaard. Pinterest, YouTube Shorts en X (Twitter) op aanvraag. Wij adviseren welke platforms écht relevant zijn voor uw doelgroep — niet overal zichtbaar zijn om het zichtbaar-zijn.',
  },
  {
    q: 'Hoe vaak posten jullie?',
    a: 'Gemiddeld 3x per week per platform. Meer als uw strategie dat vraagt, minder als kwaliteit boven kwantiteit gaat. Reels/video’s wegen zwaarder dan losse foto-posts.',
  },
  {
    q: 'Maken jullie ook video-content?',
    a: 'Ja. Reels en TikToks horen bij modern social. Wij gebruiken uw eigen beeldmateriaal of produceren basic video’s met tools als CapCut. Voor uitgebreide video-producties werken we samen met gespecialiseerde filmmakers.',
  },
  {
    q: 'Wie heeft toegang tot mijn account?',
    a: 'U blijft eigenaar van uw accounts. Wij werken via Meta Business Suite en LinkedIn Page-manager — toegang op basis van rollen. Bij beëindiging loggen we gewoon uit. Geen gijzeling.',
  },
  {
    q: 'Kunnen jullie ook advertenties (Meta Ads) doen?',
    a: 'Ja, maar dat is een aparte dienst (Meta Ads-beheer). Social media-beheer = organisch content. Ads = betaalde promoties. Vaak werken ze goed samen — we adviseren over de juiste mix.',
  },
  {
    q: 'Moet ik zelf foto’s en video’s aanleveren?',
    a: 'Liefst wel — authentieke beelden van uw bedrijf werken het beste. Wij verwerken die professioneel. Geen tijd of foto’s? Dan werken we met stock-beelden of organiseren we een korte foto-sessie bij u op locatie.',
  },
  {
    q: 'Hoe snel zien we groei?',
    a: 'Consistent posten geeft binnen 2-3 maanden merkbare groei in bereik en engagement. Follower-groei hangt sterk af van uw niche. Virale hits kunnen alles versnellen, maar we focussen op duurzame, betrokken community.',
  },
]
