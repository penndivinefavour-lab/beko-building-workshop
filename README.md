# BEKO Building Workshop | Sustainable African Architecture & Passive Design Atelier

> **Disclaimer & Concept Attribution**: This website is an independent architectural and construction studio concept developed by **ICON Studios**. It is a speculative design demonstration showcasing modern African tropical vernacular, passive climate engineering, and tectonic craft. It is **not** the official commercial website of any registered entity, and all featured case studies, research monographs, and figures are presented for conceptual and portfolio demonstration purposes.

---

## 🏛 Overview

**BEKO Building Workshop** explores an architecture born from equatorial soil, answering directly to the climate, and crafted by master regional artisans. The atelier fuses radical passive thermodynamics, monolithic stabilized earth masonry, mass timber structural assemblies, and computational microclimate simulation.

The digital experience is crafted to reflect the physical ethos of the workshop: monolithic, tactile, quiet luxury, engineered for peak performance across both mobile Android devices and high-resolution desktop displays.

---

## ✨ Key Features & Architectural Modules

1. **Atelier Identity & Atmospheric Hero**:
   - High-impact architectural visual narrative with pre-loaded high-efficiency WebP media.
   - Real-time studio coordinates (`01°57'S 30°04'E // Kigali`) and live Central Africa Time (CAT) atelier clock.
   - Comprehensive performance metrics strip (-48% average embodied carbon reduction, 100% passive-first climate design).

2. **Selected Built Works & Architectural Dossiers**:
   - Filterable portfolio spanning Private Residences, Civic & Cultural Pavilions, Innovation Campuses, and Eco-Resorts across Rwanda, Kenya, Tanzania, Nigeria, Senegal, and South Africa.
   - Dual presentation modes: **Visual Grid View** with hover elevation and **Monograph Ledger Mode** for tabular specification scanning.
   - In-depth Project Dossier Modals featuring:
     - Spatial narratives & architectural concept briefs.
     - Interactive **CAD / Blueprint Overlay** displaying structural sections, load vectors, and thermal air paths.
     - Full engineering specification sheets (GFA, Structural Systems, Carbon Savings).
     - Passive climate physics checklists and regional materials palettes.

3. **Workshop Philosophy & Interactive Thermodynamic Flywheel**:
   - The 4 Pillars of Practice: Passive Climate Thermodynamics, Geological Materiality, The Master Guild Model, and Computational Ecology.
   - **Interactive Diurnal Thermal Cycle Simulator**: Visualizes how 450mm stabilized earth walls absorb midday insolation (8-hour phase lag) and purge heat via nocturnal stack ventilation without active mechanical air conditioning.

4. **Tectonic & Materiality Laboratory**:
   - Interactive substrate library detailing Stabilized Rammed Earth, Kiln-Fired Terracotta Brise-Soleil, African Mass Timber (Eucalyptus & Teak), Honed Rift Volcanic Basalt, Oyster-Shell Pozzolanic Concrete, and Cast Architectural Bronze.
   - Technical parameter breakdowns: Provenance, Embodied Carbon, Thermal Volumetric Mass, Durability Cycles, and Tactile/Sensory Profiles.
   - Comparative circular carbon benchmarking.

5. **Interactive Project Scope & Investment Estimator**:
   - Real-time feasibility calculator allowing prospective clients to configure typology, gross built area (slider with one-tap mobile presets from 350 m² to 6,000 m²), microclimate zone, environmental performance tier, and workshop delivery model.
   - Synthesizes real-time investment ranges ($ USD & $/m²), project timelines, milestone phases, and avoided metric tons of CO2eq.
   - Direct transfer of calculated parameters into the studio commission brief.

6. **Studio Fellows & Regional Hubs**:
   - Directory of atelier leadership, environmental engineers, and master guild directors.
   - Continental hub telemetry across Kigali (HQ), Lagos, Nairobi, and London with live local time clocks and direct contact points.

7. **Open Monographs & Architectural Research Press**:
   - Open-access whitepapers on equatorial thermodynamics, eucalyptus mass timber seismic mechanics, and porous public shading.
   - Accessible abstract reader modal and **authentic client-side markdown dossier download generation**.

8. **Studio Commission Protocol**:
   - Comprehensive multi-step commissioning form supporting automatic pre-fill from both the project gallery and estimator.
   - Generates formal verification references (`BBW-COM-2025-XXXX`) and confirmation dossiers.

9. **CAD / Blueprint Drafting Mode**:
   - Global drafting toggle switching the interface into high-contrast architectural blueprint blue and cyan wireframe mode.

---

## 📱 Mobile UX & Accessibility (WCAG 2.1 AA)

- **Android Mobile Optimization**: Tested for Android Chrome, Samsung Internet, and mobile browsers.
- **Dynamic Viewport Stability**: Uses CSS `100dvh` and `viewport-fit=cover` to eliminate address-bar layout shifting.
- **Touch Ergonomics**: All interactive targets adhere to 44×44px / 48×48px Android touch guidelines with `touch-action: manipulation;`.
- **Modal Scroll Locking & Trapping**: Full background scroll locking (`document.body.style.overflow = 'hidden'`) and `Escape` key dismissal.
- **Motion Accessibility**: Full support for `@media (prefers-reduced-motion: reduce)` disabling transitions and smooth scrolls.
- **Accessible Navigation**: Hidden skip-to-content landmark, semantic ARIA dialog roles, accessible form labels, and high-contrast focus rings.

---

## ⚡ Performance Engineering

