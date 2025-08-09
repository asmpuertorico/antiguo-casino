"use client";

import Image from "next/image";
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/0" />

      <Container>
        <div className="relative z-10 flex h-[80svh] min-h-[520px] items-center">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl/tight sm:text-5xl/tight md:text-[clamp(2.5rem,6vw,4rem)] font-serif font-semibold text-white">
              Your dream event starts here.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90">
              Welcome to Antiguo Casino de Puerto Rico.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}


