/** Layered rounded-rect corner pattern — the deck cover motif, on every page. */
export function BrandCorner() {
  return (
    <div className="brand-corner" aria-hidden="true">
      <svg
        viewBox="0 0 900 760"
        preserveAspectRatio="xMaxYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* stroke colour and alpha both come from --motif-stroke via CSS */}
        <g fill="none" stroke="currentColor" transform="translate(560,430) rotate(-32)">
          <g strokeWidth="1.1">
            <rect x="0" y="0" width="460" height="330" rx="44" />
            <rect x="58" y="40" width="460" height="330" rx="44" />
            <rect x="116" y="80" width="460" height="330" rx="44" />
            <rect x="174" y="120" width="460" height="330" rx="44" />
            <rect x="232" y="160" width="460" height="330" rx="44" />
          </g>
        </g>
      </svg>
    </div>
  )
}
