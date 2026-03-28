import { tv as tailwindVariants, type VariantProps } from "tailwind-variants";

export const iconVariants = tailwindVariants({
  base: "",
  variants: {
    size: {
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type IconVariantProps = VariantProps<typeof iconVariants>;
