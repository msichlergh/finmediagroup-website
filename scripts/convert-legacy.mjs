/**
 * One-shot port: legacy/*.html -> app/**\/page.tsx
 *
 * Parses each legacy page, strips the chrome that now lives in app/layout.tsx
 * (brand corner, icon sprite, header, mobile menu, footer, script tag) and
 * serialises the remaining sections to JSX. Interactive bits that brand.js used
 * to drive are swapped for the client components in components/.
 *
 * Kept in the repo as the record of how the port was produced. It is not part of
 * the build and can be deleted once the pages are hand-maintained.
 */
import { parse } from 'node-html-parser'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LEGACY = join(root, 'legacy')

/* ---------- routing ---------- */

const ROUTES = {
  index: '/',
  network: '/network',
  awards: '/awards',
  expos: '/expos',
  ventures: '/ventures',
  partnerships: '/partnerships',
  investors: '/investors',
  about: '/about',
  careers: '/careers',
  news: '/news',
  contact: '/contact',
  'news-finmedia-launch': '/news/finmedia-launch',
}

/** legacy file -> app router directory */
const PAGES = [
  { file: 'index.html', out: 'app/page.tsx' },
  { file: 'network.html', out: 'app/network/page.tsx' },
  { file: 'awards.html', out: 'app/awards/page.tsx' },
  { file: 'expos.html', out: 'app/expos/page.tsx' },
  { file: 'ventures.html', out: 'app/ventures/page.tsx' },
  { file: 'partnerships.html', out: 'app/partnerships/page.tsx' },
  { file: 'investors.html', out: 'app/investors/page.tsx' },
  { file: 'about.html', out: 'app/about/page.tsx' },
  { file: 'careers.html', out: 'app/careers/page.tsx' },
  { file: 'news.html', out: 'app/news/page.tsx' },
  { file: 'news-finmedia-launch.html', out: 'app/news/finmedia-launch/page.tsx' },
  { file: 'contact.html', out: 'app/contact/page.tsx' },
]

/* ---------- html -> jsx primitives ---------- */

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect',
  'line', 'polygon', 'polyline', 'ellipse', 'stop', 'use',
])

/** attributes React wants camelCased (HTML + SVG) */
const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  srcset: 'srcSet',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  tabindex: 'tabIndex',
  maxlength: 'maxLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  readonly: 'readOnly',
  novalidate: 'noValidate',
  playsinline: 'playsInline',
  autoplay: 'autoPlay',
  crossorigin: 'crossOrigin',
  'stroke-width': 'strokeWidth',
  'stroke-opacity': 'strokeOpacity',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'xmlns:xlink': 'xmlnsXlink',
  'xlink:href': 'xlinkHref',
}

/** valueless HTML attributes that are booleans in React */
const BOOLEAN_ATTRS = new Set([
  'muted', 'loop', 'controls', 'autoplay', 'playsinline', 'disabled',
  'checked', 'selected', 'required', 'readonly', 'hidden', 'novalidate', 'autofocus',
])

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  copy: '©', reg: '®', trade: '™', hellip: '…',
  mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘',
  ldquo: '“', rdquo: '”', middot: '·', times: '×',
  larr: '←', rarr: '→', uarr: '↑', darr: '↓',
}

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name] ?? ENTITIES[name.toLowerCase()] ?? m)
}

function cssPropToJs(prop) {
  if (prop.startsWith('--')) return `'${prop}'`
  const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  return /^[a-zA-Z][a-zA-Z0-9]*$/.test(camel) ? camel : `'${prop}'`
}

