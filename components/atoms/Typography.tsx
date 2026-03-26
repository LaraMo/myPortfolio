import type { ComponentPropsWithoutRef, ElementType } from "react";
import { tv as tailwindVariants, type VariantProps } from "tailwind-variants";

import { classNames } from "@/libs/utils/classNames/classNames";

const typographyVariants = tailwindVariants({
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
      caption: "text-xs text-muted-foreground",
      overline:
        "text-xs font-medium uppercase tracking-widest text-muted-foreground",
    },
    gradient: {
      false: "",
      true: "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-700 bg-clip-text text-transparent dark:from-fuchsia-400 dark:via-purple-400 dark:to-violet-400",
    },
    cursive: {
      false: "",
      true: "font-[family-name:var(--font-signature)] text-2xl font-normal normal-case tracking-normal sm:text-3xl",
    },
  },
  defaultVariants: {
    variant: "body",
    gradient: false,
    cursive: false,
  },
});

const defaultElement: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  bodyLarge: "p",
  body: "p",
  small: "p",
  caption: "span",
  overline: "p",
};

export type TypographyProps = {
  as?: ElementType;
  className?: string;
} & VariantProps<typeof typographyVariants> &
  Omit<ComponentPropsWithoutRef<"p">, "className">;

export const Typography = ({
  as,
  variant = "body",
  gradient = false,
  cursive = false,
  className,
  ...props
}: TypographyProps) => {
  const Component =
    as ?? defaultElement[variant as keyof typeof defaultElement];
  return (
    <Component
      className={classNames(
        typographyVariants({ variant, gradient, cursive }),
        className
      )}
      {...props}
    />
  );
};
