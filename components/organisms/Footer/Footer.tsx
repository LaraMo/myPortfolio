import { Typography } from "@/components/atoms/Typography";
import { buttonVariants } from "@/components/ui/button";
import { classNames } from "@/libs/utils/classNames/classNames";

export type FooterContact = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
};

export type FooterProps = {
  contact: FooterContact;
  note: string;
  copyrightName: string;
};

export const Footer = ({ contact, note, copyrightName }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--glass-border)] bg-[var(--glass-surface)]/70 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-center sm:text-left">
        <section aria-labelledby="footer-contact-heading" className="space-y-4">
          <Typography
            id="footer-contact-heading"
            variant="h3"
            as="h2"
            className="text-foreground"
          >
            {contact.title}
          </Typography>
          <Typography variant="body" as="p" className="text-muted-foreground">
            {contact.body}
          </Typography>
          <div>
            <a
              href={contact.buttonHref}
              className={classNames(
                buttonVariants({ variant: "glass", size: "sm" }),
                "inline-flex no-underline"
              )}
            >
              {contact.buttonLabel}
            </a>
          </div>
        </section>
        <div className="flex flex-col gap-3 border-t border-[var(--glass-border)] pt-8">
          <Typography variant="small" className="text-muted-foreground">
            {note}
          </Typography>
          <Typography variant="caption" className="text-muted-foreground">
            © {year} {copyrightName}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
