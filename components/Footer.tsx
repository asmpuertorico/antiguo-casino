"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function Footer() {
  const socials = [
    {
      name: "Facebook",
      href: "http://facebook.com/antiguocasinopr/",
      svg: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
          <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9V12.1h2.54V9.98c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.78h2.77l-.44 2.87h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94Z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/antiguocasinopr/",
      svg: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/antiguocasinopr/",
      svg: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.21 2.59 7.79 6.26 9.26-.09-.79-.17-2 .04-2.86.18-.78 1.16-4.95 1.16-4.95s-.29-.58-.29-1.44c0-1.35.78-2.36 1.75-2.36.83 0 1.23.62 1.23 1.36 0 .83-.53 2.07-.8 3.22-.23 1.01.49 1.84 1.46 1.84 1.75 0 3.09-1.85 3.09-4.52 0-2.36-1.7-4.01-4.13-4.01-2.81 0-4.46 2.11-4.46 4.3 0 .85.33 1.76.74 2.26.08.1.09.19.07.29-.08.32-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.38-.64-2.24-2.66-2.24-4.28 0-3.49 2.54-6.69 7.32-6.69 3.83 0 6.8 2.73 6.8 6.38 0 3.79-2.39 6.85-5.7 6.85-1.11 0-2.15-.58-2.51-1.26l-.68 2.58c-.25.98-.92 2.21-1.37 2.96.98.3 2.02.46 3.09.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#cec9c4] text-[#434343]" role="contentinfo">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 text-center">
          {/* Brand logo */}
          <Image
            src="/images/AC%20ICON.png"
            alt="Antiguo Casino"
            width={64}
            height={64}
            className="h-14 w-auto"
            priority
          />

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-[#434343] hover:text-[#2f2f2f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#434343]"
              >
                {s.svg}
              </a>
            ))}
          </div>

          {/* Contact info with icons */}
          <div className="space-y-1 text-sm md:text-base">
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5"><path fill="currentColor" d="M22 16.92a1 1 0 0 1-.54.88l-3.2 1.6a1 1 0 0 1-1 0C13.86 17.86 9.81 13.8 8.6 6.77a1 1 0 0 1 .5-1.06l3.24-1.72a1 1 0 0 1 1.45.74l.53 3.11a1 1 0 0 1-.26.84l-1.45 1.45a12.07 12.07 0 0 0 4.82 4.82l1.45-1.45a1 1 0 0 1 .84-.26l3.11.53a1 1 0 0 1 .77 1.15Z"/></svg>
              <span>787.690.5482</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5"><path fill="currentColor" d="M22 16.92a1 1 0 0 1-.54.88l-3.2 1.6a1 1 0 0 1-1 0C13.86 17.86 9.81 13.8 8.6 6.77a1 1 0 0 1 .5-1.06l3.24-1.72a1 1 0 0 1 1.45.74l.53 3.11a1 1 0 0 1-.26.84l-1.45 1.45a12.07 12.07 0 0 0 4.82 4.82l1.45-1.45a1 1 0 0 1 .84-.26l3.11.53a1 1 0 0 1 .77 1.15Z"/></svg>
              <span>787.300.6736</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"/></svg>
              <a href="mailto:cmarrero@levyrestaurants.com" className="underline hover:no-underline">
                cmarrero@levyrestaurants.com
              </a>
            </div>
            <address className="not-italic">
              Ave. Ponce de León, Esq. Norzagaray, San Juan, PR 00901
            </address>
          </div>

          {/* Partner logos */}
          <div className="mt-2 flex items-center justify-center gap-6 opacity-90">
            <Image
              src="/images/District-Logo.png"
              alt="District Puerto Rico"
              width={80}
              height={80}
              className="h-12 w-auto"
            />
            <Image
              src="/images/legends small.png"
              alt="Legends"
              width={80}
              height={80}
              className="h-12 w-auto"
            />
          </div>
        </div>
        <div className="pb-8">
          <div className="text-sm text-[#2aa198] flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
            <a
              href="https://www.asmglobal.com/p/other/privacy-policy-23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window === 'undefined') return;
                type OsanoCM = {
                  open?: () => void;
                  showDrawer?: () => void;
                  managePreferences?: () => void;
                  toggle?: () => void;
                };
                type OsanoGlobal = { cm?: OsanoCM };
                const osano: OsanoGlobal | undefined = (window as unknown as { Osano?: OsanoGlobal }).Osano;
                const cm: OsanoCM | undefined = osano?.cm;
                if (cm?.open) { cm.open(); return; }
                if (cm?.showDrawer) { cm.showDrawer(); return; }
                if (cm?.managePreferences) { cm.managePreferences(); return; }
                if (cm?.toggle) { cm.toggle(); return; }
                const trigger = document.querySelector('[data-osano-cm-widget], .osano-cm-widget') as HTMLElement | null;
                trigger?.click();
              }}
              className="hover:underline"
            >
              Cookie Preferences
            </button>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://www.asmglobal.com/p/other/privacy-request"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Do Not Sell or Share My Info
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}


