'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Adds `.in` to every `.reveal` element as it scrolls into view. Mounted once in
 * the root layout and re-scanned on navigation, since App Router swaps page
 * content without a reload.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'))
    if (!targets.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      },
      { threshold: 0.1 }
    )

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 0.08}s`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [pathname])

  return null
}
