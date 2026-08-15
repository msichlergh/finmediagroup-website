import type { Metadata } from 'next'
import Link from 'next/link'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "Press & News",
  description: "Announcements, partnerships, and milestones from across FinMedia Group and its brands.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Press & News — FinMedia Group",
    description: "Announcements, partnerships, and milestones from across FinMedia Group and its brands.",
    url: "/news",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Press & News
          </span>
          <h1>
            The latest from the network.
          </h1>
          <p className="lead">
            Announcements, partnerships, and milestones from across FinMedia Group and its brands. For media enquiries and assets, see the press kit below.
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="news-grid">
            <Link className="news-card feature reveal" href="/news/finmedia-launch">
              <div className="thumb">
                <Mark />
              </div>
              <div className="nc-body">
                <div className="nc-meta">
                  <span className="tagpill">
                    Announcement
                  </span>
                  <span>
                    Feb 2026
                  </span>
                </div>
                <h3>
                  FinPR evolves into FinMedia Group
                </h3>
                <p>
                  FinPR officially transitions into FinMedia Group — a finance and trading media and authority network focused on owned audiences and performance media.
                </p>
                <span className="rd">
                  Read more →
                </span>
              </div>
            </Link>
            <a className="news-card reveal" href="#">
              <div className="thumb">
                <Mark />
              </div>
              <div className="nc-body">
                <div className="nc-meta">
                  <span className="tagpill">
                    Partnership
                  </span>
                  <span>
                    2026
                  </span>
                </div>
                <h3>
                  Funded Trading named official media partner of the London Prop Trading Expo
                </h3>
                <p>
                  Our flagship brand joins one of the industry&apos;s biggest events as an official media partner.
                </p>
                <span className="rd">
                  Read more →
                </span>
              </div>
            </a>
            <a className="news-card reveal" href="#">
              <div className="thumb">
                <Mark />
              </div>
              <div className="nc-body">
                <div className="nc-meta">
                  <span className="tagpill">
                    Network
                  </span>
                  <span>
                    2026
                  </span>
                </div>
                <h3>
                  Awards displayed by leading prop firms
                </h3>
                <p>
                  Major firms feature awards from our brands front and centre on their expo booths and campaigns.
                </p>
                <span className="rd">
                  Read more →
                </span>
              </div>
            </a>
            <a className="news-card reveal" href="#">
              <div className="thumb">
                <Mark />
              </div>
              <div className="nc-body">
                <div className="nc-meta">
                  <span className="tagpill">
                    Milestone
                  </span>
                  <span>
                    2026
                  </span>
                </div>
                <h3>
                  700+ brands now listed across the network
                </h3>
                <p>
                  A milestone for the directory as the network&apos;s reach across the industry continues to grow.
                </p>
                <span className="rd">
                  Read more →
                </span>
              </div>
            </a>
            <a className="news-card reveal" href="#">
              <div className="thumb">
                <Mark />
              </div>
              <div className="nc-body">
                <div className="nc-meta">
                  <span className="tagpill">
                    Upcoming
                  </span>
                  <span>
                    2026
                  </span>
                </div>
                <h3>
                  New media properties in development
                </h3>
                <p>
                  FinMedia Group is preparing the next wave of properties to join the network across the finance and trading space.
                </p>
                <span className="rd">
                  Read more →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head reveal">
            <span className="eyebrow">
              Press Kit
            </span>
            <h2>
              For media & journalists.
            </h2>
          </div>
          <div className="kit reveal">
            <div className="k-item">
              <h4>
                Media Enquiries
              </h4>
              <p>
                Interviews, comment, and press questions.
              </p>
              <a href="mailto:press@finmediagroup.com">
                press@finmediagroup.com →
              </a>
            </div>
            <div className="k-item">
              <h4>
                Brand Assets
              </h4>
              <p>
                Logos, guidelines, and imagery for publication.
              </p>
              <a href="mailto:press@finmediagroup.com">
                Request assets →
              </a>
            </div>
            <div className="k-item">
              <h4>
                About FinMedia Group
              </h4>
              <p>
                Background, leadership, and the company story.
              </p>
              <Link href="/about">
                Read about us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta reveal">
            <span className="eyebrow ctr">
              Stay In The Loop
            </span>
            <h2>
              Follow the network.
            </h2>
            <p>
              The latest announcements, coverage, and milestones — as they happen.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:press@finmediagroup.com">
                Media Enquiries →
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
