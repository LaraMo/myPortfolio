import RSSParser from "rss-parser";

import type { Article } from "@/types/content";

const MEDIUM_FEED_URL = "https://medium.com/feed/@laramo";

const SEVEN_DAYS_IN_SECONDS = 604800;

const MAX_ARTICLES = 3;

const FALLBACK_IMAGE_SRC = "/placeholder.webp";

const parser = new RSSParser();

const imgSrcRe = /<img[^>]+src=["'](https:\/\/[^"']+)["']/i;

type RssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  summary?: string;
  "content:encoded"?: string;
  categories?: string[];
};

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

const formatPublishedDate = (pubDate: string | undefined): string => {
  const raw = pubDate?.trim();
  if (!raw) {
    return "";
  }
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .replaceAll(",", "")
    .replace(/\s+/g, " ")
    .trim();
};

const convertCategoriesToTags = (categories: string[] | undefined): string[] => {
  if (!categories?.length) {
    return [];
  }
  return [...categories].filter(Boolean);
};

const mapRssItemToArticle = (rssItem: RssItem): Article | null => {
  const title = rssItem.title?.trim();
  const href = rssItem.link?.trim();
  if (!title || !href) {
    return null;
  }

  const encoded = rssItem["content:encoded"];
  const htmlBlob = [encoded, rssItem.content, rssItem.summary].filter(Boolean).join(" ");
  const previewText = rssItem.contentSnippet?.trim() || stripHtml(htmlBlob);

  const remoteImage = firstHttpsImageSrc(encoded);

  const imageSrc = remoteImage ?? FALLBACK_IMAGE_SRC;
  const imageAlt = remoteImage
    ? `Preview image for “${title}”`
    : "Decorative preview image for the article";

  return {
    title,
    publishedAt: formatPublishedDate(rssItem.pubDate),
    previewText,
    imageSrc,
    imageAlt,
    href,
    tags: convertCategoriesToTags(rssItem.categories),
  };
};

export const getMediumArticleEntries = async (): Promise<Article[]> => {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: SEVEN_DAYS_IN_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items
      .map((rssItem) => mapRssItemToArticle(rssItem))
      .filter((article) => article !== null)
      .slice(0, MAX_ARTICLES);
  } catch {
    return [];
  }
};
