import {
  Atom,
  Braces,
  Code2,
  FileCode,
  Globe,
  Paintbrush,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type SkillItem = { label: string; icon: LucideIcon };

export type WorkEntry = {
  period: string;
  title: string;
  company: string;
  description: string;
  /** Public path to company logo (mock asset under `/public/work/`). */
  logoSrc: string;
};

export type ArticleEntry = {
  title: string;
  /** ISO 8601 date string for `<time dateTime>` and display. */
  publishedAt: string;
  preview: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tags: string[];
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
    ] satisfies SkillItem[],
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
        logoSrc: "/work/ubisoft.svg",
      },
      {
        period: "September 2020 - March 2022",
        title: "Software Developer",
        company: "Bombardier",
        description:
          "Developing a mobile app to track maintenance status of aircrafts built using ReactNative.js & Redux.js. In charge of interviewing and onboarding new dev interns",
        logoSrc: "/work/bombardier.svg",
      },
      {
        period: "June 2019 - September 2020",
        title: "Software Developer",
        company: "Neptronic",
        description:
          "Implemented new web pages for the in-house business tools using React.js, C#, ASP.NET, and Microsoft SQL Server",
        logoSrc: "/work/neptronic.svg",
      },
    ] satisfies WorkEntry[],
  },
  articles: {
    title: "A few articles I wrote",
    catalogUrl: "https://medium.com/@laramo",
    catalogButtonLabel: "View full catalog here",
    entries: [
      {
        title: "What's CORS?",
        publishedAt: "2025-02-22",
        preview:
          "A practical look at cross-origin requests, why browsers enforce the same-origin policy, and how CORS headers let servers opt in to sharing resources safely.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the CORS article",
        href: "https://example.com/articles/cors",
        tags: ["javascript", "front-end-development", "cors"],
      },
      {
        title: "Did you know? (JS & React Edition)",
        publishedAt: "2025-02-08",
        preview:
          "Short tips and lesser-known behaviors in JavaScript and React that can save debugging time—from closures to effect dependencies.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the JS and React tips article",
        href: "https://example.com/articles/js-react-tips",
        tags: [
          "javascript-tips",
          "javascript",
          "react",
          "javascript-development",
        ],
      },
      {
        title: "NPM — Ninja Programmer Mindset?",
        publishedAt: "2024-11-14",
        preview:
          "How package management fits into a disciplined workflow: versioning, audits, and keeping dependencies understandable as projects grow.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the NPM article",
        href: "https://example.com/articles/npm-mindset",
        tags: ["npm", "nodejs"],
      },
      {
        title: "Testing UI with confidence",
        publishedAt: "2024-09-03",
        preview:
          "Practical patterns for component tests: what to assert, how to avoid flaky selectors, and when integration tests pay off.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the testing article",
        href: "https://example.com/articles/ui-testing",
        tags: ["testing", "react", "quality"],
      },
      {
        title: "CSS layout mental models",
        publishedAt: "2024-07-18",
        preview:
          "Flexbox vs grid in real pages: picking the right tool, common pitfalls, and keeping responsive layouts predictable.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the CSS layout article",
        href: "https://example.com/articles/css-layout",
        tags: ["css", "layout", "responsive"],
      },
      {
        title: "Accessibility in everyday PRs",
        publishedAt: "2024-05-01",
        preview:
          "Small habits that add up: focus states, labels, and keyboard paths without waiting for a dedicated audit.",
        imageSrc: "/lara.png",
        imageAlt: "Decorative preview image for the accessibility article",
        href: "https://example.com/articles/a11y-prs",
        tags: ["accessibility", "frontend", "ux"],
      },
    ] satisfies ArticleEntry[],
  },
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
