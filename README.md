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
| `fonts/` | TeX Gyre Heros subsets, used only when Helvetica is not installed (GUST Font License, see `fonts/README.txt`) |
| `robots.txt`, `sitemap.xml` | Crawling; also points to the SAAC-JEPA sitemap |
| `llms.txt` | Plain-Markdown summary for LLM agents |
| `google95811ffd61747a6a.html` | Google Search Console ownership — do not delete (the meta tag in `index.html` too) |

Editing text: English is in the HTML; French and German strings are in the `T` object near the end of
`index.html`. After an edit, update `dateModified` in the JSON-LD and `lastmod` in `sitemap.xml`.

The SAAC-JEPA project page lives in its own repository and is served at
https://ostertagmatthieu-dev.github.io/saac-jepa/.
