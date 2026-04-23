import {
  FileText, Users, TrendingUp, Target, Eye, Database,
  Building2, Briefcase, Stethoscope, Store, GraduationCap, Factory,
  Headphones, BarChart3, PieChart, Lightbulb, AlertCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'Data in grafieken die kloppen',
  'Voorspellingen op basis van uw data',
  'Beslissen op onderbuik mag voorbij',
]

export const whyChooseUs = [
  { icon: Eye, title: 'Eindelijk overzicht', description: 'Één dashboard voor alle belangrijke cijfers — live.', stat: '1', statLabel: 'plek voor alles' },
  { icon: TrendingUp, title: 'Voorspellingen die kloppen', description: 'Trends zichtbaar vóórdat ze in de omzet verschijnen.', stat: '85%', statLabel: 'accuratesse' },
  { icon: FileText, title: 'Vaste prijs', description: 'Projectprijs of maandabonnement — altijd vooraf duidelijk.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste data-analist. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Webshops & Retail', description: 'Welk product levert écht winst op? Welke campagne, welk kanaal? Data-gedreven keuzes i.p.v. gokken.' },
  { icon: Briefcase, title: 'B2B Dienstverleners', description: 'Pipeline-analyse, deal-voorspelling en klantwaarde — voor sales die weet waar te focussen.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Bezetting, no-shows en patiëntstromen inzichtelijk — plannen op basis van cijfers, niet op gevoel.' },
  { icon: Factory, title: 'Productie & Logistiek', description: 'Voorraad, levertijden en uitval-patronen herkennen voordat ze problemen worden.' },
  { icon: GraduationCap, title: 'Opleiders & SaaS', description: 'Churn-voorspelling en activatie-analyse — weet welke klanten vertrekken vóórdat ze gaan.' },
  { icon: Building2, title: 'MKB met veel losse data', description: 'Rapporten in Excel, cijfers in 5 systemen? Wij brengen alles samen in één dashboard.' },
]

export const includedChecklist = [
  {
    icon: Database,
    category: 'Data-integratie',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Koppeling met uw bestaande systemen',
      'CRM, webshop, boekhouding, marketing',
      'Real-time synchronisatie of dagelijks',
      'Data-kwaliteitscontrole en opschoning',
      'Historische data migreren waar mogelijk',
    ],
  },
  {
    icon: BarChart3,
    category: 'Dashboards & rapportage',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Live dashboards per rol (directie, sales, marketing)',
      'KPI’s die u écht nuttig vindt, niet standaard',
      'Drill-down van totaal naar detail',
      'Geautomatiseerde maandrapporten via e-mail',
      'Mobiel-vriendelijke weergave',
    ],
  },
  {
    icon: TrendingUp,
    category: 'Voorspellende modellen',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Sales-forecast voor komende weken/maanden',
      'Voorraad- en vraagvoorspelling',
      'Churn-prediction: wie vertrekt waarschijnlijk?',
      'Customer lifetime value per segment',
      'Modellen die bijleren met nieuwe data',
    ],
  },
  {
    icon: AlertCircle,
    category: 'Anomalie-detectie & alerts',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Automatische alerts bij uitschieters',
      'Fraude-detectie op transactiepatronen',
      'Kwaliteits- en procesmonitoring',
      'Threshold-alerts op KPI’s',
      'E-mail of Slack-notificatie bij afwijkingen',
    ],
  },
  {
    icon: Lightbulb,
    category: 'Aanbevelingen & inzichten',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Prijs-optimalisatie per product of segment',
      'Cross-sell en upsell suggesties',
      'Next-best-action per klant',
      'Kwartaal-analyse met concrete acties',
      'Inzichten in normale taal — geen jargon',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & doorontwikkeling',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste data-analist, geen callcenter',
      'Training voor uw team in het dashboard',
      'Antwoord binnen 24 uur op vragen',
      'Uitbreiding bij nieuwe databronnen',
      'Kwartaalsessie: wat zien we, wat nu?',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Data-audit',
    description: 'Wij brengen in kaart welke data u heeft, waar ze staan en wat ze waard zijn. U ontvangt een roadmap met concrete inzichten.',
    icon: Database,
  },
  {
    step: '02',
    title: 'Strategie & KPIs',
    description: 'Samen bepalen we welke cijfers er écht toe doen. Geen bulk aan metrics — de 10 die uw beslissingen sturen.',
    icon: Target,
  },
  {
    step: '03',
    title: 'Bouwen & integreren',
    description: 'Wij bouwen dashboards, koppelen databronnen en trainen AI-modellen. Eerste dashboard staat binnen 2-4 weken.',
    icon: PieChart,
  },
  {
    step: '04',
    title: 'Optimaliseren',
    description: 'Maandelijks bijsturen: modellen hertrainen, dashboards verfijnen, nieuwe vragen toevoegen. Data wordt scherper over tijd.',
    icon: TrendingUp,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Analytics is nooit standaard. Projectprijs of maandabonnement op maat van uw databronnen, complexiteit en gewenste voorspellingen.',
}

