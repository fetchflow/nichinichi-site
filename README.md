# nichinichi-site

Marketing / landing page for [nichinichi](https://github.com/fetchflow/nichinichi) — a local-first developer journal CLI.

Built with [Astro](https://astro.build) + Tailwind CSS v4. Deployed to GitHub Pages on push to `main`.

## Project structure

```
src/
  components/   # Astro components (Nav, Hero, Features, …)
  layouts/      # Base.astro — HTML shell with OG/Twitter meta tags
  pages/        # index.astro — single-page site
  styles/       # global.css (Tailwind + custom vars)
public/
  favicon.svg
  favicon.ico
  og.png        # Open Graph / Twitter card image (1200×630)
  screenshots/  # App screenshots used in the Hero section
```

## Development

Requires Node ≥ 22.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages automatically.
