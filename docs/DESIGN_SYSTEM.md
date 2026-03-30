# Design System & Theme Reference

> **For Claude Agent context** — paste this file into your system prompt or context window.

---

## 1. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.x |
| Build | Vite | 5.x |
| Styling | Tailwind CSS | 3.x |
| UI Library | HeroUI (formerly NextUI) | 3.x |
| Animation | Framer Motion | 12.x |
| Component Base | shadcn/ui (Radix primitives) | latest |
| Font | DM Sans | Google Fonts |
| Icons | Lucide React | 0.462+ |

---

## 2. Color Tokens (HSL)

All colors are defined as CSS custom properties in `src/index.css`. Use via Tailwind semantic classes — **never hardcode colors**.

### Light Mode (`:root`)

| Token | HSL Value | Tailwind Class | Usage |
|-------|-----------|---------------|-------|
| `--background` | `0 0% 98%` | `bg-background` | Page background |
| `--foreground` | `0 0% 7%` | `text-foreground` | Primary text |
| `--card` | `0 0% 100%` | `bg-card` | Card surfaces |
| `--card-foreground` | `0 0% 7%` | `text-card-foreground` | Card text |
| `--primary` | `0 0% 9%` | `bg-primary`, `text-primary` | Primary actions |
| `--primary-foreground` | `0 0% 98%` | `text-primary-foreground` | Text on primary |
| `--secondary` | `0 0% 94%` | `bg-secondary` | Secondary surfaces |
| `--secondary-foreground` | `0 0% 20%` | `text-secondary-foreground` | Secondary text |
| `--muted` | `0 0% 95%` | `bg-muted` | Muted backgrounds |
| `--muted-foreground` | `0 0% 45%` | `text-muted-foreground` | Subdued text |
| `--accent` | `0 0% 94%` | `bg-accent` | Accent surfaces |
| `--destructive` | `0 72% 51%` | `bg-destructive` | Error/danger |
| `--border` | `0 0% 90%` | `border-border` | Borders |
| `--input` | `0 0% 90%` | `border-input` | Input borders |
| `--ring` | `0 0% 9%` | `ring-ring` | Focus rings |
| `--radius` | `0.5rem` | `rounded-lg` | Default radius |

### Status Colors

| Token | Light HSL | Usage |
|-------|-----------|-------|
| `--status-confirmed` | `142 60% 40%` | Confirmed badge text |
| `--status-confirmed-bg` | `142 60% 95%` | Confirmed badge bg |
| `--status-prepping` | `38 92% 50%` | Prepping badge text |
| `--status-prepping-bg` | `38 92% 95%` | Prepping badge bg |
| `--status-live` | `0 72% 51%` | Live badge text |
| `--status-live-bg` | `0 72% 95%` | Live badge bg |
| `--status-wrapped` | `220 9% 46%` | Wrapped badge text |
| `--status-wrapped-bg` | `220 9% 94%` | Wrapped badge bg |

### Dark Mode (`.dark`)

All tokens have dark counterparts defined in `src/index.css` under `.dark`. The palette inverts: backgrounds become `0 0% 5-8%`, foregrounds become `0 0% 92%`, borders are `0 0% 16%`.

---

## 3. Typography

- **Font**: DM Sans (weights: 300, 400, 500, 600, 700)
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:...')`
- **Tailwind class**: `font-sans` (configured in `tailwind.config.ts`)
- **Body**: `antialiased` rendering

---

## 4. Spacing & Layout

| Property | Value | Tailwind |
|----------|-------|----------|
| Border radius (lg) | `0.5rem` | `rounded-lg` |
| Border radius (md) | `calc(0.5rem - 2px)` | `rounded-md` |
| Border radius (sm) | `calc(0.5rem - 4px)` | `rounded-sm` |
| Container max width | `1400px` | `container` |
| Container padding | `2rem` | (built in) |
| Sidebar width | `64px` (collapsed) | `ml-16` on main |

---

## 5. Component Inventory

### From shadcn/ui (Radix-based)
Located in `src/components/ui/`:
Accordion, AlertDialog, Alert, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, InputOTP, Input, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup, Tooltip

### From HeroUI v3
Import from `@heroui/react`:
Card, Button, Chip, Input, Skeleton, Spinner, Table, Tabs, Avatar, Badge, Modal, Popover, Tooltip, Select, Checkbox, Switch, Progress, Accordion, Dropdown

