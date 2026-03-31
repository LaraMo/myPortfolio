import type { ReactNode } from "react";

import {
  Card as UiCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { classNames } from "@/lib/utils/classNames/classNames";

import { SectionTitle } from "./SectionTitle";

export type CardProps = {
  title: string;
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
        <CardTitle className="font-normal">
          <SectionTitle title={title} mode="standalone" />
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </UiCard>
  );
};

export { splitTitleInitial } from "./SectionTitle";
