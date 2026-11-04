# Astro

- History 70-80% on the web rendered servers-side.
- The PHP big of 3 weeks ago made that clear (60%) of the web (Statcounter)

## USPS

https://docs.astro.build/en/concepts/why-astro/

- Server-first API design: Move expensive hydration off of your users’ devices.
- Zero JS, by default: No JavaScript runtime overhead to slow you down.
- Customizable: Tailwind, MDX, and 100+ other integrations to choose from.
- UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, ~Lit~ and more.
- Islands architecture: A new web architecture for building faster websites.

https://docs.astro.build/en/concepts/why-astro/

1. Content-focused: Astro was designed for content-rich websites.
1. Server-first: Websites run faster when they render HTML on the server.
1. Fast by default: It should be impossible to build a slow website in Astro.
1. Easy to use: You don’t need to be an expert to build something with Astro.
1. Fully-featured, but flexible: Over 100+ Astro integrations to choose from.

### Stuff

- Standards / HTML first! `<slot></slot>` Fetch, Request, Response and URL.

## Topics

- Project setup (`npm create astro@latest`).
- Project layout
  - `public` - Your non-code, unprocessed assets (fonts, icons, etc.)
  - `src`
    - `components`
    - `layouts`
    - `pages`
    - `css` etc.
  - `astro.config.mjs` - An Astro configuration file.
- TypeScript support
- Pages
- Layouts
- Components
  - SSR Components (html + css)
  - Interactive "Islands" (data from backend)
- CSS
  - Import files (in layout, page or component)
  - Component styles
  - Scoped styling / global escape hatch
- Routing
- Data fetching
  - API routes
  - Actions
  - Loaders (only loading of content, no updates)
- SSR
