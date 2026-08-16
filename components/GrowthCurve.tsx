'use client'

import { useEffect, useRef } from 'react'

/**
 * Investors trajectory chart. The draw/fade animations are pure CSS, gated on
 * a `.in` class that lands when the panel scrolls into view.
 */
export function GrowthCurve() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
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
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="growth reveal" id="growth" ref={ref}>
      <div className="growth-head">
        <span className="eyebrow">Trajectory</span>
        <div className="growth-cap">
          Owned audiences compound. The network&apos;s value grows with every brand, subscriber, and
          partnership we add.
        </div>
      </div>
      <svg
        className="growth-svg"
        viewBox="0 0 1000 360"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* currentColor comes from .growth-svg, so the fill follows the theme */}
          <linearGradient id="growthgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="1">
          <line x1="0" y1="90" x2="1000" y2="90" />
          <line x1="0" y1="180" x2="1000" y2="180" />
          <line x1="0" y1="270" x2="1000" y2="270" />
        </g>
        {/* area fill under curve */}
        <path
          className="growth-area"
          d="M0 340 C 180 320, 320 300, 460 235 S 720 120, 1000 40 L 1000 360 L 0 360 Z"
        />
        {/* the climbing line */}
        <path className="growth-line" d="M0 340 C 180 320, 320 300, 460 235 S 720 120, 1000 40" />
        {/* leading glow point */}
        <circle className="growth-dot" cx="1000" cy="40" r="6" />
      </svg>
      <div className="growth-axis">
        <span>Founded as FinPR</span>
        <span>Network today</span>
        <span>The opportunity ahead</span>
      </div>
    </div>
  )
}
