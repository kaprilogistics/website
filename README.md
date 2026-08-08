# Kapri Logistics — Website

A static, multi-page marketing site for Kapri Logistics. Pure HTML/CSS/JS —
no build step, no server, no external framework — so it deploys directly on
GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — History, background, mission, core competencies, why us
- `services.html` — All 5 service lines in detail
- `contact.html` — Address, map, enquiry form
- `404.html` — Custom not-found page

## Before you go live — please update these placeholders

1. **Phone & email** — `contact.html` and `js/main.js` currently use
   placeholders (`+91 22 0000 0000`, `info@kaprilogistics.in`). Replace with
   your real number and inbox in both files.
2. **Domain** — All canonical URLs, Open Graph tags, `sitemap.xml`,
   `robots.txt` and `llms.txt` assume `https://www.kaprilogistics.in/`.
   Find-and-replace this with your actual GitHub Pages URL
   (e.g. `https://yourusername.github.io/kapri-logistics/`) or custom domain
   once you know it.
3. **Map embed** — the Google Maps iframe on `contact.html` is pre-built from
   your office address and needs no API key; double-check the pin once live.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `kapri-logistics`).
2. Push the contents of this folder to the `main` branch.
3. In the repo, go to **Settings → Pages**, set **Source** to
   `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Your site will publish at `https://<username>.github.io/<repo>/`.
   If you use a custom domain, add a `CNAME` file with the domain name and
   configure DNS as GitHub instructs.
5. Update the placeholders above once you know the final URL.

## Contact form behaviour

Because GitHub Pages can't run server-side code, the "Send Enquiry" button
composes a pre-filled email (`mailto:`) rather than posting to a server. If
you'd like a true inline form (no email client popup), wire the form in
`contact.html` to a static-form service such as Formspree, Getform, or
Web3Forms — no other code changes are needed beyond the form's `action`.

## SEO & AI/LLM discoverability

- Unique title/meta description, canonical tag, and Open Graph/Twitter cards
  on every page.
- JSON-LD structured data: `LocalBusiness` + `FAQPage` (home),
  `AboutPage` (about), `Service`/`OfferCatalog` (services), `ContactPage`
  (contact), plus `BreadcrumbList` on inner pages.
- `sitemap.xml` and `robots.txt` (the latter explicitly allows AI crawlers —
  GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- `llms.txt` at the site root — a plain-language company/site summary aimed
  at LLM answer engines (ChatGPT, Claude, Perplexity) so they can describe
  Kapri Logistics accurately.
- Semantic HTML, one `<h1>` per page, descriptive alt text, and a visible
  keyboard focus state throughout.

## Assets

- `images/logo-transparent.png` — brand mark, transparent background (light
  surfaces)
- `images/logo-white.png` — all-white version for dark surfaces (footer)
- `images/favicon-*.png`, `images/favicon.ico` — generated from the logo
- `images/og-image.png` — 1200×630 social preview card
- All diagrams/icons are hand-built inline SVG (no external image
  dependencies, so nothing to license or hotlink).
