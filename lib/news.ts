/**
 * Press and news articles.
 *
 * The listing and the article pages both read from here, so a post is added in
 * one place. Bodies are a small block union rather than raw HTML — it keeps the
 * markup in the renderer and makes this file safe to hand to a CMS later.
 *
 * NOTE ON CONTENT: everything below expands claims the site already made on the
 * news listing. Nothing factual has been added — no firm names, dates, figures
 * or quotes beyond what was already published. The four new pieces still need a
 * factual read-through before they are real: they describe partnerships,
 * milestones and roadmap that only FinMedia can confirm.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: { lead?: string; text: string }[] }
  | { type: 'quote'; text: string; cite?: string }

export type Article = {
  slug: string
  title: string
  tag: string
  date: string
  /** ISO, for <time> and structured data */
  published: string
  readingTime: string
  excerpt: string
  lead: string
  body: Block[]
  /** shown wide on the listing */
  feature?: boolean
}

export const ARTICLES: Article[] = [
  {
    slug: 'finmedia-launch',
    title: 'FinPR Evolves into FinMedia Group',
    tag: 'Announcement',
    date: 'February 2026',
    published: '2026-02-01',
    readingTime: '3 min read',
    feature: true,
    excerpt:
      'FinPR officially transitions into FinMedia Group — a finance and trading media and authority network focused on owned audiences and performance media.',
    lead: 'FinPR, a recognised name in fintech public relations, officially transitions into FinMedia Group — a finance and trading media and authority network focused on owned audiences and performance media.',
    body: [
      { type: 'p', text: "For years, FinMedia Group operated as FinPR — helping financial brands find their voice across the world's media. As one of the most recognised names in fintech PR, the agency built deep relationships and a reputation for results across prop trading, brokerage, and fintech." },
      { type: 'p', text: "But a clear pattern emerged: the most durable value wasn't in placing brands on someone else's platform — it was in owning the destinations where the conversations actually happen. So the company began building them." },
      { type: 'h2', text: 'From promotion to presence' },
      { type: 'p', text: 'The transition marks a deliberate shift away from traditional service-based PR toward a model of audience ownership. By building and scaling a network of authoritative platforms — including FundedTrading.com and MyTradingReviews.com — FinMedia Group now provides a direct bridge between financial companies and high-intent audiences.' },
      { type: 'quote', text: "We've stopped chasing the industry narrative and started building the digital destinations that drive it.", cite: 'Karol Cempa, CEO, FinMedia Group' },
      { type: 'p', text: "The platforms aren't just informational; they're built to drive conversions and transactions for partners — turning trusted content into measurable outcomes." },
      { type: 'h2', text: 'A performance-driven network' },
      { type: 'p', text: "FinMedia Group's focus is the creation of high-trust environments that guide users from research to action. The network's offering is built around:" },
      { type: 'ul', items: [
        { lead: 'Owned authority', text: '— branded awards, coverage, and deep-dive reviews that set the industry standard.' },
        { lead: 'Transaction-focused placements', text: '— premium web and email placements designed to move users through the funnel.' },
        { lead: 'Lead-generation ecosystems', text: '— campaigns and communities powered by proprietary first-party data.' },
      ]},
      { type: 'h2', text: 'Continuity and leadership' },
      { type: 'p', text: 'The transition is led by Karol Cempa, who moves from CEO of FinPR to lead FinMedia Group — ensuring the strategic expertise and industry relationships built over the years remain at the core of the network.' },
      { type: 'p', text: 'For financial brands, FinMedia Group represents a more efficient way to reach active traders and investors: directly, through trusted owned platforms, rather than through traditional media gatekeepers.' },
    ],
  },

  {
    slug: 'funded-trading-media-partner-london-expo',
    title: 'Funded Trading named official media partner of the London Prop Trading Expo',
    tag: 'Partnership',
    date: '2026',
    published: '2026-01-01',
    readingTime: '2 min read',
    excerpt:
      "Our flagship brand joins one of the industry's biggest events as an official media partner.",
    lead: "Funded Trading joins one of the industry's biggest events as an official media partner — covering, amplifying, and helping shape the expo floor where firms and traders meet.",
    body: [
      { type: 'p', text: 'Funded Trading, the flagship property in the FinMedia Group network, has been named an official media partner of the London Prop Trading Expo. The role covers editorial coverage of the event, amplification across the network, and a presence on the floor itself.' },
      { type: 'h2', text: 'Why media partnerships matter' },
      { type: 'p', text: 'Expos are where the prop trading industry does its business in person — where firms meet traders, partners meet platforms, and reputations are made in a weekend. Being chosen as an official media partner is a trust signal that has to be earned: organisers pick the outlets their attendees already read.' },
      { type: 'p', text: 'For Funded Trading, it extends a pattern the whole network is built on. The audience arrives through independent reviews and analysis, and the events layer turns that readership into rooms full of people who already know the brand.' },
      { type: 'h2', text: 'What it means for partners' },
      { type: 'p', text: 'Firms working with the network get more than a listing. Coverage around an event compounds: pre-event previews, on-the-ground reporting, and post-event analysis all point back to the same properties, in front of an audience that came to the expo to make decisions.' },
      { type: 'ul', items: [
        { lead: 'Editorial coverage', text: '— reporting across the network before, during, and after the event.' },
        { lead: 'Audience amplification', text: '— distribution through YouTube, newsletters, and the community.' },
        { lead: 'On-site presence', text: '— the brand in the room, not just in the programme.' },
      ]},
      { type: 'p', text: 'It is the in-person layer of the same idea behind everything FinMedia Group builds: be relevant enough that the industry listens, and present enough that it sees you.' },
    ],
  },

  {
    slug: 'awards-displayed-by-leading-prop-firms',
    title: 'Awards displayed by leading prop firms',
    tag: 'Network',
    date: '2026',
    published: '2025-12-01',
    readingTime: '2 min read',
    excerpt:
      'Major firms feature awards from our brands front and centre on their expo booths and campaigns.',
    lead: 'Recognition is only worth something if the winner wants to display it. Awards from the network are turning up on booths, homepages, and campaigns across the industry.',
    body: [
      { type: 'p', text: 'The clearest measure of whether an award means anything is simple: does the winner put it on the wall? Across the prop trading industry, awards issued by FinMedia Group brands are appearing on expo booths, homepages, and paid campaigns — placed there by the firms that won them, unprompted.' },
      { type: 'h2', text: 'Earned, not bought' },
      { type: 'p', text: 'The programmes run under brands the industry already trusts, and they are judged against published criteria assessed on real performance and audience signals. That is what makes a win defensible — and what makes a firm comfortable building marketing around it.' },
      { type: 'p', text: 'When one of the largest prop firms dedicates booth space to recognition it received from an independent reviewer, that recognition is doing real work: signalling trust to every trader who walks past.' },
      { type: 'h2', text: 'Built to be used' },
      { type: 'p', text: 'Winners receive digital and print-ready badge packs designed for the places they actually get used — booths, sites, ads, and campaigns — and wins are announced and amplified across the network, extending reach well beyond the badge itself.' },
      { type: 'p', text: 'Specific partners and named placements are available on request.' },
    ],
  },

  {
    slug: '700-brands-listed',
    title: '700+ brands now listed across the network',
    tag: 'Milestone',
    date: '2026',
    published: '2025-11-01',
    readingTime: '2 min read',
    excerpt:
      "A milestone for the directory as the network's reach across the industry continues to grow.",
    lead: "The network's directories now carry more than 700 listed brands — a milestone that says as much about the industry's appetite for independent assessment as it does about the network.",
    body: [
      { type: 'p', text: 'More than 700 brands are now listed across the FinMedia Group network — prop firms, brokers, platforms, courses, and trading systems, catalogued and assessed across Funded Trading and MyTradingReviews.' },
      { type: 'h2', text: 'Why the number matters' },
      { type: 'p', text: 'A directory is only useful if it is close to complete. Traders comparing funded programmes or brokers are trying to answer a narrow question — who is worth trusting — and a listing that covers most of the market is far more valuable than one covering a curated slice of it.' },
      { type: 'p', text: 'Coverage at this scale also changes the network’s position. It stops being a publisher with opinions and becomes the reference point the industry checks itself against.' },
      { type: 'h2', text: 'Quality over volume' },
      { type: 'p', text: 'Breadth is not the whole story. The audience the network reaches is deliberately narrow: traders, investors, and industry professionals at the decision stage, arriving through independent reviews rather than broad-interest content.' },
      { type: 'p', text: 'That combination — near-complete coverage, decision-stage readers — is what partners are actually buying when they work with the network.' },
    ],
  },

  {
    slug: 'new-media-properties-in-development',
    title: 'New media properties in development',
    tag: 'Upcoming',
    date: '2026',
    published: '2025-10-01',
    readingTime: '2 min read',
    excerpt:
      'FinMedia Group is preparing the next wave of properties to join the network across the finance and trading space.',
    lead: 'The next wave of properties is in build. The pattern is the one the network has run before: find a corner of the market where independent media can genuinely serve an audience, then build the destination.',
    body: [
      { type: 'p', text: 'FinMedia Group is preparing new media properties across the finance and trading space, joining the network as they go live.' },
      { type: 'h2', text: 'A repeatable playbook' },
      { type: 'p', text: 'Each property in the network was launched and grown in-house, from first article to flagship YouTube channel. That work produced a playbook — and shared infrastructure behind every brand for content, video, web, and social — so each new launch costs less than the one before it.' },
      { type: 'p', text: 'The test for a new property is the same each time: is there a corner of this market where independent media can genuinely serve an audience that is currently underserved? Where the answer is yes, the network builds or acquires.' },
      { type: 'h2', text: 'What compounds' },
      { type: 'p', text: 'New properties do not start from zero. They launch into an existing audience, an existing distribution network, and existing relationships across the industry — which is why the network compounds rather than simply getting larger.' },
      { type: 'p', text: 'Partners, founders with a media property, and anyone with a proposal are welcome to get in touch.' },
    ],
  },
]

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug)
