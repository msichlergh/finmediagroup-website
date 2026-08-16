/**
 * Network brand logos, in one place.
 *
 * ---------------------------------------------------------------------------
 * INTERIM. These are hotlinked from each brand's own site because we do not
 * have the source files yet, and two of them are knocked-out marks that only
 * read against one background. `ink` records how each mark is drawn so the
 * theme layer can correct it:
 *
 *   'colour' — full-colour or self-contained. Never filtered. The goal state.
 *   'dark'   — dark mark on transparent. Inverted in the dark theme.
 *   'light'  — light mark on transparent. Inverted in the light theme.
 *
 * WHEN THE REAL ASSETS ARRIVE: drop the SVGs in public/brands/, point `src` at
 * them, set every `ink` to 'colour', and the filter rules below stop applying.
 * Nothing outside this file needs to change.
 * ---------------------------------------------------------------------------
 */

export type BrandKey = 'funded-trading' | 'my-trading-reviews' | 'finpr' | 'daily-fx-wire'

type BrandLogoSpec = {
  name: string
  href: string
  src: string
  ink: 'colour' | 'dark' | 'light'
  /** rendered width in px; the mark keeps its own aspect ratio */
  width: number
}

export const BRAND_LOGOS: Record<BrandKey, BrandLogoSpec> = {
  'funded-trading': {
    name: 'Funded Trading',
    href: 'https://fundedtrading.com',
    src: 'https://fundedtrading.com/wp-content/uploads/2025/10/Layer_1.svg',
    // white wordmark + teal icon: invisible on a light ground. 'light' at least
    // renders it legibly (as solid black) until the real asset lands.
    ink: 'light',
    width: 58,
  },
  'my-trading-reviews': {
    name: 'MyTradingReviews',
    href: 'https://www.mytradingreviews.com',
    // A favicon with an opaque dark background baked into the pixels. No
    // filter fixes that — it renders as a dark tile on the light theme until
    // the real mark arrives. Highest-priority asset to replace.
    src: 'https://www.mytradingreviews.com/favicon.ico?favicon.0c6k0klp82iep.ico',
    ink: 'colour',
    width: 40,
  },
  finpr: {
    name: 'FinPR',
    href: 'https://finpr.com',
    src: 'https://finpr.com/wp-content/uploads/2024/10/cropped-FinPR-Branding-Update-02.webp',
    ink: 'dark',
    width: 58,
  },
  'daily-fx-wire': {
    name: 'Daily FX Wire',
    href: 'https://dailyfxwire.com',
    src: 'https://dailyfxwire.com/wp-content/uploads/2024/06/DailyFXWire-Logo-FIX-08.png',
    ink: 'light',
    width: 58,
  },
}

export function BrandLogo({ brand, width }: { brand: BrandKey; width?: number }) {
  const { src, name, ink, width: specWidth } = BRAND_LOGOS[brand]
  const w = width ?? specWidth
  return (
    // eslint-disable-next-line @next/next/no-img-element -- third-party origins we do not control
    <img
      className="brand-logo"
      data-ink={ink}
      src={src}
      alt={name}
      style={{ width: `${w}px` }}
    />
  )
}

/**
 * Square tile holding a brand mark.
 *
 * Three of the four sources are wordmarks rather than square icon marks, so
 * they sit thin inside a square. A proper icon-only lockup per brand is what
 * this wants — see the note at the top of this file.
 */
export function BrandTile({ brand }: { brand: BrandKey }) {
  return (
    <span className="brand-tile" aria-hidden="true">
      <BrandLogo brand={brand} width={26} />
    </span>
  )
}
