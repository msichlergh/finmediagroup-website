import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Lora } from 'next/font/google'
import { BrandCorner } from '@/components/BrandCorner'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { Sprite } from '@/components/Sprite'
import { SITE_URL } from '@/lib/site'
import { THEME_INIT_SCRIPT } from '@/lib/theme'

import './tokens.css'
import './globals.css'
import './home.css'

/** Display face — headlines, stat numerals, pull quotes. */
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

/** Working face — body, nav, buttons, labels, card titles. */
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FinMedia Group — Be Relevant. Be Present.',
    template: '%s — FinMedia Group',
  },
  description:
    'FinMedia Group launches, grows, and amplifies the financial media brands the industry trusts.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180' }],
  },
  openGraph: {
    siteName: 'FinMedia Group',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  // matches --bg in each theme, so the browser chrome does not clash
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f8' },
    { media: '(prefers-color-scheme: dark)', color: '#121218' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: THEME_INIT_SCRIPT sets data-theme before React
    // hydrates, so the server and client markup differ on this attribute by design.
    <html
      lang="en"
      className={`${lora.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <BrandCorner />
        <Sprite />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  )
}
