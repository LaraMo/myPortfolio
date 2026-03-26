import type { LucideIcon } from "lucide-react";

import { classNames } from "@/libs/utils/classNames/classNames";

const sizeClassNames = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
} as const;

export type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizeClassNames;
  className?: string;
  "aria-hidden"?: boolean;
};

export const Icon = ({
  icon: LucideComponent,
  size = "md",
  className,
  "aria-hidden": ariaHidden = true,
}: IconProps) => {
  return (
    <LucideComponent
      aria-hidden={ariaHidden}
      className={classNames(sizeClassNames[size], className)}
    />
  );
};
