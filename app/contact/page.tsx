import type { Metadata } from 'next'
import { BigMark } from '@/components/BigMark'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about listings, awards, events, advisory, or venture partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — FinMedia Group",
    description: "Get in touch about listings, awards, events, advisory, or venture partnerships.",
    url: "/contact",
  },
}

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="glow-top" />
        <div className="wrap reveal">
          <span className="eyebrow">
            Contact
          </span>
          <h1>
            Let&apos;s work together.
          </h1>
          <p className="lead">
            Tell us what you&apos;re looking for — a listing, an award, an event, advisory, or a venture partnership — and the right person will get back to you.
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "30px" }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div className="reveal">
              <ContactForm />
              <p style={{ color: "var(--faint)", fontSize: "12.5px", marginTop: "14px" }}>
                This form is a front-end demo. Wire it to your email or CRM to go live.
              </p>
            </div>
            <div className="panel-visual reveal" style={{ minHeight: "auto", gap: "28px" }}>
              <BigMark parallax />
              <div>
                <div className="vlabel">
                  Direct
                </div>
                <a href="mailto:hello@finmediagroup.com" style={{ fontFamily: "var(--font-prompt)", fontWeight: "600", fontSize: "22px", display: "block", marginTop: "8px" }}>
                  hello@finmediagroup.com
                </a>
              </div>
              <div>
                <div className="vlabel">
                  For Firms & Brokers
                </div>
                <p className="vsub" style={{ marginTop: "8px" }}>
                  Listings, awards, and sponsorships across the network.
                </p>
              </div>
              <div>
                <div className="vlabel">
                  For Partners & Press
                </div>
                <p className="vsub" style={{ marginTop: "8px" }}>
                  Collaboration, distribution, and media enquiries.
                </p>
              </div>
              <div style={{ display: "flex", gap: "18px", marginTop: "4px" }}>
                <a href="#" style={{ color: "var(--muted)", fontSize: "13px", fontWeight: "600" }}>
                  YouTube
                </a>
                <a href="#" style={{ color: "var(--muted)", fontSize: "13px", fontWeight: "600" }}>
                  X
                </a>
                <a href="#" style={{ color: "var(--muted)", fontSize: "13px", fontWeight: "600" }}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
