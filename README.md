# 28 Panfilov Guardsmen Park — Astro site

Kazakh-language single-page visitor guide built with Astro + Tailwind CSS + TypeScript for Cloudflare Workers.

## Site URL
Set the canonical domain only once at build time:

```bash
SITE_URL=https://your-real-domain.kz pnpm build
```

If `SITE_URL` is empty, the project still builds. Canonical/absolute URL tags are omitted or stay relative and the sitemap integration is not enabled.

## Commands

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Photos
The page uses real photos from Wikimedia Commons at runtime because the build environment used for this delivery could not resolve external hosts for downloading binaries/assets. Source pages and licenses:
- Park aerial — Nikolai Bulykin — CC BY-SA 4.0
- Ascension Cathedral — Petar Milošević — CC BY-SA 4.0
- WWII Monument “Feat” — Ken and Nyetta — CC BY 2.0

To make the project fully offline, download those three files into `public/images/` and replace the three URL constants in `src/pages/index.astro` with local paths.
