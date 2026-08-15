import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { CountUp } from '@/components/CountUp'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "About",
  description: "From fintech PR agency to media and authority network: the story of FinMedia Group, built by operators who know the industry.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — FinMedia Group",
    description: "From fintech PR agency to media and authority network: the story of FinMedia Group, built by operators who know the industry.",
    url: "/about",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            About FinMedia Group
          </span>
          <h1>
            We stopped chasing the narrative — and started building it.
          </h1>
          <p className="lead">
            FinMedia Group is a finance and trading media and authority network. We launch, grow, and amplify the platforms the industry actually reads, watches, and trusts — turning owned audiences into real outcomes for the brands we partner with.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Work With Us →
            </Link>
            <Link className="btn btn-ghost" href="/network">
              Explore the Network
            </Link>
          </div>
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
              <CountUp to={50} suffix="+" />
              <div className="kk">
                Partnerships
              </div>
            </div>
            <div className="s">
              <div className="n">
                4
                <span style={{ fontSize: ".5em", fontWeight: "400", color: "var(--faint)" }}>
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
      <section className="sec" style={{ paddingTop: "50px" }}>
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Our Story
              </span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", marginTop: "18px" }}>
                From an agency to an audience.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: "20px" }}>
                We began as FinPR — a fintech public relations agency that helped financial brands find their voice across the world&apos;s media. We were good at it, and we became one of the most recognised names in the space.
              </p>
              <p style={{ color: "var(--muted)", marginTop: "14px" }}>
                But the more brands we placed on someone else&apos;s platform, the clearer it became: the real value wasn&apos;t in renting attention — it was in owning the destinations where the conversations actually happen. So we built them.
              </p>
              <p style={{ color: "var(--muted)", marginTop: "14px" }}>
                One platform became several. Several became a network. In 2026, FinPR formally evolved into FinMedia Group — shifting from promotion to presence, and from chasing the industry narrative to building the destinations that drive it.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                FinPR → FinMedia Group
              </div>
              <div>
                <div className="vbig">
                  Own the
                  <br />
                  destination.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  We don&apos;t rent attention on other people&apos;s platforms. We build the ones the industry comes to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              The Evolution
            </span>
            <h2>
              How we got here.
            </h2>
          </div>
          <div className="split" style={{ marginTop: "50px", alignItems: "start" }}>
            <div className="list-rows reveal">
              <div className="row">
                <div className="ri">
                  01
                </div>
                <div className="rt">
                  <b>
                    FinPR — The Agency
                  </b>
                  <span>
                    A leading fintech PR agency, helping brands earn visibility and trust across global media.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  02
                </div>
                <div className="rt">
                  <b>
                    The Realisation
                  </b>
                  <span>
                    Owned platforms convert and compound in ways earned placements never could.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  03
                </div>
                <div className="rt">
                  <b>
                    Building The Network
                  </b>
                  <span>
                    FundedTrading, MyTradingReviews and more — launched, grown, and scaled in-house.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  04
                </div>
                <div className="rt">
                  <b>
                    FinMedia Group
                  </b>
                  <span>
                    The agency evolves into a media and authority network focused on owned audiences.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  05
                </div>
                <div className="rt">
                  <b>
                    An Authority Network
                  </b>
                  <span>
                    Brands, awards, events, and ventures — one engine the industry recognises and trusts.
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal">
              <span className="eyebrow">
                In The CEO&apos;s Words
              </span>
              <h2 style={{ fontSize: "clamp(22px,2.6vw,30px)", marginTop: "18px", lineHeight: "1.2", fontWeight: "600" }}>
                &quot;We&apos;ve stopped chasing the industry narrative and started building the digital destinations that drive it.&quot;
              </h2>
              <p style={{ color: "var(--muted)", marginTop: "18px" }}>
                For years we helped brands find their voice on external platforms. With FinMedia Group, we&apos;ve built the destinations where the conversations actually happen — platforms designed not just to inform, but to convert.
              </p>
              <p style={{ color: "#fff", fontWeight: "600", marginTop: "18px", fontFamily: "var(--font-prompt)" }}>
                Karol Cempa
              </p>
              <p style={{ color: "var(--faint)", fontSize: "13px" }}>
                Chief Executive Officer, FinMedia Group
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="sec-head ctr reveal">
            <span className="eyebrow ctr">
              What We Believe
            </span>
            <h2>
              Trust is the only currency that compounds.
            </h2>
            <p>
              In a space full of noise and hype, independent, credible media wins. Everything we build is designed to earn that trust — and to keep it.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <span className="num">
                01
              </span>
              <div className="ico">
                <Mark width={22} height={22} style={{ color: "#fff" }} />
              </div>
              <h3>
                An expert team
              </h3>
              <p>
                Editors, creators, developers, and marketers recognised across the trading and finance industry — the people behind every brand, award, and event we run.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
                02
              </span>
              <div className="ico">
                <Mark width={22} height={22} style={{ color: "#fff" }} />
              </div>
              <h3>
                Operators, not spectators
              </h3>
              <p>
                We launch and grow our own brands and channels — so when we advise or back others, it comes from doing, not theory.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="num">
                03
              </span>
              <div className="ico">
                <Mark width={22} height={22} style={{ color: "#fff" }} />
              </div>
              <h3>
                Recognised & reputable
              </h3>
              <p>
                Trusted by the firms we cover, displayed by the firms we recognise, and recommended by leading technology providers across the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                The Team
              </span>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "18px" }}>
                Operators who know the industry.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: "18px" }}>
                Led by CEO Karol Cempa, FinMedia Group is built by a team of media operators, creators, and strategists with deep roots in fintech, prop trading, and brokerage. The same people who built our own platforms bring that experience to every partner we work with.
              </p>
              <p style={{ color: "var(--muted)", marginTop: "14px" }}>
                Headquartered in Singapore with offices supporting clients globally, we combine local presence with a worldwide reach.
              </p>
              <Link className="btn btn-ghost" style={{ marginTop: "24px" }} href="/careers">
                Join the Team →
              </Link>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                Singapore HQ · Global Reach
              </div>
              <div>
                <div className="vbig">
                  Built by
                  <br />
                  operators.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  The people behind the platforms, working for the partners on them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta reveal">
            <div className="glow-top" style={{ borderRadius: "var(--r-2)" }} />
            <BigMark />
            <span className="eyebrow ctr">
              Be Relevant. Be Present.
            </span>
            <h2>
              Let&apos;s build something the industry trusts.
            </h2>
            <p>
              Partners, founders, firms, and press — we&apos;d like to hear from you.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Get in Touch →
              </Link>
              <Link className="btn btn-ghost" href="/network">
                Explore the Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
