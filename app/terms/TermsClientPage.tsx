'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { FileText, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: 'Artikel 1 - Definities',
    content: `In deze algemene voorwaarden wordt verstaan onder:

1.1 Start Beheer: Start Beheer Solutions, ingeschreven bij de Kamer van Koophandel onder nummer 93769865, BTW-nummer NL005041113B60.

1.2 Opdrachtgever: de natuurlijke persoon of rechtspersoon die aan Start Beheer opdracht heeft gegeven tot het verrichten van werkzaamheden.

1.3 Overeenkomst: de overeenkomst tussen Start Beheer en Opdrachtgever.

1.4 Diensten: alle door Start Beheer aan Opdrachtgever geleverde diensten, waaronder IT-beheer, websiteontwikkeling, AI-oplossingen, en online marketing.`
  },
  {
    title: 'Artikel 2 - Toepasselijkheid',
    content: `2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, opdrachten en overeenkomsten tussen Start Beheer en Opdrachtgever.

2.2 Afwijkingen van deze voorwaarden zijn alleen geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.

2.3 De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.`
  },
  {
    title: 'Artikel 3 - Offertes en Aanbiedingen',
    content: `3.1 Alle offertes en aanbiedingen van Start Beheer zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.

3.2 Een offerte is geldig gedurende 30 dagen na de offertedatum, tenzij anders aangegeven.

3.3 Prijzen in offertes zijn exclusief BTW, tenzij anders vermeld.

3.4 Een overeenkomst komt tot stand op het moment dat Opdrachtgever de offerte schriftelijk of per e-mail accepteert, of wanneer Start Beheer met de uitvoering van de opdracht begint.`
  },
  {
    title: 'Artikel 4 - Uitvoering van de Overeenkomst',
    content: `4.1 Start Beheer zal de overeenkomst naar beste inzicht en vermogen uitvoeren.

4.2 Opdrachtgever zorgt ervoor dat alle gegevens en materialen die noodzakelijk zijn voor de uitvoering van de opdracht, tijdig aan Start Beheer worden verstrekt.

4.3 Opgegeven termijnen zijn indicatief en gelden niet als fatale termijnen, tenzij uitdrukkelijk anders overeengekomen.

4.4 Start Beheer is gerechtigd derden in te schakelen bij de uitvoering van de opdracht.`
  },
  {
    title: 'Artikel 5 - Tarieven en Betaling',
    content: `5.1 Tenzij anders overeengekomen, worden diensten gefactureerd op basis van de in de offerte vermelde tarieven.

5.2 Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.

5.3 Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim en is Start Beheer gerechtigd de wettelijke handelsrente in rekening te brengen.

5.4 Alle gerechtelijke en buitengerechtelijke incassokosten komen voor rekening van Opdrachtgever.`
  },
  {
    title: 'Artikel 6 - Intellectueel Eigendom',
    content: `6.1 Alle intellectuele eigendomsrechten op door Start Beheer ontwikkelde materialen, software, ontwerpen en documentatie blijven bij Start Beheer, tenzij schriftelijk anders overeengekomen.

6.2 Na volledige betaling verkrijgt Opdrachtgever een gebruiksrecht op de geleverde producten voor het overeengekomen doel.

6.3 Het is Opdrachtgever niet toegestaan om zonder schriftelijke toestemming van Start Beheer de geleverde producten te verveelvoudigen, openbaar te maken of aan derden ter beschikking te stellen.`
  },
  {
    title: 'Artikel 7 - Aansprakelijkheid',
    content: `7.1 De aansprakelijkheid van Start Beheer is beperkt tot het bedrag dat in het desbetreffende geval onder de aansprakelijkheidsverzekering wordt uitbetaald, vermeerderd met het eigen risico.

7.2 Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot maximaal het factuurbedrag van de betreffende opdracht, met een maximum van € 10.000.

7.3 Start Beheer is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen of schade door bedrijfsstagnatie.

7.4 De in dit artikel genoemde beperkingen gelden niet indien de schade het gevolg is van opzet of grove schuld van Start Beheer.`
  },
  {
    title: 'Artikel 8 - Geheimhouding',
    content: `8.1 Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben verkregen.

8.2 Informatie geldt als vertrouwelijk indien dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.

8.3 De geheimhoudingsplicht blijft ook na beëindiging van de overeenkomst van kracht.`
  },
  {
    title: 'Artikel 9 - Opzegging en Beëindiging',
    content: `9.1 Overeenkomsten voor bepaalde tijd kunnen niet tussentijds worden opgezegd, tenzij schriftelijk anders overeengekomen.

9.2 Overeenkomsten voor onbepaalde tijd kunnen door beide partijen schriftelijk worden opgezegd met inachtneming van een opzegtermijn van één maand.

9.3 Start Beheer is gerechtigd de overeenkomst met onmiddellijke ingang te ontbinden indien Opdrachtgever in verzuim is met de nakoming van zijn verplichtingen.

9.4 Bij beëindiging van de overeenkomst blijven reeds gefactureerde bedragen verschuldigd.`
  },
  {
    title: 'Artikel 10 - Overmacht',
    content: `10.1 Start Beheer is niet gehouden tot nakoming van enige verplichting indien dit wordt verhinderd door overmacht.

10.2 Onder overmacht wordt verstaan: storingen in het internet, stroomstoringen, overheidsmaatregelen, pandemieën, en andere omstandigheden die buiten de macht van Start Beheer liggen.

10.3 Indien de overmachtssituatie langer dan 60 dagen duurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden.`
  },
  {
    title: 'Artikel 11 - Klachten',
    content: `11.1 Klachten over de verrichte werkzaamheden dienen schriftelijk binnen 14 dagen na ontdekking te worden gemeld.

11.2 Indien een klacht gegrond is, zal Start Beheer de werkzaamheden alsnog verrichten zoals overeengekomen, of een deel van het factuurbedrag crediteren.

11.3 Het indienen van een klacht schort de betalingsverplichting niet op.`
  },
  {
    title: 'Artikel 12 - Toepasselijk Recht en Geschillen',
    content: `12.1 Op alle overeenkomsten tussen Start Beheer en Opdrachtgever is Nederlands recht van toepassing.

12.2 Geschillen zullen in eerste instantie worden voorgelegd aan de bevoegde rechter in het arrondissement Midden-Nederland.

12.3 Partijen zullen eerst proberen geschillen in onderling overleg op te lossen alvorens een beroep te doen op de rechter.

12.4 Voor consumenten geldt dat zij ook gebruik kunnen maken van het ODR-platform van de Europese Commissie: https://ec.europa.eu/consumers/odr`
  },
]

export default function TermsClientPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-violet/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-violet/20 text-primary-violet border-primary-violet/30">
                <FileText className="w-4 h-4 mr-2 inline" />
                Algemene Voorwaarden
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-slate-900">Algemene </span>
                <span className="text-gradient">Voorwaarden</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Duidelijke afspraken voor een prettige samenwerking. Hieronder vindt u
                onze algemene voorwaarden.
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
              <div className="h-1 bg-gradient-to-r from-primary-violet via-primary-blue to-primary-emerald" />

              <div className="p-8 sm:p-12">
                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <m.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
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
                    Vragen over onze voorwaarden?
                  </h3>
                  <p className="text-slate-500 mb-4">
                    Neem gerust contact met ons op als u vragen heeft over deze
                    algemene voorwaarden.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary-violet hover:text-primary-violet/80 transition-colors"
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
