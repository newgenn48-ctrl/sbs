'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'IT Support & Infrastructure', href: '/it-support' },
    { name: 'Growth Marketing', href: '/marketing' },
    { name: 'Website Development', href: '/websites' },
    { name: 'AI & Automation', href: '/ai' },
  ],
  company: [
    { name: 'Over Ons', href: '/about' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'Blog', href: '/blog' },
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
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
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
              <span className="text-3xl font-display font-bold text-gradient">
                START
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Next-gen digital infrastructure voor ambitieuze Nederlandse bedrijven. 
              Van IT tot AI, wij transformeren uw business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+31301234567" 
                className="flex items-center gap-3 text-gray-400 hover:text-quantum-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>030-123 45 67</span>
              </a>
              <a 
                href="mailto:info@staartbeheer.nl" 
                className="flex items-center gap-3 text-gray-400 hover:text-quantum-blue transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@staartbeheer.nl</span>
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
                            © 2024 Start Beheer Solution's. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Made with ♥ by Ahmad&Mustafa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}