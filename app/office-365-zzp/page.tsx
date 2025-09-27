import { Metadata } from 'next'
import Office365ZZPClientPage from './Office365ZZPClientPage'

export const metadata: Metadata = {
  title: 'Microsoft Office 365 voor ZZP | Start Beheer Solutions',
  description: 'Optimaliseer uw productiviteit als ZZP\'er met Microsoft Office 365. Veilige e-mail, cloudopslag en de vertrouwde Office-apps voor een vast, laag maandbedrag. Start vandaag nog.',
  keywords: 'Office 365 ZZP, Microsoft 365 ZZP, professionele email, OneDrive ZZP, Office voor zelfstandigen, Start Beheer',
}

export default function Office365ZZPPage() {
  return <Office365ZZPClientPage />
}
