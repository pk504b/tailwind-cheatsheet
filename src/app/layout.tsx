import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Tailwind CSS Cheatsheet",
  description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
  keywords: ["cheat", "sheet", "cheatsheet", "tailwind", "css", "classes", "utilities", "v4", "spa", "single page", "html", "javascript"],
  openGraph: {
    type: "website",
    url: "https://tailwindcss.504b.cc/",
    title: "Tailwind CSS Cheatsheet",
    description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
    siteName: "Tailwind CSS Cheatsheet",
    images: [
      {
        url: "https://tailwindcss.504b.cc/og-card.png",
        width: 600,
        height: 315,
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind CSS Cheatsheet",
    description: "A quick reference guide to learn Tailwind CSS. Easily browse and search through all Tailwind utility classes and CSS properties on a single page.",
    images: [
      {
        url: "https://tailwindcss.504b.cc/og-card.png",
        width: 600,
        height: 315,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <GoogleAnalytics gaId="G-10E14JPSK5" />
      <body>
        {children}
      </body>
    </html>
  );
}
