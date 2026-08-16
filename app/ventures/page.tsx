import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'

export const metadata: Metadata = {
  title: "Advisory & Ventures",
  description: "Go-to-market and growth advisory for finance companies — plus venture building, where we launch and back new businesses.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    title: "Advisory & Ventures — FinMedia Group",
    description: "Go-to-market and growth advisory for finance companies — plus venture building, where we launch and back new businesses.",
    url: "/ventures",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Advisory & Ventures
          </span>
          <h1>
            We don&apos;t just advise. We build.
          </h1>
          <p className="lead">
            We&apos;ve launched and scaled media brands, awards, and platforms across finance and trading. We bring that operating experience to companies in the space — as advisors, and as builders backing new ventures.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Work With Us
            </Link>
            <a className="btn btn-ghost" href="#advisory">
              What We Offer
            </a>
          </div>
        </div>
      </section>
      <section className="sec" id="advisory">
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head reveal">
            <span className="eyebrow">
              Advisory
            </span>
            <h2>
              Growth, built by operators.
            </h2>
            <p>
              Hands-on go-to-market and growth advisory for finance and trading companies — drawing on the same teams that run our own brands.
            </p>
          </div>
          <div className="caps">
            <div className="cap reveal">
              <div className="k">
                01
              </div>
              <h3>
                Go-To-Market & Brand
              </h3>
              <p>
                Positioning, brand, and launch strategy for new products and firms entering the trading and finance space.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                02
              </div>
              <h3>
                Content, SEO & Media
              </h3>
              <p>
                The content engine behind our own properties — SEO, editorial, video, and social — pointed at your growth.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                03
              </div>
              <h3>
                PR & Distribution
              </h3>
              <p>
                Press, partnerships, and distribution across the network to build visibility and credibility fast.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                04
              </div>
              <h3>
                Corporate & Setup
              </h3>
              <p>
                Incorporation, structuring, and operational setup support for companies establishing in new markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Venture Building
              </span>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "18px" }}>
                Conviction, with skin in the game.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "18px" }}>
                Some opportunities are worth more than advice. When we see a gap where independent media, recognition, or a platform can genuinely serve an audience, we launch it — investing our infrastructure, capital, and operating teams to build it from the ground up.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                It&apos;s how our own network was built, and how we partner with founders who want a builder, not just a backer.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark />
              <div className="vlabel">
                Launch · Operate · Scale
              </div>
              <div>
                <div className="vbig">
                  Build what
                  <br />
                  we believe in.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  From idea to live brand, using the engine that runs our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark textured reveal">
            <span className="eyebrow ctr">
              Partner With Us
            </span>
            <h2>
              Have a company to grow — or build?
            </h2>
            <p>
              Whether you need advisory firepower or a venture partner, let&apos;s talk about what we can build together.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Start a Conversation
              </Link>
              <Link className="btn btn-ghost" href="/about">
                About FinMedia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
