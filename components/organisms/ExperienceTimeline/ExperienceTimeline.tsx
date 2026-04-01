import { Typography } from "@/components/atoms/Typography";
import { classNames } from "@/lib/utils/classNames/classNames";
import type { WorkExperience } from "@/types/content";

import { experienceTimelineVariants } from "./experienceTimelineVariants";

export type ExperienceTimelineProps = {
  entries: WorkExperience[];
  className?: string;
};

export const ExperienceTimeline = ({
  entries,
  className,
}: ExperienceTimelineProps) => {
  const {
    root,
    spine,
    item,
    nodeCell,
    nodeShell,
    content,
    roleRow,
    roleTitle,
    companyInline,
    period,
    description,
  } = experienceTimelineVariants();

  return (
    <ol className={classNames(root(), className)} aria-label="Work experience">
      <div className={spine()} aria-hidden />
      {entries.map((entry) => (
        <li key={entry.period} className={item()}>
          <div className={nodeCell()}>
            <div className={nodeShell()}>
              <span
                className="select-none text-[1.75rem] leading-none"
                aria-hidden
                title={entry.company}
              >
                {entry.logoEmoji}
              </span>
            </div>
          </div>

          <div className={content()}>
            <p className={roleRow()}>
              <span className={roleTitle()}>{entry.title}</span>
              <span className={companyInline()}>@ {entry.company}</span>
            </p>
            <Typography variant="caption" as="p" className={period()}>
              {entry.period}
            </Typography>
            <Typography variant="body" as="p" className={description()}>
              {entry.description}
            </Typography>
          </div>
        </li>
      ))}
    </ol>
  );
};
