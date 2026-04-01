import NextImage, { type ImageProps as NextImageProps } from "next/image";

import { classNames } from "@/lib/utils/classNames/classNames";

import { imageVariants, type ImageVariantProps } from "./imageVariants";

export type ImageProps = Omit<NextImageProps, "className"> & {
  className?: string;
} & ImageVariantProps;

export const Image = ({
  shape = "rounded",
  glassRing = false,
  className,
  alt,
  ...props
}: ImageProps) => {
  return (
    <NextImage
      alt={alt}
      className={classNames(
        imageVariants({ shape, glassRing }),
        className
      )}
      {...props}
    />
  );
};
