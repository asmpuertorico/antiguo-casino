"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatModal() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat-modal", handler as EventListener);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-chat-modal", handler as EventListener);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal
      aria-label="Chat with us"
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) setOpen(false);
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-[96vw] max-w-5xl overflow-visible rounded-xl bg-white p-2 shadow-xl">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white shadow-md hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
            <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
          </svg>
        </button>
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src="https://dashboard.getlinkai.com/embed/cme4th9bo0001carxespro39n/window"
            style={{ border: "none", width: "100%", height: "600px" }}
            allow="microphone"
          />
        </div>
      </div>
    </div>
  );
}


