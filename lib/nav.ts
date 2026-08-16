export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/network', label: 'Network' },
  { href: '/awards', label: 'Awards' },
  { href: '/expos', label: 'Expos' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/partnerships', label: 'Partners' },
  { href: '/investors', label: 'Investors' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/insights', label: 'Insights' },
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
      { href: '/insights', label: 'Insights' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const

/**
 * Placeholders in the legacy markup — every one pointed at "#". Kept here
 * rather than deleted so they can go back in the footer, or into a social
 * row, once the real profile URLs exist.
 */
export const SOCIAL_LINKS = [
  { href: '#', label: 'YouTube' },
  { href: '#', label: 'X' },
  { href: '#', label: 'LinkedIn' },
] as const

/** Footer sign-off row. */
export const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
] as const
