import type { LucideIcon } from "lucide-react";

import { classNames } from "@/libs/utils/classNames/classNames";

import { iconVariants, type IconVariantProps } from "./icon-variants";

export type IconProps = {
  icon: LucideIcon;
  className?: string;
  "aria-hidden"?: boolean;
} & IconVariantProps;

export const Icon = ({
  icon: LucideComponent,
  size = "md",
  className,
  "aria-hidden": ariaHidden = true,
}: IconProps) => {
  return (
    <LucideComponent
      aria-hidden={ariaHidden}
      className={classNames(iconVariants({ size }), className)}
    />
  );
};
