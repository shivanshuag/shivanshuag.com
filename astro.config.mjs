// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  // Update this to your production domain once the Cloudflare Pages custom
  // domain is configured. It powers canonical URLs, the sitemap and the RSS feed.
  site: 'https://shivanshuag.com',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    // Dual themes: light code blocks by default, dark ones when the site is in
    // dark mode. The switch is handled by the `.astro-code` rules in global.css.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
