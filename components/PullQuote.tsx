import { Byline } from './TeamSection'
import { LEADERSHIP } from '@/lib/team'

/**
 * Standalone pull quote band.
 *
 * The quote is the one already published in the launch announcement and on the
 * About page — I am not writing new words and attributing them to a real
 * person. Swap `text` for a homepage-specific line when there is one.
 */
export function PullQuote({
  eyebrow = "In the CEO's Words",
  text = "We've stopped chasing the industry narrative and started building the digital destinations that drive it.",
  member = LEADERSHIP[0],
}: {
  eyebrow?: string
  text?: string
  member?: (typeof LEADERSHIP)[number]
}) {
  return (
    <section className="sec sec-tight">
      <div className="wrap">
        <figure className="pullquote reveal">
          <span className="eyebrow ctr">{eyebrow}</span>
          <blockquote>&ldquo;{text}&rdquo;</blockquote>
          <figcaption>
            <Byline member={member} />
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
