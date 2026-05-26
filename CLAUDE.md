# F1 AeroLab Frontend — Claude Code Context

## Project
Real-time Formula 1 aerodynamics simulation UI. Users tune car parameters via sliders and instantly see aerodynamic forces update through a live WebSocket connection to the NestJS backend.

**Current phase:** Phase 1 — Simulation UI (sliders + charts + presets)
**Next phase:** Phase 2 — AI explanation panel (OpenAI responses from backend)
**Backend:** `../f1-aerolab-backend` — runs on `localhost:3001`

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js (App Router) | 16.x | Framework, routing, SSR |
| React | 19.x | UI |
| TypeScript | 5.x | Types — strict mode, no `any` |
| Tailwind CSS | 4.x | Styling — config lives in `globals.css` via `@theme` |
| Zustand | 5.x | Global state management |
| Socket.io-client | — | WebSocket connection to backend |
| Recharts | — | Aerodynamic performance charts |

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router — routes only
│   ├── (public)/           # Public landing pages
│   ├── simulation/         # Main simulation page (Phase 1)
│   ├── learn/              # F1 aerodynamics education (Phase 3)
│   ├── build/              # Tech stack / architecture page (Phase 3)
│   ├── api/                # Next.js route handlers (if needed)
│   ├── layout.tsx
│   └── page.tsx
│
├── components/             # Reusable UI — no business logic, no direct store access
│   ├── ui/                 # Primitives: Button, Slider, Badge, Input, Card
│   ├── shared/             # Navbar, Footer, PageHeader, LoadingSpinner
│   ├── forms/              # ParameterForm, PresetSaveForm
│   ├── cards/              # PresetCard, StatCard, AeroMetricCard
│   └── layouts/            # SimulationLayout, PageShell
│
├── lib/
│   ├── api/                # REST fetch functions (presets, simulation/run)
│   ├── socket/             # Socket.io-client instance + event constants
│   ├── validations/        # Zod schemas for form input
│   ├── utils/              # formatNumber, clamp, cn() class utility
│   ├── constants/          # API_URL, WS_URL, slider min/max limits
│   └── locales/            # en.ts, ka.ts — all UI text lives here
│
├── hooks/                  # Custom React hooks: useSocket, useDebounce, useLocale
├── store/                  # Zustand stores: simulationStore.ts, presetsStore.ts, localeStore.ts
├── types/                  # Global TypeScript types: SimResult, Preset, SimParams, Lang
├── styles/                 # Additional global styles if needed
├── providers/              # React context providers: SocketProvider, QueryProvider
├── middleware.ts            # Route middleware (extend for auth in Phase 3)
└── env.ts                  # Type-safe env vars — always import from here, never process.env directly
```

---

## Design System

### Colors (defined in `src/app/globals.css` via `@theme`)

| Token | Value | Use |
|-------|-------|-----|
| `text-f1-white` / `bg-f1-white` | `#f5f5f5` | Primary text, headings |
| `text-f1-muted` / `bg-f1-muted` | `#6b6b6b` | Secondary text, labels, captions |
| `text-f1-red` / `bg-f1-red` | `#e10600` | Primary brand, CTAs, highlights |
| `bg-f1-red-dark` | `#a80400` | Red hover state |
| `bg-f1-black` | `#0a0a0a` | Page background |
| `bg-f1-surface` | `#141414` | Cards, panels, sidebars |
| `border-f1-border` | `#242424` | Dividers, card borders |
| `text-downforce` / `stroke-downforce` | `#3b82f6` | Downforce chart line / value |
| `text-drag` / `stroke-drag` | `#f97316` | Drag chart line / value |
| `text-grip` / `stroke-grip` | `#22c55e` | Grip chart line / value |

**Rule:** Never use raw hex values in JSX. Always use the token classes above.

### Typography
- **Font:** Geist Sans (variable `--font-geist-sans`) for UI, Geist Mono (`--font-mono`) for numeric readouts
- **Headings:** `font-bold tracking-tight text-f1-white`
- **Body:** `text-f1-muted` for secondary content, `text-f1-white` for primary
- **Numeric data** (speeds, forces): always use `font-mono`

### Spacing & Shape
- Cards / panels: `rounded-xl bg-f1-surface border border-f1-border`
- Buttons (primary): `rounded-full bg-f1-red px-8 py-3 text-sm font-semibold text-white hover:bg-f1-red-dark`
- Buttons (ghost): `rounded-full border border-f1-border px-6 py-2 text-sm text-f1-muted hover:text-f1-white`

### Icons
All icons come from **Google Material Symbols** (via Google Fonts). No other icon library.

Add the font to `layout.tsx`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" />
```

Usage in JSX:
```tsx
<span className="material-symbols-rounded">speed</span>
<span className="material-symbols-rounded">air</span>
<span className="material-symbols-rounded">settings</span>
```

Size and color are controlled with Tailwind:
```tsx
<span className="material-symbols-rounded text-2xl text-f1-red">bolt</span>
```

**Rule:** Never install `react-icons`, `lucide-react`, or any other icon package. If an icon is needed, find it at [fonts.google.com/icons](https://fonts.google.com/icons) and use the ligature name.

---

## Localisation

All visible text must come from a locale file. Never hardcode UI strings in JSX.

### File structure
```
src/lib/locales/
├── en.ts       # English (default)
└── ka.ts       # Georgian
```

### Shape convention
```typescript
// src/lib/locales/en.ts
const en = {
  nav: {
    simulation: "Simulation",
    learn: "Learn",
    build: "Build",
  },
  simulation: {
    title: "Simulation",
    parameters: "Car Parameters",
    speed: "Speed",
    wingAngle: "Wing Angle",
    weight: "Weight",
    dragCoefficient: "Drag Coefficient",
    launchCta: "Launch Simulation",
  },
  presets: {
    title: "Presets",
    save: "Save Preset",
    delete: "Delete",
    namePlaceholder: "Enter preset name…",
  },
  errors: {
    connectionFailed: "Could not connect to simulation server.",
    invalidParams: "Invalid parameters.",
  },
} as const;

