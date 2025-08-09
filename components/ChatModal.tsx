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
      <div className="relative z-10 w-[96vw] max-w-5xl overflow-hidden rounded-xl bg-white p-2 shadow-xl">
        <div className="w-full overflow-hidden rounded-lg">
          <iframe
            src="https://dashboard.getlinkai.com/embed/cme4th9bo0001carxespro39n/window"
            style={{ border: "none", width: "100%", height: "600px" }}
            allow="microphone"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-md bg-[#434343] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


