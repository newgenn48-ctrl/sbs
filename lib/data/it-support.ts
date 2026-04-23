import {
  Headphones, MapPin, CalendarCheck, Clock, UserCheck, Wrench,
  Building2, Briefcase, Stethoscope, Store, Factory, Scale,
  ShieldCheck, MessageSquare, Search, CheckCircle2, Monitor, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Remote, on-site of vast',
  'Nederlands, geen callcenter',
  'Strippenkaart of abonnement',
]

export const whyChooseUs = [
  { icon: Clock, title: 'Direct iemand aan de lijn', description: 'Geen wachtrij, geen scripts — gewoon een expert.', stat: '< 15m', statLabel: 'respons' },
  { icon: UserCheck, title: 'Vaste IT-er', description: 'Eén aanspreekpunt die uw omgeving én uw mensen kent.', stat: '1', statLabel: 'aanspreekpunt' },
  { icon: Wrench, title: 'Echt opgelost', description: 'Geen pleister-fixes. Wij lossen op én leggen uit.', stat: '100%', statLabel: 'grondig' },
  { icon: CalendarCheck, title: 'Flexibel model', description: 'Strippenkaart, maand-abonnement of vaste IT-dag.', stat: '3', statLabel: 'opties' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Briefcase, title: "ZZP'ers & Kleine bedrijven", description: 'Geen eigen IT-er nodig. Strippenkaart voor incidentele hulp of een vaste dag per maand.' },
  { icon: Building2, title: 'Groeiend MKB', description: '10-100 medewerkers? Maand-abonnement met vast aanspreekpunt voor dagelijkse IT-vragen.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Snelle hulp bij praktijksoftware, EPD en apparatuur — met kennis van zorg-specifieke systemen.' },
  { icon: Store, title: 'Retail & Horeca', description: 'Kassa, pin, WiFi of voorraadsysteem uit? Wij zijn binnen een uur op locatie of online.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Kantoor én productievloer. Storingen worden gefixt voordat ze uren productiviteit kosten.' },
  { icon: Scale, title: 'Juridisch & Advies', description: 'Compliance-bewust, discreet en snel — IT-problemen verstoren niet uw klantwerk.' },
]

export const includedChecklist = [
  {
    icon: Headphones,
    category: 'Remote support',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Direct iemand aan de telefoon',
      'Remote-verbinding binnen minuten',
      'Scherm delen voor snelle diagnose',
      'Oplossen tijdens het gesprek waar mogelijk',
      'Logging van elk ticket',
    ],
  },
  {
    icon: MapPin,
    category: 'On-site support',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'IT-specialist op uw locatie',
      'Hardware-reparatie en -vervanging',
      'Netwerk- en WiFi-problemen',
      'Installaties en verhuizingen',
      'Persoonlijk contact op de werkvloer',
    ],
  },
  {
    icon: CalendarCheck,
    category: 'Vaste IT-dag',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste IT-er één dag per week of maand',
      'Preventief onderhoud en updates',
      'Direct aanspreekpunt voor medewerkers',
      'Kent uw omgeving door en door',
      'Uw eigen "IT-afdeling" zonder dienstverband',
    ],
  },
  {
    icon: Monitor,
    category: 'Werkplekken & apparaten',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Laptops, PC’s, printers en randapparatuur',
      'Telefoons en tablets (iOS & Android)',
      'Software-installaties en updates',
      'Gebruikersondersteuning bij Office, mail, VPN',
      'Vervangende hardware bij defect',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Security & compliance',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Antivirus-beheer en monitoring',
      'Wachtwoord-beleid en MFA',
      'Backup-controle en restore-tests',
      'AVG-proof documentatie',
      'Incident-response bij verdachte activiteit',
    ],
  },
  {
    icon: BookOpen,
    category: 'Documentatie & overname',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Overname van bestaande IT-omgeving',
      'Volledige inventarisatie van hardware & licenties',
      'Documentatie van uw IT-omgeving',
      'SLA op maat (respons 15m tot NBD)',
      'Maandelijkse rapportage',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'U belt of mailt',
    description: 'Probleem of vraag? Direct iemand aan de lijn — geen keuzemenu’s, geen scripts, geen wachttijden.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Wij analyseren',
    description: 'Een IT-er beoordeelt uw situatie en start meteen: remote-verbinding, beltje met uitleg, of afspraak op locatie.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Wij lossen op',
    description: 'Remote waar kan, on-site waar nodig. Wij werken tot het probleem écht opgelost is — geen tijdelijke pleisters.',
    icon: Wrench,
  },
  {
    step: '04',
    title: 'U bent geholpen',
    description: 'Heldere uitleg, logboek van wat we deden en advies voor preventie. Elke keer scherper.',
    icon: CheckCircle2,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Drie smaken: strippenkaart (pay-per-use), maand-abonnement (vast bedrag) of vaste IT-dag (uw eigen IT-er op locatie). Prijs op maat van uw situatie.',
}

