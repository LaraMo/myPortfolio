import Image from "next/image";
import Link from "next/link";
import { createElement, type ComponentPropsWithoutRef } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { classNames } from "@/lib/utils/classNames/classNames";

const glassCard =
  "border-[var(--glass-border)] bg-[var(--glass-surface)] shadow-lg backdrop-blur-xl";

export type ArticlePreviewProps = {
  title: string;
  preview: string;
  image: { src: string; alt: string };
  publishedAt: string | Date;
  tags: readonly string[];
  href: string;
  headingLevel?: 2 | 3;
  /** Stable id for the title heading (`aria-labelledby` on `<article>`). */
  titleId?: string;
  className?: string;
};

const parsePublishedAt = (publishedAt: string | Date): Date | null => {
  const date =
    typeof publishedAt === "string" ? new Date(publishedAt.trim()) : publishedAt;
  return Number.isNaN(date.getTime()) ? null : date;
};

/** `Date` → `<time dateTime>` value (UTC calendar day `YYYY-MM-DD`). */
const publishedAtToIsoDate = (date: Date): string =>
  date.toISOString().slice(0, 10);

/** `Date` → long label, e.g. `May 16 2026` (locale month names, commas stripped). */
const formatPublishedAtLong = (date: Date): string =>
  new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .replaceAll(",", "")
    .replace(/\s+/g, " ")
    .trim();

export const ArticlePreview = ({
  title,
  preview,
  image,
  publishedAt,
  tags,
  href,
  headingLevel = 2,
  titleId,
  className,
}: ArticlePreviewProps) => {
  const headingTag = headingLevel === 3 ? "h3" : "h2";
  const publishedDate = parsePublishedAt(publishedAt);
  const isoDate = publishedDate ? publishedAtToIsoDate(publishedDate) : "";
  const publishedLabel = publishedDate
    ? formatPublishedAtLong(publishedDate)
    : "";

  const articleProps: ComponentPropsWithoutRef<"article"> = {
    className: classNames(
      "@container/article-preview flex h-full min-h-0 flex-col",
      className
    ),
  };
  if (titleId) {
    articleProps["aria-labelledby"] = titleId;
  }

  const titleHeading = createElement(
    headingTag,
    {
      id: titleId,
      className:
        "font-heading text-sm font-medium leading-snug text-foreground",
    },
    title
  );

  return (
    <article {...articleProps}>
      <Card
        className={classNames(
          glassCard,
          "flex h-full min-h-0 flex-1 flex-col gap-0 py-0 has-[>img:first-child]:pt-0"
        )}
      >
        <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden rounded-t-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 85vw, 300px"
            className="object-cover"
            priority={false}
          />
        </div>
        <CardHeader className="shrink-0 gap-1 px-3 pt-3 pb-1">
          {titleHeading}
          {isoDate ? (
            <time
              dateTime={isoDate}
              className="text-[0.65rem] text-muted-foreground"
            >
              {publishedLabel}
            </time>
          ) : (
            <span className="text-[0.65rem] text-muted-foreground">
              {String(publishedAt)}
            </span>
          )}
        </CardHeader>
        <CardContent className="flex min-h-0 flex-1 flex-col px-3 pb-2 pt-0">
          <p className="line-clamp-3 shrink-0 text-xs text-muted-foreground">
            {preview}
          </p>
          {tags.length > 0 ? (
            <ul
              role="list"
              className="mt-2 flex shrink-0 list-none flex-wrap gap-2 p-0"
            >
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="secondary"
                    className="text-[0.65rem]"
                  >
                    #{tag}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : null}
          {/* Fills remaining card height so siblings in a row match the tallest article. */}
          <div className="min-h-0 flex-1" aria-hidden="true" />
        </CardContent>
        <CardFooter className="shrink-0 justify-start border-t-0 bg-transparent px-3 pb-3 pt-0">
          <Link
            href={href}
            className="inline-flex text-xs font-semibold text-sky-600 underline decoration-sky-600/80 underline-offset-4 outline-none transition-colors hover:text-sky-700 hover:decoration-sky-700 dark:text-sky-400 dark:decoration-sky-400/80 dark:hover:text-sky-300 dark:hover:decoration-sky-300 focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Read more: ${title}`}
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
};

ArticlePreview.displayName = "ArticlePreview";
