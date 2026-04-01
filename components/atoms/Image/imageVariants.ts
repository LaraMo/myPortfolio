import { tv as tailwindVariants, type VariantProps } from "tailwind-variants";

export const imageVariants = tailwindVariants({
  base: "object-cover",
  variants: {
    shape: {
      circle: "rounded-full",
      rounded: "rounded-2xl",
      rectangle: "rounded-xl overflow-hidden",
    },
    glassRing: {
      true: "border-2 border-[var(--glass-border)] bg-[var(--glass-surface)] p-1 shadow-lg ring-1 ring-[var(--glass-highlight)] backdrop-blur-sm",
      false: "",
    },
  },
  defaultVariants: {
    shape: "rounded",
    glassRing: false,
  },
});

export type ImageVariantProps = VariantProps<typeof imageVariants>;
