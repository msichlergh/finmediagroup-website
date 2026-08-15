'use client'

import { useEffect, useRef } from 'react'

const DURATION = 1100

/**
 * Stat number that counts up from zero the first time it scrolls into view.
 * Renders the final value on the server so the figure is in the HTML for
 * crawlers and for anyone with JS off.
 */
export function CountUp({
  to,
  prefix = '',
  suffix = '',
}: {
  to: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const final = `${prefix}${to}${suffix}`
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = final
      return
    }

    el.textContent = `${prefix}0${suffix}`

    const run = () => {
      const t0 = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - t0) / DURATION, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const raw = to * eased
        const val = to % 1 === 0 ? Math.round(raw) : Math.round(raw * 10) / 10
        el.textContent = `${prefix}${val}${suffix}`
        if (p < 1) requestAnimationFrame(step)
        else el.textContent = final
      }
      requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          io.unobserve(e.target)
          run()
        }
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, prefix, suffix])

  return (
    <div className="n" ref={ref}>
      {prefix}
      {to}
      {suffix}
    </div>
  )
}
