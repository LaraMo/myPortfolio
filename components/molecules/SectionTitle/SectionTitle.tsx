import { Typography } from "@/components/atoms/Typography";
import { classNames } from "@/lib/utils/classNames/classNames";

import { splitTitleInitial } from "./utils/splitTitleInitial";

export type SectionTitleProps = {
  title: string;
};

/**
 * Drop-cap title for AccordionCard triggers (inside `<button>`).
 * Decorative glyphs are aria-hidden; the button’s `aria-label` names the section.
 */
export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { initial, rest } = splitTitleInitial(title);

  const titleTypographyClass =
    "font-heading !text-[22px] !font-normal !leading-snug !tracking-normal group-data-[size=sm]/card:!text-xl";

  if (initial.length === 0) {
    return (
      <Typography variant="h2" as="span" className={titleTypographyClass}>
        {title}
      </Typography>
    );
  }

  return (
    <span className="flex min-w-0 flex-1 flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
      <span
        className="shrink-0 font-heading text-5xl font-bold leading-none tracking-tight text-fuchsia-600 md:text-6xl dark:text-fuchsia-400"
        aria-hidden
      >
        {initial}
      </span>
      {rest.length > 0 ? (
        <Typography
          variant="h2"
          as="span"
          className={classNames("min-w-0 pb-0", titleTypographyClass)}
          aria-hidden
        >
          {rest}
        </Typography>
      ) : null}
    </span>
  );
};
