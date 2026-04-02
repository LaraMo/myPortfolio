import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";

import { classNames } from "@/lib/utils/classNames/classNames";
import { typographyVariants } from "./typographyVariants";

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
  caption: "p",
  overline: "p",
  sectionTitleCap: "span",
  sectionTitleRest: "span",
};

export type TypographyProps = {
  as?: ElementType;
  className?: string;
} & VariantProps<typeof typographyVariants> &
  Omit<ComponentPropsWithoutRef<"p">, "className" | "color">;

export const Typography = ({
  as,
  variant = "body",
  gradient = false,
  color = "default",
  className,
  ...props
}: TypographyProps) => {
  const Component = as ?? defaultElement[variant as keyof typeof defaultElement];
  return (
    <Component
      className={classNames(typographyVariants({ variant, gradient, color }), className)}
      {...props}
    />
  );
};
