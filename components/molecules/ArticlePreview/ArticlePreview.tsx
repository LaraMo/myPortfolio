import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

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
  publishedAt: string;
  tags: readonly string[];
  href: string;
  /** Stable id for the title heading (`aria-labelledby` on `<article>`). */
  titleId?: string;
  className?: string;
};

export const ArticlePreview = ({
  title,
  preview,
  image,
  publishedAt,
  tags,
  href,
  titleId,
  className,
}: ArticlePreviewProps) => {
  const articleProps: ComponentPropsWithoutRef<"article"> = {
    className: classNames(
      "@container/article-preview flex h-full min-h-0 flex-col",
      className
    ),
  };
  if (titleId) {
    articleProps["aria-labelledby"] = titleId;
  }

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
          <h2
            id={titleId}
            className="font-heading text-sm font-medium leading-snug text-foreground"
          >
            {title}
          </h2>
          {publishedAt ? (
            <time className="text-[0.65rem] text-muted-foreground">
              {publishedAt}
            </time>
          ) : null}
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

