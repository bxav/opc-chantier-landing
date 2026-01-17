# OptiChantier - Design System & Graphical Charter

## Brand Identity

### Brand Essence
OptiChantier combines **professionalism** with **approachability**. The design reflects the robustness of the construction industry while maintaining a modern, digital-first aesthetic.

### Brand Attributes
- **Reliable** - Works offline, data stays local
- **Professional** - Built for serious work
- **Simple** - No learning curve
- **Modern** - AI-powered, forward-thinking

---

## Logo

### Primary Logo
The logo consists of:
1. **Icon**: A house/building silhouette in a rounded square
2. **Wordmark**: "OptiChantier" in bold sans-serif

### Logo Specifications
```
┌─────────────┐
│   ╱╲        │
│  ╱  ╲       │  Icon: 9x9 unit square
│ ╱────╲      │  Corner radius: 20%
│ │ ┌┐ │      │  Stroke: 2px
│ │ └┘ │      │
└─────────────┘
```

### Logo Usage
- Minimum size: 32px (digital), 10mm (print)
- Clear space: Equal to icon height on all sides
- Never distort, rotate, or change colors outside approved palette

---

## Color Palette

### Primary Colors

| Name | OKLCH | Hex | Usage |
|------|-------|-----|-------|
| **Primary Orange** | `oklch(0.62 0.24 30)` | `#ea580c` | CTAs, links, accents |
| **Primary Foreground** | `oklch(0.99 0 0)` | `#ffffff` | Text on primary |

### Secondary Colors

| Name | OKLCH | Hex | Usage |
|------|-------|-----|-------|
| **Gold** | `oklch(0.80 0.12 85)` | `#d4a574` | Decorative accents |
| **Background** | `oklch(0.99 0.005 80)` | `#fffbf7` | Page background |
| **Foreground** | `oklch(0.15 0.02 250)` | `#1a1a2e` | Primary text |

### Neutral Colors

| Name | OKLCH | Usage |
|------|-------|-------|
| **Muted** | `oklch(0.96 0.01 80)` | Subtle backgrounds |
| **Muted Foreground** | `oklch(0.50 0.02 250)` | Secondary text |
| **Border** | `oklch(0.92 0.01 80)` | Dividers, borders |

### Semantic Colors

| Name | OKLCH | Usage |
|------|-------|-------|
| **Success** | `oklch(0.60 0.18 150)` | Positive feedback |
| **Info** | `oklch(0.55 0.20 250)` | Informational |
| **Destructive** | `oklch(0.58 0.24 27)` | Errors, warnings |

### Gradients

```css
/* Primary gradient (text) */
background: linear-gradient(135deg, oklch(0.62 0.24 30), oklch(0.80 0.15 60));

/* Mesh gradient (CTA background) */
background:
  radial-gradient(ellipse at 20% 30%, oklch(0.62 0.24 30 / 0.4) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 70%, oklch(0.80 0.12 85 / 0.3) 0%, transparent 50%);
```

---

## Typography

### Font Families

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Sans-serif** | Geist Sans | 400-700 | Body text, UI elements |
| **Serif** | Playfair Display | 400-900 | Headlines, emphasis |
| **Monospace** | Geist Mono | 400 | Code, technical content |

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| **Display** | 72px (4.5rem) | 1.1 | Hero headlines |
| **H1** | 48px (3rem) | 1.2 | Page titles |
| **H2** | 36px (2.25rem) | 1.25 | Section headers |
| **H3** | 24px (1.5rem) | 1.3 | Subsections |
| **Body Large** | 20px (1.25rem) | 1.6 | Lead paragraphs |
| **Body** | 16px (1rem) | 1.6 | Default text |
| **Small** | 14px (0.875rem) | 1.5 | Captions, meta |
| **XSmall** | 12px (0.75rem) | 1.4 | Labels, badges |

### Typography Examples

```html
<!-- Hero headline -->
<h1 class="text-6xl font-serif font-bold">
  <span class="text-gradient-primary">Pilotez vos chantiers</span>
</h1>

<!-- Section header -->
<h2 class="text-4xl font-serif tracking-tight">
  Tout ce qu'il vous faut
</h2>

<!-- Body text -->
<p class="text-lg text-muted-foreground">
  Des outils pensés pour le terrain.
</p>
```

---

## Spacing System

Based on 4px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Element padding |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Default gap |
| `space-6` | 24px | Section padding |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Section margins |
| `space-16` | 64px | Page sections |
| `space-24` | 96px | Major sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Small elements, badges |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 10px | Cards |
| `radius-xl` | 14px | Large cards |
| `radius-2xl` | 18px | Modals |
| `radius-full` | 9999px | Pills, avatars |

---

## Shadows

### Depth System

