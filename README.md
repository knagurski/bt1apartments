# BT1 Apartments (Astro)

Static site for BT1 Apartments, built with [Astro](https://astro.build/).
Migrated from the legacy hand-built static site (previously committed as
`_site/`). No jQuery, no Flickity, no build-time JS dependencies in the
browser beyond two small progressive-enhancement scripts.

## Requirements

Node.js 18 or later.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs static HTML to dist/
npm run preview # serve the production build locally
npm run audit   # axe-core accessibility audit of dist/ via local Chrome
```

Deploy the contents of `dist/` to any static host.

## Structure

- `src/pages/` — one file per page (`index`, `apartments`, `jamesclow`,
  `margaritaplaza`, `titanicquarter`, `rates`, `reputation`, `aboutbelfast`).
  Property pages are thin wrappers around `ApartmentPage.astro`; their copy
  lives in `src/data/properties.ts`.
- `src/layouts/Base.astro` — `<head>` (meta/OG tags, favicons), header,
  footer, SVG sprite.
- `src/components/HeroCarousel.astro` — CSS scroll-snap carousel replacing
  Flickity. Prev/next buttons and dots work; without JS the dots still work
  as anchor links.
- `src/components/ProductionsCarousel.astro` — natively scrollable strip
  with optional autoplay (pauses on hover/focus, disabled for
  `prefers-reduced-motion`).
- `src/data/` — property details, productions list, brochures.
- `src/assets/images/` — optimized at build time via Astro `<Image>`.
- `src/styles/global.css` — the original stylesheet minus the vendored
  Flickity CSS, plus carousel/section-background rules. Plain CSS, no
  preprocessor.
- `public/` — favicons, `robots.txt`, PDFs (`brochures/`), social-card
  images (`og/`). Served as-is.

## Notes

- Google Analytics (Universal, long dead) and `polyfill.io` were dropped in
  the migration. Re-add analytics if wanted.
- Booking is still enquiry-via-WhatsApp; no form yet.
- The Google Maps embed uses the same public embed key as the old site.
