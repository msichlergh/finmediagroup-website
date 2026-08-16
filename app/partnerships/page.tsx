import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Partner with FinMedia Group: agency resellers, strategic partners, technology providers, and media partnerships across trading and finance.",
  alternates: { canonical: "/partnerships" },
  openGraph: {
    title: "Partnerships — FinMedia Group",
    description: "Partner with FinMedia Group: agency resellers, strategic partners, technology providers, and media partnerships across trading and finance.",
    url: "/partnerships",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Partnerships
          </span>
          <h1>
            Grow with the network.
          </h1>
          <p className="lead">
            From agencies reselling our products to technology providers, strategic partners, and media collaborations — we build relationships that extend reach for everyone involved. If your audience or offering complements ours, let&apos;s talk.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:partners@finmediagroup.com">
              Become a Partner
            </a>
            <Link className="btn btn-ghost" href="/network">
              See the Network
            </Link>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              Ways to Partner
            </span>
            <h2>
              Four ways we work together.
            </h2>
            <p>
              Different partners, one goal — extending trusted reach across the trading and finance industry.
            </p>
          </div>
          <div className="caps">
            <div className="cap reveal">
              <div className="k">
                01 — Resellers & Agencies
              </div>
              <h3>
                Sell our products
              </h3>
              <p>
                Marketing and PR agencies resell FinMedia Group listings, awards, and placements within their own portfolios — adding a trusted media offering without building it themselves.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                02 — Strategic Partners
              </div>
              <h3>
                Grow together
              </h3>
              <p>
                Long-term partners who introduce clients, co-develop offerings, or open new markets — sharing in the growth they help create across the network.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                03 — Technology Providers
              </div>
              <h3>
                Recommended & integrated
              </h3>
              <p>
                Platforms and tech providers across the industry recommend our brands and integrate with our ecosystem — a trusted name to point their clients toward.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                04 — Media Partners
              </div>
              <h3>
                Cover the moments that matter
              </h3>
              <p>
                We partner with the industry&apos;s flagship events and publications as official media partners — amplifying the moments that bring the sector together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="glow-top" />
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Media Partnerships
              </span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", marginTop: "18px" }}>
                Official media partner to the industry&apos;s biggest stages.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "20px" }}>
                Our brands are chosen as official media partners for the flagship expos and events where the trading industry gathers — covering, amplifying, and helping shape the conversation before, during, and after the doors open.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                For event organisers, that means a media partner with a real, engaged audience already watching. For our audience, it means front-row access to the moments that matter.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark />
              <div className="vlabel">
                Trusted to amplify
              </div>
              <div>
                <div className="vbig">
                  On the
                  <br />
                  official roster.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  Chosen by the events the industry actually attends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              Why Partner With Us
            </span>
            <h2>
              A name the industry already trusts.
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
                Real, owned audience
              </h3>
              <p>
                Not borrowed reach — a high-intent audience of traders, investors, and professionals we own across our network of brands.
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
                Established credibility
              </h3>
              <p>
                Recommended by leading technology providers and chosen as a media partner by the industry&apos;s biggest events.
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
                Transparent & aligned
              </h3>
              <p>
                Clear terms, tracked results, and partnerships structured so everyone grows together — built to last, not to churn.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark depth textured reveal">
            <span className="eyebrow ctr">
              Partnerships
            </span>
            <h2>
              Let&apos;s build something together.
            </h2>
            <p>
              Agency, strategic partner, technology provider, or event organiser — tell us how you&apos;d like to work with the network.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:partners@finmediagroup.com">
                Become a Partner
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