```css
/* Standard depth */
.shadow-depth {
  box-shadow:
    0 1px 2px oklch(0 0 0 / 0.04),
    0 4px 8px oklch(0 0 0 / 0.04),
    0 8px 16px oklch(0 0 0 / 0.04),
    0 16px 32px oklch(0 0 0 / 0.04);
}

/* Large depth (hover states) */
.shadow-depth-lg {
  box-shadow:
    0 2px 4px oklch(0 0 0 / 0.04),
    0 8px 16px oklch(0 0 0 / 0.06),
    0 16px 32px oklch(0 0 0 / 0.06),
    0 32px 64px oklch(0 0 0 / 0.08);
}
```

---

## Components

### Buttons

#### Primary Button
```jsx
<Button className="rounded-full px-8 shadow-lg hover:shadow-primary/25">
  Commencer gratuitement
</Button>
```
- Background: Primary orange
- Text: White
- Border radius: Full (pill shape)
- Shadow: Subtle glow on hover

#### Secondary Button
```jsx
<Button variant="outline" className="rounded-full px-8">
  En savoir plus
</Button>
```
- Background: Transparent
- Border: 1px solid border color
- Text: Foreground

#### Ghost Button
```jsx
<Button variant="ghost">
  Retour
</Button>
```
- Background: Transparent
- Hover: Subtle background

### Cards

```jsx
<Card className="rounded-2xl shadow-depth hover:shadow-depth-lg transition-all hover:-translate-y-1">
  <CardContent className="p-6">
    ...
  </CardContent>
</Card>
```

Standard card properties:
- Border radius: 16px (2xl)
- Padding: 24px
- Border: 1px subtle
- Hover: Lift effect (-1px translate)

### Badges

```jsx
<Badge variant="secondary" className="bg-accent/50 border-primary/20">
  Pour les pros du BTP
</Badge>
```

### Form Inputs

```jsx
<input className="w-full px-4 py-2.5 rounded-xl border border-input
  focus:ring-2 focus:ring-primary/20 focus:border-primary" />
```

---

## Animations

### Entrance Animations

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `fade-up` | 600ms | ease-out | Content reveal |
| `fade-in` | 500ms | ease-out | Subtle appear |
| `scale-in` | 500ms | ease-out | Modal, images |

### Stagger Delays
```css
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
/* ... up to delay-800 */
```

### Floating Animations

```css
/* Decorative orbs */
.animate-float-orb {
  animation: float-orb 15s ease-in-out infinite;
}

/* Card hover */
.hover:-translate-y-1 {
  transition: transform 0.3s ease;
}
```

### Glow Effects

```css
/* Subtle pulse on CTAs */
.animate-glow-pulse-subtle {
  animation: glow-pulse-subtle 4s ease-in-out infinite;
}
```

---

## Layout

### Container
```css
.max-w-7xl { max-width: 80rem; /* 1280px */ }
.mx-auto { margin-inline: auto; }
.px-4 { padding-inline: 1rem; }
```

### Grid Systems

**Bento Grid** (Features section)
```css
.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-6
```

**Two-Column Layout** (Contact page)
```css
.grid.lg:grid-cols-5.gap-12
/* Content: col-span-3, Sidebar: col-span-2 */
```

### Section Spacing
```css
section { padding-block: 6rem; /* 96px */ }
```

---

## Iconography

### Icon Library
Using **Lucide React** for consistency.

### Icon Sizes
| Context | Size |
|---------|------|
| Inline text | 16px (w-4 h-4) |
| Buttons | 16-20px |
| Feature cards | 24-28px |
| Hero elements | 32px+ |

### Icon Style
- Stroke width: 2px (default)
- Corner radius: Rounded
- Style: Outline (not filled)

---

## Imagery

### Photo Style
- Natural lighting
- Construction site context
- Real professionals at work
- Warm color grading

### Placeholder Strategy
For MVP, using:
- Gradient backgrounds with geometric patterns
- Category-specific icons
- Decorative SVG elements

### Illustrations
- Minimal, geometric style
- Primary color accents
- Abstract representations of features

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

### Mobile-First Approach
```css
/* Base: Mobile */
.grid-cols-1

/* Tablet */
.md:grid-cols-2

/* Desktop */
.lg:grid-cols-3
```

---

## Accessibility

### Color Contrast
- All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- Interactive elements have visible focus states

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

### Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

## File Structure

```
src/
├── app/
│   └── globals.css          # Global styles, CSS variables
├── components/
│   ├── ui/                  # Base components (Button, Card, Badge)
│   ├── landing/             # Page-specific components
│   ├── shared/              # Reusable (PageHeader, Breadcrumb)
│   └── seo/                 # Structured data components
└── lib/
    └── utils.ts             # cn() helper for classnames
```

---

## Usage Guidelines

### Do
- Use primary orange sparingly for CTAs and key actions
- Maintain generous whitespace
- Use serif font for headlines to add warmth
- Apply subtle animations for polish

### Don't
- Overuse gradients or glow effects
- Mix too many colors in one section
- Use animations that distract from content
- Neglect mobile-first approach

---

*Design System version: 1.0 - January 2026*
