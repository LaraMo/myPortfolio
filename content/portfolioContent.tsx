import {
  Atom,
  Braces,
  Brain,
  Briefcase,
  Camera,
  Code2,
  FileCode,
  GitBranch,
  Globe,
  Paintbrush,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import type { Article, Skill, WorkExperience } from "@/types/content";

export const articlesSectionMeta = {
  title: "A few articles I wrote",
  catalogUrl: "https://medium.com/@laramo",
};

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
    body: "I am a skilled and motivated software developer since 2019  with experience in developing innovative and efficient software solutions. I am proficient in React.js and Javascript with a focus on front-end development. I am interested in web/mobile development offering enthusiasm and understanding of various programming languages and frameworks.",
  },
  skills: {
    title: "A few skills",
    items: [
      { label: "React", icon: Atom },
      { label: "Next", icon: Atom },
      { label: "Typescript", icon: FileCode },
      { label: "Tailwind", icon: Paintbrush },
      { label: "Javascript", icon: Braces },
      { label: "HTML", icon: Code2 },
      { label: "SCSS/SASS/CSS", icon: Paintbrush },
      { label: "Node.js", icon: Code2 },
      { label: "Git", icon: Braces },
      { label: "AWS", icon: Globe },
      { label: "Android studio", icon: Smartphone },
      { label: "SQL", icon: Code2 },
      { label: "C#", icon: FileCode },
      { label: "Java", icon: FileCode },
      { label: "Agile", icon: Brain },
    ] satisfies Skill[],
  },
  work: {
    title: "Relevant work experience",
    entries: [
      {
        period: "October 2023 - Present",
        title: "Software Developer",
        company: "Plusgrade",
        description: "Build products for travel partners to drive revenue and enhance customer experiences, collaborating with cross-functional teams to deliver reliable, high-quality features. Use technologies like React, MUI, ESLint/Oxlint, and monorepo architectures while focusing on clean code, fast learning, and a supportive team culture",
        logoEmoji: "💺",
      },
      {
        period: "March 2022 - October 2023",
        title: "IT Developer",
        company: "Ubisoft",
        description: "Code new and existing UI components and suggest improvements",
        logoEmoji: "🎮",
      },
      {
        period: "September 2020 - March 2022",
        title: "Software Developer",
        company: "Bombardier",
        description:
          "Developing a mobile app to track maintenance status of aircrafts built using ReactNative.js & Redux.js. In charge of interviewing and onboarding new dev interns",
        logoEmoji: "✈️",
      },
      {
        period: "June 2019 - September 2020",
        title: "Software Developer",
        company: "Neptronic",
        description:
          "Implemented new web pages for the in-house business tools using React.js, C#, ASP.NET, and Microsoft SQL Server",
        logoEmoji: "🌡️",
      },
    ] satisfies WorkExperience[],
  },
  articles: articlesSectionMeta,
  footer: {
    tagline: "This website was made with Next.js, Tailwind and lots of love",
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/laramo/",
        label: "Lara on LinkedIn",
        text: "LinkedIn",
        icon: Briefcase,
      },
      {
        href: "https://www.instagram.com/super_woman_in_shorts",
        label: "Lara on Instagram",
        text: "Instagram",
        icon: Camera,
      },
      {
        href: "https://github.com/LaraMo",
        label: "Lara on GitHub",
        text: "Github",
        icon: GitBranch,
      },
    ] satisfies ReadonlyArray<{
      href: string;
      label: string;
      text: string;
      icon: LucideIcon;
    }>,
  },
} as const;

/** Intro, skills, work, and articles blocks for the home accordion. */
export type PortfolioMainSections = Pick<typeof portfolioContent, "intro" | "skills" | "work"> & {
  articles: {
    title: string;
    catalogUrl: string;
    entries: Article[];
  };
};
