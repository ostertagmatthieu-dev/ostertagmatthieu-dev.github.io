# ostertagmatthieu-dev.github.io

Personal homepage of Matthieu Ostertag — world models for industrial machines.

Live at https://ostertagmatthieu-dev.github.io/ (English, `?lang=fr`, `?lang=de`).

| File | Role |
| --- | --- |
| `index.html` | The whole page: styles, EN/FR/DE translations and the animated SAAC-JEPA schematic, inline |
| `404.html` | Served by GitHub Pages for any missing path (root-absolute URLs only) |
| `photo.jpg`, `photo.webp` | Portrait (WebP 320 px served first, JPEG fallback) |
| `og.jpg` | 1200×630 share image for LinkedIn, X, Slack… |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest` | Icons |
| `fonts/` | TeX Gyre Heros subsets (regular, bold), used only when Helvetica is not installed (GUST Font License, see `fonts/README.txt`) |
| `robots.txt`, `sitemap.xml` | Crawling; also points to the SAAC-JEPA sitemap |
| `llms.txt` | Plain-Markdown summary for LLM agents |
| `.well-known/ai-catalog.json` | Agentic Resource Discovery catalog (points agents to the two `llms.txt` files) |
| `tools/csp.py`, `.github/workflows/csp.yml` | Keep the CSP script hash in sync; CI fails if it is stale |
| `google95811ffd61747a6a.html` | Google Search Console ownership — do not delete (the meta tag in `index.html` too) |

Editing text: English is in the HTML; French and German strings are in the `T` object near the end of
`index.html`. After an edit:

1. `python3 tools/csp.py` — **required after any change inside the inline `<script>`** (translations
   included). The page's Content-Security-Policy only runs a script whose SHA-256 matches the meta tag;
   with a stale hash the language switcher, the e-mail link and the schematic animation stop working.
2. Update `dateModified` in the JSON-LD and `lastmod` in `sitemap.xml`.

Security headers that GitHub Pages cannot send (HSTS directives, COOP, X-Frame-Options, a header CSP)
need a custom domain behind a CDN such as Cloudflare; the CSP is therefore delivered in a meta tag.

The SAAC-JEPA project page lives in its own repository and is served at
https://ostertagmatthieu-dev.github.io/saac-jepa/.
