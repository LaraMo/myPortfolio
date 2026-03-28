import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

/** Apply on `<html>` so `globals.css` @theme font tokens resolve. */
export const fontVariableClassNames = [
  geistSans.variable,
  geistMono.variable,
  greatVibes.variable,
].join(" ");