### Animated Primitives
Located in `src/components/animated/`:

| Component | Import | Purpose |
|-----------|--------|---------|
| `AnimatedCard` | `@/components/animated` | Card with fade+scale entrance |
| `AnimatedList` | `@/components/animated` | Staggered list item animation |
| `Skeleton` | `@/components/animated` | Basic pulse skeleton block |
| `SkeletonCard` | `@/components/animated` | Stat-card shaped skeleton |
| `SkeletonRow` | `@/components/animated` | Table row skeleton |
| `SkeletonDashboard` | `@/components/animated` | Full dashboard loading state |
| `PageTransition` | `@/components/animated` | Route fade+slide transition |
| `HoverScale` | `@/components/animated` | Hover scale+lift micro-interaction |

---

## 6. Animation System

### Tailwind Animations (CSS)
Defined in `tailwind.config.ts`, usable as classes:

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-fade-in` | Fade up | 0.3s ease-out |
| `animate-fade-out` | Fade down | 0.3s ease-out |
| `animate-scale-in` | Scale up | 0.2s ease-out |
| `animate-slide-in-right` | Slide from right | 0.3s ease-out |
| `animate-slide-out-right` | Slide to right | 0.3s ease-out |
| `animate-enter` | Fade + scale combined | 0.3s |
| `animate-accordion-down` | Expand height | 0.2s ease-out |
| `animate-accordion-up` | Collapse height | 0.2s ease-out |

### Framer Motion Primitives

**AnimatedCard** — Staggered card entrance:
```tsx
<AnimatedCard delay={0.1}>
  <h3>Title</h3>
</AnimatedCard>
```

**AnimatedList** — Staggered list:
```tsx
<AnimatedList stagger={0.06}>
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</AnimatedList>
```

**HoverScale** — Micro-interaction wrapper:
```tsx
<HoverScale scale={1.05}>
  <Card>Hoverable content</Card>
</HoverScale>
```

**PageTransition** — Route transitions:
```tsx
<PageTransition transitionKey={location.pathname}>
  <PageContent />
</PageTransition>
```

---

## 7. Skeleton Loading Pattern

Use skeleton loading for any data-fetching view:

```tsx
import { SkeletonDashboard } from "@/components/animated";

function MyPage() {
  const [loading, setLoading] = useState(true);

  if (loading) return <SkeletonDashboard />;

  return <ActualContent />;
}
```

Available skeleton components:
- `Skeleton` — single block (pass className for size: `className="h-4 w-24"`)
- `SkeletonCard` — stat card shape
- `SkeletonRow` — table row (configure `cols` prop)
- `SkeletonDashboard` — full 3-card + table layout

---

## 8. File Structure

```
src/
├── components/
│   ├── animated/          # Framer Motion primitives
│   │   ├── index.ts       # Barrel export
│   │   ├── AnimatedCard.tsx
│   │   ├── AnimatedList.tsx
│   │   ├── HoverScale.tsx
│   │   ├── PageTransition.tsx
│   │   └── SkeletonLoader.tsx
│   ├── demo/              # UI library demos
│   ├── ui/                # shadcn/ui components
│   └── ...                # App components
├── data/                  # Sample/mock data
├── hooks/                 # Custom hooks
├── pages/                 # Route pages
├── index.css              # Design tokens (CSS vars)
└── App.tsx                # Root with providers
```

---

## 9. Rules for the Claude Agent

1. **Never hardcode colors** — always use semantic tokens (`bg-primary`, `text-muted-foreground`, etc.)
2. **All colors must be HSL** in `index.css` and `tailwind.config.ts`
3. **Use animated primitives** for new components instead of raw CSS animations
4. **Skeleton loading** is mandatory for any view that fetches data
5. **HeroUI components** are preferred for: Button, Card, Chip, Input, Skeleton, Spinner, Table
6. **shadcn/ui components** are preferred for: Dialog, Sheet, Dropdown, Form, Sidebar, Tabs, Toast
7. **DM Sans** is the only font — do not add other fonts
8. **Dark mode** must always be supported — test both themes
9. **Border radius** uses the `--radius` token system, not hardcoded values
10. **Framer Motion** for JS animations; Tailwind `animate-*` classes for CSS-only animations
