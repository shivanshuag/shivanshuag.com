import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// Injects an estimated reading time (e.g. "3 min read") into each post's
// frontmatter, available via the `remarkPluginFrontmatter` returned by render().
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
