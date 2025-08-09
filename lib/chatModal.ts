"use client";

export function openChatModal(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-chat-modal"));
  }
}


