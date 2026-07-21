---
title: 'Code blocks and syntax highlighting'
description: 'A quick look at how code renders on the blog, in both light and dark mode.'
pubDate: 2026-07-21
tags: ['astro', 'markdown']
---

Code blocks on this blog use [Shiki](https://shiki.style) with a dual theme:
`github-light` when the site is in light mode and `github-dark` when it's in
dark mode. Flip the theme toggle in the header and watch this block change:

```ts
type Post = {
  title: string;
  pubDate: Date;
  tags: string[];
};

function isRecent(post: Post): boolean {
  const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;
  return Date.now() - post.pubDate.getTime() < THIRTY_DAYS;
}
```

Inline `code` works too, and so do the usual Markdown niceties:

- **Bold** and _italic_ text
- [Links](/blog)
- Lists, quotes, tables...

> Write posts as Markdown files in `src/content/blog/`. That's the whole
> workflow.

Happy writing!
