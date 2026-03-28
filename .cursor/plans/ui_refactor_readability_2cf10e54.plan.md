---
name: UI refactor readability
overview: Extract fonts to `app/fonts.ts` (your choice), prune unused theme tokens in `globals.css`, reorganize `components/ui` into per-primitive folders with `*-variants.ts` files, move Icon/Image into `ui`, extract Typography variants, add a Cursor rule, and update imports—while keeping `app/page.tsx` structure intact.
todos:
  - id: fonts-module
    content: Add app/fonts.ts; slim app/layout.tsx to consume font variables only
    status: completed
  - id: globals-prune
    content: Prune unused sidebar/chart (and optional font-mono) from app/globals.css @theme and :root/.dark
    status: completed
  - id: ui-button-folder
    content: Move button + button-variants into components/ui/button/ with index.ts; fix imports
    status: completed
  - id: ui-icon-folder
    content: Add components/ui/icon/ with icon-variants.ts; remove atoms/Icon; update imports
    status: completed
  - id: ui-image-folder
    content: Add components/ui/image/ with image-variants.ts; rename PortfolioImage to Image; update Hero + delete old file
    status: completed
  - id: typography-variants
    content: Extract typographyVariants to components/atoms/typography-variants.ts
    status: completed
  - id: cursor-rule
    content: "Add Cursor rule: tailwindVariants live in *-variants.ts; note ui lowercase exception"
    status: completed
  - id: verify
    content: Run lint, tsc, tests; smoke-check UI
    status: completed
isProject: false
---

# Refactor: readable UI structure and fewer globals

## 1. Fonts: out of `[app/layout.tsx](app/layout.tsx)`, keep `next/font`

**Constraint (why not “only CSS”):** `next/font` runs in JS to subset and self-host fonts; it cannot live inside a `.css` file. You chose the `**app/fonts.ts`** approach.

**Plan:**

- Add `[app/fonts.ts](app/fonts.ts)` exporting the three `next/font/google` instances (`Geist`, `Geist_Mono`, `Great_Vibes`) exactly as today (same `variable` names: `--font-geist-sans`, `--font-geist-mono`, `--font-signature`).
- Slim `[app/layout.tsx](app/layout.tsx)` to: import `./globals.css`, import `metadata` inputs from `@/lib/site`, import font helpers from `./fonts`, apply **only** `className={...}` on `<html>` using the font `.variable` classes (plus existing `h-full antialiased`). No font constructor calls in this file.
- `[app/globals.css](app/globals.css)` keeps `**@theme inline`** wiring (`--font-sans` → `var(--font-geist-sans)`, etc.); those variables remain **defined by** `next/font` via the classes applied on `<html>`.

**Per-component font overrides (e.g. Header):** Optional follow-up in `[components/molecules/Header.tsx](components/molecules/Header.tsx)` — add a `className` on the header or Typography branch (e.g. `font-mono` / a custom utility) when you want a local override; no change required unless you specify a design.

---

## 2. `globals.css`: remove unused tokens

**Audit result:** `[components/ui/card.tsx](components/ui/card.tsx)` uses `font-heading` (keep `--font-heading` in `@theme`). No TSX references to `sidebar-`* or `chart-`* utilities; those tokens are only declared in `[app/globals.css](app/globals.css)` for future shadcn-style components.

**Plan:**

- Remove `**@theme inline` entries** for `--color-sidebar-`* and `--color-chart-`* if you are sure you will not use sidebar/chart Tailwind utilities soon.
- Remove matching `**--sidebar-*` and `--chart-*` custom properties** from `:root` and `.dark` **in the same pass** so you do not leave dangling `var()` references.
- **Risk:** Running `shadcn add` for sidebar/chart-heavy components later may expect those variables; you can restore from git or regenerate theme. Document that in a one-line comment at top of `globals.css` only if you want (optional).
- `**--font-mono`:** Currently unused in components; you may drop `--font-mono` from `@theme` only if you are fine losing `font-mono` mapping until you need code blocks.

---

## 3. `components/ui` folder layout (button, icon, image)

**Target shape** (matches your request; coexists with flat shadcn files like `[components/ui/card.tsx](components/ui/card.tsx)`):

```text
components/ui/
  button/
    button.tsx
    button-variants.ts
    index.ts          # re-export Button, buttonVariants, types
  icon/
    icon.tsx
    icon-variants.ts
    index.ts
  image/
    image.tsx
    image-variants.ts
    index.ts
  card.tsx            # unchanged (shadcn flat)
```

**Moves/edits:**

