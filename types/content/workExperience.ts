export type WorkExperience = {
  period: string;
  title: string;
  company: string;
  description: string;
  /** Visual marker for the sector (emoji), avoids maintaining brand SVGs. */
  logoEmoji: string;
};
