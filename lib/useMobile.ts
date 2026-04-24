'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true on touch / narrow viewports OR when user prefers reduced motion.
 * SSR-safe: returns false on server, then resolves on mount.
 *
 * Use this to short-circuit expensive infinite framer-motion animations
 * (large blur radial-gradients animating x/y/scale) which kill mobile GPUs.
 */
export function useReducedAmbient(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mqlMobile = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    const mqlReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mqlMobile.matches || mqlReduce.matches)
    update()
    mqlMobile.addEventListener('change', update)
    mqlReduce.addEventListener('change', update)
    return () => {
      mqlMobile.removeEventListener('change', update)
      mqlReduce.removeEventListener('change', update)
    }
  }, [])

  return reduced
}
