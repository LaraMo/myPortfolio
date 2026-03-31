import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ThemeProvider } from "@/lib/utils/theme/ThemeProvider";
import { fontVariableClassNames } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Portfolio`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontVariableClassNames} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
