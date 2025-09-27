import ZZPClientPage from "./ZZPClientPage";
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Digital Autonomy Platform voor ZZP | Stop met Zwoegen, Start met Domineren',
  description: 'Jij bent de expert in je vak. Wij bouwen het digitale imperium eromheen. Hét all-in-one platform voor website, IT en marketing voor de ambitieuze ZZP er.',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is dit niet te duur voor een ZZP'er?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Onze ZZP-pakketten zijn speciaal ontworpen met de ZZP'er in gedachten: betaalbaar, flexibel en gericht op maximale waarde. Zie het als de meest rendabele 'medewerker' die je ooit zult aannemen."
      }
    },
    {
      "@type": "Question",
      "name": "Ik ben niet technisch. Is dit moeilijk te begrijpen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Juist niet. Wij nemen alle technische complexiteit weg en vertalen het naar duidelijke taal en resultaten. Jij focust op je vak, wij op de techniek en de groei."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik klein beginnen en later uitbreiden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absoluut. Ons model is ontworpen om met je mee te groeien. Je kunt starten met de basis en diensten toevoegen naarmate je bedrijf en je behoeften groeien."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "All-in-one Digitaal Platform voor ZZP'ers",
  "provider": {
    "@type": "Organization",
    "name": "Start Beheer Solutions"
  },
  "description": "Een geïntegreerd platform dat website, IT en marketing combineert om ZZP'ers te helpen online te domineren.",
  "areaServed": {
    "@type": "Country",
    "name": "NL"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ZZP Diensten",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digitale Vesting (Website & Hosting)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Operationele Ruggegraat (IT & E-mail)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Klantenmagneet (Marketing & SEO)"
        }
      }
    ]
  }
};


export default function ZZPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ZZPClientPage />
    </>
  );
}