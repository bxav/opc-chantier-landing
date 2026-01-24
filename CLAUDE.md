# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run lint   # ESLint
```

## Architecture

Next.js 16 App Router landing page for BrickNote (BTP construction iOS app).

**Structure:**
- `src/app/` - Pages using App Router (page.tsx, layout.tsx)
- `src/components/` - Component groups: `landing/`, `ui/`, `shared/`, `blog/`, `contact/`, `use-cases/`, `seo/`, `mdx/`
- `src/lib/content.ts` - Velite content utilities
- `src/lib/utils.ts` - Tailwind merge utility
- `content/blog/{en,fr}/` - MDX blog articles

**UI Stack:**
- shadcn/ui (new-york style) with Radix primitives
- Tailwind CSS v4 with CSS variables
- lucide-react icons

**Aliases:**
- `@/*` → `./src/*`
- `#site/content` → `./.velite`

## Content System (Velite + MDX)

Blog articles use Velite for MDX processing with localized slugs.

**Adding articles:**
1. Create MDX file in `content/blog/{locale}/slug.mdx`
2. Add frontmatter: title, description, date, category, readTime, translationKey
3. Use same `translationKey` for EN/FR pairs to enable hreflang

**Frontmatter schema:**
```yaml
title: "Article Title"
description: "Short description"
date: 2026-01-15
category: guide | conseil | actualite
readTime: 8
image: "/images/blog/article-image.png"  # optional
translationKey: unique-key-for-translations
```

**Content utilities:** `src/lib/content.ts`
- `getBlogPosts(locale)` - all posts for locale
- `getBlogPost(slug, locale)` - single post
- `getTranslation(translationKey, locale)` - get alternate language version

## Image Generation

Generate blog images using Nano Banana Pro (Gemini 3 Pro Image).

**Setup:** Add `GOOGLE_AI_API_KEY` to `.env.local`

**Generate images:**
```bash
npx tsx scripts/generate-blog-images.ts
```

**Script behavior:**
- Generates 2K 16:9 images for each article
- Skips existing images (delete to regenerate)
- Auto-updates frontmatter with image paths
- Images saved to `public/images/blog/`

**Adding new articles:** Edit `scripts/generate-blog-images.ts` to add prompts for new articles
