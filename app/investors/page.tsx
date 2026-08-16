import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { GrowthCurve } from '@/components/GrowthCurve'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "Investors",
  description: "A profitable, owned-media network for finance and trading, built to scale. Selectively open to strategic investors and partners.",
  alternates: { canonical: "/investors" },
  openGraph: {
    title: "Investors — FinMedia Group",
    description: "A profitable, owned-media network for finance and trading, built to scale. Selectively open to strategic investors and partners.",
    url: "/investors",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Investors
          </span>
          <h1>
            A profitable media network, built to scale.
          </h1>
          <p className="lead">
            FinMedia Group owns the audience, the infrastructure, and the brands the trading and finance industry relies on. We&apos;ve grown from a recognised PR agency into a multi-brand authority network — and we&apos;re selectively open to partners who can help us scale faster.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:investors@finmediagroup.com">
              Request Information
            </a>
            <Link className="btn btn-ghost" href="/about">
              Our Story
            </Link>
          </div>
        </div>
      </section>
      <section className="sec-sm" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <GrowthCurve />
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              The Thesis
            </span>
            <h2>
              Why owned media wins.
            </h2>
            <p>
              The industry is crowded with firms renting attention. We own the destinations — and owned audiences compound in value while rented ones reset to zero every campaign.
            </p>
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
                Owned, not rented
              </h3>
              <p>
                Our audience, brands, and data are assets we own outright — defensible, durable, and increasingly valuable as the network grows.
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
                Multiple revenue lines
              </h3>
              <p>
                Listings, awards, sponsorships, content, events, and advisory — diversified, recurring, and built on the same audience.
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
                A repeatable playbook
              </h3>
              <p>
                We&apos;ve launched and grown brands before. Each new property plugs into shared infrastructure, lowering the cost of the next launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="glow-top" />
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                The Opportunity
              </span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", marginTop: "18px" }}>
                Proven model.
                <br />
                Room to run.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "20px" }}>
                We&apos;ve validated the model: profitable brands, a growing owned audience, and partnerships across the industry. The opportunity now is acceleration — launching new properties, scaling the ones that work, and formalising high-margin lines like awards and events.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                We&apos;re open to the right strategic partners and investors who bring more than capital — distribution, expertise, or access that helps the network compound faster.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                Selective & Strategic
              </div>
              <div>
                <div className="vbig">
                  Open to the
                  <br />
                  right partner.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  Capital that comes with leverage — distribution, expertise, or access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta reveal">
            <div className="glow-top" style={{ borderRadius: "var(--r-lg)" }} />
            <BigMark />
            <span className="eyebrow ctr">
              Investors
            </span>
            <h2>
              Let&apos;s talk.
            </h2>
            <p>
              For detailed materials and a conversation under NDA, get in touch directly. We share specifics with serious, relevant partners.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:investors@finmediagroup.com">
                Request Information
              </a>
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
