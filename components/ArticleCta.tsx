import Link from 'next/link'

/** Closing band shared by every article. */
export function ArticleCta() {
  return (
    <section className="sec sec-tight">
      <div className="wrap">
        <div className="cta on-dark depth reveal">
          <span className="eyebrow ctr">Be Relevant. Be Present.</span>
          <h2>Work with the network.</h2>
          <p>
            Reach a high-intent audience of traders, investors, and industry professionals.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Get in Touch
            </Link>
            <Link className="btn btn-ghost" href="/network">
              View the Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
