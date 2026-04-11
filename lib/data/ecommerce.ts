import type { ServiceColorKey } from '@/lib/colors'
import type { LucideIcon } from 'lucide-react'
import {
  ShoppingCart, CreditCard, Package, Truck, BarChart3, Globe,
  Lock, Users, RefreshCw, Rocket, Target, Palette
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: ServiceColorKey
}

interface PriceInfo {
  price: string
  description: string
  features: string[]
}

interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

interface FAQ {
  q: string
  a: string
}

// ============================================================================
// DATA
// ============================================================================

export const services: Service[] = [
  {
    icon: ShoppingCart,
    title: 'Shopify & WooCommerce',
    description: 'Professionele webshops op bewezen platforms. Shopify of WooCommerce, wij helpen u kiezen.',
    features: ['Premium thema\'s', 'App integraties', 'Schaalbaar platform', 'Eenvoudig beheer'],
    color: 'emerald'
  },
  {
    icon: CreditCard,
    title: 'Betalingsintegraties',
    description: 'Alle betaalmethodes die uw klanten verwachten. iDEAL, creditcard, Klarna en meer.',
    features: ['iDEAL & Bancontact', 'Creditcard & PayPal', 'Klarna & afterpay', 'Veilig & PCI compliant'],
    color: 'blue'
  },
  {
    icon: Package,
    title: 'Voorraadbeheer',
    description: 'Houd uw voorraad bij en synchroniseer met uw leveranciers en verkoopkanalen.',
    features: ['Real-time voorraad', 'Multi-channel sync', 'Leverancier koppelingen', 'Automatische alerts'],
    color: 'violet'
  },
  {
    icon: Truck,
    title: 'Verzendintegraties',
    description: 'Automatisch verzendlabels maken en tracking informatie delen met klanten.',
    features: ['PostNL & DHL', 'Track & trace', 'Automatische labels', 'Retour management'],
    color: 'warm'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Conversie',
    description: 'Inzicht in uw verkopen en bezoekers. Optimaliseer voor meer conversie.',
    features: ['E-commerce analytics', 'A/B testing', 'Conversion tracking', 'Customer journey'],
    color: 'emerald'
  },
  {
    icon: Globe,
    title: 'Multi-channel',
    description: 'Verkoop via meerdere kanalen: webshop, marktplaatsen, social commerce.',
    features: ['Bol.com integratie', 'Amazon koppeling', 'Instagram Shop', 'Facebook Shop'],
    color: 'blue'
  },
]

export const priceInfo: PriceInfo = {
  price: 'Vanaf \u20AC785',
  description: 'Professionele webshop op Shopify of WooCommerce',
  features: [
    'Shopify of WooCommerce',
    'Premium thema configuratie',
    'iDEAL & alle betaalmethodes',
    'Mobile responsive',
    'Voorraadbeheer',
    'SEO geoptimaliseerd',
    'Analytics integratie',
    'Conversie geoptimaliseerd',
  ],
}

export const whyChooseUs: WhyItem[] = [
  {
    icon: Lock,
    title: 'Vaste Prijs',
    description: 'Vooraf een duidelijke offerte. Geen verrassingen achteraf.',
    stat: '\u20AC',
    statLabel: 'vast'
  },
  {
    icon: Users,
    title: 'Directe Lijnen',
    description: 'E\u00E9n vast aanspreekpunt. Direct contact, geen helpdesk.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: RefreshCw,
    title: 'Training Inbegrepen',
    description: 'Na oplevering krijgt u een training zodat u zelf de webshop kunt beheren.',
    stat: '\u2713',
    statLabel: 'training'
  },
  {
    icon: Rocket,
    title: 'Nazorg & Support',
    description: 'Na oplevering staan wij klaar voor vragen en aanpassingen.',
    stat: '\u221E',
    statLabel: 'support'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Strategie',
    description: 'We analyseren uw producten, doelgroep en concurrentie.',
    icon: Target
  },
  {
    step: '02',
    title: 'Platform Keuze',
    description: 'Shopify of WooCommerce - wij adviseren het beste platform voor uw situatie.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'Webshop setup, thema configuratie en alle integraties die u nodig heeft.',
    icon: ShoppingCart
  },
  {
    step: '04',
    title: 'Lancering',
    description: 'Testing, training en live gang. U bent klaar om te verkopen!',
    icon: Rocket
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Shopify of WooCommerce - wat is beter?',
    a: 'Dat hangt af van uw situatie. Shopify is ideaal voor wie snel wil starten met een betrouwbaar hosted platform. WooCommerce is perfect als u al een WordPress site heeft of meer controle wilt. Wij helpen u de juiste keuze te maken.'
  },
  {
    q: 'Kan ik zelf producten en bestellingen beheren?',
    a: 'Absoluut. Beide platformen hebben een gebruiksvriendelijk dashboard. U kunt zelf producten toevoegen, prijzen aanpassen, bestellingen verwerken en voorraad beheren. Wij geven een training bij oplevering.'
  },
  {
    q: 'Wat zijn de maandelijkse kosten?',
    a: 'Shopify kost vanaf \u20AC36/maand. WooCommerce is gratis, maar u betaalt voor hosting (vanaf \u20AC15/maand). Beide hebben transactiekosten voor betalingen. Wij adviseren u over de totale kosten.'
  },
  {
    q: 'Kunnen jullie integreren met mijn boekhouding/ERP?',
    a: 'Ja, we hebben ervaring met koppelingen naar Exact, Moneybird, Afas, Picqer en andere systemen. Beide platformen hebben uitgebreide mogelijkheden voor integraties.'
  },
  {
    q: 'Hoe lang duurt het om een webshop te bouwen?',
    a: 'Een standaard webshop is binnen 2-4 weken live. Dit hangt af van de complexiteit, het aantal producten en de gewenste integraties. Bij de start maken we een realistische planning samen. We werken in sprints zodat u tussentijds kunt meekijken en feedback geven.'
  },
]
