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
  title: string;
  children: ReactNode;
  className?: string;
};

const splitTitleInitial = (raw: string): { initial: string; rest: string } => {
  const trimmed = raw.trimStart();
  if (trimmed.length === 0) {
    return { initial: "", rest: "" };
  }
  const chars = Array.from(trimmed);
  const initial = chars[0] ?? "";
  const rest = chars.slice(1).join("");
  return { initial, rest };
};

export const Card = ({ title, children, className }: CardProps) => {
  const { initial, rest } = splitTitleInitial(title);

  const titleContent =
    initial.length === 0 ? (
      <Typography variant="h3" as="span">
        {title}
      </Typography>
    ) : (
      <div
        className="flex flex-wrap items-end gap-x-2 gap-y-1"
        role="heading"
        aria-level={3}
        aria-label={title.trim()}
      >
        <span className="flex shrink-0 flex-col items-start leading-none">
          <span
            className="text-5xl font-bold tracking-tight text-fuchsia-600 md:text-6xl dark:text-fuchsia-400"
            aria-hidden
          >
            {initial}
          </span>
          <span
            className="mt-1.5 h-1.5 w-[1.2em] min-w-8 rounded-sm bg-fuchsia-600 dark:bg-fuchsia-400"
            aria-hidden
          />
        </span>
        {rest.length > 0 ? (
          <Typography variant="h3" as="span" className="pb-1" aria-hidden>
            {rest}
          </Typography>
        ) : null}
      </div>
    );

  return (
    <UiCard
      className={classNames(
        "border-[var(--glass-border)] bg-[var(--glass-surface)] shadow-lg backdrop-blur-xl",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="font-normal">{titleContent}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </UiCard>
  );
};
