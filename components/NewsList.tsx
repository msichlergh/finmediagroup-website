'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Mark } from './Mark'
import type { Article } from '@/lib/news'

const ALL = 'All'

/**
 * Article grid with category filters.
 *
 * Filtering is local state rather than a URL param: with five posts it is not
 * worth a Suspense boundary, and no one is sharing a filtered view yet. If the
 * archive grows, move it to searchParams so the view is linkable and the back
 * button works.
 */
export function NewsList({ articles }: { articles: Article[] }) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(articles.map((a) => a.tag)))],
    [articles]
  )
  const [active, setActive] = useState(ALL)

  const shown = active === ALL ? articles : articles.filter((a) => a.tag === active)

  return (
    <>
      <div className="filters reveal" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="filter"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
            {c !== ALL && (
              <span className="filter-count">{articles.filter((a) => a.tag === c).length}</span>
            )}
          </button>
        ))}
      </div>

      <div className="news-grid">
        {shown.map((a) => (
          <Link
            key={a.slug}
            // the wide feature card only makes sense in the unfiltered view
            className={`news-card reveal${a.feature && active === ALL ? ' feature' : ''}`}
            href={`/news/${a.slug}`}
          >
            <div className="thumb">
              <Mark />
            </div>
            <div className="nc-body">
              <div className="nc-meta">
                <span className="tagpill">{a.tag}</span>
                <time dateTime={a.published}>{a.date}</time>
              </div>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <span className="rd">Read More</span>
            </div>
          </Link>
        ))}
      </div>

      {shown.length === 0 && <p className="filters-empty">Nothing filed under {active} yet.</p>}
    </>
  )
}
