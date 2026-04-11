/**
 * Centralized color class system for Tailwind-safe dynamic styling.
 *
 * IMPORTANT: All class strings must be complete and static for Tailwind purging.
 * Never use template literals like `border-${color}/20` — they get purged in production.
 */

export const serviceColors = {
  blue: {
    border: 'border-primary-blue/20',
    borderHover: 'hover:border-primary-blue/40',
    bg: 'bg-primary-blue/10',
    bgHover: 'hover:bg-primary-blue/20',
    text: 'text-primary-blue',
    btnBorder: 'border-primary-blue/30',
    badge: 'bg-primary-blue/10 text-primary-blue border-primary-blue/30',
  },
  violet: {
    border: 'border-primary-violet/20',
    borderHover: 'hover:border-primary-violet/40',
    bg: 'bg-primary-violet/10',
    bgHover: 'hover:bg-primary-violet/20',
    text: 'text-primary-violet',
    btnBorder: 'border-primary-violet/30',
    badge: 'bg-primary-violet/10 text-primary-violet border-primary-violet/30',
  },
  emerald: {
    border: 'border-primary-emerald/20',
    borderHover: 'hover:border-primary-emerald/40',
    bg: 'bg-primary-emerald/10',
    bgHover: 'hover:bg-primary-emerald/20',
    text: 'text-primary-emerald',
    btnBorder: 'border-primary-emerald/30',
    badge: 'bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30',
  },
  warm: {
    border: 'border-amber-500/20',
    borderHover: 'hover:border-amber-500/40',
    bg: 'bg-amber-500/10',
    bgHover: 'hover:bg-amber-500/20',
    text: 'text-amber-600',
    btnBorder: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
  },
} as const

export type ServiceColorKey = keyof typeof serviceColors
