import { Metadata } from 'next'
import ITBeheerClientPage from './ITBeheerClientPage'

export const metadata: Metadata = {
  title: 'Proactief IT Beheer voor MKB | Groei Zonder Zorgen - Start Beheer',
  description: 'Frustreren IT-problemen uw groei? Ontdek hoe ons proactief IT beheer voor MKB downtime voorkomt, kosten verlaagt en uw team productief houdt. Vraag de gratis IT-scan aan.',
  keywords: 'IT beheer uitbesteden, MKB IT beheer, proactief systeembeheer, netwerkbeheer, cybersecurity MKB, cloud werkplek, IT-partner',
}

export default function ITBeheerPage() {
  return <ITBeheerClientPage />
}