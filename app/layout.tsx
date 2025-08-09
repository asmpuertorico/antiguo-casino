import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://antiguo-casino.example"
  ),
  title: "Antiguo Casino de Puerto Rico",
  description: "Your dream event starts here. Welcome to Antiguo Casino de Puerto Rico.",
  applicationName: "Antiguo Casino",
  openGraph: {
    title: "Antiguo Casino de Puerto Rico",
    description: "Your dream event starts here. Welcome to Antiguo Casino de Puerto Rico.",
    type: "website",
    images: [
      {
        url: "/video/poster.jpg",
        width: 1200,
        height: 630,
        alt: "Antiguo Casino hero",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <a
          href="#main"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
