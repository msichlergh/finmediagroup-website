'use client'

import { useEffect, useRef } from 'react'

/**
 * Oversized watermark monogram. Inside `.panel-visual` it drifts slightly with
 * scroll — the parallax loop that used to live at the bottom of brand.js.
 */
export function BigMark({ parallax = false }: { parallax?: boolean }) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!parallax) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const update = () => {
      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const off = (center - innerHeight / 2) / innerHeight // roughly -0.5..0.5
      el.style.transform = `translate(0,${(-off * 36).toFixed(1)}px) rotate(${(off * 4).toFixed(2)}deg)`
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [parallax])

  return (
    <svg ref={ref} className="big-mark" style={{ color: '#fff' }}>
      <use href="#fmg-mark" />
    </svg>
  )
}
