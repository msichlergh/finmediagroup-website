'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Mark } from './Mark'
import { ThemeToggle } from './ThemeToggle'
import { NAV_LINKS } from '@/lib/nav'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // The menu remembers which route it was opened on, so navigating anywhere
  // closes it without an effect that would re-render on every route change.
  const [menu, setMenu] = useState({ open: false, at: pathname })
  const menuOpen = menu.open && menu.at === pathname
  const toggleMenu = () => setMenu((m) => ({ open: !(m.open && m.at === pathname), at: pathname }))

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  // a section stays highlighted on its child routes, e.g. /news/finmedia-launch
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <header id="hdr" className={scrolled ? 'scrolled' : undefined}>
        <div className="nav">
          <Link className="brand" href="/">
            <Mark className="mark" />
            <span className="wordmark">
              <b>FinMedia</b>
              <span>Group</span>
            </span>
          </Link>
          <nav className="links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? 'active' : undefined}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <Link className="btn btn-primary" href="/contact">
              Get in Touch
            </Link>
          </div>
          <button
            type="button"
            className="nav-burger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact">Get in Touch</Link>
      </div>
    </>
  )
}
