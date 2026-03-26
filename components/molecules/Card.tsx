import type { ReactNode } from "react";

import { Typography } from "@/components/atoms/Typography";
import {
  Card as UiCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { classNames } from "@/libs/utils/classNames/classNames";

export type CardProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export const Card = ({ title, children, className }: CardProps) => {
  return (
    <UiCard
      className={classNames(
        "border-[var(--glass-border)] bg-[var(--glass-surface)] shadow-lg backdrop-blur-xl",
        className
      )}
    >
      <CardHeader>
        <CardTitle>
          <Typography variant="h3" as="span">
            {title}
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </UiCard>
  );
};