export const confidencePoints = [
  { title: 'U blijft eigenaar van data', description: 'Uw data, uw dashboards, altijd exporteerbaar' },
  { title: 'Transparante modellen', description: 'Geen black-box — wij leggen uit hoe voorspellingen werken' },
  { title: 'AVG-proof', description: 'Opslag in EU, encryptie, strikte toegangscontrole' },
]

export const faqs = [
  {
    q: 'Wat kost AI analytics?',
    a: 'Dat werkt op offerte. Simpele dashboards beginnen vanaf enkele duizenden euro’s, complexe voorspellende modellen met real-time data zijn projectmatig of maandabonnement. Na een gratis data-audit ontvangt u een vaste prijs met concrete inzichten als voorbeeld.',
  },
  {
    q: 'Welke tools gebruiken jullie?',
    a: 'We werken met moderne stacks: Looker, Metabase, PowerBI, Plausible/Matomo (privacy-first web-analytics), PostHog en custom Python/SQL waar nodig. Data-warehouses op Snowflake of BigQuery voor serieuze schaal. We kiezen wat past bij uw budget en volume.',
  },
  {
    q: 'Welke data hebben jullie nodig?',
    a: 'Typisch: CRM-data, orders/transacties, marketing-data (Google Ads, Meta, Analytics 4), website-gedrag en operationele data. Hoe meer historie, hoe beter voorspellingen. Minimaal 6-12 maanden aan data geeft de beste modellen.',
  },
  {
    q: 'Hoe accuraat zijn de voorspellingen?',
    a: 'Afhankelijk van data-kwaliteit en complexiteit halen onze modellen 75-90% accuratesse. We zijn altijd transparant: u ziet de betrouwbaarheidsinterval per voorspelling. Modellen worden continu gemonitord en hertraind als de realiteit verandert.',
  },
  {
    q: 'Kunnen mijn medewerkers de dashboards zelf aanpassen?',
    a: 'Ja. We bouwen in tools waar uw team zelf filters kan aanpassen, grafieken kan toevoegen en eigen rapporten kan bouwen. Voor nieuwe databronnen of complexe AI-modellen zijn wij er — maar dagelijks werken doet u zelf.',
  },
  {
    q: 'Is onze data veilig?',
    a: 'Ja. Alles wordt verwerkt conform AVG, opgeslagen in Europa, encryptie in transit en at-rest, en met strikte toegangscontroles. Verwerkersovereenkomst standaard. U behoudt volledige eigendom en kunt data op elk moment exporteren of laten verwijderen.',
  },
  {
    q: 'Hoe lang duurt het tot eerste resultaten?',
    a: 'Eerste dashboards zijn binnen 2-4 weken live. Voorspellende modellen hebben 4-8 weken nodig om betrouwbaar te worden — afhankelijk van data-volume en complexiteit. Quick wins doen we eerst zodat u snel waarde ziet.',
  },
  {
    q: 'Wat als onze databronnen veranderen?',
    a: 'Dat is normaal. Wij documenteren elke koppeling zodat wijzigingen snel aangepast kunnen worden. Nieuwe bronnen toevoegen gebeurt incrementeel. U betaalt alleen voor wat we bouwen — geen verplichte uitbreidingen.',
  },
]
