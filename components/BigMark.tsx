/**
 * Oversized watermark monogram.
 *
 * This used to drift with scroll — the parallax loop carried over from
 * brand.js. It read as the mark wobbling rather than as depth, so it is fixed
 * now. With no scroll listener left there is nothing client-side about it.
 */
export function BigMark() {
  return (
    <svg className="big-mark" aria-hidden="true">
      <use href="#fmg-mark" />
    </svg>
  )
}
