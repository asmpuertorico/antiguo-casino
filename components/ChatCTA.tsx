"use client";

import Image from "next/image";
import { openChatModal } from "@/lib/chatModal";
import Container from "@/components/Container";

export default function ChatCTA() {
  return (
    <section aria-labelledby="chat-cta-title" className="py-12 bg-[#434343] text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/AC%20Icon%20White.png"
              alt="Antiguo Casino"
              width={48}
              height={48}
              className="h-10 w-auto"
              priority
            />
            <div>
              <h3 id="chat-cta-title" className="font-serif text-2xl sm:text-3xl font-semibold">
                Have Questions?
              </h3>
              <p className="text-sm sm:text-base opacity-90">Chat with us for instant answers about your event.</p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => openChatModal()}
              className="gradient-border-btn btn-inner-white inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#434343] shadow-sm hover:bg-[#f2f2f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Image src="/images/brand-line.svg" alt="Chat" width={18} height={18} className="opacity-90" />
              <span>Chat with us</span>
            </button>
          </div>
        </div>

        {/* Modal removed; uses shared ChatModal */}
      </Container>
    </section>
  );
}


