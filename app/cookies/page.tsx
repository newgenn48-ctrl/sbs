import { Metadata } from 'next'
import CookiesClientPage from './CookiesClientPage'

export const metadata: Metadata = {
  title: 'Cookie Policy | Start Beheer',
  description: 'Lees hoe Start Beheer cookies gebruikt op onze website. Transparantie over uw online ervaring.',
  keywords: 'cookies, cookie policy, cookiebeleid, tracking, privacy',
}

export default function CookiesPage() {
  return <CookiesClientPage />
}
