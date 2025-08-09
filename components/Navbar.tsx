"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClasses =
    "px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 hover:text-indigo-contrast";

  return (
    <header className={`sticky top-0 z-40 ${scrolled ? "shadow-sm" : ""}`}>
      <nav
        aria-label="Main navigation"
        className={`nav-blur border-b border-border/50 transition-colors duration-300`}
      >
        <Container className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm font-semibold tracking-widest">
              <span className="sr-only">Home</span>
              <span aria-hidden className="text-foreground">
                ANTIGUO CASINO
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className={navLinkClasses}>
              Sales Kit
            </Link>
            <Link href="#" className={navLinkClasses}>
              Menu
            </Link>
            <Link href="#" className={navLinkClasses}>
              Guide
            </Link>
            <Link href="#" className={navLinkClasses}>
              Contact
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-indigo px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Plan Your Event
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={() => setOpen((p) => !p)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        <div
          id="primary-menu"
          className={`${open ? "block" : "hidden"} md:hidden border-t border-border/50`}
        >
          <Container>
            <div className="py-3 flex flex-col gap-1">
              <Link href="#" className={navLinkClasses} onClick={() => setOpen(false)}>
                Sales Kit
              </Link>
              <Link href="#" className={navLinkClasses} onClick={() => setOpen(false)}>
                Menu
              </Link>
              <Link href="#" className={navLinkClasses} onClick={() => setOpen(false)}>
                Guide
              </Link>
              <Link href="#" className={navLinkClasses} onClick={() => setOpen(false)}>
                Contact
              </Link>
              <Link
                href="#"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => setOpen(false)}
              >
                Plan Your Event
              </Link>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}


