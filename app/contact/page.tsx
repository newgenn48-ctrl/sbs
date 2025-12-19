import { Metadata } from 'next'
import ContactClientPage from './ContactClientPage'

export const metadata: Metadata = {
  title: 'Contact | Start Beheer - Neem Contact Op',
  description: 'Neem contact op met Start Beheer. Bel, mail of plan een gratis adviesgesprek. Wij reageren binnen 24 uur op uw vraag.',
  keywords: 'contact, start beheer, IT support, gratis adviesgesprek, IT partner',
}

export default function ContactPage() {
  return <ContactClientPage />
}
