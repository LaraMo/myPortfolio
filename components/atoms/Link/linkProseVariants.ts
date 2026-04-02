import { tv as tailwindVariants } from "tailwind-variants";

export const linkProseVariants = tailwindVariants({
  base: [
    "inline-flex text-xs font-semibold text-link underline decoration-link/80 underline-offset-4 outline-none transition-colors",
    "hover:text-link-hover hover:decoration-link-hover/80",
    "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ].join(" "),
});
