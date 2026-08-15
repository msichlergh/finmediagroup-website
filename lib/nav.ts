export const NAV_LINKS = [
  { href: '/network', label: 'Network' },
  { href: '/awards', label: 'Awards' },
  { href: '/expos', label: 'Expos' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/partnerships', label: 'Partners' },
  { href: '/investors', label: 'Investors' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/news', label: 'News' },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: 'Network & Services',
    links: [
      { href: '/network', label: 'The Network' },
      { href: '/awards', label: 'Awards' },
      { href: '/expos', label: 'Expos & Events' },
      { href: '/ventures', label: 'Advisory & Ventures' },
    ],
  },
  {
    heading: 'Partner',
    links: [
      { href: '/partnerships', label: 'Partnerships' },
      { href: '/investors', label: 'Investors' },
      { href: '/contact', label: 'Work With Us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/news', label: 'Press & News' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const

/** Placeholders in the legacy markup — swap for the real profiles. */
export const SOCIAL_LINKS = [
  { href: '#', label: 'YouTube' },
  { href: '#', label: 'X' },
  { href: '#', label: 'LinkedIn' },
] as const
