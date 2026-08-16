import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Lora } from 'next/font/google'
import { BrandCorner } from '@/components/BrandCorner'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { Sprite } from '@/components/Sprite'
import { SITE_URL } from '@/lib/site'

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
  // the site is light-only; dark is a section treatment, not a mode
  themeColor: '#f7f7f8',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${instrumentSans.variable}`}>
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
