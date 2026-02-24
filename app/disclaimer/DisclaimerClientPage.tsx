'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: 'Algemeen',
    content: `Deze disclaimer is van toepassing op de website van Start Beheer Solutions (hierna: "Start Beheer"). Door deze website te bezoeken en/of de op of via deze website aangeboden informatie te gebruiken, verklaart u zich akkoord met de toepasselijkheid van deze disclaimer.`
  },
  {
    title: 'Informatie op deze website',
    content: `Start Beheer besteedt de uiterste zorg aan de betrouwbaarheid en actualiteit van de gegevens op deze website. Desondanks kunnen onjuistheden en onvolledigheden voorkomen.

Start Beheer is niet aansprakelijk voor schade als gevolg van onjuistheden of onvolledigheden in de aangeboden informatie, noch voor schade die het gevolg is van problemen veroorzaakt door, of inherent aan het verspreiden van informatie via het internet.

De informatie op deze website is bedoeld als algemene informatie en vormt geen advies. Voor specifiek advies raden wij u aan contact met ons op te nemen.`
  },
  {
    title: 'Wijzigingen',
    content: `Start Beheer behoudt zich het recht voor om de informatie op deze website te allen tijde te wijzigen zonder voorafgaande kennisgeving. Het verdient aanbeveling periodiek na te gaan of de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, is gewijzigd.`
  },
  {
    title: 'Hyperlinks',
    content: `Deze website kan hyperlinks bevatten naar websites van derden. Start Beheer heeft geen invloed op de inhoud van deze websites en is niet verantwoordelijk voor de beschikbaarheid of inhoud daarvan.

Start Beheer aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit het gebruik van websites van derden. Het volgen van links naar websites van derden is geheel voor eigen risico.`
  },
  {
    title: 'Intellectueel eigendom',
    content: `Alle intellectuele eigendomsrechten op deze website en de daarop gepubliceerde inhoud, waaronder teksten, afbeeldingen, logo's, en software, berusten bij Start Beheer of haar licentiegevers.

Het is niet toegestaan om zonder voorafgaande schriftelijke toestemming van Start Beheer de inhoud van deze website te kopiëren, te reproduceren, te verspreiden of op andere wijze te gebruiken, anders dan voor persoonlijk, niet-commercieel gebruik.`
  },
  {
    title: 'Beschikbaarheid',
    content: `Start Beheer garandeert niet dat deze website foutloos of ononderbroken zal functioneren dan wel dat derden geen ongeoorloofde toegang tot de website zullen verkrijgen.

Start Beheer is niet aansprakelijk voor schade als gevolg van het (tijdelijk) niet beschikbaar zijn van de website.`
  },
  {
    title: 'E-mail communicatie',
    content: `Aan eventuele e-mailberichten verzonden door Start Beheer of haar medewerkers kunnen geen rechten worden ontleend, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.

Start Beheer is niet aansprakelijk voor de onjuiste of onvolledige overbrenging van de inhoud van e-mailberichten, of voor eventuele vertragingen in de ontvangst ervan.`
  },
  {
    title: 'Toepasselijk recht',
    content: `Op deze disclaimer is Nederlands recht van toepassing. Alle geschillen die voortvloeien uit of verband houden met deze disclaimer zullen worden voorgelegd aan de bevoegde rechter in Nederland.`
  },
  {
    title: 'Contact',
    content: `Heeft u vragen over deze disclaimer? Neem dan contact met ons op:

Start Beheer Solutions
E-mail: info@startbeheer.nl
Telefoon: 06-87 874 001
KvK-nummer: 93769865
BTW-nummer: NL005041113B60`
  },
]

export default function DisclaimerClientPage() {
  return (
    <main className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-green/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                <AlertTriangle className="w-4 h-4 mr-2 inline" />
                Disclaimer
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-gradient">Disclaimer</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Belangrijke informatie over het gebruik van onze website en de
                aansprakelijkheid van Start Beheer.
              </p>

              <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-400">
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
              className="glass-effect rounded-3xl border border-white/10 overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-quantum-green via-quantum-blue to-quantum-purple" />

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
                      <h2 className="text-xl font-display font-bold text-white mb-4">
                        {section.title}
                      </h2>
                      <div className="text-gray-400 leading-relaxed whitespace-pre-line">
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
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <h3 className="text-lg font-display font-bold text-white mb-4">
                    Vragen?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Neem gerust contact met ons op als u vragen heeft over deze
                    disclaimer.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-quantum-green hover:text-quantum-green/80 transition-colors"
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
