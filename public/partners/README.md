# Partner and client logos

Drop each mark here, then add an entry to `lib/partners.ts`.

Preferred format:

- **SVG**, transparent background
- **no padding baked into the artwork** — the strip handles spacing
- ideally a **single-colour mark**, so it can be tinted per background
- if only a raster is available: PNG with transparency, at least 2x the
  rendered height (the strip renders at 26px, so ≥ 60px tall)

Set `ink` in `lib/partners.ts` for each entry:

| `ink`      | when                                     | what the strip does        |
|------------|------------------------------------------|----------------------------|
| `'colour'` | full-colour, or already legible anywhere  | nothing                    |
| `'dark'`   | dark mark on transparent                  | inverts it on dark bands   |
| `'light'`  | light mark on transparent                 | inverts it on light bands  |

The strip does not render at all while `PARTNERS` is empty.
