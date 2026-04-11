'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Shield, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: '1. Wie zijn wij?',
    content: `Start Beheer Solutions is een IT-dienstverlener in Nederland. Wij bieden IT-beheer, websiteontwikkeling, AI-oplossingen en online marketing aan ZZP'ers en het MKB.

Contactgegevens:
- Bedrijfsnaam: Start Beheer Solutions
- E-mail: info@startbeheer.nl
- Telefoon: 06-87 874 001
- KvK-nummer: 93769865
- BTW-nummer: NL005041113B60`
  },
  {
    title: '2. Welke gegevens verzamelen wij?',
    content: `Wij verzamelen de volgende persoonsgegevens:

Contactgegevens:
- Naam
- E-mailadres
- Telefoonnummer
- Bedrijfsnaam

Automatisch verzamelde gegevens (voor beveiliging en websitewerking):
- IP-adres (geanonimiseerd voor analytics)
- Browsertype en -versie
- Bezochte pagina's
- Datum en tijd van bezoek
- Verwijzende website

Let op: Voor analytische doeleinden wordt uw IP-adres geanonimiseerd verwerkt.

Gegevens voor dienstverlening:
- Communicatiegeschiedenis
- Projectgerelateerde informatie
- Factuurgegevens`
  },
  {
    title: '3. Waarvoor gebruiken wij uw gegevens?',
    content: `Wij gebruiken uw persoonsgegevens voor:

- Contact opnemen naar aanleiding van uw aanvraag
- Uitvoeren van onze diensten
- Facturatie en administratie
- Verbetering van onze website en diensten
- Verzenden van relevante informatie (met uw toestemming)
- Voldoen aan wettelijke verplichtingen`
  },
  {
    title: '4. Rechtsgrond voor verwerking',
    content: `Wij verwerken uw gegevens op basis van:

- Uitvoering van een overeenkomst: voor het leveren van onze diensten
- Gerechtvaardigd belang: voor het verbeteren van onze diensten en marketing
- Toestemming: voor het verzenden van nieuwsbrieven en marketingcommunicatie
- Wettelijke verplichting: voor fiscale en administratieve verplichtingen`
  },
  {
    title: '5. Hoe lang bewaren wij uw gegevens?',
    content: `Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk:

- Contactformuliergegevens: maximaal 2 jaar na laatste contact
- Klantgegevens: 7 jaar na beëindiging dienstverlening (wettelijke bewaarplicht)
- Websitestatistieken: maximaal 26 maanden
- E-mail marketinglijsten: tot intrekking toestemming`
  },
  {
    title: '6. Delen met derden',
    content: `Wij delen uw gegevens alleen met:

- Hostingproviders (voor het draaien van onze website)
- E-mail dienstverleners (voor communicatie)
- Boekhoudsoftware (voor facturatie)
- Google Analytics (geanonimiseerd, voor websitestatistieken)

Wij verkopen nooit uw gegevens aan derden. Alle verwerkers waarmee wij werken hebben een verwerkersovereenkomst getekend.`
  },
  {
    title: '7. Uw rechten',
    content: `U heeft de volgende rechten:

- Recht op inzage: u kunt opvragen welke gegevens wij van u hebben
- Recht op rectificatie: u kunt onjuiste gegevens laten corrigeren
- Recht op vergetelheid: u kunt verzoeken uw gegevens te verwijderen
- Recht op beperking: u kunt verwerking tijdelijk laten stopzetten
- Recht op dataportabiliteit: u kunt uw gegevens opvragen in een gangbaar formaat
- Recht van bezwaar: u kunt bezwaar maken tegen bepaalde verwerkingen

Neem contact op via info@startbeheer.nl om uw rechten uit te oefenen. Wij reageren binnen 30 dagen op uw verzoek.`
  },
  {
    title: '8. Beveiliging',
    content: `Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen:

- SSL/TLS-versleuteling op onze website
- Beveiligde servers met regelmatige updates
- Beperkte toegang tot persoonsgegevens
- Sterke wachtwoorden en twee-factor authenticatie
- Regelmatige back-ups`
  },
  {
    title: '9. Cookies',
    content: `Onze website maakt gebruik van cookies. Voor meer informatie over welke cookies wij gebruiken en hoe u deze kunt beheren, verwijzen wij naar onze Cookie Policy.`
  },
  {
    title: '10. Wijzigingen',
    content: `Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest recente versie is altijd beschikbaar op deze pagina. Bij belangrijke wijzigingen informeren wij u via e-mail of een melding op onze website.`
  },
  {
    title: '11. Klachten',
    content: `Heeft u een klacht over hoe wij met uw gegevens omgaan? Neem dan eerst contact met ons op. Komen wij er samen niet uit, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.

Autoriteit Persoonsgegevens
www.autoriteitpersoonsgegevens.nl`
  },
]

export default function PrivacyClientPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-blue/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-blue/20 text-primary-blue border-primary-blue/30">
                <Shield className="w-4 h-4 mr-2 inline" />
                Privacy Policy
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-slate-900">Privacy </span>
                <span className="text-gradient">Beleid</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Bij Start Beheer nemen wij uw privacy serieus. In dit beleid leggen wij
                uit hoe wij omgaan met uw persoonsgegevens.
              </p>

              <div className="flex items-center justify-center gap-4 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Laatst bijgewerkt: januari 2025
                </span>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl border border-slate-200 overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary-blue via-primary-violet to-primary-emerald" />

              <div className="p-8 sm:p-12">
                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <m.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-xl font-display font-bold text-slate-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="text-slate-500 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </m.div>
                  ))}
                </div>

                {/* Contact CTA */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 pt-8 border-t border-slate-200"
                >
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-4">
                    Vragen over uw privacy?
                  </h3>
                  <p className="text-slate-500 mb-4">
                    Neem gerust contact met ons op als u vragen heeft over dit privacybeleid
                    of hoe wij met uw gegevens omgaan.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact opnemen
                  </Link>
                </m.div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </main>
  )
}
