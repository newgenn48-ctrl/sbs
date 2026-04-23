import {
  PhoneCall, Calendar, MessageSquare, FileText, Bell,
  Building2, Briefcase, Stethoscope, Store, Scale, Hotel,
  Headphones, BarChart3, Mic, Users, Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroTags = [
  '24/7 telefonisch bereikbaar',
  'Afspraken direct ingepland',
  'Nooit meer gemiste oproepen',
]

export const whyChooseUs = [
  { icon: PhoneCall, title: 'Nooit gemist', description: 'Elke beller krijgt direct antwoord, dag en nacht.', stat: '24/7', statLabel: 'bereikbaar' },
  { icon: Calendar, title: 'Agenda op autopilot', description: 'Afspraken direct ingepland zonder heen-en-weer mailen.', stat: '0s', statLabel: 'wachttijd' },
  { icon: FileText, title: 'Vaste prijs', description: 'Maandabonnement zonder verrassingen.', stat: '0', statLabel: 'verborgen kosten' },
  { icon: Users, title: 'Eén aanspreekpunt', description: 'Uw vaste voice-specialist. Direct bereikbaar.', stat: '1', statLabel: 'aanspreekpunt' },
]

export const targetAudience: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Afspraakbeheer en triage-vragen — patiënten geholpen buiten spreekuur.' },
  { icon: Scale, title: 'Juridisch & Advies', description: 'Nieuwe cliënten kwalificeren en intakes plannen zonder eerst te bellen.' },
  { icon: Store, title: 'Retail & Horeca', description: 'Reserveringen, openingstijden en bestellingen aannemen zonder personeel aan de telefoon.' },
  { icon: Briefcase, title: 'B2B Dienstverleners', description: 'Lead-intake met kwalificatie-vragen — alleen serieuze aanvragen bereiken u.' },
  { icon: Hotel, title: 'Bemiddelaars & Agencies', description: 'Inkomende vragen triagen, bevestigingen versturen en follow-ups plannen.' },
  { icon: Building2, title: 'MKB zonder receptie', description: 'Geen budget voor secretaresse? De assistent is uw professionele eerste indruk.' },
]

export const includedChecklist = [
  {
    icon: Mic,
    category: 'Stem & persoonlijkheid',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Keuze uit natuurlijke Nederlandse stemmen',
      'Getraind op uw merk en tone-of-voice',
      'Intonatie en pauzes zoals een mens',
      'Meertalig (NL, EN, DU, FR op aanvraag)',
      'Disclaimer: beller hoort dat het AI is',
    ],
  },
  {
    icon: PhoneCall,
    category: 'Gesprek-afhandeling',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Begroeting en bedrijfsintroductie',
      'FAQ-antwoorden uit uw eigen content',
      'Intelligent doorverbinden naar juiste persoon',
      'Escalatie naar mens bij complexe vragen',
      'Voicemail-to-text buiten openingstijden',
    ],
  },
  {
    icon: Calendar,
    category: 'Afspraken & agenda',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Koppeling met Google Calendar of Outlook',
      'Afspraken inplannen op beschikbare tijden',
      'Verzetten en annuleren telefonisch',
      'Bevestigingsmails en SMS-herinneringen',
      'Dubbele boekingen onmogelijk gemaakt',
    ],
  },
  {
    icon: MessageSquare,
    category: 'Lead-intake & CRM',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Gestructureerde intake-vragen op maat',
      'Lead-kwalificatie op uw criteria',
      'Automatisch aanmaken in uw CRM',
      'Follow-up taak voor verkoopteam',
      'Urgentie-flagging bij hot leads',
    ],
  },
  {
    icon: BarChart3,
    category: 'Transcripties & rapportage',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Transcriptie van elk gesprek',
      'Samenvatting met actiepunten',
      'Zoekbare gesprekshistorie',
      'Maandrapport: volume, onderwerpen, escalaties',
      'Inzicht in wat klanten écht vragen',
    ],
  },
  {
    icon: Headphones,
    category: 'Support & optimalisatie',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Vaste voice-specialist, geen callcenter',
      'Maandelijkse fine-tuning op gesprekken',
      'Antwoord binnen 24 uur op wijzigingen',
      'Nieuwe scripts bij nieuwe diensten',
      'U blijft eigenaar van data en transcripts',
    ],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Telefonie-audit',
    description: 'Wij analyseren uw inkomende oproepen: wat vragen mensen, hoe lang duurt het, wat wordt gemist?',
    icon: Target,
  },
  {
    step: '02',
    title: 'Script & training',
    description: 'Wij schrijven gespreksscripts en trainen de assistent op uw bedrijf, FAQ en tone-of-voice.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Integratie',
    description: 'Koppeling met uw telefonie, agenda en CRM. Testen met echte scenario’s voor go-live.',
    icon: PhoneCall,
  },
  {
    step: '04',
    title: 'Live & finetunen',
    description: 'Gefaseerd live, dan maandelijks bijsturen op basis van echte gesprekken. Scripts scherper, escalaties slimmer.',
    icon: Bell,
  },
]

