export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cyber-darker pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-gradient">Algemene Voorwaarden</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">Versie: 1.0 - Geldig vanaf 1 januari 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 1. Definities</h2>
            <p className="text-gray-300 mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong>Opdrachtnemer:</strong> Staart Beheer Solutions, gevestigd te Utrecht</li>
              <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die opdracht geeft</li>
              <li><strong>Overeenkomst:</strong> Elke afspraak tussen opdrachtnemer en opdrachtgever</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 2. Toepasselijkheid</h2>
            <p className="text-gray-300 mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en 
              overeenkomsten van Staart Beheer Solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 3. Offertes</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Alle offertes zijn vrijblijvend, tenzij anders vermeld</li>
              <li>Offertes zijn 30 dagen geldig</li>
              <li>Prijzen zijn exclusief BTW tenzij anders vermeld</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 4. Uitvoering</h2>
            <p className="text-gray-300 mb-4">
              Opdrachtnemer zal de overeenkomst naar beste inzicht en vermogen uitvoeren volgens 
              de eisen van goed vakmanschap.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 5. Betaling</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Betalingstermijn is 14 dagen na factuurdatum</li>
              <li>Bij overschrijding is wettelijke rente verschuldigd</li>
              <li>Incassokosten komen voor rekening van opdrachtgever</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel 6. Aansprakelijkheid</h2>
            <p className="text-gray-300 mb-4">
              De aansprakelijkheid van opdrachtnemer is beperkt tot het factuurbedrag van de 
              betreffende opdracht, met een maximum van €10.000.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}