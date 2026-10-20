# blog

A minimalist technical blog built with [Astro](https://astro.build). It has syntax highlighting (Shiki), KaTeX math, dark mode, tags, and an RSS feed.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Write a post

Add a Markdown (or MDX) file to `src/content/blog/`. The filename becomes the URL: `my-post.md` → `/posts/my-post/`.

```md
---
title: My post
description: One-sentence summary (used in lists, RSS, and meta tags).
pubDate: 2026-10-19
tags: [algorithms, rust]   # lowercase-hyphenated works best in URLs
draft: true                # optional: visible in `npm run dev`, hidden in builds
---

Inline math: $O(n \log n)$. Display math:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

## Deploy (GitHub Pages)

1. In `astro.config.mjs`, set `site`. If the repo is not named `<username>.github.io`, also set `base: '/<repo-name>'`.
2. In `src/consts.ts`, set `GITHUB_URL`.
3. Push to `main`. Then go to the repo's **Settings → Pages → Source** and choose **GitHub Actions**.
   `.github/workflows/deploy.yml` builds and deploys the site on every push.
