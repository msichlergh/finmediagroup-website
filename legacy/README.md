# legacy/ — original static site (reference only)

This is the hand-built static FinMedia Group site (Hostinger/Apache). It is the
**design source of truth** for the Next.js port, not deployed code. Do not edit
these files to ship changes once the Next.js app exists.

- 12 pages, all sharing `brand.css` + `brand.js`
- `index.html` carries an extra inline `<style>` block for the hub-and-spoke hero
- `.htaccess` provides clean URLs on Apache — replaced by App Router routing
- `README.txt` is the original hosting/upload guide

`index.html` and `brand.js` here are the latest revisions (live brand logos in the
hub, adjusted edge geometry), superseding the versions in the original zip.

`ft-award-reveal.mp4` is gitignored here — the file the site serves lives in
`public/`, and one 13.8 MB copy in history is enough.