export const confidencePoints = [
  { title: 'Flexibel contract', description: 'Maandelijks opzegbaar bij abonnement — u zit niet vast' },
  { title: 'U blijft eigenaar', description: 'Licenties, data en wachtwoorden altijd op uw naam' },
  { title: 'SLA op maat', description: 'Respons binnen 15 min. tot next-business-day — u kiest' },
]

export const faqs = [
  {
    q: 'Wat kost IT-support bij jullie?',
    a: 'Drie opties: strippenkaart (vanaf 10 uur, pay-per-use voor incidentele hulp), maand-abonnement (vast bedrag voor dagelijkse ondersteuning) of vaste IT-dag (eigen IT-er op locatie, bv. 1 dag/week). Prijs hangt af van aantal werkplekken, SLA en scope — na een intake ontvangt u een concrete offerte.',
  },
  {
    q: 'Hoe snel reageren jullie bij een storing?',
    a: 'Afhankelijk van uw SLA: bij kritieke storingen binnen 15-30 minuten, standaard 1-4 uur, low-priority next-business-day. Voor maand-abonnementen zijn we proactief — vaak lossen we iets op vóórdat u het merkt.',
  },
  {
    q: 'Komen jullie ook op locatie?',
    a: 'Ja. Remote proberen we eerst (vaak sneller en goedkoper), maar voor hardware, netwerkproblemen, installaties of verhuizingen komen we gewoon langs. On-site support is inbegrepen bij maand-abonnementen, losse uren bij strippenkaart.',
  },
  {
    q: 'Kunnen jullie bestaande IT-omgevingen overnemen?',
    a: 'Ja. We beginnen met een inventarisatie: wat draait er, welke licenties, wie heeft toegang, wat gaat er mis. Daarna nemen we gefaseerd over met volledige documentatie — zonder verstoring van uw bedrijfsvoering.',
  },
  {
    q: 'Werken jullie ook voor ZZP’ers of kleine bedrijven?',
    a: 'Zeker. Voor kleinere bedrijven (1-10 medewerkers) is de strippenkaart vaak ideaal: u betaalt alleen voor de uren die u gebruikt. Voor structurelere ondersteuning is een vaste IT-dag of mini-abonnement interessant.',
  },
  {
    q: 'Wat is het verschil met systeem- en werkplekbeheer?',
    a: 'IT-support is vaak het startpunt — u belt ons bij vragen en problemen. Systeembeheer (servers/netwerk) en werkplekbeheer (laptops/software) zijn doorlopende beheer-contracten. Vaak combineren klanten ze in één pakket voor volledige IT-ontzorging.',
  },
  {
    q: 'Praten jullie met ons in jargon of in normale taal?',
    a: 'Normale taal. Wij leggen uit wat het probleem was, wat we deden en hoe het in het vervolg voorkomen kan worden. Geen techneutisch geneuzel — gewoon helder.',
  },
  {
    q: 'Wat als ik niet tevreden ben?',
    a: 'Bij een abonnement bent u maandelijks opzegbaar. Strippenkaart loopt gewoon op. Wij leven van tevreden klanten, niet van lang-lopende contracten — daar zijn we transparant over.',
  },
]
