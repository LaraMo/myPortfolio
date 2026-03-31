import type { ComponentProps } from "react";

import { classNames } from "@/lib/utils/classNames/classNames";

export type CardProps = ComponentProps<"div"> & { size?: "default" | "sm" };

export const Card = ({
  className,
  size = "default",
  ...props
}: CardProps) => {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={classNames(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  );
};

export type CardHeaderProps = ComponentProps<"div">;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return (
    <div
      data-slot="card-header"
      className={classNames(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  );
};

export type CardTitleProps = ComponentProps<"div">;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={classNames(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  );
};

export type CardDescriptionProps = ComponentProps<"div">;

export const CardDescription = ({
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={classNames("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};

export type CardActionProps = ComponentProps<"div">;

export const CardAction = ({ className, ...props }: CardActionProps) => {
  return (
    <div
      data-slot="card-action"
      className={classNames(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
};

export type CardContentProps = ComponentProps<"div">;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={classNames("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  );
};

export type CardFooterProps = ComponentProps<"div">;

export const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={classNames(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  );
};
