# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

(`CLAUDE.md` in this repo is a symlink to this file, `AGENTS.md` — edit either path.)

## Project

Marketing site for Emirates Critical Power LLC — UPS installation, maintenance, AMC and battery services in Dubai / UAE. Built with Astro (static output) + Tailwind CSS v4, deployed to Cloudflare Workers via Wrangler static assets.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Commands

| Command                               | Action                                                 |
| -------------------------------------- | ------------------------------------------------------- |
| `npm install`                          | Install dependencies                                   |
| `npm run build`                        | Build production site to `dist/`                       |
| `npm run preview`                      | Preview the production build                           |
| `npx wrangler deploy`                  | Deploy the built `dist/` to Cloudflare Workers          |

There is no lint or test suite configured in this repo (no ESLint, no test runner). `astro check`/`tsc` type-checking is available via the strict Astro tsconfig if needed, but there's no dedicated npm script for it.

## Architecture

This is a content-driven, mostly static Astro site — no client-side framework, no API routes, no content collections. Pages are thin: they import section components in a fixed order and pass copy from `src/data/*`.

- **`src/pages/`** — one file per route (`index.astro`, `about.astro`, `services.astro`). Each wraps its content in `BaseLayout` with a page-specific `title`/`description` for SEO, and repeats the same `<Header /> ... <Footer /><WhatsAppFloat />` shell.
- **`src/layouts/BaseLayout.astro`** — the HTML shell: meta tags, Open Graph, canonical URL (built from `site.url` + `Astro.url.pathname`), Google Fonts, and a JSON-LD `ElectricianOrElectricalContractor` schema block sourced from `src/data/site.ts`. `color-scheme` is hard-locked to `light only` — this site does not support dark mode.
- **`src/components/`** — one component per landing-page section (`Hero`, `About`, `Services`, `Batteries`, `Industries`, `Brands`, `WhyUs`, `Gallery`, `Reseller`, `FAQ`, `Contact`, `Footer`, `WhatsAppFloat`, `Header`). The homepage (`index.astro`) stacks nearly all of them in sequence; `about.astro`/`services.astro` reuse only `Header`/`Footer`/`WhatsAppFloat` and have their own inline markup.
- **`src/data/`** — all editable copy and content lives here as typed `const` arrays/objects (`site.ts` for contact/brand info, `services.ts`, `brands.ts`, `faqs.ts`). Prefer editing these over hardcoding strings in components — e.g. adding a service means adding an entry to `services.ts`, not editing `Services.astro` or `services.astro` directly.
- **Internal links** use `/#section-id` (e.g. `/#contact`, `/#industries`, `/#faq`) to jump to homepage sections from other pages, and plain `/about`, `/services` for standalone pages. Keep section `id`s in homepage components in sync with these anchors.
- **Styling**: Tailwind v4 via `@tailwindcss/vite`, no `tailwind.config.js` — theme tokens (colors, fonts, shadows, animations) are defined with `@theme` directly in `src/styles/global.css`. Custom brand colors (`navy`, `navy-deep`, `orange`, `steel`, `grey`, `line`, `wa`) and fonts (`font-display` = Space Grotesk, `font-sans` = Inter, `font-mono` = IBM Plex Mono) are used via Tailwind utility classes (`bg-navy`, `text-orange`, `font-display`, etc.) rather than inline styles.
- **SEO**: `@astrojs/sitemap` is enabled in `astro.config.mjs` (`site: 'https://emiratescriticalpower.com'`) and generates `sitemap-index.xml` at build time — no manual sitemap maintenance needed. Each page sets its own `title`/`description` props on `BaseLayout`; keep these keyword-relevant to UPS/Dubai/UAE services per existing conventions.
- **Deployment**: `wrangler.toml` serves `./dist` as static assets on Cloudflare Workers (`not_found_handling = "404-page"`). Run `npm run build` before `npx wrangler deploy`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
