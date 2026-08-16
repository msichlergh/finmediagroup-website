import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "Careers",
  description: "Join FinMedia Group: a remote-first team building the media brands the trading and finance industry trusts. Always hiring great people in media, sales, and operations.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — FinMedia Group",
    description: "Join FinMedia Group: a remote-first team building the media brands the trading and finance industry trusts. Always hiring great people in media, sales, and operations.",
    url: "/careers",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Careers
          </span>
          <h1>
            Build the brands the industry trusts.
          </h1>
          <p className="lead">
            We&apos;re a team of operators, creators, and strategists building real media products — not chasing client work. If you want ownership, pace, and your work seen across some of the most recognised names in trading and finance, we&apos;d like to meet you.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:careers@finmediagroup.com">
              Introduce Yourself
            </a>
            <Link className="btn btn-ghost" href="/about">
              About FinMedia
            </Link>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "70px" }}>
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">
                Why Work Here
              </span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,46px)", marginTop: "18px" }}>
                Operators, not an agency.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "20px" }}>
                Most media jobs mean grinding out work for someone else&apos;s brand. Here, you build ours — platforms with real audiences, real partnerships, and your name on the result. We ship fast, we own what we make, and we grow it.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                You&apos;ll work across a network of established brands and the people who built them — gaining exposure to the trading and finance industry that&apos;s hard to get anywhere else.
              </p>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                Remote & Distributed
              </div>
              <div>
                <div className="vbig">
                  Work from
                  <br />
                  anywhere.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  A distributed team, judged on what you build — not where you sit.
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
              How We Work
            </span>
            <h2>
              What it&apos;s like here.
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
                Ownership
              </h3>
              <p>
                You own outcomes, not tickets. We hire people who can take a brief and run, and we give them the room to do it.
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
                Pace
              </h3>
              <p>
                We launch, test, and grow quickly. Ideas become live products in weeks, not quarters — and you see the impact.
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
                Remote-first
              </h3>
              <p>
                A distributed team across regions. We care about what you deliver, not your timezone — flexibility comes standard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              Where We Hire
            </span>
            <h2>
              We&apos;re always looking for great people.
            </h2>
            <p>
              We don&apos;t always have a posting open, but we always have room for the right person. These are the areas we hire across most.
            </p>
          </div>
          <div className="services">
            <div className="svc reveal">
              <h3>
                Media & Content
                <span className="tag">
                  Creators
                </span>
              </h3>
              <p>
                Writers, editors, video producers, and social media managers who can build an audience and a voice — across articles, YouTube, and every channel our brands live on.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Sales & Partnerships
                <span className="tag">
                  Growth
                </span>
              </h3>
              <p>
                Relationship-builders who can open doors with prop firms, brokers, and tech providers — and turn conversations into lasting partnerships across the network.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Operations
                <span className="tag">
                  Backbone
                </span>
              </h3>
              <p>
                The people who keep a multi-brand network running — coordination, account management, and the systems that let everything else scale smoothly.
              </p>
            </div>
            <div className="svc reveal">
              <h3>
                Don&apos;t See Your Fit?
                <span className="tag">
                  Open
                </span>
              </h3>
              <p>
                If you&apos;re exceptional at something we need and didn&apos;t list, tell us anyway. The best hires rarely match a job description exactly.
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
                How To Apply
              </span>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: "18px" }}>
                Tell us what you&apos;d build.
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: "18px" }}>
                No formal opening required. Send us a short note on what you do, a few examples of your work, and where you think you&apos;d add value across the network. If there&apos;s a fit, we&apos;ll be in touch.
              </p>
              <p style={{ color: "var(--text-muted)", marginTop: "14px" }}>
                We read every introduction — the more specific about how you&apos;d help, the better.
              </p>
              <a className="btn btn-primary" style={{ marginTop: "24px" }} href="mailto:careers@finmediagroup.com">
                Email careers@finmediagroup.com
              </a>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                Always Open
              </div>
              <div>
                <div className="vbig">
                  The right
                  <br />
                  person, anytime.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  Great people don&apos;t wait for a job posting. Neither do we.
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
              Join Us
            </span>
            <h2>
              Ready to build something seen across the industry?
            </h2>
            <p>
              If you&apos;re a creator, closer, or operator who wants real ownership — introduce yourself.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:careers@finmediagroup.com">
                Introduce Yourself
              </a>
              <Link className="btn btn-ghost" href="/network">
                See the Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
