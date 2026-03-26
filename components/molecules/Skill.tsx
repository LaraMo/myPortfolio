import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import { classNames } from "@/libs/utils/classNames/classNames";

export type SkillProps = {
  label: string;
  icon: LucideIcon;
  className?: string;
};

export const Skill = ({ label, icon, className }: SkillProps) => {
  return (
    <div
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface)] px-3 py-1.5 shadow-sm backdrop-blur-md",
        className
      )}
    >
      <Icon icon={icon} size="sm" className="text-primary" />
      <Typography variant="small" as="span" className="font-medium">
        {label}
      </Typography>
    </div>
  );
};
