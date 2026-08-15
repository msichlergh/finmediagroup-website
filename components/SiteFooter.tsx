import Link from 'next/link'
import { Mark } from './Mark'
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <Mark className="mark" style={{ color: '#fff' }} />
              <span className="wordmark">
                <b>FinMedia</b>
                <span>Group</span>
              </span>
            </Link>
            <p>
              Be Relevant. Be Present. — launching, growing, and amplifying the media brands the
              finance and trading industry trusts since 2022.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div className="foot-col" key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map((l) => (
                <Link key={l.href + l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} FinMedia Group. All rights reserved.</span>
          <div className="socials">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
