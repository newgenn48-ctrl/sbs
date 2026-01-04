export interface SubMenuItem {
  name: string
  href: string
  isSub?: boolean
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
}

export const navigation: NavigationItem[] = [
  {
    name: 'IT Services',
    href: '#',
    submenu: [
      { name: 'IT Support', href: '/it-support' },
      { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
      { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
      { name: 'Microsoft 365 Beheer', href: '/microsoft-365-beheer' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
    ],
  },
  {
    name: 'Development',
    href: '/development',
    submenu: [
      { name: 'Development Overzicht', href: '/development' },
      { name: 'Website Laten Maken', href: '/website-laten-maken', isSub: true },
      { name: 'Webapplicatie Laten Maken', href: '/webapplicatie-laten-maken', isSub: true },
      { name: 'Webshop Laten Maken', href: '/webshop-laten-maken', isSub: true },
    ],
  },
  {
    name: 'AI & Automatisering',
    href: '/ai',
    submenu: [
      { name: 'AI Overzicht', href: '/ai' },
      { name: 'AI Chatbots', href: '/ai-chatbots', isSub: true },
      { name: 'Proces Automatisering', href: '/proces-automatisering', isSub: true },
      { name: 'AI Analytics', href: '/ai-analytics', isSub: true },
      { name: 'Virtuele Assistent', href: '/virtuele-assistent', isSub: true },
    ],
  },
  {
    name: 'Marketing',
    href: '/marketing',
    submenu: [
      { name: 'Marketing Overzicht', href: '/marketing' },
      { name: 'Google Ads Beheer', href: '/google-ads-beheer', isSub: true },
      { name: 'SEO Specialist', href: '/seo-specialist', isSub: true },
      { name: 'Social Media Marketing', href: '/social-media-marketing', isSub: true },
      { name: 'Marketing Automatisering', href: '/marketing-automatisering', isSub: true },
    ],
  },
  { name: 'Oplossingen', href: '/oplossingen' },
  { name: 'Over Ons', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

// Services list for contact form and other uses
export const services = [
  'IT Beheer & Support',
  'Website Development',
  'AI & Automatisering',
  'Online Marketing',
  'Microsoft 365',
  'Cybersecurity',
  'Anders / Weet ik niet',
]
