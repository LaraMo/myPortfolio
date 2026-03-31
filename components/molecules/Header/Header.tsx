"use client";

import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BrandLmMark } from "@/components/atoms/BrandLmMark";
import { Button } from "@/components/atoms/Button";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { classNames } from "@/lib/utils/classNames/classNames";

export type HeaderProps = {
  cvUrl: string;
};

export const Header = ({ cvUrl }: HeaderProps) => {
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
        <BrandLmMark />
        <div className="flex flex-wrap items-center justify-end gap-2 sm:ml-auto">
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
      </div>
    </header>
  );
};
