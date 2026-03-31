"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { classNames } from "@/lib/utils/classNames/classNames";

import { buttonVariants, type ButtonVariantProps } from "./button-variants";

export type ButtonProps = ButtonPrimitive.Props & ButtonVariantProps;

export const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={classNames(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
