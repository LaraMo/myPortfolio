export type WorkExperience = {
  period: string;
  title: string;
  company: string;
  description: string;
  /** Public path to company logo (asset under `/public/`). */
  logoSrc: string;
};
