import type { Metadata } from 'next'
import Link from 'next/link'
import { CountUp } from '@/components/CountUp'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "The Network",
  description: "Operative finance and trading media brands — Funded Trading, MyTradingReviews, FinPR, and Daily FX Wire — launched, grown, and amplified in-house, with more in development.",
  alternates: { canonical: "/network" },
  openGraph: {
    title: "The Network — FinMedia Group",
    description: "Operative finance and trading media brands — Funded Trading, MyTradingReviews, FinPR, and Daily FX Wire — launched, grown, and amplified in-house, with more in development.",
    url: "/network",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            The Network
          </span>
          <h1>
            Brands we launched. Audiences we grew.
          </h1>
          <p className="lead">
            Four operative properties today across prop trading, brokerage, forex, and PR — each launched, grown, and amplified in-house, from first article to flagship YouTube channel — with more media in development.
          </p>
        </div>
      </section>
      <section className="sec-sm">
        <div className="wrap">
          <div className="stats reveal">
            <div className="s">
              <CountUp to={700} suffix="+" />
              <div className="kk">
                Brands Listed
              </div>
            </div>
            <div className="s">
              <CountUp to={50} suffix="K+" />
              <div className="kk">
                Email Subscribers
              </div>
            </div>
            <div className="s">
              <CountUp to={40} suffix="K+" />
              <div className="kk">
                High-Intent Monthly Visitors
              </div>
            </div>
            <div className="s">
              <div className="n">
                4
                <span style={{ fontSize: ".5em", fontWeight: "400", color: "var(--text-faint)" }}>
                  +
                </span>
              </div>
              <div className="kk">
                Brands & Growing
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              Flagship Brands
            </span>
            <h2>
              The platforms that lead the network.
            </h2>
            <p>
              Our most established, highest-converting properties — where the audience is deepest and the partnerships run strongest.
            </p>
          </div>
          <div className="flagships">
            <a className="fcard reveal" href="#">
              <div className="fc-top">
                <div className="fc-ico">
                  <Mark />
                </div>
                <span className="fc-tag">
                  Most Converting
                </span>
              </div>
              <h3>
                Funded Trading
              </h3>
              <div className="url">
                fundedtrading.com
              </div>
              <p>
                Our flagship and highest-converting platform — the go-to review and community hub for proprietary trading. In-depth, fair evaluations of funded programs, backed by YouTube, a podcast, an active community, and the Funded Trading Awards.
              </p>
              <div className="chvals">
                <span className="chip">
                  YouTube
                </span>
                <span className="chip">
                  Podcast
                </span>
                <span className="chip">
                  Community
                </span>
                <span className="chip">
                  Awards
                </span>
              </div>
            </a>
            <a className="fcard reveal" href="#">
              <div className="fc-top">
                <div className="fc-ico">
                  <Mark />
                </div>
                <span className="fc-tag">
                  Brokerage
                </span>
              </div>
              <h3>
                My Trading Reviews
              </h3>
              <div className="url">
                mytradingreviews.com
              </div>
              <p>
                The brokerage counterpart to Funded Trading — unbiased reviews of brokers, platforms, courses, and trading systems. Built the same way, brick by brick, into a trusted second opinion for retail traders and investors.
              </p>
              <div className="chvals">
                <span className="chip">
                  Reviews
                </span>
                <span className="chip">
                  YouTube
                </span>
                <span className="chip">
                  SEO
                </span>
              </div>
            </a>
            <a className="fcard reveal" href="#">
              <div className="fc-top">
                <div className="fc-ico">
                  <Mark />
                </div>
                <span className="fc-tag">
                  PR & Authority
                </span>
              </div>
              <h3>
                FinPR
              </h3>
              <div className="url">
                finpr.com
              </div>
              <p>
                Where it all began — and still one of the most recognised names in fintech PR. FinPR remains the authority arm of the network, opening doors across global media and lending the relationships that power everything we build.
              </p>
              <div className="chvals">
                <span className="chip">
                  PR
                </span>
                <span className="chip">
                  Authority
                </span>
                <span className="chip">
                  Media Relations
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head reveal">
            <span className="eyebrow">
              The Wider Network
            </span>
            <h2>
              Coverage where it counts — and growing.
            </h2>
          </div>
          <div className="pf-grid">
            <a className="card reveal" href="#">
              <h3>
                Daily FX Wire
              </h3>
              <div className="url">
                dailyfxwire.com
              </div>
              <p>
                A dedicated newswire for the forex industry — fast, automated coverage of the moves, launches, and announcements that matter to FX traders and brokers.
              </p>
              <div className="chvals">
                <span className="chip">
                  News
                </span>
                <span className="chip">
                  PR Distribution
                </span>
                <span className="chip">
                  LinkedIn
                </span>
              </div>
            </a>
            <div className="card is-soon reveal" style={{ justifyContent: "center", alignItems: "flex-start", background: "var(--bg-subtle)" }}>
              <div className="top">
                <span className="cat soon">
                  In Development
                </span>
              </div>
              <h3 style={{ fontWeight: "300" }}>
                More media,
                <br />
                on the way.
              </h3>
              <p style={{ flex: "none" }}>
                We&apos;re building and preparing new properties across the finance and trading space — joining the network as they go live.
              </p>
              <Link href="/contact" style={{ marginTop: "18px", fontSize: "13px", fontWeight: "600", borderBottom: "1px solid var(--border-strong)", paddingBottom: "3px" }}>
                Partner with us
              </Link>
            </div>
            <div className="card reveal" style={{ justifyContent: "center", alignItems: "flex-start", background: "var(--bg-subtle)" }}>
              <div className="cat" style={{ marginBottom: "14px" }}>
                Always Building
              </div>
              <h3 style={{ fontWeight: "300" }}>
                More brands
                <br />
                joining the network.
              </h3>
              <p style={{ flex: "none" }}>
                We launch and acquire properties where independent media can genuinely serve an audience.
              </p>
              <Link href="/contact" style={{ marginTop: "18px", fontSize: "13px", fontWeight: "600", borderBottom: "1px solid var(--border-strong)", paddingBottom: "3px" }}>
                Pitch a partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              Why It Works
            </span>
            <h2>
              More than a publisher.
            </h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <span className="num">
                01
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Independent Editorial
              </h3>
              <p>
                Honest reviews, news, and analysis traders actually trust — the foundation every brand is built on.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
                02
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Shared Infrastructure
              </h3>
              <p>
                One operating platform behind every brand — content, video, web, and social — so each property scales without rebuilding the engine.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
                03
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Compounding Reach
              </h3>
              <p>
                Distribution across web, YouTube, newsletters, and communities — audiences that grow each other and the network.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark depth textured reveal">
            <span className="eyebrow ctr">
              Get Listed
            </span>
            <h2>
              Put your brand in front of the network.
            </h2>
            <p>
              Listings, sponsorships, content, and PR across every property — targeted where intent runs highest.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Start a Conversation
              </Link>
              <Link className="btn btn-ghost" href="/awards">
                See Our Awards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
