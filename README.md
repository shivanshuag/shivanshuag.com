# shivanshuag.com

My personal blog, built with [Astro](https://astro.build) and deployed on
[Cloudflare Pages](https://pages.cloudflare.com).

## Tech stack

- **[Astro](https://astro.build)** — static site generator
- **Content collections** — type-safe Markdown blog posts
- **RSS + sitemap** — via `@astrojs/rss` and `@astrojs/sitemap`
- **Cloudflare Pages** — hosting & CI/CD

## Features

- 🌗 **Light/dark theme toggle** with system default and no flash on load
- 🏷️ **Tags** — clickable tags, a `/tags` index, and per-tag pages
- ⏱️ **Reading time** on each post (via a small remark plugin)
- ↔️ **Prev/next navigation** between posts
- 🎨 **Syntax highlighting** with dual light/dark code themes (Shiki)
- 📰 **RSS feed** at `/rss.xml` and an automatic sitemap
- ♿ **Accessibility** — skip link, focus styles, semantic markup
- 🔍 **SEO** — canonical URLs, branded titles, Open Graph + Twitter cards,
  `article:*` metadata on posts, `BlogPosting`/`WebSite` **JSON-LD** structured
  data, a default social image, sitemap and `robots.txt`

## Local development

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── components/        # Reusable .astro components (header, footer, theme toggle)
├── content/blog/      # Blog posts as Markdown files
├── layouts/           # Page and blog-post layouts
├── pages/             # Routes (index, about, blog, tags, rss.xml, 404)
├── plugins/           # remark-reading-time.mjs
├── styles/            # Global CSS
├── consts.ts          # Site title, nav links, socials — edit these
└── content.config.ts  # Blog frontmatter schema
public/                # Static assets served as-is (favicon, robots.txt)
astro.config.mjs       # Astro config (set your `site` URL here)
```

## Writing a post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL slug
(`my-post.md` → `/blog/my-post/`). Start it with frontmatter:

```markdown
---
title: 'My post title'
description: 'A short summary for SEO and the post list.'
pubDate: 2026-07-21
tags: ['tag-one', 'tag-two']
# updatedDate: 2026-07-25   # optional
# heroImage: '/images/x.jpg'  # optional
# draft: true                 # optional — hides from the site
---

Your content here.
```

## Deploying to Cloudflare Pages

This is a fully static site, so no adapter is required. Deploy via the
Cloudflare Pages Git integration:

1. Push this repository to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages →
   Connect to Git** and select this repository.
3. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to the default branch triggers a new production build,
   and pull requests get preview deployments automatically.

### Social share image

The default Open Graph image lives at `public/og-default.png`. To regenerate it
after changing the site name or tagline, edit and run:

```sh
node scripts/generate-og.mjs
```

Individual posts can override it by setting `heroImage` in their frontmatter.

### Custom domain

Once deployed, add `shivanshuag.com` under the project's **Custom domains**
tab. Also update the `site` value in `astro.config.mjs` to your final domain so
canonical URLs, the sitemap, and the RSS feed are correct.