- Relocate `[components/ui/button.tsx](components/ui/button.tsx)` → `button/button.tsx` and `[components/ui/button-variants.ts](components/ui/button-variants.ts)` → `button/button-variants.ts`; fix relative import `./button-variants` → same folder.
- Add `button/index.ts` exporting public API so `import { Button, buttonVariants } from "@/components/ui/button"` keeps working.
- Remove stray character on line 28 of current `button.tsx` if still present (`›`).

**Icon:** Move logic from `[components/atoms/Icon.tsx](components/atoms/Icon.tsx)` to `components/ui/icon/icon.tsx`; replace inline `sizeClassNames` with `**iconVariants`** in `[icon-variants.ts](components/ui/icon/icon-variants.ts)` using `tailwindVariants` + `VariantProps` (same pattern as button). Delete `[components/atoms/Icon.tsx](components/atoms/Icon.tsx)` after updating imports.

**Image (rename from PortfolioImage):** Add `components/ui/image/image.tsx` wrapping `next/image` as `NextImage` internally, export component named `**Image`**. Move shape / glass ring classes into `**imageVariants`** in `image-variants.ts` (variants: `shape`, `glassRing` boolean). Export type `ImageProps` (rename from `PortfolioImageProps`). Update `[components/organisms/Hero.tsx](components/organisms/Hero.tsx)` to import from `@/components/ui/image`. Delete `[components/atoms/PortfolioImage.tsx](components/atoms/PortfolioImage.tsx)`.

**Import updates (grep-driven):** `[components/molecules/Header.tsx](components/molecules/Header.tsx)`, `[components/molecules/Skill.tsx](components/molecules/Skill.tsx)`, `[components/atoms/Button.tsx](components/atoms/Button.tsx)`, `[app/page.tsx](app/page.tsx)` (`buttonVariants` path), any other `button-variants` / `Icon` / `PortfolioImage` references.

---

## 4. Typography variants file

- Extract the `tailwindVariants` block from `[components/atoms/Typography.tsx](components/atoms/Typography.tsx)` into a new server-safe file `[components/atoms/typography-variants.ts](components/atoms/typography-variants.ts)` (export `typographyVariants` and reuse `VariantProps<typeof typographyVariants>` in `Typography.tsx`).
- Keep `defaultElement` map and `Typography` component in `[components/atoms/Typography.tsx](components/atoms/Typography.tsx)`; import variants from `./typography-variants`.

---

## 5. `components.json` and shadcn CLI

- **No change required** to `[components.json](components.json)` for normal adds: `aliases.ui` stays `@/components/ui`; new components will still land as flat files (e.g. `input.tsx`) next to your folders.
- **Important:** Do **not** re-run `shadcn add button` blindly after this refactor — the CLI may emit a **flat** `components/ui/button.tsx` file. In TypeScript resolution, that file can **take precedence** over the `components/ui/button/` directory and break imports. If you must refresh the registry button, **merge by hand** or temporarily rename your folder.
- Your `utils` alias already points to `@/libs/utils/classNames/classNames`; unchanged.

---

## 6. New Cursor rule: variants in separate files

- Add a rule under `[.cursor/rules/](.cursor/rules/)` (e.g. `ui-variants-colocation.mdc`): for primitives using `**tailwindVariants`**, define variants in a sibling `***-variants.ts`** file with **no** `"use client"` unless the variant module must be client-only (rare); components import and compose with `classNames`.
- Optionally extend `[react-component-naming.mdc](.cursor/rules/react-component-naming.mdc)` with one line: `**components/ui/`* may use shadcn-style lowercase filenames** (`button.tsx` inside `button/`) to match registry conventions.

---

## 7. Verification

- Run `pnpm lint` / `npm run lint` and `pnpm exec tsc --noEmit` (or project equivalent).
- Run `pnpm test` / `vitest run` if you rely on existing tests.
- Quick visual check: home hero image, header icons, theme toggle, typography gradients/cursive.

---

## Scope explicitly preserved

- `**[app/page.tsx](app/page.tsx)`:** No structural/layout changes; only import path tweaks if `buttonVariants` location changes.

```mermaid
flowchart TB
  subgraph fonts [Fonts]
    fontsTs[app/fonts.ts]
    layout[app/layout.tsx]
    globals[app/globals.css]
    fontsTs --> layout
    layout --> htmlClass[className on html]
    globals --> theme[@theme font tokens]
    htmlClass --> theme
  end
  subgraph ui [components/ui]
    btn[button/]
    ico[icon/]
    img[image/]
    card[card.tsx flat]
  end
```



