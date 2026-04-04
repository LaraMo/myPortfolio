"use client";

import { Typography } from "@/components/atoms/Typography";

import { useDisplayHeroSubtitles } from "../hooks/useDisplayHeroSubtitles";

export type HeroChangingSubtitleProps = {
  subtitles: readonly string[];
};

export const HeroChangingSubtitle = ({ subtitles }: HeroChangingSubtitleProps) => {
  const index = useDisplayHeroSubtitles(subtitles);

  return (
    <Typography variant="bodyLarge" className="mt-6" as="p">
      <span className="text-muted-foreground">I am a </span>
      <span className="font-medium text-foreground">{subtitles[index]}</span>
    </Typography>
  );
};
