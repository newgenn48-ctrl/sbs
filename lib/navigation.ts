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
      { name: 'Website Laten Maken', href: '/development/website-laten-maken', isSub: true },
      { name: 'Webapplicatie Ontwikkeling', href: '/development/webapplicatie-ontwikkeling', isSub: true },
      { name: 'E-commerce Oplossingen', href: '/development/ecommerce', isSub: true },
    ],
  },
  {
    name: 'AI & Automatisering',
    href: '/ai',
    submenu: [
      { name: 'AI Overzicht', href: '/ai' },
      { name: 'AI Chatbots', href: '/ai/chatbots', isSub: true },
      { name: 'Proces Automatisering', href: '/ai/process-automation', isSub: true },
      { name: 'AI Analytics', href: '/ai/analytics', isSub: true },
      { name: 'Virtuele Assistent', href: '/ai/virtual-assistant', isSub: true },
    ],
  },
  {
    name: 'Marketing',
    href: '/marketing',
    submenu: [
      { name: 'Marketing Overzicht', href: '/marketing' },
      { name: 'Google Ads Beheer', href: '/marketing/google-ads-beheer', isSub: true },
      { name: 'SEO Services', href: '/marketing/seo-services', isSub: true },
      { name: 'Social Media', href: '/marketing/social-media', isSub: true },
      { name: 'Marketing Automation', href: '/marketing/marketing-automation', isSub: true },
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
