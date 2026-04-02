import type { ComponentPropsWithoutRef } from "react";
import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { classNames } from "@/lib/utils/classNames/classNames";
import { badgeVariants, type BadgeVariantProps } from "./badgeVariants";

export type BadgeProps = ComponentPropsWithoutRef<"span"> &
  BadgeVariantProps & {
    icon?: LucideIcon;
  };

export const Badge = ({
  className,
  variant = "default",
  size = "md",
  icon,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      data-slot="badge"
      className={classNames(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon ? <Icon icon={icon} size="sm" /> : null}
      {children}
    </span>
  );
};
