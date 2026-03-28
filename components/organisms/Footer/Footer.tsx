import { Typography } from "@/components/atoms/Typography";

export type FooterProps = {
  note: string;
  copyrightName: string;
};

export const Footer = ({ note, copyrightName }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--glass-border)] bg-[var(--glass-surface)]/70 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 text-center sm:text-left">
        <Typography variant="small" className="text-muted-foreground">
          {note}
        </Typography>
        <Typography variant="caption" className="text-muted-foreground">
          © {year} {copyrightName}
        </Typography>
      </div>
    </footer>
  );
};
