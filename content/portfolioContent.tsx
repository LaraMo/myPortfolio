import {
  Atom,
  Braces,
  Code2,
  FileCode,
  Globe,
  Paintbrush,
  Smartphone,
} from "lucide-react";

import type { Article, Skill, WorkExperience } from "@/types/content";

/** Static accordion chrome; article rows come from `getMediumArticleEntries`. */
export const articlesSectionMeta = {
  title: "A few articles I wrote",
  catalogUrl: "https://medium.com/@laramo",
  catalogButtonLabel: "View full catalog here",
} as const;

export const portfolioContent = {
  header: {
    cvUrl: "https://example.com/liora-lara-mezirovsky-resume.pdf",
  },
  hero: {
    image: "/lara.png" as const,
    title: "Liora Lara Mezirovsky",
    imageAlt: "Portrait illustration of Liora Lara Mezirovsky",
    subtitles: [
      "curious software developer 💻",
      "coffee lover ☕",
      "mom to a cute baby boy 🍼",
      "wonderlust 🌍",
    ],
  },
  intro: {
    title: "Little bit about me",
    emoji: "👋",
    body:
      "I am a skilled and motivated software developer with 4+ years experience in developing innovative and efficient software solutions. I am proficient in React.js and Javascript with a focus on front-end development. I am interested in web/mobile development offering enthusiasm and understanding of various programming languages and frameworks.",
  },
  skills: {
    title: "A few skills",
    items: [
      { label: "Javascript", icon: Braces },
      { label: "SCSS/SASS/CSS", icon: Paintbrush },
      { label: "React.js", icon: Atom },
      { label: "Typescript", icon: FileCode },
      { label: "Next.js", icon: Globe },
      { label: "Tailwind", icon: Paintbrush },
      { label: "HTML", icon: Code2 },
      { label: "Node.js", icon: Code2 },
      { label: "I18N", icon: Globe },
      { label: "C#", icon: FileCode },
      { label: "AWS", icon: Globe },
      { label: "Cypress", icon: Smartphone },
      { label: "Java", icon: FileCode },
      { label: "Flutter", icon: Smartphone },
      { label: "Android studio", icon: Smartphone },
      { label: "MySQL", icon: Code2 },
      { label: "SQL", icon: Code2 },
      { label: "Git", icon: Braces },
      { label: "Verdaccio", icon: Globe },
    ] satisfies Skill[],
  },
  work: {
    title: "Relevant work experience",
    entries: [
      {
        period: "March 2022 - Present",
        title: "IT Developer",
        company: "Ubisoft",
        description:
          "Code new and existing UI components and suggest improvements",
        logoSrc: "/ubisoft.svg",
      },
      {
        period: "September 2020 - March 2022",
        title: "Software Developer",
        company: "Bombardier",
        description:
          "Developing a mobile app to track maintenance status of aircrafts built using ReactNative.js & Redux.js. In charge of interviewing and onboarding new dev interns",
        logoSrc: "/bombardier.svg",
      },
      {
        period: "June 2019 - September 2020",
        title: "Software Developer",
        company: "Neptronic",
        description:
          "Implemented new web pages for the in-house business tools using React.js, C#, ASP.NET, and Microsoft SQL Server",
        logoSrc: "/neptronic.svg",
      },
    ] satisfies WorkExperience[],
  },
  articles: articlesSectionMeta,
  contact: {
    title: "Get in touch",
    body:
      "If you have any website suggestions, comments and/or if you want to collaborate and/or just to talk :)",
    buttonLabel: "Contact Me",
    buttonHref: "mailto:hello@example.com",
  },
  footer: {
    note: "This website was made with Next.js, Tailwind, and lots of love!",
    copyrightName: "Liora Lara Mezirovsky",
  },
} as const;

/** Intro, skills, work, and articles blocks for the home accordion. */
export type PortfolioMainSections = Pick<
  typeof portfolioContent,
  "intro" | "skills" | "work"
> & {
  articles: {
    title: string;
    catalogUrl: string;
    catalogButtonLabel: string;
    entries: Article[];
  };
};
