"use client";

import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import { classNames } from "@/libs/utils/classNames/classNames";

export type HeaderProps = {
  cvUrl: string;
  byline: string;
};

export const Header = ({ cvUrl, byline }: HeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] bg-[var(--glass-surface)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={cvUrl}
            download
            className={classNames(
              buttonVariants({ variant: "glass", size: "sm" }),
              "no-underline"
            )}
          >
            <Icon icon={Download} size="sm" className="mr-1" />
            Résumé
          </a>
          <Button
            variant="outline-glass"
            size="icon-sm"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
          >
            {mounted ? (
              <Icon
                icon={resolvedTheme === "dark" ? Sun : Moon}
                size="sm"
              />
            ) : (
              <Icon icon={Moon} size="sm" />
            )}
          </Button>
        </div>
        <Typography
          variant="body"
          cursive
          className="text-right text-muted-foreground"
        >
          {byline}
        </Typography>
      </div>
    </header>
  );
};
