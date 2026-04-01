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
    },
    gradient: {
      false: "",
      true: "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-700 bg-clip-text text-transparent dark:from-fuchsia-400 dark:via-purple-400 dark:to-violet-400",
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
