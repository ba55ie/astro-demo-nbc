# Astro 7 demo and presentation

A demo application with [reveal.js](https://revealjs.com/) slides build with [Astro](https://astro.build/).

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/                 # Unprocessed static assets (favicon, robots.txt)
├── src/
│   ├── actions/            # Type-safe server functions
│   ├── assets/             # Processed assets like images
│   ├── components/         # Reusable .astro, .tsx (React), .vue components
│   ├── layouts/            # Page shells (e.g. DefaultLayout.astro)
│   ├── pages/              # File-based routes & API endpoints
│   ├── content/            # Content collections (MD / MDX / JSON)
│   └── content.config.ts   # Configuration for content collections
├── astro.config.ts         # Config & integrations (React, Vue, MDX), SSR adapter
├── tsconfig.json           # Strict TypeScript config + path aliases (@/*)
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

The slides are in the `content/slides/` directory and rendered by the `src/pages/slides.astro` page.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:5000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
