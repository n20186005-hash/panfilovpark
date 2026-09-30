import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Hardcoded so canonical/og:url/sitemap are always produced (overridable via SITE_URL).
const site = (process.env.SITE_URL?.trim() || 'https://panfilovpark.com').replace(/\/$/, '') + '/';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
