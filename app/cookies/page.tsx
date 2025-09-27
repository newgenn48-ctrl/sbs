export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-cyber-darker pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-gradient">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">Laatst bijgewerkt: 1 januari 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Wat zijn cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden 
              opgeslagen wanneer u onze website bezoekt. Ze helpen ons om uw voorkeuren te onthouden 
              en uw ervaring te verbeteren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies die wij gebruiken</h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Noodzakelijke cookies</h3>
            <p className="text-gray-300 mb-4">
              Deze cookies zijn essentieel voor het functioneren van de website.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Analytische cookies</h3>
            <p className="text-gray-300 mb-4">
              We gebruiken Google Analytics om te begrijpen hoe bezoekers onze website gebruiken.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Marketing cookies</h3>
            <p className="text-gray-300 mb-4">
              Deze cookies worden gebruikt om relevante advertenties te tonen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies beheren</h2>
            <p className="text-gray-300 mb-4">
              U kunt cookies uitschakelen of verwijderen via uw browserinstellingen. Let op: dit kan 
              de functionaliteit van de website beïnvloeden.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}