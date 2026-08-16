import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { CountUp } from '@/components/CountUp'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: {absolute: "FinMedia Group — Be Relevant. Be Present."},
  description: "FinMedia Group launches, grows, and amplifies the financial media brands the industry trusts — four operative properties and growing, leading YouTube channels, the awards firms display, and the events where the industry meets.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FinMedia Group — Be Relevant. Be Present.",
    description: "FinMedia Group launches, grows, and amplifies the financial media brands the industry trusts — four operative properties and growing, leading YouTube channels, the awards firms display, and the events where the industry meets.",
    url: "/",
  },
}

// .home carries the compact section rhythm that lived on <body class="home">
export default function Page() {
  return (
    <div className="home">
      {/* Hero is one contained card, stacked: eyebrow, headline, copy, actions,
          then the figures beneath a rule. components/HubGraphic.tsx is kept if
          the network diagram earns a place lower down the page. */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-card">
            <div className="glow-top" />
            {/* The monogram holds the right of the card now the diagram is out —
                solid, not a watermark. */}
            <div className="hero-mark" aria-hidden="true">
              <Mark />
            </div>
            <span className="eyebrow">
              Media &amp; Services Group · Finance &amp; Trading
            </span>

            <h1>
              <span className="l">Be Relevant.</span>
              <span className="l">Be Present.</span>
            </h1>

            <p className="lead">
              FinMedia Group launches, grows, and amplifies the financial media brands the industry
              trusts. Four core properties today and more on the way — leading YouTube channels, the
              awards firms display, and the events where the industry meets, built by a team
              recognised across the space.
            </p>

            <div className="cta-row">
              <Link className="btn btn-primary" href="/network">
                Explore the Network
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Work With Us
              </Link>
            </div>

            <div className="hero-stats">
              <div className="s">
                <CountUp to={700} suffix="+" />
                <div className="kk">Brands Listed</div>
              </div>
              <div className="s">
                <CountUp to={50} suffix="K+" />
                <div className="kk">Email Subscribers</div>
              </div>
              <div className="s">
                <CountUp to={50} suffix="+" />
                <div className="kk">Partnerships</div>
              </div>
              <div className="s">
                <CountUp to={40} suffix="K+" />
                <div className="kk">Visitors / Mo</div>
              </div>
            </div>
          </div>
          <p className="hero-note">
            Quality over volume — a targeted, decision-stage audience of traders, investors, and
            industry professionals.
          </p>
        </div>
      </section>
      <section className="sec" id="caps">
        <div className="glow-top" />
        <div className="wrap">
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              What We Do
            </span>
            <h2>
              We launch, grow, and amplify.
            </h2>
            <p>
              Four capabilities that compound — we build the brands, earn the trust, gather the industry, and back the companies shaping where finance goes next.
            </p>
          </div>
          <div className="caps">
            <Link className="cap reveal" href="/network">
              <div className="k">
                01 — Media Network
              </div>
              <h3>
                Four brands, building more
              </h3>
              <p>
                Independent reviews, news, and PR across prop trading, brokerage, and forex — launched and grown in-house, with new media joining the network.
              </p>
              <span className="go">
                See the network
              </span>
            </Link>
            <Link className="cap reveal" href="/awards">
              <div className="k">
                02 — Awards & Recognition
              </div>
              <h3>
                The badges firms display
              </h3>
              <p>
                Industry awards and certifications credible enough that winners feature them on their booths, sites, and campaigns. Recognition that&apos;s earned, not bought.
              </p>
              <span className="go">
                Explore awards
              </span>
            </Link>
            <Link className="cap reveal" href="/expos">
              <div className="k">
                03 — Expos & Events
              </div>
              <h3>
                Where the industry meets
              </h3>
              <p>
                We stage the expos, ceremonies, and gatherings that bring traders, firms, and partners face to face — the in-person layer of the network.
              </p>
              <span className="go">
                See events
              </span>
            </Link>
            <Link className="cap reveal" href="/ventures">
              <div className="k">
                04 — Advisory & Ventures
              </div>
              <h3>
                We build, not just advise
              </h3>
              <p>
                Go-to-market and growth advisory for finance companies — and venture building, where we launch and back new businesses in the space.
              </p>
              <span className="go">
                Advisory & ventures
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Why It Works
              </span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", marginTop: "18px" }}>
                Relevance and presence,
                <br />
                working together.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "20px" }}>
                <b style={{ fontWeight: "600" }}>
                  Be Relevant.
                </b>{' '}
                Independent reviews, an expert team, and awards the industry respects — the credibility that makes audiences listen and firms want to be associated with us.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                <b style={{ fontWeight: "600" }}>
                  Be Present.
                </b>{' '}
                A growing network of brands, leading YouTube channels, newsletters, and a seat at the industry&apos;s biggest events — so you show up everywhere your audience already looks.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                Most can offer one. We&apos;re built to deliver both — and that&apos;s what compounds.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark />
              <div className="vlabel">
                The brand promise
              </div>
              <div>
                <div className="vbig">
                  Be Relevant.
                  <br />
                  Be Present.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  Trusted enough to matter. Everywhere enough to be seen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              Trusted Across The Industry
            </span>
            <h2>
              The industry shows it.
            </h2>
            <p>
              Recognition isn&apos;t something we claim — it&apos;s something our partners put on display.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <span className="num">
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Displayed by leading firms
              </h3>
              <p>
                Major prop firms feature the awards they&apos;ve won from our brands on their expo booths and marketing — front and centre, where every trader sees them.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Named as partners
              </h3>
              <p>
                Technology providers and platforms across the space list our brands as official partners on their own websites — a trust signal we didn&apos;t have to ask for.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
              </span>
              <div className="ico">
                <Mark width={22} height={22} />
              </div>
              <h3>
                Official media partners
              </h3>
              <p>
                Our brands are chosen as official media partners for the industry&apos;s flagship trading expos — covering, amplifying, and helping shape the events that matter.
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "var(--text-faint)", fontSize: "13px", marginTop: "24px" }}>
            Specific partners and named placements available on request.
          </p>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              Our Brands
            </span>
            <h2>
              The media properties we build and back.
            </h2>
          </div>
          <div className="pf-grid">
            <Link className="card reveal" href="/network">
              <h3>
                Funded Trading
              </h3>
              <div className="url">
                fundedtrading.com
              </div>
              <p>
                The go-to review and community hub for proprietary trading — fair, in-depth evaluations that help traders choose the right funded program.
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
            </Link>
            <Link className="card reveal" href="/network">
              <h3>
                My Trading Reviews
              </h3>
              <div className="url">
                mytradingreviews.com
              </div>
              <p>
                Unbiased reviews of brokers, platforms, courses, and algorithmic systems — a trusted second opinion for retail traders and investors.
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
            </Link>
            <Link className="card reveal" href="/network">
              <h3>
                Daily FX Wire
              </h3>
              <div className="url">
                dailyfxwire.com
              </div>
              <p>
                An automated newswire for forex — industry news, company reviews, and press-release distribution at the speed the FX market moves.
              </p>
              <div className="chvals">
                <span className="chip">
                  News
                </span>
                <span className="chip">
                  PR
                </span>
                <span className="chip">
                  LinkedIn
                </span>
              </div>
            </Link>
            <Link className="card reveal" href="/network">
              <h3>
                FinPR
              </h3>
              <div className="url">
                finpr.com
              </div>
              <p>
                Where it all began — one of the most recognised names in fintech PR, and the authority arm of the network opening doors across global media.
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
            </Link>
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
          <div className="cta on-dark depth reveal">
            <div className="glow-top" style={{ borderRadius: "var(--r-lg)" }} />
            <BigMark />
            <span className="eyebrow ctr">
              Let&apos;s Work Together
            </span>
            <h2>
              Reach the people who move finance.
            </h2>
            <p>
              Whether you&apos;re a firm seeking exposure, a partner looking to collaborate, or a founder with a media property — we want to hear from you.
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
    </div>
  )
}
