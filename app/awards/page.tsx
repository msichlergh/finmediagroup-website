import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Funded Trading Awards and My Trading Reviews Awards — recognition credible enough that winners display it on booths, sites, and campaigns.",
  alternates: { canonical: "/awards" },
  openGraph: {
    title: "Awards & Recognition — FinMedia Group",
    description: "Funded Trading Awards and My Trading Reviews Awards — recognition credible enough that winners display it on booths, sites, and campaigns.",
    url: "/awards",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero awards-hero">
        <div className="glow-top" />
        <div className="wrap">
          <div className="awards-hero-grid">
            <div className="reveal">
              <span className="eyebrow">
                Awards & Recognition
              </span>
              <h1>
                The awards firms are proud to display.
              </h1>
              <p className="lead">
                Our recognition programs are credible enough that winners build their marketing around them — featured on expo booths, homepages, and campaigns across the industry. Recognition that&apos;s earned, not bought.
              </p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="/contact">
                  Enquire About Awards
                </Link>
                <a className="btn btn-ghost" href="#programs">
                  View Programs
                </a>
              </div>
            </div>
            <div className="trophy-video reveal" aria-hidden="true">
              <div className="tv-frame">
                <video className="tv" autoPlay muted loop playsInline poster="">
                  <source src="/ft-award-reveal.mp4" type="video/mp4" />
                </video>
                <div className="tv-glow" />
              </div>
              <div className="tv-caption">
                Funded Trading Awards · Best Broker-Backed Prop Firm
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-sm sec-tight">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Proof In The Wild
              </span>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "18px" }}>
                Displayed where it counts.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "18px" }}>
                When one of the biggest prop firms in the world dedicates its expo booth to the awards it has won from our brands, that recognition is doing real work — signalling trust to every trader who walks past. Our awards are built to carry exactly that weight.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                Winners feature our badges on booths, homepages, and campaigns because the recognition converts — and because it comes from brands the industry already trusts.
              </p>
            </div>
            <div className="panel-visual on-dark depth reveal">
              <BigMark />
              <div className="vlabel">
                Seen on booths & campaigns
              </div>
              <div>
                <div className="vbig">
                  Award-
                  <br />
                  winning.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  Winners feature our badges front-and-centre — because the recognition converts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight" id="programs">
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head reveal">
            <span className="eyebrow">
              Award Programs
            </span>
            <h2>
              Recognition across the industry.
            </h2>
            <p>
              Our awards run under the brands the industry already trusts — with a dedicated body formalising and scaling them next.
            </p>
          </div>
          <div className="caps">
            <div className="cap reveal">
              <div className="k">
                Live · fundedtrading.com
              </div>
              <h3>
                Funded Trading Awards
              </h3>
              <p>
                The benchmark recognition for the prop trading industry — celebrating the best funded programs, challenges, and firms, judged on the criteria traders actually care about. The badges leading prop firms put on their booths.
              </p>
            </div>
            <div className="cap reveal">
              <div className="k">
                Live · mytradingreviews.com
              </div>
              <h3>
                My Trading Reviews Awards
              </h3>
              <p>
                Recognising excellence across brokers, platforms, and trading services — the awards that help traders identify who&apos;s genuinely worth trusting in a crowded market.
              </p>
            </div>
          </div>
          <div className="services" style={{ marginTop: "20px" }}>
            <div className="svc reveal" style={{ gridColumn: "1/-1", background: "var(--bg-subtle)" }}>
              <h3>
                More recognition, expanding{' '}
                <span className="tag">
                  Growing
                </span>
              </h3>
              <p>
                As the network grows, so do our award programs — with new categories and dedicated recognition launching across the finance and trading industry. Talk to us about what&apos;s coming.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              How It Works
            </span>
            <h2>
              From entry to booth.
            </h2>
          </div>
          <div className="services">
            <div className="svc reveal">
              <h3>
                Transparent Judging{' '}
                <span className="tag">
                  Credible
                </span>
              </h3>
              <p>
                Clear, published criteria assessed against real performance and audience signals — so a win is defensible and meaningful.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Brand-Backed Badges{' '}
                <span className="tag">
                  Trusted
                </span>
              </h3>
              <p>
                Each award carries the weight of an established brand in our network, recognised by the traders making decisions.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Marketing-Ready Assets{' '}
                <span className="tag">
                  Usable
                </span>
              </h3>
              <p>
                Winners receive digital and print-ready badge packs designed for booths, sites, ads, and campaigns.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Ceremony & Coverage{' '}
                <span className="tag">
                  Amplified
                </span>
              </h3>
              <p>
                Wins are announced and amplified across the network and at our events, extending reach well beyond the badge itself.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark depth textured reveal">
            <span className="eyebrow ctr">
              Recognition
            </span>
            <h2>
              Earn a badge worth displaying.
            </h2>
            <p>
              Talk to us about award categories, certification, and how recognition fits your marketing.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Enquire About Awards
              </Link>
              <Link className="btn btn-ghost" href="/expos">
                See Our Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
