export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cyber-darker pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-gradient">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">Laatst bijgewerkt: 1 januari 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introductie</h2>
            <p className="text-gray-300 mb-4">
              Staart Beheer Solutions ("wij", "ons", "onze") respecteert uw privacy en is toegewijd 
              aan het beschermen van uw persoonlijke gegevens. Deze privacy policy informeert u over 
              hoe wij omgaan met uw persoonlijke gegevens wanneer u onze website bezoekt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Gegevens die wij verzamelen</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Contactgegevens (naam, email, telefoonnummer)</li>
              <li>Bedrijfsgegevens (bedrijfsnaam, functie, website)</li>
              <li>Technische gegevens (IP-adres, browser type, tijdzone)</li>
              <li>Gebruiksgegevens (hoe u onze website gebruikt)</li>
              <li>Marketing en communicatie voorkeuren</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Hoe wij uw gegevens gebruiken</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Om onze diensten te leveren</li>
              <li>Om met u te communiceren</li>
              <li>Om onze website te verbeteren</li>
              <li>Om u marketingcommunicatie te sturen (met uw toestemming)</li>
              <li>Om te voldoen aan wettelijke verplichtingen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Uw rechten</h2>
            <p className="text-gray-300 mb-4">
              Onder de AVG heeft u het recht om:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Toegang te vragen tot uw persoonlijke gegevens</li>
              <li>Correctie te vragen van uw persoonlijke gegevens</li>
              <li>Verwijdering te vragen van uw persoonlijke gegevens</li>
              <li>Bezwaar te maken tegen verwerking van uw persoonlijke gegevens</li>
              <li>Gegevensportabiliteit te vragen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
            <p className="text-gray-300">
              Voor vragen over deze privacy policy kunt u contact opnemen via:<br />
              Email: privacy@staartbeheer.nl<br />
              Telefoon: 030-123 45 67<br />
              Adres: Kerkstraat 15, 3451 CK Utrecht
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}