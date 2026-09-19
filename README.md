# Yarnify — React + Tailwind

A basic, responsive React rebuild of the Yarnify site, using Vite + Tailwind CSS.

## What's included

- **Header** — sticky nav with a mobile hamburger menu
- **Hero** — intro section with a featured image
- **Product grid** — responsive 2/3/4-column grid of products
- **About** — short brand blurb
- **Footer** — contact info

## Fast image loading

- All product/hero images were resized and converted to **WebP** (down from
  1–2 MB PNGs to ~10–110 KB each).
- Every image uses `loading="lazy"` + `decoding="async"`, so offscreen images
  aren't downloaded until they're about to scroll into view.
- A `<LazyImage>` component reserves the image's aspect ratio and shows a
  skeleton pulse, then fades the real image in once it loads — no layout jump.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```