function styleToObject(raw) {
  const parts = []
  for (const decl of raw.split(';')) {
    const i = decl.indexOf(':')
    if (i === -1) continue
    const prop = decl.slice(0, i).trim()
    let value = decl.slice(i + 1).trim()
    if (!prop || !value) continue
    // inline font-family literals need the same next/font redirect that
    // app/port.css applies to the stylesheet rules
    if (prop === 'font-family') {
      value = value
        .replace(/['"]Prompt['"]/g, 'var(--font-prompt)')
        .replace(/['"]Montserrat['"]/g, 'var(--font-montserrat)')
    }
    parts.push(`${cssPropToJs(prop)}: ${JSON.stringify(value)}`)
  }
  return parts.length ? `{{ ${parts.join(', ')} }}` : null
}

/** JSX text child: escape braces, stray angle brackets, and bare quotes */
function jsxText(raw) {
  const text = decodeEntities(raw)
  if (!text.trim()) return text.includes('\n') ? '' : text
  if (/[{}<>]/.test(text)) return `{${JSON.stringify(text)}}`
  // react/no-unescaped-entities: bare quotes in JSX text are a common source of
  // typos, so the linter wants them spelled out. Renders identically.
  return text.replace(/'/g, '&apos;').replace(/"/g, '&quot;')
}

/* ---------- link rewriting ---------- */

function resolveHref(href) {
  if (!href) return null
  if (/^(https?:|mailto:|tel:|#|\/)/.test(href)) return { href, internal: false }
  const [path, hash = ''] = href.split('#')
  const mapped = ROUTES[path.replace(/\.html$/, '')]
  if (!mapped) return { href, internal: false }
  return { href: mapped + (hash ? `#${hash}` : ''), internal: true }
}

/* ---------- special-case nodes ---------- */

const used = new Set()

/**
 * Nodes that brand.js used to animate become client components. Returning a
 * string here replaces the whole subtree.
 */
function specialCase(node) {
  const cls = node.getAttribute?.('class') || ''
  const id = node.getAttribute?.('id') || ''

  // homepage hub-and-spoke diagram (svg edges + nodes were built in JS)
  if (cls.split(/\s+/).includes('hub')) {
    used.add('HubGraphic')
    return '<HubGraphic />'
  }

  // investors growth curve (needed an in-view class toggle)
  if (id === 'growth') {
    used.add('GrowthCurve')
    return '<GrowthCurve />'
  }

  // count-up stat numbers
  if (node.tagName === 'DIV' && cls.split(/\s+/).includes('n') && node.hasAttribute('data-count')) {
    used.add('CountUp')
    const to = node.getAttribute('data-count')
    const suffix = node.getAttribute('data-suffix') || ''
    const prefix = node.getAttribute('data-prefix') || ''
    const attrs = [`to={${to}}`]
    if (suffix) attrs.push(`suffix=${JSON.stringify(suffix)}`)
    if (prefix) attrs.push(`prefix=${JSON.stringify(prefix)}`)
    return `<CountUp ${attrs.join(' ')} />`
  }

  // parallax watermark monogram inside .panel-visual / .cta
  if (node.tagName === 'SVG' && cls.split(/\s+/).includes('big-mark')) {
    used.add('BigMark')
    const parallax = node.parentNode?.getAttribute?.('class')?.includes('panel-visual')
    return parallax ? '<BigMark parallax />' : '<BigMark />'
  }

  // contact form — inert in the legacy markup (onsubmit="return false")
  if (node.tagName === 'FORM') {
    used.add('ContactForm')
    return '<ContactForm />'
  }

  // static monogram: <svg><use href="#fmg-mark"/></svg>
  if (node.tagName === 'SVG') {
    const kids = node.childNodes.filter((n) => n.nodeType === 1)
    if (kids.length === 1 && kids[0].tagName === 'USE' && kids[0].getAttribute('href') === '#fmg-mark') {
      used.add('Mark')
      const attrs = []
      const c = node.getAttribute('class')
      if (c) attrs.push(`className=${JSON.stringify(c)}`)
      const w = node.getAttribute('width')
      if (w) attrs.push(`width={${w}}`)
      const h = node.getAttribute('height')
      if (h) attrs.push(`height={${h}}`)
      const st = node.getAttribute('style')
      if (st) {
        const obj = styleToObject(st)
        if (obj) attrs.push(`style=${obj}`)
      }
      return `<Mark${attrs.length ? ' ' + attrs.join(' ') : ''} />`
    }
  }

  return null
}

/* ---------- serialiser ---------- */

function serialise(node, depth) {
  const pad = '  '.repeat(depth)

  // text
  if (node.nodeType === 3) {
    const t = jsxText(node.rawText)
    return t.trim() ? pad + t.trim() : ''
  }
  // comment
  if (node.nodeType === 8) {
    const c = node.rawText.trim()
    return c ? `${pad}{/* ${c.replace(/\*\//g, '*\\/')} */}` : ''
  }
  if (node.nodeType !== 1) return ''

  const special = specialCase(node)
  if (special) return pad + special

  const tag = node.rawTagName
  const attrs = []
  let linkTag = null

  for (const [rawName, rawValue] of Object.entries(node.attributes)) {
    const name = rawName.toLowerCase()

    if (name.startsWith('on')) continue // inline handlers are re-implemented in React
    if (name === 'xmlns' && tag !== 'svg') continue

    if (name === 'href' && tag === 'a') {
      const r = resolveHref(rawValue)
      if (r?.internal) {
        linkTag = 'Link'
        used.add('Link')
      }
      attrs.push(`href=${JSON.stringify(r ? r.href : rawValue)}`)
      continue
    }

    if (name === 'src' && rawValue && !/^(https?:|\/|data:)/.test(rawValue)) {
      attrs.push(`src=${JSON.stringify('/' + rawValue.replace(/^\.?\//, ''))}`)
      continue
    }

    if (name === 'style') {
      const obj = styleToObject(rawValue)
      if (obj) attrs.push(`style=${obj}`)
      continue
    }

    if (BOOLEAN_ATTRS.has(name) && (rawValue === '' || rawValue === name || rawValue === 'true')) {
      attrs.push(ATTR_MAP[name] || name)
      continue
    }

    if (name.startsWith('data-') || name.startsWith('aria-')) {
      attrs.push(`${name}=${JSON.stringify(decodeEntities(rawValue))}`)
      continue
    }

    const jsxName = ATTR_MAP[name] || (name.includes('-') ? name : rawName)
    attrs.push(`${jsxName}=${JSON.stringify(decodeEntities(rawValue))}`)
  }

  const outTag = linkTag || tag
  const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''

  const children = node.childNodes
    .map((c) => serialise(c, depth + 1))
    .filter((s) => s !== '')

  if (!children.length) {
    if (VOID.has(tag.toLowerCase()) || !node.innerHTML.trim()) {
      return `${pad}<${outTag}${attrStr} />`
    }
  }

  return `${pad}<${outTag}${attrStr}>\n${children.join('\n')}\n${pad}</${outTag}>`
}

/* ---------- page extraction ---------- */

/** Body children that now live in app/layout.tsx */
function isChrome(node) {
  if (node.nodeType !== 1) return true
  const tag = node.rawTagName?.toLowerCase()
  const cls = node.getAttribute('class') || ''
  if (tag === 'header' || tag === 'footer' || tag === 'script') return true
  if (cls.includes('brand-corner') || cls.includes('mobile-menu')) return true
  if (tag === 'svg' && (node.getAttribute('style') || '').includes('display:none')) return true
  return false
}

function convert({ file, out }) {
  used.clear()
  const html = readFileSync(join(LEGACY, file), 'utf8')
  const doc = parse(html, { comment: true, blockTextElements: { script: false, style: true } })

  const title = decodeEntities(doc.querySelector('title')?.text?.trim() || '')
  const description = decodeEntities(
    doc.querySelector('meta[name="description"]')?.getAttribute('content') || ''
  )
  const bodyClass = doc.querySelector('body')?.getAttribute('class') || ''

  const body = doc.querySelector('body')
  const sections = body.childNodes.filter((n) => !isChrome(n))

  const jsx = sections.map((n) => serialise(n, 3)).filter(Boolean).join('\n')

  const imports = []
  if (used.has('Link')) imports.push(`import Link from 'next/link'`)
  const local = ['BigMark', 'ContactForm', 'CountUp', 'GrowthCurve', 'HubGraphic', 'Mark']
    .filter((c) => used.has(c))
  for (const c of local) imports.push(`import { ${c} } from '@/components/${c}'`)

  // strip the " — FinMedia Group" suffix; the layout template re-adds it
  const pageTitle = title.replace(/\s*[—-]\s*FinMedia Group\s*$/, '').trim()
  const isHome = out === 'app/page.tsx'

  const src = `import type { Metadata } from 'next'
${imports.join('\n')}

export const metadata: Metadata = {
  title: ${isHome ? JSON.stringify({ absolute: title }, null, 0).replace(/"(\w+)":/g, '$1: ') : JSON.stringify(pageTitle)},
  description: ${JSON.stringify(description)},
  alternates: { canonical: ${JSON.stringify(ROUTES[file.replace(/\.html$/, '')])} },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: ${JSON.stringify(ROUTES[file.replace(/\.html$/, '')])},
  },
}

${isHome ? '// .home carries the compact section rhythm that lived on <body class="home">\n' : ''}export default function Page() {
  return (
    ${isHome ? '<div className="home">' : '<>'}
${jsx}
    ${isHome ? '</div>' : '</>'}
  )
}
`

  const dest = join(root, out)
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, src)
  console.log(`${file.padEnd(28)} -> ${out}${bodyClass ? `   (body class="${bodyClass}")` : ''}`)
}

for (const page of PAGES) convert(page)
console.log('\ndone')
