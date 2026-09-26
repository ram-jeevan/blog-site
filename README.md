# Ram Jeevan Vinod — Astro site

A multi-page Astro site in the **"Ancient Indian Art Magazine"** style (see
[`../../ancient-art-blog-redesign/design.md`](../../ancient-art-blog-redesign/design.md)).
The blog is content-collection driven — drop a Markdown file in
`src/content/blog/` and it appears across the landing, archive, and its own page.

## Pages

- `src/pages/index.astro` — **Written Works** blog landing. Magazine editorial:
  paper texture, Playfair masthead, sindoor-red / marigold accents, Warli icon
  section markers, folk-art hero, featured essay (drop cap + pull quote), Ajanta
  essay grid, and a portfolio CTA band. Feature / contents / grid all read from
  the blog collection.
- `src/pages/blog/index.astro` and `src/pages/fiction/index.astro` — numbered
  indexes of the essays and the fiction, both rendered by
  `src/components/PostIndex.astro`.
- `src/pages/blog/[slug].astro` — article engine; renders each Markdown post with
  prose styling (drop cap, motif divider, cover, byline).
- `src/pages/portfolio.astro` — portfolio in the shared chrome: "Storytelling
  with Data" hero, the data projects (study figures, project bento with tool
  lists), short stories and articles, and the About section (`#about`).

## Run

```bash
npm install      # already done; reinstall if you move the folder
npm run dev      # http://localhost:4321
npm run build    # static output in dist/  (11 routes)
npm run preview  # preview the build
```

## Add a blog post

Create `src/content/blog/my-essay.md`:

```md
---
title: My Essay Title
date: 2026-07-01
description: One-line summary shown in lists.
category: On Something
readingTime: 5 min
cover: /images/ajanta/fresco.jpg   # optional
pull: An optional pull quote.       # optional, shown on the landing feature
---

Body in Markdown. Use ## headings and > blockquotes; the first paragraph
gets a drop cap automatically.
```

## Structure

```
src/
  layouts/Layout.astro      shared masthead + footer chrome + Google Fonts
  styles/global.css         magazine design tokens (palette, type, .prose, helpers)
  content.config.ts         blog collection schema (Astro 7 glob loader)
  content/blog/*.md         the essays (frontmatter + Markdown body)
  pages/index.astro         blog landing (magazine)
  components/PostIndex.astro  shared essay / fiction index
  pages/blog/index.astro    essay index
  pages/fiction/index.astro fiction index
  pages/blog/[slug].astro   article engine
  pages/portfolio.astro     portfolio and about
public/
  images/                   source assets (paper, murals, banner, pattern)
  images/warli/             section-marker icons cropped from warli-icons.png
  images/ajanta/            public-domain Ajanta frescoes (Wikimedia) for essay covers
```

## Notes

- Built on **Astro 7** (Content Layer API): the collection uses the `glob()`
  loader in `src/content.config.ts`, and `[slug].astro` uses `getStaticPaths()`
  with `render(post)` and `post.id` (not the older `post.render()` / `post.slug`).
- Fonts: Playfair Display (display), Spectral (body), Archivo (labels), all
  from Google Fonts.
- Imagery: provided folk-art assets + public-domain Ajanta frescoes. Swap any
  `/images/...` path to use your own art.
- Deploy: `npm run build` produces a static `dist/` deployable to Netlify,
  Vercel, Cloudflare Pages, GitHub Pages, etc.
