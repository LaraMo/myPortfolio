/**
 * Default Tailwind `md` / `lg` min-widths (px), aligned with `md:` and `lg:` utilities.
 * If you customize breakpoints in `app/globals.css` `@theme`, keep these in sync.
 */
export const TAILWIND_MD_MIN = 768;
export const TAILWIND_LG_MIN = 1024;

/** Below Tailwind `md` — same threshold as `max-md` / “not yet `md:`”. */
export const tailwindMaxMdQuery = `(max-width: ${TAILWIND_MD_MIN - 1}px)`;

/** From `md` up to below `lg`. */
export const tailwindMdOnlyQuery = `(min-width: ${TAILWIND_MD_MIN}px) and (max-width: ${TAILWIND_LG_MIN - 1}px)`;

/** Tailwind `lg` and wider. */
export const tailwindMinLgQuery = `(min-width: ${TAILWIND_LG_MIN}px)`;
