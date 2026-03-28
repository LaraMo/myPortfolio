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
import { classNames } from "@/libs/utils/classNames/classNames";

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
  density?: "default" | "compact";
};

function formatPublishedAt(publishedAt: string | Date): {
  iso: string;
  display: string;
} {
  const date =
    typeof publishedAt === "string" ? new Date(publishedAt) : publishedAt;
  const iso = Number.isNaN(date.getTime())
    ? ""
    : date.toISOString().slice(0, 10);
  const display = Number.isNaN(date.getTime())
    ? String(publishedAt)
    : new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(date);
  return { iso, display };
}

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
  density = "default",
}: ArticlePreviewProps) => {
  const headingTag = headingLevel === 3 ? "h3" : "h2";
  const { iso, display } = formatPublishedAt(publishedAt);
  const isCompact = density === "compact";

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
      className: classNames(
        "font-heading font-medium leading-snug text-foreground",
        isCompact ? "text-sm" : "text-base"
      ),
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
        <div
          className={classNames(
            "relative w-full shrink-0 overflow-hidden rounded-t-xl",
            isCompact ? "aspect-[5/3]" : "aspect-video"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              isCompact
                ? "(max-width: 768px) 85vw, 300px"
                : "(max-width: 896px) 100vw, 896px"
            }
            className="object-cover"
            priority={false}
          />
        </div>
        <CardHeader
          className={classNames(
            "shrink-0",
            isCompact ? "gap-1 px-3 pt-3 pb-1" : "gap-2 px-4 pt-4 pb-2"
          )}
        >
          {titleHeading}
          {iso ? (
            <time
              dateTime={iso}
              className={classNames(
                "text-muted-foreground",
                isCompact ? "text-[0.65rem]" : "text-xs"
              )}
            >
              {display}
            </time>
          ) : (
            <span
              className={classNames(
                "text-muted-foreground",
                isCompact ? "text-[0.65rem]" : "text-xs"
              )}
            >
              {display}
            </span>
          )}
        </CardHeader>
        <CardContent
          className={classNames(
            "flex min-h-0 flex-1 flex-col",
            isCompact ? "px-3 pb-2 pt-0" : "px-4 pb-2 pt-0"
          )}
        >
          <p
            className={classNames(
              "shrink-0 text-muted-foreground",
              isCompact ? "line-clamp-2 text-xs" : "line-clamp-3 text-sm"
            )}
          >
            {preview}
          </p>
          {tags.length > 0 ? (
            <ul
              role="list"
              className={classNames(
                "flex shrink-0 list-none flex-wrap gap-2 p-0",
                isCompact ? "mt-2" : "mt-3"
              )}
            >
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="secondary"
                    className={isCompact ? "text-[0.65rem]" : undefined}
                  >
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          ) : null}
          {/* Fills remaining card height so siblings in a row match the tallest article. */}
          <div className="min-h-0 flex-1" aria-hidden="true" />
        </CardContent>
        <CardFooter
          className={classNames(
            "shrink-0 justify-start border-t-0 bg-transparent pt-0",
            isCompact ? "px-3 pb-3" : "px-4 pb-4"
          )}
        >
          <Link
            href={href}
            className={classNames(
              "font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isCompact ? "text-xs" : "text-sm"
            )}
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
