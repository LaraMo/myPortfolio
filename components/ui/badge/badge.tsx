import type { ComponentPropsWithoutRef } from "react";

import { classNames } from "@/lib/utils/classNames/classNames";

import { badgeVariants, type BadgeVariantProps } from "./badgeVariants";

export type BadgeProps = ComponentPropsWithoutRef<"span"> & BadgeVariantProps;

export const Badge = ({
  className,
  variant = "default",
  ...props
}: BadgeProps) => {
  return (
    <span
      data-slot="badge"
      className={classNames(badgeVariants({ variant }), className)}
      {...props}
    />
  );
};

export { badgeVariants };
