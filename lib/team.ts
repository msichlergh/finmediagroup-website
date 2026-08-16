/**
 * Leadership.
 *
 * ---------------------------------------------------------------------------
 * Only Karol Cempa is listed, because that is the only person the existing site
 * names. The rest of the team has to come from you — I am not inventing people,
 * roles or biographies for a real company.
 *
 * To add someone: append to LEADERSHIP. To add a headshot: drop the file in
 * public/team/ and set `photo`. Until a photo is set the card falls back to the
 * monogram, so a missing image never looks broken.
 * ---------------------------------------------------------------------------
 */

export type TeamMember = {
  name: string
  role: string
  bio?: string
  /** path under public/, e.g. '/team/karol-cempa.jpg' */
  photo?: string
  linkedin?: string
}

export const LEADERSHIP: TeamMember[] = [
  {
    name: 'Karol Cempa',
    role: 'Chief Executive Officer',
    photo: '/team/karol-cempa.jpg',
    // paraphrased from the launch announcement; nothing added
    bio: 'Moved from CEO of FinPR to lead FinMedia Group, carrying the strategic expertise and industry relationships built over years in fintech PR into the network.',
  },
]
