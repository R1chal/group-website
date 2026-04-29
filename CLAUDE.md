# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page Astro v6 static site for "MusionShockClub" — a Chinese-language community landing page. It uses Tailwind CSS v4 (via the Vite plugin, not the older PostCSS plugin) and follows a Spotify-inspired dark theme design system documented in `DESIGN.md`.

## Common Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies (requires Node >= 22.12.0) |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Astro CLI help |

There are no test, lint, or format scripts configured in this project.

## Architecture

### Page Structure
The entire site is a single page: `src/pages/index.astro`. It composes these components in order:

1. `NavBar` — fixed header with mobile hamburger menu (vanilla JS inline `<script>`)
2. `HeroSection` — full-viewport hero with gradient background, CTA buttons, stats grid
3. `FeaturesSection` — feature cards grid, imports `FeatureCard`
4. `CTASection` — final call-to-action block
5. `Footer` — site footer

### Styling Approach
- **Tailwind CSS v4** is configured via `@tailwindcss/vite` in `astro.config.mjs` — not the traditional `tailwind.config.js` approach.
- Custom theme values are defined in `src/styles/global.css` using the Tailwind v4 `@theme` directive (e.g. `--color-spotify-black: #121212`).
- No `tailwind.config.js` file exists.
- The design system colors, typography, and component patterns are specified in `DESIGN.md`. Refer to it when adding new UI.
- Components use Tailwind utility classes exclusively; there are no scoped `<style>` blocks in components.

### Client-Side JavaScript
This project has no frontend framework (React, Vue, etc.). Interactivity is handled with vanilla JS inline `<script>` tags inside `.astro` components. The NavBar mobile menu is the only current example of this pattern.

### Deployment
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to **GitHub Pages** on every push to `main`.
- The `site` URL in `astro.config.mjs` points to a Netlify domain but the active deployment target is GitHub Pages.
