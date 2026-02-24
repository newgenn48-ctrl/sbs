import type { LucideIcon } from 'lucide-react'
import {
  Linkedin, Instagram, Video, PenTool, Users, Target,
  TrendingUp, BarChart3, MessageCircle, Globe
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
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
    icon: Linkedin,
    title: 'LinkedIn B2B Marketing',
    description: 'Thought leadership en lead generatie via het grootste professionele netwerk.',
    features: ['Company page beheer', 'LinkedIn Ads', 'Content strategie', 'Lead generation'],
    color: 'quantum-purple'
  },
  {
    icon: Instagram,
    title: 'Instagram & Meta',
    description: 'Visuele storytelling en community building op Instagram en Facebook.',
    features: ['Feed & Stories', 'Reels productie', 'Meta Ads', 'Influencer samenwerking'],
    color: 'quantum-blue'
  },
  {
    icon: Video,
    title: 'TikTok & Shorts',
    description: 'Authentieke short-form video content voor een jonge, betrokken doelgroep.',
    features: ['TikTok strategie', 'YouTube Shorts', 'Trend monitoring', 'Virale content'],
    color: 'quantum-green'
  },
  {
    icon: PenTool,
    title: 'Content Creatie',
    description: 'Professionele content die resoneert met uw doelgroep en merkidentiteit.',
    features: ['Fotografie & video', 'Copywriting', 'Grafisch ontwerp', 'Content kalender'],
    color: 'quantum-orange'
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Actieve community-opbouw door authentieke interactie en engagement.',
    features: ['Daily engagement', 'Reactiebeheer', 'DM management', 'Crisis communicatie'],
    color: 'quantum-purple'
  },
  {
    icon: Target,
    title: 'Social Advertising',
    description: 'Gerichte advertentiecampagnes die converteren en ROI maximaliseren.',
    features: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'A/B testing'],
    color: 'quantum-blue'
  },
]

export const whySocial: WhyItem[] = [
  {
    icon: Users,
    title: 'Community Building',
    description: 'Bouw een loyale community van engaged volgers die ambassadeurs van uw merk worden.',
    stat: '3x',
    statLabel: 'meer engagement'
  },
  {
    icon: Globe,
    title: 'Brand Awareness',
    description: 'Vergroot uw naamsbekendheid en word top-of-mind bij uw doelgroep.',
    stat: '85%',
    statLabel: 'grotere bekendheid'
  },
  {
    icon: MessageCircle,
    title: 'Direct Contact',
    description: 'Cre\u00EBer directe, authentieke conversaties met (potenti\u00EBle) klanten.',
    stat: '<1u',
    statLabel: 'reactietijd'
  },
  {
    icon: Target,
    title: 'Lead Generatie',
    description: 'Zet engagement om in gekwalificeerde leads en tastbare business resultaten.',
    stat: '+150%',
    statLabel: 'meer leads'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse',
    description: 'Doelgroep onderzoek, concurrentie analyse en audit van huidige kanalen.',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'Content strategie, posting schema en platform selectie op maat.',
    icon: Target
  },
  {
    step: '03',
    title: 'Content Creatie',
    description: 'Professionele content productie die past bij uw merk en doelgroep.',
    icon: PenTool
  },
  {
    step: '04',
    title: 'Management',
    description: 'Daily posting, community engagement en continue optimalisatie.',
    icon: Users
  },
]

export const faqs: FAQ[] = [
  {
    q: 'Op welke social media platforms moeten we actief zijn?',
    a: 'Dit hangt volledig af van uw doelgroep en business doelen. Voor B2B is LinkedIn vaak essentieel. Voor visuele producten zijn Instagram en Pinterest krachtig. TikTok werkt uitstekend voor een jonge doelgroep. We starten altijd met een doelgroep analyse om de platforms met de hoogste ROI te bepalen.'
  },
  {
    q: 'Hoe vaak moeten we posten voor resultaat?',
    a: 'Consistentie is belangrijker dan frequentie. We ontwikkelen een realistische content kalender die past bij uw resources. Liever 3 kwalitatief hoogstaande posts per week die waarde bieden, dan dagelijks irrelevante content. De optimale frequentie verschilt per platform en wordt bepaald door data-analyse.'
  },
  {
    q: 'Wat is het verschil tussen organisch bereik en betaald adverteren?',
    a: 'Organisch bereik is het publiek dat u gratis bereikt via uw volgers en hun netwerk. Social Advertising (betaalde ads) stelt ons in staat om uw boodschap te tonen aan een hyper-specifieke doelgroep buiten uw volgers. Een sterke social media strategie combineert beide voor maximale impact en ROI.'
  },
  {
    q: 'Hoe meten jullie het succes van social media marketing?',
    a: 'We kijken naar KPI\'s die direct impact hebben op uw bedrijfsdoelen: groei in engagement (likes, comments, shares), toename in website verkeer vanuit social media, lead generatie en uiteindelijk conversies. Dit alles wordt transparant gerapporteerd in een live dashboard waar u 24/7 toegang tot heeft.'
  },
  {
    q: 'Kunnen jullie ook influencer marketing verzorgen?',
    a: 'Ja, influencer marketing is onderdeel van ons aanbod. We identificeren relevante influencers binnen uw niche, onderhandelen samenwerkingen en co\u00F6rdineren campagnes. Van micro-influencers tot grotere namen - we matchen op basis van uw doelgroep, budget en merkwaarden voor authentieke partnerships die resultaat opleveren.'
  },
]
