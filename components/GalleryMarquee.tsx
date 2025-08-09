"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryMarqueeProps = {
  images: string[];
};

export default function GalleryMarquee({ images }: GalleryMarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(true);
  const [slow, setSlow] = useState(false);

  // Duplicate list for seamless loop
  const dup = useMemo(() => [...images, ...images], [images]);
  const columnA = useMemo(() => dup.filter((_, i) => i % 2 === 0), [dup]);
  const columnB = useMemo(() => dup.filter((_, i) => i % 2 === 1), [dup]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-animate={animate}
      data-slow={slow}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
      onTouchStart={() => setSlow(true)}
      onTouchEnd={() => setSlow(false)}
    >
      {/* Left content */}
      <div>
        <h2 id="gallery-title" className="text-2xl sm:text-3xl font-serif font-semibold">
          Live what you imagine
        </h2>
        <p className="mt-3 max-w-prose text-sm sm:text-base text-foreground/80">
          Our venue is customizable to fit your needs. From private and intimate spaces to an
          exquisite ballroom with square footage to spare.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-indigo px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sales Kit
          </a>
        </div>
      </div>

      {/* Right marquee */}
      <div className="pause-on-hover grid grid-cols-2 gap-6">
        <div className="mask-fade-y overflow-hidden">
          <ul className="flex flex-col gap-6 animate-marquee-up" aria-hidden={!animate}>
            {columnA.map((src, idx) => (
              <li key={`a-${idx}`} className="w-full">
                <div className="relative h-44 sm:h-60 md:h-72 w-full">
                  <Image
                    src={src}
                    alt={`Event at Antiguo Casino – ${String((idx % images.length) + 1).padStart(2, "0")}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 320px"
                    className="rounded-xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mask-fade-y overflow-hidden">
          <ul className="flex flex-col gap-6 animate-marquee-down" aria-hidden={!animate}>
            {columnB.map((src, idx) => (
              <li key={`b-${idx}`} className="w-full">
                <div className="relative h-44 sm:h-60 md:h-72 w-full">
                  <Image
                    src={src}
                    alt={`Event at Antiguo Casino – ${String((idx % images.length) + 1).padStart(2, "0")}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 320px"
                    className="rounded-xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


