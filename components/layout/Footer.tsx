'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, Mail, Phone, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'IT Support & Infrastructure', href: '/it-support' },
    { name: 'Growth Marketing', href: '/marketing' },
    { name: 'Website Development', href: '/development' },
    { name: 'AI & Automation', href: '/ai' },
  ],
  company: [
    { name: 'Over Ons', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer className="relative bg-cyber-darker border-t border-cyber-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/sbs.webp"
                alt="Start Beheer Solutions"
                width={200}
                height={58}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Uw IT-partner voor ZZP en MKB. Van systeembeheer tot websites
              en AI - alles onder een dak met persoonlijke service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+31687874001"
                className="flex items-center gap-3 text-gray-400 hover:text-quantum-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>06 87 87 40 01</span>
              </a>
              <a
                href="mailto:info@startbeheer.nl"
                className="flex items-center gap-3 text-gray-400 hover:text-quantum-blue transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@startbeheer.nl</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Globe className="h-4 w-4" />
                <span>Digital-First Operations</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-cyber-light flex items-center justify-center hover:bg-quantum-blue/20 transition-colors"
                >
                  <social.icon className="h-5 w-5 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-quantum-blue transition-colors text-sm"
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
                    className="text-gray-400 hover:text-quantum-blue transition-colors text-sm"
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
                    className="text-gray-400 hover:text-quantum-blue transition-colors text-sm"
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
              © {new Date().getFullYear()} Start Beheer Solutions. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Made with ♥ by Start Beheer Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
