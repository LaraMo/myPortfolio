import { classNames } from "@/lib/utils/classNames/classNames";

import { brandLmMarkVariants } from "./brand-lm-mark-variants";

export type BrandLmMarkProps = {
  className?: string;
};

export const BrandLmMark = ({ className }: BrandLmMarkProps) => {
  const { root, text } = brandLmMarkVariants();

  return (
    <div
      className={classNames(root(), "px-3 py-1", className)}
      role="img"
      aria-label="LaraMo"
    >
      <span className={text()} aria-hidden>
        LM
      </span>
    </div>
  );
};
