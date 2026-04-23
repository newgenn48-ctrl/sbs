import {
  FileText, Users, Mail, Workflow, Target, Filter,
  Building2, Briefcase, Stethoscope, Store, GraduationCap, TrendingUp,
  Headphones, BarChart3, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  'E-mail flows op autopilot',
  'Leads nurturen zonder werk',
  'Meer omzet per contact',
]

export const whyChooseUs = [
  { icon: Zap, title: 'Meer conversie', description: 'E-mails die op het juiste moment landen.', stat: '3x', statLabel: 'conversie' },
  { icon: Workflow, title: 'Minder handwerk', description: 'Flows die 24/7 doorlopen, ook als u slaapt.', stat: '10u', statLabel: 'bespaard/wk' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement zonder verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste automation-expert. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Store, title: 'Webshops', description: 'Abandoned cart e-mails, re-engagement en post-purchase flows die herhaalaankopen drijven.' },
  { icon: Briefcase, title: 'B2B Dienstverleners', description: 'Lead-nurturing sequences die koude contacten opwarmen tot afspraken.' },
  { icon: GraduationCap, title: 'Opleiders & Coaches', description: 'Nieuwsbrieven en funnels die inschrijvingen voor cursussen automatiseren.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Afspraakbevestigingen, herinneringen en follow-ups volledig automatisch.' },
  { icon: Building2, title: 'SaaS & Abonnementen', description: 'Onboarding flows, upsells en churn-preventie voor duurzame groei.' },
  { icon: Target, title: 'MKB met e-maillijst', description: 'Groeiende lijst maar geen tijd om te mailen? Automation maakt het schaalbaar.' },
]

export const includedChecklist = [
  {
    icon: Target,
    category: 'Strategie & doelgroep',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Customer journey mapping per doelgroep',
      'Segmentatie-strategie op gedrag en interesse',
      'Concrete doelen per flow (omzet, retentie, leads)',
      'Content-plan per stap in de journey',
      'A/B-test strategie voor onderwerpen en CTAs',
    ],
  },
  {
    icon: Workflow,
    category: 'Automation flows',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Welkomst-flow voor nieuwe contacten',
      'Abandoned cart e-mails (voor webshops)',
      'Lead-nurturing sequences',
      'Post-purchase en re-engagement flows',
      'Upsell- en cross-sell triggers',
    ],
  },
  {
    icon: Mail,
    category: 'E-mail design & copy',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Mobielvriendelijke templates op maat',
      'Pakkende onderwerpregels (A/B getest)',
      'Copywriting die leest als een persoon',
      'Personalisatie op naam en gedrag',
      'Dark-mode en accessibility getest',
    ],
  },
  {
    icon: Filter,
    category: 'Segmentatie & CRM',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Segmenten op aankoopgedrag en interesse',
      'CRM-koppeling (HubSpot, Salesforce)',
      'Lead-scoring voor sales-team',
      'Contactlijsten schoonhouden (hygiëne)',
      'AVG-proof opt-in en toestemming',
    ],
  },
  {
    icon: BarChart3,
    category: 'Analyse & optimalisatie',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Dashboard met open-rates en conversies',
      'Maandelijkse rapportage met inzichten',
      'A/B-test resultaten elke maand',
      'Attribution: welke flow brengt omzet?',
      'Optimalisatie-voorstellen per kwartaal',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & advies',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste automation-expert, geen callcenter',
      'Maandelijks strategiegesprek',
      'Antwoord binnen 24 uur op vragen',
      'Advies bij nieuwe producten of campagnes',
      'U blijft eigenaar van lijst en flows',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Journey-audit',
    description: 'Wij analyseren uw huidige contactmomenten, lijst en tooling. Waar laat u omzet liggen?',
    icon: Target,
  },
  {
    step: '02',
    title: 'Strategie & flows',
    description: 'Concrete flows en segmentatie-plan. U weet precies welke e-mails naar wie gaan en waarom.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Bouwen & lanceren',
    description: 'Wij bouwen en testen de flows. Na uw goedkeuring zetten we alles live — gefaseerd.',
    icon: Workflow,
  },
  {
    step: '04',
    title: 'Optimaliseren',
    description: 'Maandelijks A/B-testen en bijsturen. Wat werkt schalen we op, wat niet werkt passen we aan.',
    icon: TrendingUp,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Marketing automation is nooit standaard. Vaste maandprijs op maat van uw tooling, flows en contactvolume.',
}

export const confidencePoints = [
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract. Resultaat telt, niet bindingen' },
  { title: 'U blijft eigenaar', description: 'Uw lijst, uw flows, uw data — altijd overdraagbaar' },
  { title: 'Alles inbegrepen', description: 'Strategie, bouw, copy, rapportage zonder extra fees' },
]

export const faqs = [
  {
    q: 'Wat kost marketing automation?',
    a: 'Dat werkt op offerte. De prijs hangt af van de gewenste flows, tooling (HubSpot, ActiveCampaign, Klaviyo, Mailchimp) en contactvolume. Na een gratis journey-audit ontvangt u een vaste maandprijs.',
  },
  {
    q: 'Welke tools gebruiken jullie?',
    a: 'We werken met de meeste moderne platforms: HubSpot, ActiveCampaign, Mailchimp, Klaviyo (e-commerce), Brevo, Zapier en Make. Heeft u al een tool? We bouwen erin. Nog geen tool? We adviseren de beste voor uw situatie.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Eerste flows zijn meestal binnen 2-3 weken live. Binnen 1-2 maanden zie je de eerste conversie-winst uit abandoned cart of welkom-flows. Echte optimalisatie groeit elk kwartaal door A/B-testen en segmentatie.',
  },
  {
    q: 'Moet ik al een e-maillijst hebben?',
    a: 'Nee, maar het helpt. Zonder lijst beginnen we met list-building flows (opt-in magnets, pop-ups, formulieren). Met lijst: direct welkomst- en nurture-flows. Voor webshops is een bestaande klantenlijst ideaal.',
  },
  {
    q: 'Is dit AVG-proof?',
    a: 'Absoluut. Opt-in met duidelijke toestemming, dubbel-opt-in waar nodig, AVG-proof hosting van lijst, één-klik uitschrijven, en een verwerkersovereenkomst met uw tool-leverancier. Wij documenteren alles.',
  },
  {
    q: 'Kunnen jullie ook nieuwsbrieven schrijven?',
    a: 'Ja. Naast automation-flows (die eenmalig bouwen) verzorgen we maandelijkse nieuwsbrieven als dat past. Onderscheid: automation = reactief (triggered), nieuwsbrief = proactief (gepland).',
  },
  {
    q: 'Wat als ik al flows heb die niet werken?',
    a: 'Dan doen we eerst een audit: welke flows presteren, welke niet, welke missen. Vaak is de fix niet bouwen maar bijsturen — timing, copy, segmentatie.',
  },
  {
    q: 'Hoe zit het met lijst-eigendom bij beëindiging?',
    a: 'Uw lijst en contactdata blijven altijd van u. Bij beëindiging exporteren wij alles en dragen het over. Ook de automation-flows documenteren we zodat een volgende partij (of u zelf) verder kan.',
  },
]
