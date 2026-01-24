# BrickNote Documentation

## Contents

| Document | Description |
|----------|-------------|
| [Executive Summary](./EXECUTIVE_SUMMARY.md) | Project overview, market, roadmap |
| [Design System](./DESIGN_SYSTEM.md) | Graphical charter, components, guidelines |

## Quick Links

- **Landing Page**: https://www.bricknote.ai
- **Contact**: contact@bricknote.ai

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono, Playfair Display
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/cas-utilisation` | Use cases by persona |
| `/contact` | Contact form + FAQ |
| `/ressources` | Blog listing |
| `/ressources/[slug]` | Article pages |

## SEO & GEO

The site includes:
- Dynamic favicon and Apple icons
- Open Graph images
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Meta tags optimized for AI search engines
