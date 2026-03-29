

## UI Library Comparison Demo

### Overview
Create a `/demo` page with tabs — one per library — each showing a mini event-management dashboard (stats cards, a data table, a form, badges/buttons). This lets you compare look, feel, and animation quality side by side.

### Libraries to compare

| Tab | Approach |
|-----|----------|
| **shadcn/ui** | Already installed — use existing components |
| **HeroUI** | Install `@heroui/react` + provider — use their Card, Table, Button, Input, Badge |
| **Magic UI** | Copy animated component patterns (animated counters, shimmer borders, marquee) into the project — no npm package needed |
| **Tailwind Only** | Hand-built with pure Tailwind classes, no component library |

### What each mini-page shows
- **3 stat cards** (Total Jobs, Active Crew, Vehicles)
- **A small table** (4-5 rows of fake job data)
- **A short form** (2 inputs + dropdown + button)
- **Badge/tag examples** (status indicators)

### Files to create/edit

1. **Install HeroUI**: Add `@heroui/react` and `framer-motion` (HeroUI peer dep) to `package.json`
2. **`src/pages/DemoComparison.tsx`** — Container page with 4 tabs
3. **`src/components/demo/ShadcnDemo.tsx`** — Mini dashboard using existing shadcn components
4. **`src/components/demo/HeroUIDemo.tsx`** — Mini dashboard using HeroUI components (wrapped in HeroUIProvider)
5. **`src/components/demo/MagicUIDemo.tsx`** — Mini dashboard with animated Magic UI-style effects (shimmer borders, number tickers, subtle glow cards)
6. **`src/components/demo/TailwindDemo.tsx`** — Mini dashboard built with pure Tailwind utility classes
7. **`src/App.tsx`** — Add `/demo` route
8. **`src/components/AppSidebar.tsx`** — Add a demo/palette icon link to the sidebar

### Technical notes
- HeroUI needs its own `HeroUIProvider` wrapper — scoped inside the HeroUI demo tab only, not app-wide
- Magic UI effects will be self-contained CSS animations + small React components (no external package)
- Each demo tab is independent so they don't interfere with each other's styles
- A label strip at the top of each tab names the library with a brief tagline

