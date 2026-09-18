import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim();
const integrations = configuredSite ? [sitemap()] : [];

export default defineConfig({
  ...(configuredSite ? { site: configuredSite } : {}),
  output: 'server',
  adapter: cloudflare(),
  integrations,
  vite: { plugins: [tailwindcss()] }
});
