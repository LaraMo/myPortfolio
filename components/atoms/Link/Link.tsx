import type { ComponentPropsWithoutRef } from "react";
import NextLink from "next/link";

import { classNames } from "@/lib/utils/classNames/classNames";

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link = ({ className, ...props }: LinkProps) => (
  <NextLink className={classNames(className)} {...props} />
);
