"use client";

import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";
import type { ImageProps } from "next/image";

import { useDisplayHeroSubtitles } from "./hooks/useDisplayHeroSubtitles";

export type HeroProps = {
  image: ImageProps["src"];
  imageAlt: string;
  title: string;
  subtitles: string[];
};

export const Hero = ({ image, title, subtitles, imageAlt }: HeroProps) => {
  const index = useDisplayHeroSubtitles(subtitles);

  return (
    <section
      className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:flex-row sm:items-center sm:gap-14 sm:py-20"
      aria-labelledby="hero-heading"
    >
      <Image
        src={image}
        alt={imageAlt}
        width={220}
        height={220}
        shape="rectangle"
        glassRing
        className="mx-auto size-[200px] shrink-0 sm:mx-0 sm:size-[220px]"
      />
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h1 id="hero-heading">
          <Typography
            variant="display"
            gradient
            as="span"
            className="block text-balance"
          >
            {title}
          </Typography>
        </h1>
        <Typography
          variant="bodyLarge"
          color="muted"
          className="mt-6"
          as="p"
        >
          <span className="text-foreground">I am a </span>
          {subtitles[index]}
        </Typography>
      </div>
    </section>
  );
};
