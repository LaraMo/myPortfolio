export type Article = {
  title: string;
  /** ISO 8601 date string for `<time dateTime>` and display. */
  publishedAt: string;
  preview: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tags: string[];
};
