/**
 * One-shot port helper: lifts the shared assets out of legacy/ into the places
 * Next.js expects. Companion to convert-legacy.mjs; not part of the build.
 *
 *   legacy/brand.css        -> app/globals.css          (byte-identical)
 *   legacy/index.html <style> -> app/home.css           (homepage-only rules)
 *   legacy/index.html <symbol> -> components/Sprite.tsx (monogram sprite)
 *   legacy/favicon*, manifest, video -> public/
 */
import { parse } from 'node-html-parser'
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LEGACY = join(root, 'legacy')
const PUBLIC = join(root, 'public')
mkdirSync(PUBLIC, { recursive: true })
mkdirSync(join(root, 'app'), { recursive: true })

/* ---- 1. brand.css verbatim ---- */
const brandCss = readFileSync(join(LEGACY, 'brand.css'), 'utf8')
writeFileSync(
  join(root, 'app', 'globals.css'),
  `/* Ported verbatim from legacy/brand.css — do not reformat; keep diffable
   against the original. Additions the Next.js port needed live in app/port.css. */\n${brandCss}`
)
console.log('app/globals.css      <- legacy/brand.css')

/* ---- 2. homepage-only inline styles ---- */
const indexHtml = readFileSync(join(LEGACY, 'index.html'), 'utf8')
const doc = parse(indexHtml, { blockTextElements: { style: true, script: true } })
const inlineStyle = doc
  .querySelectorAll('style')
  .map((s) => s.text)
  .join('\n')
  .trim()
  // The legacy homepage set class="home" on <body>. <body> now lives in the
  // shared root layout, so the homepage wraps its sections in .home instead —
  // same descendant match, and still more specific than the bare .sec rule.
  .replace(/\bbody\.home\b/g, '.home')

writeFileSync(
  join(root, 'app', 'home.css'),
  `/* Homepage-only rules, lifted from the inline <style> block in legacy/index.html.
   \`body.home\` became \`.home\` (a wrapper div) — see scripts/extract-assets.mjs.
   The keyframes at the bottom came from the <style> element that buildHub()
   injected at runtime in brand.js. */
${inlineStyle}

@keyframes nodepop {
  from { opacity: 0; transform: translate(-50%, -50%) scale(.4) }
  to   { opacity: 1; transform: translate(-50%, -50%) scale(1) }
}
.node.center { animation: nodepop .6s cubic-bezier(.16, 1.4, .3, 1) .75s forwards }
`
)
console.log('app/home.css         <- legacy/index.html <style>')

/* ---- 3. monogram sprite ---- */
const symbol = doc.querySelector('symbol#fmg-mark')
if (!symbol) throw new Error('fmg-mark symbol not found in legacy/index.html')

const inner = symbol.innerHTML
  .replace(/fill-rule=/g, 'fillRule=')
  .replace(/\bclass=/g, 'className=')

writeFileSync(
  join(root, 'components', 'Sprite.tsx'),
  `/**
 * The FinMedia monogram, defined once per document. Rendered by the root layout
 * so every <Mark /> on the page can reference it with <use href="#fmg-mark" />.
 *
 * Path data copied verbatim from legacy/index.html.
 */
export function Sprite() {
  return (
    <svg style={{ display: 'none' }} aria-hidden="true">
      <symbol id="fmg-mark" viewBox="${symbol.getAttribute('viewBox')}">
        ${inner.trim()}
      </symbol>
    </svg>
  )
}
`
)
console.log('components/Sprite.tsx <- legacy/index.html <symbol>')

/* ---- 4. static assets ---- */
const assets = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16.png',
  'favicon-32.png',
  'favicon-48.png',
  'favicon-180.png',
  'favicon-192.png',
  'favicon-512.png',
  'site.webmanifest',
  'ft-award-reveal.mp4',
]
for (const a of assets) {
  const src = join(LEGACY, a)
  if (!existsSync(src)) {
    console.warn(`  ! missing ${a}`)
    continue
  }
  copyFileSync(src, join(PUBLIC, a))
}
console.log(`public/              <- ${assets.length} static assets`)
