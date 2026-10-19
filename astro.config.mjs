// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rsbnq.in',
  // Emit services.html etc. so the old page addresses keep working, and hi/index.html for /hi/.
  build: { format: 'preserve' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-IN', hi: 'hi-IN', bn: 'bn-IN' } },
      // Language home pages live at /hi/ and /bn/; keep the sitemap in step with the canonical URLs.
      serialize(item) {
        const slash = (/** @type {string} */ url) => url.replace(/\/(hi|bn)$/, '/$1/');
        item.url = slash(item.url);
        item.links = item.links?.map((link) => ({ ...link, url: slash(link.url) }));
        return item;
      },
    }),
  ],
});
