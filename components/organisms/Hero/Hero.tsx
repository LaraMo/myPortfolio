import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";

import { HeroChangingSubtitle } from "./components/HeroChangingSubtitle";

export type HeroProps = {
  image: ImageProps["src"];
  imageAlt: string;
  /** Top of the text column (e.g. eyebrow, kicker) — rendered above the main title. */
  heroHead: ReactNode;
  title: string;
  subtitles: string[];
  /** Optional extra content below the title and rotating subtitle (e.g. CTAs, intro line). */
  children?: ReactNode;
};

export const Hero = ({ image, title, subtitles, imageAlt, heroHead, children }: HeroProps) => {
  return (
    <section
      className="mx-auto flex max-w-4xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:gap-14 sm:py-14"
      aria-labelledby="hero-heading"
    >
      <Image
        src={image}
        alt={imageAlt}
        width={220}
        height={220}
        preload
        sizes="(max-width: 640px) 200px, 220px"
        shape="rectangle"
        glassRing
        className="mx-auto size-[200px] shrink-0 sm:mx-0 sm:size-[220px]"
      />
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <div className="mb-2">{heroHead}</div>
        <h1 id="hero-heading">
          <Typography variant="display" gradient as="span" className="block text-balance">
            {title}
          </Typography>
        </h1>
        <HeroChangingSubtitle subtitles={subtitles} />
        {children != null ? <div className="mt-6 w-full max-w-prose">{children}</div> : null}
      </div>
    </section>
  );
};
