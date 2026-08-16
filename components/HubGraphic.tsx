'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { BRAND_LOGOS, BrandLogo, type BrandKey } from './BrandLogo'

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

type Spoke =
  | { brand: BrandKey; soon?: false }
  | { label: string; soon: true }

/** Logo artwork and per-theme handling live in components/BrandLogo.tsx. */
const SPOKES: Spoke[] = [
  { brand: 'funded-trading' },
  { brand: 'my-trading-reviews' },
  { brand: 'finpr' },
  { brand: 'daily-fx-wire' },
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
          <svg>
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
        const handlers = {
          onMouseEnter: () => setHovered(i),
          onMouseLeave: () => setHovered(null),
          onFocus: () => setHovered(i),
          onBlur: () => setHovered(null),
        }

        if (spoke.soon) {
          return (
            <div key={i} className="node spoke node-soon" style={style} {...handlers}>
              <div className="ring">
                <span className="plus">+</span>
              </div>
              <div className="lbl">{spoke.label}</div>
            </div>
          )
        }

        const { name, href } = BRAND_LOGOS[spoke.brand]
        return (
          <a
            key={i}
            href={href}
            className="node spoke"
            style={style}
            target="_blank"
            rel="noopener noreferrer"
            {...handlers}
          >
            <div className="ring">
              <BrandLogo brand={spoke.brand} />
            </div>
            <div className="lbl">{name}</div>
          </a>
        )
      })}
    </div>
  )
}
