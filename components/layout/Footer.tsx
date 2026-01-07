'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  itServices: [
    { name: 'IT Beheer & Support', href: '/it-support' },
    { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
    { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
    { name: 'Microsoft 365 Beheer', href: '/microsoft-365-beheer' },
  ],
  development: [
    { name: 'Website Laten Maken', href: '/website-laten-maken' },
    { name: 'Webshop Laten Maken', href: '/webshop-laten-maken' },
    { name: 'AI & Automatisering', href: '/ai' },
    { name: 'Online Marketing', href: '/marketing' },
  ],
  company: [
    { name: 'Over Ons', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacybeleid', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/terms' },
    { name: 'Cookiebeleid', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-cyber-darker border-t border-cyber-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/sbs.webp"
                alt="Start Beheer Solutions"
                width={200}
                height={58}
                sizes="200px"
                className="h-16 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              Uw IT-partner voor ZZP en MKB. Van systeembeheer tot websites
              en AI - alles onder een dak met persoonlijke service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+31687874001"
                className="flex items-center gap-3 text-gray-300 hover:text-quantum-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>06 87 87 40 01</span>
              </a>
              <a
                href="mailto:info@startbeheer.nl"
                className="flex items-center gap-3 text-gray-300 hover:text-quantum-blue transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@startbeheer.nl</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nederland</span>
              </div>
            </div>

            {/* Bedrijfsgegevens */}
            <div className="mt-6 text-sm text-gray-500 space-y-1">
              <p>KvK: 93769865</p>
              <p>BTW: NL005041113B60</p>
            </div>
          </div>

          {/* IT Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              IT Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.itServices.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development & Marketing Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Development
            </h3>
            <ul className="space-y-3">
              {footerLinks.development.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Bedrijf
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quantum-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyber-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Start Beheer Solutions. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Gemaakt met ♥ door Start Beheer Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
