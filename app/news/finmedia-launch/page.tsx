import type { Metadata } from 'next'
import Link from 'next/link'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "FinPR Evolves into FinMedia Group — Press",
  description: "FinPR officially transitions into FinMedia Group, a finance and trading media and authority network focused on owned audiences.",
  alternates: { canonical: "/news/finmedia-launch" },
  openGraph: {
    title: "FinPR Evolves into FinMedia Group — Press",
    description: "FinPR officially transitions into FinMedia Group, a finance and trading media and authority network focused on owned audiences.",
    url: "/news/finmedia-launch",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "30px" }}>
        <div className="glow-top" />
        <div className="wrap">
          <article className="article reveal">
            <div className="a-meta">
              <span className="tagpill">
                Announcement
              </span>
              <span>
                February 2026
              </span>
              <span>
                3 min read
              </span>
            </div>
            <h1>
              FinPR Evolves into FinMedia Group
            </h1>
            <p className="a-lead">
              FinPR, a recognised name in fintech public relations, officially transitions into FinMedia Group — a finance and trading media and authority network focused on owned audiences and performance media.
            </p>
          </article>
        </div>
      </section>
      <section style={{ paddingBottom: "90px", position: "relative", zIndex: "1" }}>
        <div className="wrap">
          <article className="article">
            <div className="a-hero">
              <Mark />
            </div>
            <div className="article-body">
              <p>
                For years, FinMedia Group operated as FinPR — helping financial brands find their voice across the world&apos;s media. As one of the most recognised names in fintech PR, the agency built deep relationships and a reputation for results across prop trading, brokerage, and fintech.
              </p>
              <p>
                But a clear pattern emerged: the most durable value wasn&apos;t in placing brands on someone else&apos;s platform — it was in owning the destinations where the conversations actually happen. So the company began building them.
              </p>
              <h2>
                From promotion to presence
              </h2>
              <p>
                The transition marks a deliberate shift away from traditional service-based PR toward a model of audience ownership. By building and scaling a network of authoritative platforms — including FundedTrading.com and MyTradingReviews.com — FinMedia Group now provides a direct bridge between financial companies and high-intent audiences.
              </p>
              <blockquote>
                We&apos;ve stopped chasing the industry narrative and started building the digital destinations that drive it.
                <cite>
                  Karol Cempa, CEO, FinMedia Group
                </cite>
              </blockquote>
              <p>
                The platforms aren&apos;t just informational; they&apos;re built to drive conversions and transactions for partners — turning trusted content into measurable outcomes.
              </p>
              <h2>
                A performance-driven network
              </h2>
              <p>
                FinMedia Group&apos;s focus is the creation of high-trust environments that guide users from research to action. The network&apos;s offering is built around:
              </p>
              <ul>
                <li>
                  <b>
                    Owned authority
                  </b>{' '}
                  — branded awards, coverage, and deep-dive reviews that set the industry standard.
                </li>
                <li>
                  <b>
                    Transaction-focused placements
                  </b>{' '}
                  — premium web and email placements designed to move users through the funnel.
                </li>
                <li>
                  <b>
                    Lead-generation ecosystems
                  </b>{' '}
                  — campaigns and communities powered by proprietary first-party data.
                </li>
              </ul>
              <h2>
                Continuity and leadership
              </h2>
              <p>
                The transition is led by Karol Cempa, who moves from CEO of FinPR to lead FinMedia Group — ensuring the strategic expertise and industry relationships built over the years remain at the core of the network.
              </p>
              <p>
                For financial brands, FinMedia Group represents a more efficient way to reach active traders and investors: directly, through trusted owned platforms, rather than through traditional media gatekeepers.
              </p>
              <div className="a-share">
                <span>
                  Share:
                </span>
                <a href="#">
                  LinkedIn
                </a>
                <a href="#">
                  X
                </a>
                <a href="mailto:press@finmediagroup.com">
                  Press enquiries
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark depth reveal">
            <span className="eyebrow ctr">
              Be Relevant. Be Present.
            </span>
            <h2>
              Work with the network.
            </h2>
            <p>
              Reach a high-intent audience of traders, investors, and industry professionals.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Get in Touch
              </Link>
              <Link className="btn btn-ghost" href="/news">
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
