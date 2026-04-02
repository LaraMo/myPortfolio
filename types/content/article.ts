export type Article = {
  title: string;
  /** English display date from the feed (e.g. `May 16 2026`). */
  publishedAt: string;
  previewText: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tags: string[];
};
