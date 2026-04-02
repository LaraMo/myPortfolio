import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import { Link, linkProseVariants } from "@/components/atoms/Link";
import {
  Typography,
  captionMetaClassName,
} from "@/components/atoms/Typography";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { classNames } from "@/lib/utils/classNames/classNames";

export type ArticleProps = {
  title: string;
  preview: string;
  image: { src: string; alt: string };
  publishedAt: string;
  tags: string[];
  href: string;
  titleId: string;
  className?: string;
};

export const Article = ({
  title,
  preview,
  image,
  publishedAt,
  tags,
  href,
  titleId,
  className,
}: ArticleProps) => {

  const articleProps: ComponentPropsWithoutRef<"article"> = {
    className: classNames(
      "@container/article flex h-full min-h-0 flex-col",
      className
    ),
  };

  return (
    <article {...{...articleProps, "aria-labelledby": titleId}}>
      <Card className={"border-(--glass-border) bg-(--glass-surface) shadow-lg backdrop-blur-xl flex h-full min-h-0 flex-1 flex-col gap-0 py-0 has-[>img:first-child]:pt-0"}>
        <div className="relative aspect-5/3 w-full shrink-0 overflow-hidden rounded-t-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 85vw, 300px"
            className="object-cover"
          />
        </div>
        <CardHeader className="shrink-0 gap-1 px-3 pt-3 pb-1">
          <Typography
            as="h2"
            variant="body"
            id={titleId}
          >
            {title}
          </Typography>
          {publishedAt ? (
            <Typography
              as="time"
              variant="caption"
              color="muted"
              className={captionMetaClassName}
            >
              {publishedAt}
            </Typography>
          ) : null}
        </CardHeader>
        <CardContent className="flex min-h-0 flex-1 flex-col px-3 pb-2 pt-0">
          <Typography
            as="p"
            variant="small"
            className="line-clamp-3 shrink-0"
          >
            {preview}
          </Typography>
          {tags.length > 0 ? (
            <ul
              role="list"
              className="mt-2 flex shrink-0 list-none flex-wrap gap-2 p-0"
            >
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="secondary" size="sm">
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
            className={linkProseVariants()}
            aria-label={`Read more: ${title}`}
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
};
