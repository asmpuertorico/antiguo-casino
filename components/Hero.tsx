"use client";

import Image from "next/image";
import { openChatModal } from "@/lib/chatModal";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reducedMotion]);

  return (
    <section aria-labelledby="hero-title" className="relative isolate h-[80svh] min-h-[520px] w-full overflow-hidden">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/poster.jpg"
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/video/poster.jpg"
          alt="Antiguo Casino hero poster"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <Container>
          <div className="relative z-10 flex h-[80svh] min-h-[520px] items-center">
          <div className="max-w-2xl">
            <Image
              src="/images/AC%20Icon%20White.png"
              alt="Antiguo Casino mark"
              width={64}
              height={64}
              priority
              className="h-12 w-auto mb-4 opacity-95"
            />
            <h1
              id="hero-title"
              className="text-5xl/none sm:text-6xl/none md:text-[clamp(3.125rem,7.5vw,5rem)] md:leading-[1.05] font-serif font-semibold text-white tracking-tighter"
            >
              Your dream event starts here.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              Welcome to Antiguo Casino of Puerto Rico.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => openChatModal()}
                className="inline-flex items-center justify-center rounded-md bg-[#434343] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Start Here
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


