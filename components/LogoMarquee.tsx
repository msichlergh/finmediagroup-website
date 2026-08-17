import { BRAND_LOGOS, BrandLogo, type BrandKey } from './BrandLogo'

/**
 * Continuous logo strip.
 *
 * ---------------------------------------------------------------------------
 * Seeded with the network's own brands, because those are the only marks we
 * actually have. A "companies we work with" wall needs their logos and, in most
 * cases, their permission — and the site currently says partners are
 * "available on request" rather than naming them, so a public logo wall would
 * contradict that.
 *
 * To switch it to partners: add their marks to BRAND_LOGOS (or a parallel
 * PARTNER_LOGOS map) and pass them as `brands`. Nothing else changes.
 * ---------------------------------------------------------------------------
 *
 * The track is rendered twice and translated by half its width, which gives a
 * seamless loop with no JS. The copy is aria-hidden so a screen reader hears
 * the list once.
 */

const DEFAULT_BRANDS: BrandKey[] = [
  'funded-trading',
  'my-trading-reviews',
  'finpr',
  'daily-fx-wire',
]

export function LogoMarquee({
  label = 'The properties behind the network',
  brands = DEFAULT_BRANDS,
}: {
  label?: string
  brands?: BrandKey[]
}) {
  // repeat until the track is long enough that the loop is not obviously short
  const run = brands.length < 6 ? [...brands, ...brands, ...brands] : brands

  return (
    <section className="sec-sm logo-strip band-subtle">
      <div className="wrap">
        <p className="logo-strip-label">{label}</p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-run" aria-hidden={copy === 1 || undefined}>
              {run.map((brand, i) => (
                <li key={`${brand}-${i}`}>
                  <a
                    href={BRAND_LOGOS[brand].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={copy === 1 ? -1 : undefined}
                  >
                    <BrandLogo brand={brand} fit />
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
