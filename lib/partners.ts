/**
 * Partners and clients shown in the logo strip below the hero.
 *
 * ---------------------------------------------------------------------------
 * EMPTY ON PURPOSE. The strip renders nothing while this list is empty, rather
 * than falling back to the network's own brands — those are FinMedia
 * properties, and showing them under a "we work with" heading would
 * misrepresent them as clients.
 *
 * TO POPULATE:
 *   1. Drop each logo in public/partners/ — SVG preferred, transparent
 *      background, no padding baked in, ideally a single-colour mark.
 *   2. Add an entry below.
 *   3. Set `ink` so the strip can correct it: 'colour' for full-colour or
 *      self-contained marks, 'dark' for a dark mark on transparent, 'light'
 *      for a light one. Only 'colour' needs no correction.
 *
 * Two things to check before publishing: that you have permission to use each
 * mark, and that naming them publicly is consistent with the rest of the site
 * — Awards and Network currently say partners are "available on request".
 * ---------------------------------------------------------------------------
 */

export type Partner = {
  name: string
  /** path under public/, e.g. '/partners/acme.svg' */
  logo: string
  /** optional link out */
  href?: string
  /** how the mark is drawn, so the strip can correct it per ground */
  ink?: 'colour' | 'dark' | 'light'
}

export const PARTNERS: Partner[] = []
