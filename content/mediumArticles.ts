import RSSParser from "rss-parser";

import type { Article } from "@/types/content";

const MEDIUM_FEED_URL = "https://medium.com/feed/@laramo" as const;

const SEVEN_DAYS_SECONDS = 604800;

const MAX_ARTICLES = 3;

const PREVIEW_MAX_LENGTH = 240;

const FALLBACK_IMAGE_SRC = "/lara.png" as const;

const parser = new RSSParser();

const imgSrcRe = /<img[^>]+src=["'](https:\/\/[^"']+)["']/i;

const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const firstHttpsImageSrc = (html: string | undefined): string | null => {
  if (!html) {
    return null;
  }
  const match = imgSrcRe.exec(html);
  return match?.[1] ?? null;
};

const clampPreview = (text: string): string => {
  const t = text.trim();
  if (t.length <= PREVIEW_MAX_LENGTH) {
    return t;
  }
  return `${t.slice(0, PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
};

const publishedAtIso = (
  pubDate: string | undefined,
  isoDate: string | undefined,
): string => {
  const raw = isoDate ?? pubDate;
  if (!raw) {
    return "";
  }
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) {
    return "";
  }
  return d.toISOString().slice(0, 10);
};

const itemTags = (categories: string[] | undefined): string[] => {
  if (!categories?.length) {
    return [];
  }
  return [...categories].filter(Boolean);
};

/** rss-parser stores Medium full HTML under `content:encoded`, not `content` (often from `description`). */
type RssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  isoDate?: string;
  content?: string;
  contentSnippet?: string;
  summary?: string;
  "content:encoded"?: string;
  categories?: string[];
  enclosure?: { url?: string; type?: string };
};

const mapItemToArticle = (item: RssItem): Article | null => {
  const title = item.title?.trim();
  const href = item.link?.trim();
  if (!title || !href) {
    return null;
  }

  const encoded = item["content:encoded"];
  const htmlBlob = [encoded, item.content, item.summary].filter(Boolean).join(" ");
  const snippet = item.contentSnippet?.trim() || stripHtml(htmlBlob);
  const preview = clampPreview(snippet);

  const enclosureUrl = item.enclosure?.url?.trim();
  const enclosureIsImage =
    enclosureUrl &&
    (item.enclosure?.type?.startsWith("image/") ?? /\.(jpe?g|png|gif|webp)(\?|$)/i.test(enclosureUrl));

  const remoteImage =
    (enclosureIsImage ? enclosureUrl : null) ??
    firstHttpsImageSrc(encoded) ??
    firstHttpsImageSrc(item.content) ??
    firstHttpsImageSrc(item.summary);

  const imageSrc = remoteImage ?? FALLBACK_IMAGE_SRC;
  const imageAlt = remoteImage
    ? `Preview image for “${title}”`
    : "Decorative preview image for the article";

  return {
    title,
    publishedAt: publishedAtIso(item.pubDate, item.isoDate),
    preview,
    imageSrc,
    imageAlt,
    href,
    tags: itemTags(item.categories),
  };
};

export const getMediumArticleEntries = async (): Promise<Article[]> => {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: SEVEN_DAYS_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const entries: Article[] = [];

    for (const item of feed.items) {
      const article = mapItemToArticle(item);
      if (article) {
        entries.push(article);
      }
      if (entries.length >= MAX_ARTICLES) {
        break;
      }
    }

    return entries;
  } catch {
    return [];
  }
};
