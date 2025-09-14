"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { openChatModal } from "@/lib/chatModal";
import { openPDFModal } from "@/lib/pdfModal";

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
    "px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 hover:text-black";

  return (
    <header className={`sticky top-0 z-40 ${scrolled ? "shadow-sm" : ""}`}>
      <nav
        aria-label="Main navigation"
        className={`bg-[#cec9c4] text-[#434343] border-b border-border/50 transition-colors duration-300`}
      >
        <Container className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="#" aria-label="Home" className="block">
              <Image
                src="/images/AC%20LOGO%20HOR.png"
                alt="Antiguo Casino logo"
                width={180}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              type="button"
              className={navLinkClasses}
              onClick={() => openPDFModal({ pdfUrl: "/Antiguo-Casino-Sales-Kit-2020.pdf", title: "Sales Kit" })}
            >
              Sales Kit
            </button>
            <button 
              type="button"
              className={navLinkClasses}
              onClick={() => openPDFModal({ pdfUrl: "/Antiguo-casino-menu.pdf", title: "Menu" })}
            >
              Menu
            </button>
            <button 
              type="button"
              className={navLinkClasses}
              onClick={() => openPDFModal({ pdfUrl: "/Antiguo-Casino-Event-Planning-Guide-2025.pdf", title: "Event Planning Guide" })}
            >
              Guide
            </button>
            <button type="button" onClick={() => openChatModal()} className={navLinkClasses}>
              Contact
            </button>
            <button
              type="button"
              onClick={() => openChatModal()}
              className="inline-flex items-center justify-center rounded-md bg-[#434343] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Plan Your Event
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={() => setOpen((p) => !p)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#434343] hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
              <button
                type="button"
                className={navLinkClasses}
                onClick={() => {
                  setOpen(false);
                  openPDFModal({ pdfUrl: "/Antiguo-Casino-Sales-Kit-2020.pdf", title: "Sales Kit" });
                }}
              >
                Sales Kit
              </button>
              <button
                type="button"
                className={navLinkClasses}
                onClick={() => {
                  setOpen(false);
                  openPDFModal({ pdfUrl: "/Antiguo-casino-menu.pdf", title: "Menu" });
                }}
              >
                Menu
              </button>
              <button
                type="button"
                className={navLinkClasses}
                onClick={() => {
                  setOpen(false);
                  openPDFModal({ pdfUrl: "/Antiguo-Casino-Event-Planning-Guide-2025.pdf", title: "Event Planning Guide" });
                }}
              >
                Guide
              </button>
              <button
                type="button"
                className={navLinkClasses}
                onClick={() => {
                  setOpen(false);
                  openChatModal();
                }}
              >
                Contact
              </button>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#434343] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => {
                  setOpen(false);
                  openChatModal();
                }}
              >
                Plan Your Event
              </button>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}