- **Payload Reduction**: Media optimized with modern WebP compression, achieving an **83% payload reduction** (6.4 MB → 1.08 MB).
- **LCP Optimization**: Strategic `<link rel="preload">` for the hero background with `fetchpriority="high"`.
- **CLS Prevention**: Explicit width/height aspect ratio wrappers on all lazy-loaded imagery (`loading="lazy"`, `decoding="async"`).
- **GPU Efficiency**: Eliminated expensive nested backdrop blur filters on mobile viewports (<640px) to maintain a rock-solid 60 FPS scroll.

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom architectural typography and color tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Cinzel* editorial serif & *Plus Jakarta Sans*)

---

## 📂 Project Directory Structure

```text
beko-building-workshop/
├── public/
│   ├── assets/
│   │   ├── hero.webp                  # Optimized hero photography
│   │   ├── hero.jpg                   # Original reference photography
│   │   └── projects/                  # High-res and WebP project assets
│   │       ├── kigali-residence.webp
│   │       ├── nairobi-innovation-hub.webp
│   │       ├── zanzibar-sanctuary.webp
│   │       ├── lagos-arts-centre.webp
│   │       ├── cape-winelands-estate.webp
│   │       └── dakar-interior-penthouse.webp
│   └── favicon.svg                    # Geometric atelier SVG brandmark
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Status ribbon, navigation, blueprint toggle
│   │   ├── Hero.tsx                   # Full-bleed visual hero & key metrics
│   │   ├── ProjectGallery.tsx         # Filterable project portfolio (Grid & Ledger)
│   │   ├── ProjectModal.tsx           # CAD overlay & technical specifications
│   │   ├── PhilosophySection.tsx      # 4 pillars & diurnal thermodynamic simulation
│   │   ├── MaterialityLab.tsx         # Interactive materials & tectonic substrates
│   │   ├── ProjectEstimator.tsx       # Scope, budget, and carbon offset calculator
│   │   ├── StudioFellows.tsx          # Team directory & regional hubs with live clocks
│   │   ├── MonographsSection.tsx      # Publications & simulated file downloads
│   │   ├── CommissionModal.tsx        # Project commissioning brief & dossier confirmation
│   │   └── Footer.tsx                 # Studio directory, accreditation, and newsletter
│   ├── data/
│   │   ├── projects.ts                # Built works data & technical specs
│   │   ├── materials.ts               # Material properties & carbon data
│   │   ├── team.ts                    # Atelier leadership & regional offices
│   │   └── publications.ts            # Research papers & monographs
│   ├── types.ts                       # TypeScript interfaces
│   ├── index.css                      # Tailwind layers, blueprint grid, reduced-motion
│   ├── App.tsx                        # Root application component & layout
│   └── main.tsx                       # React DOM entry point
├── index.html                         # Semantic HTML5 shell with viewport & preloads
├── package.json                       # Scripts and project dependencies
├── tailwind.config.js                 # Studio color palette, typography & animations
├── tsconfig.json                      # Strict TypeScript compiler options
└── vite.config.ts                     # Vite build configuration with alias resolution
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/penndivinefavour-lab/beko-building-workshop.git
   cd beko-building-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Mode

Start the Vite local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type-Checking & Linting

Run strict TypeScript diagnostics:
```bash
npm run lint
```

### Production Build

Compile the production-ready bundle with TypeScript type-checking and minification:
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Preview Production Build

Preview the generated production build locally:
```bash
npm run preview
```

---
## 🌍 Deployment

**Hosting provider:** GitHub Pages (free, static, no paid plan or credit card required).

**Live URL:** https://penndivinefavour-lab.github.io/beko-building-workshop/

| Setting | Value |
| :--- | :--- |
| Repository | https://github.com/penndivinefavour-lab/beko-building-workshop |
| Source branch | `main` |
| Deployed branch | `gh-pages` (published via build script) |
| Build command | `VITE_BASE_PATH=/beko-building-workshop/ npm run build` |
| Output directory | `dist` |
| Node version | 20 |

### How deployment works

This project uses a **branch-based deployment** strategy. A build script (`scripts/deploy-pages.sh`)
creates a temporary Git worktree, copies the production `dist/` output (including a `.nojekyll`
marker) into an orphan `gh-pages` branch, and force-pushes it to the remote. GitHub Pages
automatically serves the `gh-pages` branch as a static site.

No GitHub Actions workflow file is committed to this repository — the deployment is performed
externally via the build script. The source of truth remains `main`.

### Base path handling

GitHub Pages serves this project from a **subpath** (`/beko-building-workshop/`), so asset URLs must
be prefixed accordingly. `vite.config.ts` reads the `VITE_BASE_PATH` environment variable:

- `VITE_BASE_PATH=/beko-building-workshop/ npm run build` — builds for the Pages subpath (default deploy target).
- `npm run build` — leaves the base at `/` for root-level hosts (Netlify, Vercel, custom domains).

Application code never hardcodes `/assets/...`. It resolves runtime image URLs through
`src/lib/assetPath.ts`, which reads Vite's inlined `import.meta.env.BASE_URL`. The same source
therefore builds correctly for both root hosting and the Pages subpath without edits.

A `.nojekyll` file is emitted into `dist/` at build time so GitHub Pages serves the hashed asset
files verbatim rather than filtering them through Jekyll.

### Deploying your own copy

To deploy on your own GitHub account:

1. Fork or clone the repository and set up push access.
2. Update the `REPO_SLUG` variable in [`scripts/deploy-pages.sh`](scripts/deploy-pages.sh) to match your organization and repository name.
3. Run `./scripts/deploy-pages.sh` to build and publish.
4. In **GitHub Settings → Pages**, ensure **Source** is set to **Deploy from a branch** and select `gh-pages`.
5. If your repository name differs, also update `BASE_PATH` in the script and the `VITE_BASE_PATH` value passed to the build.

No environment variables, secrets, or API keys are required to build or deploy this project.

---
