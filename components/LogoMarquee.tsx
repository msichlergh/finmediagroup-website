import { PARTNERS, type Partner } from '@/lib/partners'

/**
 * Continuous partner/client logo strip.
 *
 * Renders nothing while lib/partners.ts is empty — an empty logo wall says
 * less than no logo wall, and the alternative (filling it with FinMedia's own
 * brands) would present portfolio properties as clients.
 *
 * The track is rendered twice and translated by half its width, which gives a
 * seamless loop with no JS. The second copy is aria-hidden and untabbable, so
 * the list is announced and traversed once.
 */
export function LogoMarquee({
  label = 'Trusted by the firms and platforms we work with',
  partners = PARTNERS,
}: {
  label?: string
  partners?: Partner[]
}) {
  if (partners.length === 0) return null

  // repeat short lists so the loop is not obviously a handful of items
  const run = partners.length < 6 ? [...partners, ...partners, ...partners] : partners

  return (
    <section className="sec-sm logo-strip band-subtle">
      <div className="wrap">
        <p className="logo-strip-label">{label}</p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-run" aria-hidden={copy === 1 || undefined}>
              {run.map((partner, i) => {
                const mark = (
                  // eslint-disable-next-line @next/next/no-img-element -- third-party marks, sized by CSS
                  <img
                    className="brand-logo"
                    data-ink={partner.ink ?? 'colour'}
                    src={partner.logo}
                    alt={partner.name}
                  />
                )
                return (
                  <li key={`${partner.name}-${i}`}>
                    {partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={copy === 1 ? -1 : undefined}
                      >
                        {mark}
                      </a>
                    ) : (
                      <span>{mark}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
