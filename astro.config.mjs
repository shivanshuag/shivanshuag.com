// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this to your production domain once the Cloudflare Pages custom
  // domain is configured. It powers canonical URLs, the sitemap and the RSS feed.
  site: 'https://shivanshuag.com',
  integrations: [sitemap()],
});
