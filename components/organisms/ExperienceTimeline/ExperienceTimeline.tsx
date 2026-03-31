import Image from "next/image";

import { Typography } from "@/components/atoms/Typography";
import { classNames } from "@/lib/utils/classNames/classNames";
import type { WorkEntry } from "@/content/portfolio-content";

import { experienceTimelineVariants } from "./experience-timeline-variants";

const LOGO_PX = 52;

export type ExperienceTimelineProps = {
  entries: WorkEntry[];
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
              <Image
                src={entry.logoSrc}
                alt={`${entry.company} logo`}
                width={LOGO_PX}
                height={LOGO_PX}
                className="size-[2.875rem] object-contain p-0.5"
                unoptimized
              />
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
