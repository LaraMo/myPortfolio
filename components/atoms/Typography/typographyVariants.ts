import { tv as tailwindVariants, type VariantProps } from "tailwind-variants";

export const typographyVariants = tailwindVariants({
  base: "text-foreground",
  variants: {
    variant: {
      display: "text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl",
      h1: "text-4xl font-semibold tracking-tight sm:text-5xl",
      h2: "text-3xl font-semibold tracking-tight sm:text-4xl",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      h5: "text-lg font-semibold",
      h6: "text-base font-semibold",
      bodyLarge: "text-lg leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-sm leading-normal",
      caption: "text-xs leading-normal",
      overline: "text-xs font-medium uppercase tracking-widest leading-normal",
      /** Accordion section title drop cap (decorative; use with `as="span"` inside triggers). */
      sectionTitleCap:
        "shrink-0 font-heading text-5xl font-bold leading-none tracking-tight text-brand md:text-6xl",
      /** Accordion section title remainder (use with `as="span"` inside triggers). */
      sectionTitleRest:
        "min-w-0 pb-0 font-heading text-xl font-normal leading-snug tracking-normal group-data-[size=sm]/card:text-lg",
    },
    gradient: {
      false: "",
      true: "bg-gradient-to-r from-brand-from via-brand-via to-brand-to bg-clip-text text-transparent",
    },
    color: {
      default: "",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
    gradient: false,
    color: "default",
  },
});

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;
