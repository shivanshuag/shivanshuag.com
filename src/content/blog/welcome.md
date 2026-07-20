---
title: 'Welcome to my blog'
description: 'The first post — what this site is, and how it is built.'
pubDate: 2026-07-20
tags: ['meta', 'astro']
---

Welcome! This is the first post on my new blog, built with
[Astro](https://astro.build) and deployed on
[Cloudflare Pages](https://pages.cloudflare.com).

## Writing a new post

Every post is a Markdown file in `src/content/blog/`. Create a new `.md` file,
add frontmatter at the top, and write your content below it:

```markdown
---
title: 'My great post'
description: 'A short summary used for SEO and the post list.'
pubDate: 2026-07-21
tags: ['ideas']
---

Your words go here.
```

The `title`, `description`, and `pubDate` fields are required. You can also set
`updatedDate`, a `heroImage`, `tags`, and `draft: true` to hide a work in
progress from the site.

## What's included

- **Content collections** with type-safe frontmatter validation
- A **blog index**, individual post pages, and a home page
- An **RSS feed** at `/rss.xml` and an automatic sitemap
- **Dark mode** that follows your system preference
- Sensible **SEO / Open Graph** tags out of the box

Happy writing!
