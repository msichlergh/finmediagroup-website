import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of FinMedia Group websites and services.",
  alternates: { canonical: '/terms' },
  // Not useful in search until it carries the real policy.
  robots: { index: false, follow: true },
}

/**
 * PLACEHOLDER. The route exists so the footer does not link to a 404, and so
 * the page is ready to receive the real document.
 *
 * The body below is deliberately not drafted — policy text is a legal
 * document, not copy to be invented. Replace it with the reviewed version.
 */
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p className="lead">The terms that govern your use of FinMedia Group websites, publications, and services.</p>
        </div>
      </section>

      <section className="sec sec-tight">
        <div className="wrap">
          <div className="article article-body">
            <p>
              This policy is being finalised and will be published here. If you need it
              before then, or have a question about how we handle your data, contact{' '}
              <a
                href="mailto:hello@finmediagroup.com"
                style={{ color: 'var(--text)', borderBottom: '1px solid var(--border-strong)' }}
              >
                hello@finmediagroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
