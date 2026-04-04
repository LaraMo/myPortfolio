# Lara Mo — personal portfolio

A single-page portfolio site for **Liora Lara Mezirovsky**: intro, skills, work history, and writing. It is built with the Next.js App Router, styled with Tailwind CSS, and uses accordion sections so visitors can explore content without leaving the page.

**Live site:** [https://my-portfolio-six-lime-15.vercel.app/](https://my-portfolio-six-lime-15.vercel.app/)

## Goals

- Present a clear professional profile: hero, short bio, and skills.
- Surface **work experience** in a readable timeline.
- Pull **Medium** article metadata from RSS with **incremental revalidation** (7 days in `content/mediumArticles.ts`) so the writing section stays reasonably fresh without manual copy-paste for every post.
- Support **light/dark** themes via `next-themes`.
- Stay fast and easy to deploy as a static-friendly Next.js app.

## What’s in the app

| Area | Role |
| --- | --- |
| **Header** | Navigation and CV link. |
| **Hero** | Portrait, name, rotating subtitles. |
| **Accordion sections** | Intro, skills (with icons), work timeline, and articles list. |
| **Footer** | Site footer. |

Copy, links, and section data live mainly under `content/` and `types/content/`. UI is organized as atoms → molecules → organisms, with shadcn-style primitives under `components/ui/`.

## Tech stack

| Category | Choices |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router), [React](https://react.dev/) 19 |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4, [tailwind-variants](https://www.tailwind-variants.org/), [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) |
| **UI** | [Base UI](https://base-ui.com/) (`@base-ui/react`), [Lucide](https://lucide.dev/) icons |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **RSS** | [rss-parser](https://www.npmjs.com/package/rss-parser) (Medium feed) |
| **Utilities** | `clsx`, `tailwind-merge` (composed via `classNames` helper) |
| **Quality** | [Oxlint](https://oxc.rs/docs/guide/usage/linter), [Prettier](https://prettier.io/), [Vitest](https://vitest.dev/) + Testing Library |

## Prerequisites

- **Node.js** `>= 20.11.0` (see `package.json` `engines`)

## Run locally

Clone the repo, install dependencies, and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Next.js with hot reload.

### Other scripts

| Command | Purpose |
| --- | --- |
| `npm run build` | Production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | Lint with Oxlint |
| `npm run lint:fix` | Lint with auto-fix where supported |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |
| `npm run test` | Vitest in watch mode |
| `npm run test:run` | Vitest once (CI-style) |

### Configuration notes for contributors

- **Remote images**: Medium thumbnails are allowed in `next.config.ts` via `images.remotePatterns` (`miro.medium.com`, `cdn-images-1.medium.com`).
- **Content**: Update `content/portfolioContent.tsx` for bio, skills, jobs, and header links. Replace placeholder URLs (e.g. CV) with your real assets.
- **Static assets**: Put images in `public/` (e.g. hero image referenced from content).

## Project structure

Overview of the repository layout (only meaningful app and config paths; `node_modules` and `.next` omitted):

```text
LaraMo/
├── app/                      # Next.js App Router: layouts, pages, global CSS, fonts
├── components/
│   ├── atoms/                # Small reusable pieces (Typography, Image, Link, …)
│   ├── molecules/            # Composed blocks (Header, AccordionCard, Article, …)
│   ├── organisms/            # Page sections (Hero, Footer, PortfolioAccordionSections, …)
│   └── ui/                   # Registry-style primitives (button, card, badge, icon, …)
├── content/                  # Portfolio copy + Medium RSS integration
├── lib/                      # App utilities (e.g. classNames, ThemeProvider)
├── libs/                     # Shared hooks (e.g. media query helpers)
├── public/                   # Static files served at /
├── types/                    # Shared content TypeScript types
├── components.json           # shadcn-style component config
├── next.config.ts
├── postcss.config.mjs
├── prettier.config.mjs
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

## Deploy

**Production:** [https://my-portfolio-six-lime-15.vercel.app/](https://my-portfolio-six-lime-15.vercel.app/)

The site is a standard Next.js app and fits hosting such as [Vercel](https://vercel.com/) or any Node-compatible platform. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
