export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-cyber-darker pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-gradient">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Algemeen</h2>
            <p className="text-gray-300 mb-4">
              De informatie op deze website is met de grootst mogelijke zorgvuldigheid samengesteld. 
              Staart Beheer Solutions kan echter niet garanderen dat de informatie altijd volledig 
              juist, compleet en actueel is.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Aansprakelijkheid</h2>
            <p className="text-gray-300 mb-4">
              Staart Beheer Solutions is niet aansprakelijk voor schade die voortvloeit uit het 
              gebruik van deze website of de onmogelijkheid deze website te kunnen raadplegen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Links naar externe websites</h2>
            <p className="text-gray-300 mb-4">
              Deze website kan links bevatten naar externe websites. Staart Beheer Solutions is niet 
              verantwoordelijk voor de inhoud of het privacybeleid van deze externe websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectueel eigendom</h2>
            <p className="text-gray-300 mb-4">
              Alle intellectuele eigendomsrechten met betrekking tot deze website berusten bij 
              Staart Beheer Solutions. Niets uit deze website mag worden verveelvoudigd zonder 
              voorafgaande schriftelijke toestemming.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Wijzigingen</h2>
            <p className="text-gray-300 mb-4">
              Staart Beheer Solutions behoudt zich het recht voor om deze disclaimer op elk moment 
              te wijzigen zonder daarover berichten te versturen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}