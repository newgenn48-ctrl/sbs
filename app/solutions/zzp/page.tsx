import { Metadata } from 'next'
import ZZPClientPage from './ZZPClientPage'

export const metadata: Metadata = {
  title: 'ZZP IT Oplossingen | Website, E-mail & SEO voor Zelfstandigen',
  description: 'Complete digitale oplossingen voor ZZP\'ers: professionele website, zakelijke e-mail, lokale SEO en IT-support. Vanaf €99/mnd. ✓ Maandelijks opzegbaar ✓ Eén aanspreekpunt ✓ Bespaar 5-10 uur/mnd',
  keywords: 'ZZP IT oplossingen, website voor zzp, zakelijke e-mail zzp, lokale SEO zelfstandigen, IT support zzp, digitale oplossingen freelancer, ZZP pakket, ZZP website laten maken',
  openGraph: {
    title: 'ZZP Oplossingen | Website, E-mail & SEO | Start Beheer',
    description: 'Complete digitale oplossingen voor ZZP\'ers. Website, e-mail, SEO en IT-support in één pakket. Vanaf €99/mnd, maandelijks opzegbaar.',
    type: 'website',
  },
}

export default function ZZPPage() {
  return <ZZPClientPage />
}
