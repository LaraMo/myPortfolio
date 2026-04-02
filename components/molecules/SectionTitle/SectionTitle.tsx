import { Typography } from "@/components/atoms/Typography";

import { splitTitleInitial } from "./utils/splitTitleInitial";

export type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { initial, rest } = splitTitleInitial(title);

  return (
    <span className="flex min-w-0 flex-1 flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
      <Typography variant="sectionTitleCap" aria-hidden>
        {initial}
      </Typography>
        <Typography variant="sectionTitleRest" aria-hidden>
          {rest}
        </Typography>
    </span>
  );
};
