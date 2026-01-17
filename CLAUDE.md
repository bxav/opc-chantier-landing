# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run lint   # ESLint
```

## Architecture

Next.js 16 App Router landing page for OptiChantier (BTP construction iOS app).

**Structure:**
- `src/app/` - Pages using App Router (page.tsx, layout.tsx)
- `src/components/` - Component groups: `landing/`, `ui/`, `shared/`, `blog/`, `contact/`, `use-cases/`, `seo/`
- `src/content/` - Static content (articles.ts)
- `src/lib/utils.ts` - Tailwind merge utility

**UI Stack:**
- shadcn/ui (new-york style) with Radix primitives
- Tailwind CSS v4 with CSS variables
- lucide-react icons

**Aliases:** `@/*` → `./src/*`
