'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * Homepage hub-and-spoke diagram. The geometry that buildHub() computed at
 * runtime is derived here instead, so the nodes and edges are in the server
 * HTML; only the travelling pulses still need an effect.
 */

const VB = 760
const CENTER = VB / 2
const RADIUS = 300
const START_ANGLE = -90
const HUB_GAP = 58 // edge starts this far out from the centre node
const SPOKE_GAP = 38 // ...and stops this far short of the spoke

type Spoke = {
  label: string
  href?: string
  img?: { src: string; alt: string; style: CSSProperties }
  soon?: boolean
}

const SPOKES: Spoke[] = [
  {
    label: 'Funded Trading',
    href: 'https://fundedtrading.com',
    img: {
      src: 'https://fundedtrading.com/wp-content/uploads/2025/10/Layer_1.svg',
      alt: 'Funded Trading',
      style: { width: '58px', height: 'auto', objectFit: 'contain' },
    },
  },
  {
    label: 'My Trading Reviews',
    href: 'https://www.mytradingreviews.com',
    img: {
      src: 'https://www.mytradingreviews.com/favicon.ico?favicon.0c6k0klp82iep.ico',
      alt: 'My Trading Reviews',
      style: { width: '64px', height: 'auto', objectFit: 'contain', mixBlendMode: 'screen' },
    },
  },
  {
    label: 'FinPR',
    href: 'https://finpr.com',
    img: {
      src: 'https://finpr.com/wp-content/uploads/2024/10/cropped-FinPR-Branding-Update-02.webp',
      alt: 'FinPR',
      style: { width: '58px', height: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' },
    },
  },
  {
    label: 'Daily FX Wire',
    href: 'https://dailyfxwire.com',
    img: {
      src: 'https://dailyfxwire.com/wp-content/uploads/2024/06/DailyFXWire-Logo-FIX-08.png',
      alt: 'Daily FX Wire',
      style: { width: '58px', height: 'auto', objectFit: 'contain' },
    },
  },
  { label: 'More coming', soon: true },
]

const GEOMETRY = SPOKES.map((spoke, i) => {
  const angle = ((START_ANGLE + i * (360 / SPOKES.length)) * Math.PI) / 180
  const x = CENTER + RADIUS * Math.cos(angle)
  const y = CENTER + RADIUS * Math.sin(angle)

  const dx = x - CENTER
  const dy = y - CENTER
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len

  const x1 = CENTER + ux * HUB_GAP
  const y1 = CENTER + uy * HUB_GAP
  const x2 = x - ux * SPOKE_GAP
  const y2 = y - uy * SPOKE_GAP

  return {
    spoke,
    left: `${(x / VB) * 100}%`,
    top: `${(y / VB) * 100}%`,
    nodeDelay: `${(0.9 + i * 0.07).toFixed(2)}s`,
    edgeDelay: `${(0.75 + i * 0.07).toFixed(2)}s`,
    x1,
    y1,
    x2,
    y2,
    segLen: Math.hypot(x2 - x1, y2 - y1),
    pulseDuration: 2600 + i * 120,
    pulseDelay: 1600 + i * 120,
  }
})

export function HubGraphic() {
  const [hovered, setHovered] = useState<number | null>(null)
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timers: ReturnType<typeof setTimeout>[] = []
    const animations: Animation[] = []

    GEOMETRY.forEach((g, i) => {
      const pulse = pulseRefs.current[i]
      if (!pulse) return
      timers.push(
        setTimeout(() => {
          animations.push(
            pulse.animate(
              [
                { transform: `translate(${g.x1}px,${g.y1}px)`, opacity: 0, offset: 0 },
                { opacity: 0.9, offset: 0.15 },
                { opacity: 0.9, offset: 0.85 },
                { transform: `translate(${g.x2}px,${g.y2}px)`, opacity: 0, offset: 1 },
              ],
              { duration: g.pulseDuration, iterations: Infinity, easing: 'linear' }
            )
          )
        }, g.pulseDelay)
      )
    })

    return () => {
      timers.forEach(clearTimeout)
      animations.forEach((a) => a.cancel())
    }
  }, [])

  return (
    <div className="hub" id="hub">
      <svg className="links-svg" viewBox={`0 0 ${VB} ${VB}`} id="edges">
        {GEOMETRY.map((g, i) => (
          <Fragment key={i}>
            <line
              className="edge"
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              style={{ ['--len' as string]: g.segLen, animationDelay: g.edgeDelay }}
            />
            <line
              className="edge glow"
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              style={{
                ['--len' as string]: g.segLen,
                animation: 'none',
                transition: 'opacity .6s',
                opacity: hovered === i ? 1 : 0,
              }}
            />
            <circle
              ref={(el) => {
                pulseRefs.current[i] = el
              }}
              className="pulse"
              r="2.4"
            />
          </Fragment>
        ))}
      </svg>

      <div className="node center" style={{ left: '50%', top: '50%' }}>
        <div className="ring">
          <svg style={{ color: '#fff' }}>
            <use href="#fmg-mark" />
          </svg>
        </div>
        <div className="lbl">FinMedia Group</div>
      </div>

      {GEOMETRY.map((g, i) => {
        const { spoke } = g
        const style: CSSProperties = {
          left: g.left,
          top: g.top,
          animationDelay: g.nodeDelay,
        }
        const inner = (
          <>
            <div className="ring">
              {spoke.soon ? (
                <span className="plus">+</span>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- third-party brand logos on origins we do not control
                <img src={spoke.img!.src} alt={spoke.img!.alt} style={spoke.img!.style} />
              )}
            </div>
            <div className="lbl">{spoke.label}</div>
          </>
        )

        const handlers = {
          onMouseEnter: () => setHovered(i),
          onMouseLeave: () => setHovered(null),
          onFocus: () => setHovered(i),
          onBlur: () => setHovered(null),
        }

        return spoke.href ? (
          <a
            key={i}
            href={spoke.href}
            className="node spoke"
            style={style}
            target="_blank"
            rel="noopener noreferrer"
            {...handlers}
          >
            {inner}
          </a>
        ) : (
          <div key={i} className="node spoke node-soon" style={style} {...handlers}>
            {inner}
          </div>
        )
      })}
    </div>
  )
}
