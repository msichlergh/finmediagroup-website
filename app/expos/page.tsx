import type { Metadata } from 'next'
import Link from 'next/link'
import { BigMark } from '@/components/BigMark'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: "Expos & Events",
  description: "We design and stage the expos, award ceremonies, and gatherings that bring the finance and trading industry together.",
  alternates: { canonical: "/expos" },
  openGraph: {
    title: "Expos & Events — FinMedia Group",
    description: "We design and stage the expos, award ceremonies, and gatherings that bring the finance and trading industry together.",
    url: "/expos",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Expos & Events
          </span>
          <h1>
            Where the industry meets in person.
          </h1>
          <p className="lead">
            Media builds the audience; events bring it into the room. Our brands are chosen as official media partners for the industry&apos;s flagship trading expos — and we design and stage the gatherings, ceremonies, and booths that put traders, firms, and partners face to face.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Partner On An Event
            </Link>
            <a className="btn btn-ghost" href="#formats">
              Event Formats
            </a>
          </div>
        </div>
      </section>
      <section className="sec-sm">
        <div className="wrap">
          <div className="stats reveal">
            <div className="s">
              <div className="n">
                Expos
              </div>
              <div className="kk">
                Industry-Scale
              </div>
            </div>
            <div className="s">
              <div className="n">
                Ceremonies
              </div>
              <div className="kk">
                Award Nights
              </div>
            </div>
            <div className="s">
              <div className="n">
                Booths
              </div>
              <div className="kk">
                Design & Build
              </div>
            </div>
            <div className="s">
              <div className="n">
                Sponsorship
              </div>
              <div className="kk">
                Headline Slots
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="formats" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="glow-top" />
          <div className="sec-head reveal">
            <span className="eyebrow">
              Formats
            </span>
            <h2>
              From a booth to a full expo.
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
                Expos & Trade Shows
              </h3>
              <p>
                End-to-end industry gatherings — from concept and venue to exhibitor sales, programming, and on-the-ground delivery.
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
                Award Ceremonies
              </h3>
              <p>
                The live moment behind the badge — ceremonies that celebrate winners and amplify recognition across the network.
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
                Booths & Sponsorships
              </h3>
              <p>
                Booth design, build, and headline sponsorship packages that put partner brands where the industry gathers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="split">
            <div className="list-rows reveal">
              <div className="row">
                <div className="ri">
                  01
                </div>
                <div className="rt">
                  <b>
                    Concept & Positioning
                  </b>
                  <span>
                    Theme, audience, and the story the event tells.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  02
                </div>
                <div className="rt">
                  <b>
                    Programming & Speakers
                  </b>
                  <span>
                    Agenda, panels, and the voices that draw a crowd.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  03
                </div>
                <div className="rt">
                  <b>
                    Exhibitor & Sponsor Sales
                  </b>
                  <span>
                    Filling the floor with the right partners.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  04
                </div>
                <div className="rt">
                  <b>
                    Promotion Across The Network
                  </b>
                  <span>
                    Our brands drive attendance before the doors open.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="ri">
                  05
                </div>
                <div className="rt">
                  <b>
                    On-Site Delivery
                  </b>
                  <span>
                    Production, booths, and the experience itself.
                  </span>
                </div>
              </div>
            </div>
            <div className="panel-visual reveal">
              <BigMark parallax />
              <div className="vlabel">
                The in-person layer
              </div>
              <div>
                <div className="vbig">
                  Bring the
                  <br />
                  room together.
                </div>
                <p className="vsub" style={{ marginTop: "18px" }}>
                  We handle the event end to end — and our media fills the room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta on-dark reveal">
            <span className="eyebrow ctr">
              Events
            </span>
            <h2>
              Let&apos;s put your brand in the room.
            </h2>
            <p>
              Talk to us about sponsoring, exhibiting at, or co-producing an event.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/contact">
                Partner On An Event
              </Link>
              <Link className="btn btn-ghost" href="/ventures">
                Advisory & Ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