export default en;
export type Locale = typeof en;   // ka.ts must satisfy this type
```

### Usage
```typescript
// src/hooks/useLocale.ts
import { useLocaleStore } from "@/store/localeStore";
import en from "@/lib/locales/en";
import ka from "@/lib/locales/ka";

const locales = { en, ka } as const;

export function useLocale() {
  const lang = useLocaleStore((s) => s.lang);
  return locales[lang];
}

// In any component:
const t = useLocale();
<h1>{t.simulation.title}</h1>
```

### Rules
- `ka.ts` must export an object that satisfies `Locale` (TypeScript will catch missing keys)
- Add new keys to `en.ts` first, then `ka.ts` immediately after — never leave one file ahead of the other
- No translation library needed — this project uses a lightweight custom hook

---

## State Management (Zustand)

| Store | State | Actions |
|-------|-------|---------|
| `simulationStore` | `params`, `result`, `isConnected`, `isLoading` | `setParams`, `setResult`, `setConnected` |
| `presetsStore` | `presets`, `isLoading` | `setPresets`, `addPreset`, `removePreset` |
| `localeStore` | `lang: 'en' \| 'ka'` | `setLang` |

**Rules:**
- Stores hold data only — no fetch calls, no socket logic inside a store
- All server communication happens in hooks (`useSimulation`, `usePresets`) which then call store actions
- Components read from the store via selectors; never pass store state down as deep props

---

## Backend Contract

### WebSocket (Socket.io — `localhost:3001`)

| Direction | Event | Payload |
|-----------|-------|---------|
| Client → Server | `simulate:update` | `{ speed, wingAngle, weight, dragCoefficient }` |
| Server → Client | `simulate:result` | `{ downforce, drag, lift, aeroEfficiency, grip, weightTransfer, chartData }` |
| Server → Client | `simulate:error` | `{ code, message, details }` |

`chartData`: array of 41 points `{ speed, downforce, drag }`, speed 0–400 km/h in steps of 10.

### REST (`localhost:3001`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/simulation/run` | One-shot calculation (no WebSocket) |
| GET | `/presets` | List all presets |
| POST | `/presets` | Save preset |
| GET | `/presets/:id` | Get preset |
| DELETE | `/presets/:id` | Delete preset |

---

## Coding Rules

### 1. KISS — Keep It Simple
Write the simplest thing that works. No over-engineering, no abstractions for things that only appear once.
Three similar lines of JSX is better than a premature abstraction. Abstract when a pattern repeats 3+ times.

### 2. Thin components, smart hooks
- Components render — they do not fetch, calculate, or talk to sockets
- Hooks orchestrate — they connect to stores, call APIs, manage WebSocket state
- If a component file grows past ~100 lines, it is doing too much

### 3. TypeScript strict — no shortcuts
- No `any`. Use `unknown` and narrow it, or define a proper type in `src/types/`
- All function arguments and return values must be typed
- Prop types are inline interfaces, not `React.FC<{...}>`

### 4. One responsibility per file
- A component file exports one component
- A store file owns one slice of state
- A hook file exports one hook

### 5. Constants over magic values
```typescript
// Bad
if (speed > 400) ...
// Good — value lives in src/lib/constants/
if (speed > SPEED_MAX) ...
```

### 6. No direct `process.env` access
Always import from `src/env.ts`:
```typescript
import env from "@/env";
fetch(`${env.NEXT_PUBLIC_API_URL}/presets`);
```

### 7. cn() for conditional classes
Use the `cn()` utility (from `src/lib/utils/`) to merge and conditionally apply Tailwind classes:
```typescript
<div className={cn("rounded-xl bg-f1-surface", isActive && "border border-f1-red")} />
```

### 8. No string literals in JSX
All visible text comes from the locale hook. The only exception is `aria-label` attributes that mirror the same locale key.

---

## Commit Rules

Same convention as the backend — conventional commits:

| Type | When |
|------|------|
| `feat:` | new page, component, or feature |
| `fix:` | bug fix |
| `style:` | styling / design changes only |
| `refactor:` | restructure without behavior change |
| `i18n:` | locale file changes |
| `chore:` | deps, config, tooling |

---

## Comment Rules

- **Language:** English only
- **When:** Only explain **why** — a workaround, a non-obvious constraint, a subtle invariant
- **Never:** Explain what the code does (well-named code does that already)

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3001` | Backend REST base URL |
| `NEXT_PUBLIC_WS_URL` | `http://localhost:3001` | Backend WebSocket URL |

Defined in `.env.local` (not committed). Accessed only through `src/env.ts`.

---

## Running Locally
```bash
npm run dev       # dev server on port 3000
npm run build     # production build
npm run start     # serve production build
```

Backend must be running on `localhost:3001` for WebSocket and REST to work.

---

## Out of Scope (Phase 1)
- User authentication
- AI explanation panel (Phase 2)
- Georgian locale implementation (locale files scaffolded, content deferred)
- 3D car visualization
- Mobile layout (nice to have, not required)
