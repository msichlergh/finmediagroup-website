import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mark } from '@/components/Mark'
import { ArticleCta } from '@/components/ArticleCta'
import { ARTICLES, getArticle, type Block } from '@/lib/news'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  const title = `${article.title} — Press`
  return {
    title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.published,
    },
  }
}

function Body({ block, i }: { block: Block; i: number }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>
    case 'quote':
      return (
        <blockquote>
          {block.text}
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      )
    case 'ul':
      return (
        <ul>
          {block.items.map((item, j) => (
            <li key={j}>
              {item.lead && <b>{item.lead}</b>} {item.text}
            </li>
          ))}
        </ul>
      )
    default:
      return <p key={i}>{block.text}</p>
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <>
      <section className="page-hero article-hero">
        <div className="glow-top" />
        <div className="wrap">
          <article className="article">
            <div className="a-meta">
              <span className="tagpill">{article.tag}</span>
              <time dateTime={article.published}>{article.date}</time>
              <span>{article.readingTime}</span>
            </div>
            <h1>{article.title}</h1>
            <p className="a-lead">{article.lead}</p>
          </article>
        </div>
      </section>

      <section className="article-section">
        <div className="wrap">
          <article className="article">
            <div className="a-hero">
              <Mark />
            </div>
            <div className="article-body">
              {article.body.map((block, i) => (
                <Body key={i} block={block} i={i} />
              ))}

              <div className="a-share">
                <span>Share:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://finmediagroup.com/insights/${article.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                    `https://finmediagroup.com/insights/${article.slug}`
                  )}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
                <a href="mailto:press@finmediagroup.com">Press enquiries</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <ArticleCta />
    </>
  )
}
