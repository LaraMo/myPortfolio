import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Apply on `<html>` so `globals.css` @theme font tokens resolve. */
export const fontVariableClassNames = [geistSans.variable, geistMono.variable].join(" ");
