"use client";

import { useEffect, useState } from "react";

import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";
import type { ImageProps } from "next/image";

export type HeroProps = {
  image: ImageProps["src"];
  title: string;
  subtitles: string[];
  imageAlt: string;
};

const splitDisplayName = (full: string): [string, string] => {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) {
    return [full, ""];
  }
  const last = parts.pop() ?? "";
  return [parts.join(" "), last];
};

export const Hero = ({ image, title, subtitles, imageAlt }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [line1, line2] = splitDisplayName(title);

  useEffect(() => {
    if (subtitles.length <= 1) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % subtitles.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [subtitles.length]);

  const subtitle = subtitles[index] ?? "";

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
        <h1 id="hero-heading" className="space-y-1">
          <Typography variant="display" gradient as="span" className="block">
            {line1}
          </Typography>
          {line2 ? (
            <Typography variant="display" gradient as="span" className="block">
              {line2}
            </Typography>
          ) : null}
        </h1>
        <Typography
          variant="bodyLarge"
          color="muted"
          className="mt-6"
          as="p"
        >
          <span className="text-foreground">I am a </span>
          {subtitle}
        </Typography>
      </div>
    </section>
  );
};
