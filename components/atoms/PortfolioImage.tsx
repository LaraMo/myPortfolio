import Image, { type ImageProps } from "next/image";

import { classNames } from "@/libs/utils/classNames/classNames";

export type PortfolioImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  shape?: "circle" | "rounded";
  glassRing?: boolean;
};

export const PortfolioImage = ({
  shape = "rounded",
  glassRing = false,
  className,
  alt,
  ...props
}: PortfolioImageProps) => {
  return (
    <Image
      alt={alt}
      className={classNames(
        "object-cover",
        shape === "circle" && "rounded-full",
        shape === "rounded" && "rounded-2xl",
        glassRing &&
          "border-2 border-[var(--glass-border)] bg-[var(--glass-surface)] p-1 shadow-lg ring-1 ring-[var(--glass-highlight)] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
};
