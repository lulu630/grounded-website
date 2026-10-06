# Grounded

A responsive homepage for a fictional mindfulness coaching brand. I designed the website in Figma and built it with React. The page introduces individual coaching, workplace workshops, and the person behind Grounded, with Norwegian content and scroll animations.

[View the website](https://lulu630.github.io/grounded-website/)

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Line-by-line text reveals using GSAP SplitText.
- A scroll-linked parallax image using ScrollTrigger.
- Service cards with a cursor-following glow and tilt effect on devices with a mouse.
- An About section revealed by two sliding panels, with a different opening direction on smaller screens.
- Reduced-motion alternatives for the main animations.

## Built with

- React and JavaScript
- CSS with Grid, Flexbox, media queries, and custom properties
- GSAP, SplitText, ScrollTrigger, and `@gsap/react`
- Vite and ESLint
- GitHub Pages for hosting

## Run locally

With Node.js and npm installed:

```bash
git clone https://github.com/lulu630/grounded-website.git
cd grounded-website
npm install
npm run dev
```

Open the local URL printed in the terminal.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

## Project scope

This project covers the homepage UI. Booking, contact, and secondary-page links are demonstration placeholders; no booking service or backend is connected.

## Image credits

Photographs used in this project are sourced from Unsplash+.
