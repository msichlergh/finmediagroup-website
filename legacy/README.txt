FinMedia Group — Website Files
==============================

HOW TO UPLOAD (Hostinger):
1. In hPanel, open File Manager → public_html.
2. Upload ALL files from this folder (including the .htaccess file)
   into public_html. Keep them in the same directory — they reference
   each other by filename.
3. index.html is the homepage. Visitors will see clean URLs:
     yourdomain.com           → homepage
     yourdomain.com/about     → about page
     yourdomain.com/awards    → awards page  (etc.)

IMPORTANT — .htaccess
The .htaccess file is what makes the URLs clean (no .html extensions).
It may be hidden in some file managers — enable "Show hidden files"
in Hostinger's File Manager if you don't see it after upload.

If you see a "show hidden files" toggle, turn it on before uploading,
otherwise the file may be skipped.

FILES:
- index.html ............ Homepage
- network.html .......... The Network (8 brands)
- awards.html ........... Awards & Recognition (includes the award video)
- expos.html ............ Expos & Events
- ventures.html ......... Advisory & Ventures
- partnerships.html ..... Partnerships
- investors.html ........ Investors
- about.html ............ About
- careers.html .......... Careers
- news.html ............. Press & News (listing)
- news-finmedia-launch.html ... Sample news article (template to clone)
- contact.html .......... Contact

SHARED (required — keep alongside the pages):
- brand.css ............. All styling
- brand.js .............. All animations/interactions
- ft-award-reveal.mp4 ... Award video used on awards.html
- .htaccess ............. Clean-URL rules for Apache (Hostinger)

NOTES:
- All files must stay in the SAME folder. They link to each other by filename.
- Form and email links use placeholder addresses (hello@, careers@, investors@,
  partners@, press@finmediagroup.com) — update to your real addresses.
- The contact form is front-end only; connect it to your email/CRM to go live.
- Logo is a recreation pending official artwork — swap when available.

TROUBLESHOOTING — clean URLs
- If you visit /about and get a 404, the .htaccess didn't upload.
  Re-check that hidden files are visible and upload it again.
- If you see "Internal Server Error", your Hostinger plan may not have
  mod_rewrite enabled. Open a support ticket — it's standard on all plans.
