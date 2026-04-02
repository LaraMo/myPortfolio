import type { Metadata } from "next";

import { ThemeProvider } from "@/lib/utils/theme/ThemeProvider";
import { fontVariableClassNames } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Liora Lara Mezirovsky",
    template: "%s | Lara Mo",
  },
  description: `Portfolio`,
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
