# Lucky Gaurav — Portfolio

A responsive, dark 3D portfolio built with React, Vite, Tailwind CSS, React Three Fiber, Framer Motion, and Lucide icons.

## Quick start

Prerequisites: Node.js 18+ and a package manager (npm, pnpm, or yarn).

This is a source-code project, so opening its root `index.html` by double-clicking
will not work. Start it through Vite instead, or use the included production
build from the corrected package (`site/index.html`) to open the portfolio
directly in a browser.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. Build the production version with:

```bash
pnpm build
pnpm preview
```

## Personalize it

All editable site content lives in [`src/config/portfolio.js`](./src/config/portfolio.js): name, contact links, skills, project cards, focus areas, portrait path, and resume link. Starter skills and projects are intentionally marked `sample: true` so they are easy to spot and replace.

### Add the supplied photos

The original brief selects **2.png** as the primary profile portrait. Copy the uploaded file to:

```text
public/images/2.png
```

Optional `1.jpeg` and `3.jpeg` can also live in `public/images/` for later use. The interface shows an initials-based fallback until the primary photo is present.

### Add your resume

Replace `public/resume/replace-with-your-resume.txt` with your PDF, then set `resumeUrl` in `src/config/portfolio.js` to its path (for example, `/resume/Lucky-Gaurav-Resume.pdf`).

## Deploy

Run `pnpm build`, then deploy the contents of `dist/` to any static hosting provider.

- **Netlify:** set build command to `pnpm build` and publish directory to `dist`.
- **Vercel:** import the repository; Vite is detected automatically (build: `pnpm build`, output: `dist`).
- **GitHub Pages:** configure a Pages workflow to build the project and publish `dist`. If deploying under a repository subpath, set Vite's `base` option in `vite.config.js`.

## Accessibility notes

The site uses semantic navigation, keyboard-focus styles, descriptive link labels, adequate contrast, and respects a visitor's reduced-motion system setting. The 3D canvas is decorative and hidden from assistive technology.
