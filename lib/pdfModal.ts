"use client";

interface PDFModalOptions {
  pdfUrl: string;
  title: string;
}

export function openPDFModal({ pdfUrl, title }: PDFModalOptions): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-pdf-modal", {
      detail: { pdfUrl, title }
    }));
  }
}
