import type { Metadata } from 'next'
import DemoClientPage from './DemoClientPage'

export const metadata: Metadata = {
  title: 'Gratis Demo Aanvragen | Start Beheer Solutions',
  description: 'Vraag een gratis demo aan en ontdek hoe wij uw website, webshop of webapplicatie bouwen. Binnen 24 uur een persoonlijke demonstratie.',
  alternates: { canonical: '/demo' },
}

export default function DemoPage() {
  return <DemoClientPage />
}
