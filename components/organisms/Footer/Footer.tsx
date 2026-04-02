import { Link } from "@/components/atoms/Link";
import { Typography } from "@/components/atoms/Typography";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/content/portfolioContent";
import { classNames } from "@/lib/utils/classNames/classNames";

export const Footer = () => {
  const { tagline, socialLinks } = portfolioContent.footer;

  return (
    <footer className="mt-auto border-t border-(--glass-border) bg-(--glass-surface)/70 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <Typography variant="body" as="p" color="muted" className="max-w-md">
          {tagline}
        </Typography>
        <Typography variant="caption" color="muted" as="p">
          © {new Date().getFullYear()}
        </Typography>
        <ul
          className="flex list-none flex-wrap justify-center gap-3 p-0"
          aria-label="Social profiles"
        >
          {socialLinks.map(({ href, label, text, icon }) => (
            <li key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={classNames(
                  "inline-flex no-underline rounded-4xl",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
              >
                <Badge icon={icon} variant="secondary" size="lg">
                  {text}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
