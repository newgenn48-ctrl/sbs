'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Cookie, Mail, Calendar, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const cookieTypes = [
  {
    title: 'Noodzakelijke Cookies',
    description: 'Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld.',
    examples: [
      { name: 'session_id', purpose: 'Houdt uw sessie bij tijdens het browsen', duration: 'Sessie' },
      { name: 'cookie_consent', purpose: 'Onthoudt uw cookievoorkeuren', duration: '1 jaar' },
    ],
    required: true
  },
  {
    title: 'Analytische Cookies',
    description: 'Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken, zodat we deze kunnen verbeteren.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics - onderscheidt gebruikers', duration: '2 jaar' },
      { name: '_gid', purpose: 'Google Analytics - onderscheidt gebruikers', duration: '24 uur' },
      { name: '_gat', purpose: 'Google Analytics - beperkt verzoeken', duration: '1 minuut' },
    ],
    required: false
  },
  {
    title: 'Functionele Cookies',
    description: 'Deze cookies onthouden uw voorkeuren en zorgen voor een gepersonaliseerde ervaring.',
    examples: [
      { name: 'language', purpose: 'Onthoudt uw taalvoorkeur', duration: '1 jaar' },
      { name: 'theme', purpose: 'Onthoudt uw weergavevoorkeuren', duration: '1 jaar' },
    ],
    required: false
  },
  {
    title: 'Marketing Cookies',
    description: 'Deze cookies worden gebruikt om advertenties relevanter te maken voor u.',
    examples: [
      { name: '_fbp', purpose: 'Facebook Pixel - advertentiedoeleinden', duration: '3 maanden' },
      { name: 'ads/ga-audiences', purpose: 'Google Ads - remarketing', duration: 'Sessie' },
    ],
    required: false
  },
]

const sections = [
  {
    title: 'Wat zijn cookies?',
    content: `Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen de website om uw voorkeuren te onthouden en om te begrijpen hoe u de site gebruikt.

Cookies kunnen worden ingedeeld in:
- Sessiecookies: worden verwijderd wanneer u uw browser sluit
- Permanente cookies: blijven op uw apparaat totdat ze verlopen of door u worden verwijderd`
  },
  {
    title: 'Hoe kunt u cookies beheren?',
    content: `U kunt cookies beheren via uw browserinstellingen. Hieronder vindt u links naar instructies voor de meest gebruikte browsers:

- Google Chrome: Instellingen > Privacy en beveiliging > Cookies
- Mozilla Firefox: Opties > Privacy & Beveiliging > Cookies
- Safari: Voorkeuren > Privacy > Cookies
- Microsoft Edge: Instellingen > Privacy en services > Cookies

Let op: het blokkeren van cookies kan invloed hebben op de functionaliteit van onze website.`
  },
  {
    title: 'Cookies van derden',
    content: `Wij maken gebruik van diensten van derden die ook cookies kunnen plaatsen:

Google Analytics
We gebruiken Google Analytics om inzicht te krijgen in hoe bezoekers onze website gebruiken. IP-adressen worden geanonimiseerd (IP Anonymization) voordat ze worden verwerkt. De verzamelde gegevens worden niet gedeeld met derden en worden alleen geplaatst na uw toestemming.

Google Ads
Voor remarketing kunnen cookies van Google Ads worden geplaatst als u toestemming geeft voor marketing cookies.

Social Media
Als u content deelt via social media knoppen, kunnen deze platforms cookies plaatsen.`
  },
  {
    title: 'Uw rechten',
    content: `U heeft het recht om:
- Te weten welke cookies wij plaatsen
- Uw toestemming in te trekken voor niet-essentiële cookies
- Cookies te verwijderen via uw browserinstellingen

Bij uw eerste bezoek aan onze website krijgt u de mogelijkheid om uw cookievoorkeuren in te stellen via onze cookiebanner. Niet-essentiële cookies worden pas geplaatst nadat u hiervoor toestemming heeft gegeven. U kunt deze voorkeuren op elk moment wijzigen door de cookiebanner opnieuw te openen via de link in de footer.`
  },
  {
    title: 'Wijzigingen in dit beleid',
    content: `Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen om wijzigingen in ons cookiegebruik of om wettelijke redenen te weerspiegelen. De meest recente versie is altijd beschikbaar op deze pagina.`
  },
]

export default function CookiesClientPage() {
  return (
    <main className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-orange/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-orange/20 text-quantum-orange border-quantum-orange/30">
                <Cookie className="w-4 h-4 mr-2 inline" />
                Cookie Policy
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-white">Cookie </span>
                <span className="text-gradient">Beleid</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Transparantie over hoe wij cookies gebruiken om uw ervaring op onze
                website te verbeteren.
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

      {/* Cookie Types Section */}
      <section className="py-16 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center"
            >
              Welke cookies gebruiken wij?
            </m.h2>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <m.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl border border-white/10 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-display font-bold text-white">
                        {type.title}
                      </h3>
                      {type.required && (
                        <span className="px-3 py-1 bg-quantum-blue/20 text-quantum-blue text-xs rounded-full">
                          Noodzakelijk
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">
                      {type.description}
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 text-gray-300 font-medium">Cookie</th>
                            <th className="text-left py-2 text-gray-300 font-medium">Doel</th>
                            <th className="text-left py-2 text-gray-300 font-medium">Duur</th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.examples.map((cookie) => (
                            <tr key={cookie.name} className="border-b border-white/5">
                              <td className="py-2 text-quantum-blue font-mono text-xs">{cookie.name}</td>
                              <td className="py-2 text-gray-400">{cookie.purpose}</td>
                              <td className="py-2 text-gray-500">{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
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
              <div className="h-1 bg-gradient-to-r from-quantum-orange via-quantum-purple to-quantum-blue" />

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
                    Vragen over cookies?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Neem gerust contact met ons op als u vragen heeft over ons
                    cookiebeleid.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-quantum-orange hover:text-quantum-orange/80 transition-colors"
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
