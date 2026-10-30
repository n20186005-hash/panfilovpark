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
      item.links = [{lang:'kk',url:site},{lang:'ru',url:new URL('ru/',site).href},{lang:'en',url:new URL('en/',site).href},{lang:'x-default',url:new URL('en/',site).href}];
      return item;
    }
  })],
  vite: { plugins: [tailwindcss()] },
});