export const priceInfo = {
  price: 'Op offerte',
  description: 'Voice AI is nooit standaard. Maandabonnement op maat van belvolume, talen, integraties en gesprekscomplexiteit.',
}

export const confidencePoints = [
  { title: 'Maandelijks opzegbaar', description: 'Geen jaarcontract. Werkt het niet, stopt u' },
  { title: 'U blijft eigenaar', description: 'Uw telefoonnummer, scripts en transcripts blijven van u' },
  { title: 'AVG-proof', description: 'Opslag in EU, beller ge\u00EFnformeerd, data-retentie op maat' },
]

export const faqs = [
  {
    q: 'Wat kost een virtuele assistent?',
    a: 'Dat werkt op offerte. Prijs hangt af van belvolume (minuten/maand), aantal talen, integraties (agenda, CRM, telefonie) en gesprekscomplexiteit. Na een gratis telefonie-audit ontvangt u een vaste maandprijs. Vaak fors goedkoper dan een parttime medewerker.',
  },
  {
    q: 'Klinkt de AI-stem echt natuurlijk?',
    a: 'Ja. We gebruiken de nieuwste text-to-speech (ElevenLabs, OpenAI, Azure) met Nederlandse stemmen die nauwelijks van echte mensen te onderscheiden zijn. U hoort zelf demo’s vooraf en kiest welke stem bij uw merk past.',
  },
  {
    q: 'Wat als de beller iets complex vraagt?',
    a: 'De assistent herkent complexe gesprekken en verbindt direct door naar een mens — met context zodat de klant niet opnieuw hoeft uit te leggen. U bepaalt zelf wanneer er wordt ge\u00EBscaleerd: trefwoorden, emotie, of op verzoek van de beller.',
  },
  {
    q: 'Kan de assistent afspraken inplannen in mijn agenda?',
    a: 'Ja. Koppelt met Google Calendar, Outlook, Calendly en de meeste praktijksystemen. Beschikbaarheid wordt real-time gecheckt, afspraak wordt bevestigd per SMS of e-mail, en bij wijziging wordt alles automatisch bijgewerkt.',
  },
  {
    q: 'Weten bellers dat ze met AI spreken?',
    a: 'Ja — en dat hoort ook volgens AVG en AI Act. De assistent introduceert zichzelf aan het begin van elk gesprek. Bellers waarderen transparantie boven nep-menselijk gedrag. Wel zo eerlijk, en ook juridisch de veiligste route.',
  },
  {
    q: 'Werkt dit met mijn bestaande telefoonnummer?',
    a: 'Ja. Via SIP-koppeling of nummerdoorschakeling kan de assistent uw bestaande nummer beantwoorden. Uw nummer blijft van u — bij be\u00EBindiging schakelen we simpel terug. Geen nummer-gijzeling.',
  },
  {
    q: 'Hoe zit het met privacy en opnames?',
    a: 'Alle gesprekken worden verwerkt conform AVG. Opslag in Europa, encryptie in transit en at-rest. U bepaalt zelf wat bewaard blijft (transcript, samenvatting, audio) en hoe lang. Verwerkersovereenkomst staat standaard.',
  },
  {
    q: 'Wat als de assistent een fout maakt?',
    a: 'Elk gesprek heeft een transcript en samenvatting. Fouten detecteren we bij maandelijkse review — we trainen de assistent daarop bij. Voor hoog-risico gesprekken (medisch, juridisch) stellen we expliciete grenzen en escaleren we altijd naar mens.',
  },
]
