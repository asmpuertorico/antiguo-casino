import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatModal from "@/components/ChatModal";

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
        url: "/images/get-inspired.png",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                window.chatbotConfig = { chatbotId: 'cme4th9bo0001carxespro39n', apiUrl: 'https://dashboard.getlinkai.com' };
                var s=document.createElement('script');
                s.src=window.chatbotConfig.apiUrl + '/chatbot.js?v=' + Date.now();
                s.onload=function(){};
                s.onerror=function(){
                  fetch(window.chatbotConfig.apiUrl + '/chatbot.js')
                    .then(function(r){ if(!r.ok) throw new Error('HTTP '+r.status+': '+r.statusText); return r.text(); })
                    .then(function(t){ (0, eval)(t); })
                    .catch(function(){});
                };
                document.head.appendChild(s);
              })();
            `,
          }}
        />
        <a
          href="#main"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <ChatModal />
        <Footer />
      </body>
    </html>
  );
}
