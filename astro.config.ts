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
  integrations: [sitemap({
    filter: (page) => !new URL(page).pathname.startsWith('/404'),
    serialize(item) {
      const u = new URL(item.url); if (['/en','/ru'].includes(u.pathname)) u.pathname += '/'; item.url = u.href;
      if (['/', '/en/', '/ru/'].includes(u.pathname)) {
        item.links = [{lang:'kk',url:site},{lang:'ru',url:new URL('ru/',site).href},{lang:'en',url:new URL('en/',site).href},{lang:'x-default',url:new URL('en/',site).href}];
      } else {
        // English-only sub-pages: self-referential en + x-default only.
        item.links = [{lang:'en',url:u.href},{lang:'x-default',url:u.href}];
      }
      return item;
    }
  })],
  vite: { plugins: [tailwindcss()] },
});
