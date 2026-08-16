import type { Metadata } from 'next'
import Link from 'next/link'
import { Mark } from '@/components/Mark'
import { ARTICLES } from '@/lib/news'

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
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="news-grid">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                className={`news-card reveal${a.feature ? ' feature' : ''}`}
                href={`/news/${a.slug}`}
              >
                <div className="thumb">
                  <Mark />
                </div>
                <div className="nc-body">
                  <div className="nc-meta">
                    <span className="tagpill">{a.tag}</span>
                    <time dateTime={a.published}>{a.date}</time>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="rd">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
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
                press@finmediagroup.com
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
                Request assets
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
                Read about us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-tight">
        <div className="wrap">
          <div className="cta on-dark depth textured reveal">
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
                Media Enquiries
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
