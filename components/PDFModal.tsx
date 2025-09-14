"use client";

import { useEffect, useRef, useState } from "react";

interface PDFModalState {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
}

export default function PDFModal() {
  const [modalState, setModalState] = useState<PDFModalState>({
    isOpen: false,
    pdfUrl: "",
    title: ""
  });
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: CustomEvent<{ pdfUrl: string; title: string }>) => {
      setModalState({
        isOpen: true,
        pdfUrl: event.detail.pdfUrl,
        title: event.detail.title
      });
    };
    
    window.addEventListener("open-pdf-modal", handler as EventListener);
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalState.isOpen) {
        setModalState(prev => ({ ...prev, isOpen: false }));
      }
    };
    
    document.addEventListener("keydown", onKey);
    
    return () => {
      window.removeEventListener("open-pdf-modal", handler as EventListener);
      document.removeEventListener("keydown", onKey);
    };
  }, [modalState.isOpen]);

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  if (!modalState.isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal
      aria-label={`View ${modalState.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) closeModal();
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full max-w-6xl max-h-[95vh] overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {modalState.title}
          </h2>
          <div className="flex items-center gap-2">
            {/* Download button */}
            <a
              href={modalState.pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              aria-label={`Download ${modalState.title}`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 10V8h2v4h3l-4 4l-4-4h3z"
                />
              </svg>
              Download
            </a>
            
            {/* Open in new tab button */}
            <a
              href={modalState.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              aria-label={`Open ${modalState.title} in new tab`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  fill="currentColor"
                  d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"
                />
              </svg>
              Open in tab
            </a>
            
            {/* Close button */}
            <button
              type="button"
              aria-label="Close PDF viewer"
              onClick={closeModal}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
                <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="h-[calc(95vh-5rem)] min-h-[500px]">
          <iframe
            src={`${modalState.pdfUrl}#view=FitH`}
            className="w-full h-full border-0"
            title={modalState.title}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}
