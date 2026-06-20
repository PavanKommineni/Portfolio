# Developer Portfolio

A clean, dark-themed, single-page developer portfolio built with React + Vite.
Inspired by the "Brittany Chiang" school of portfolio design: content-first,
fast, recruiter-friendly, with tasteful motion (particle hero, hover states,
animated tab indicator) rather than heavy 3D/WebGL.

## Sections
- **Hero** — animated canvas particle network, name/title/tagline, CTAs
- **About** — bio, stats, floating tech badges
- **Skills** — categorized stack grid (Frontend / Backend / DevOps)
- **Experience** — tabbed work history with animated indicator
- **Projects** — 4 project cards with tags + GitHub/live links
- **Contact** — CTA + click-to-copy email
- **Footer**

## Tech Stack
- React 18
- Vite 5 (build tool / dev server)
- Plain CSS (CSS variables for theming, no framework dependency)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL shown in your terminal (usually **http://localhost:5173**).

## Build for production

```bash
npm run build
```

This outputs a static, deployable site into the `dist/` folder. You can
deploy that folder directly to Vercel, Netlify, GitHub Pages, or any static host.

To preview the production build locally:

```bash
npm run preview
```

## Customize it

All your content (name, bio, skills, experience, projects, links) lives in
**one file**: `src/data/portfolio.js`. Edit that file and the whole site
updates — no need to touch any component.

To change the color theme, edit the CSS variables at the top of
`src/styles/global.css` (`--bg`, `--accent`, `--accent2`, etc).

To add your resume, drop a `resume.pdf` into the `public/` folder
(create it if it doesn't exist) — it's already linked from the navbar.

To swap the avatar illustration for your real photo, replace the `<svg>`
block in `src/components/About.jsx` with an `<img src="/your-photo.jpg" />`
(place the image in `public/` too).

## Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/                # static assets (resume.pdf, images, favicon)
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # page layout / section order
    ├── data/
    │   └── portfolio.js   # ← all your content lives here
    ├── styles/
    │   └── global.css     # design tokens + base styles
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Deploying

**Vercel (recommended, free):**
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Framework preset: Vite (auto-detected) → Deploy

**Netlify:**
1. `npm run build`
2. Drag the `dist/` folder onto netlify.com/drop
