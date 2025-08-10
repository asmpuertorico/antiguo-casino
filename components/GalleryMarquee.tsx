"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryMarqueeProps = {
  imagesLeft?: string[];
  imagesRight?: string[];
  images?: string[]; // backwards compatibility
};

export default function GalleryMarquee({ imagesLeft, imagesRight, images }: GalleryMarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(true);
  const [slow, setSlow] = useState(false);

  // Determine columns: if left/right provided, use those; otherwise split the single array
  const baseLeft = useMemo(() => {
    if (imagesLeft && imagesLeft.length) return imagesLeft;
    const list = images ?? [];
    return list.slice(0, Math.ceil(list.length / 2));
  }, [imagesLeft, images]);

  const baseRight = useMemo(() => {
    if (imagesRight && imagesRight.length) return imagesRight;
    const list = images ?? [];
    return list.slice(Math.ceil(list.length / 2));
  }, [imagesRight, images]);

  // Duplicate lists for seamless loop (ensure both columns loop independently)
  const columnA = useMemo(() => [...baseLeft, ...baseLeft], [baseLeft]);
  const columnB = useMemo(() => [...baseRight, ...baseRight], [baseRight]);

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
        <h2 id="gallery-title" className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold">
          Live what you imagine
        </h2>
        <p className="mt-4 max-w-lg text-base sm:text-lg text-[#434343]">
          Our venue is customizable to fit your needs. From private and intimate spaces to an
          exquisite ballroom with square footage to spare.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-[#434343] px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sales Kit
          </a>
        </div>
      </div>

      {/* Right marquee */}
      <div className="pause-on-hover grid grid-cols-2 gap-6 h-[420px] sm:h-[520px] md:h-[640px]">
        <div className="relative h-full mask-fade-y overflow-hidden bg-white dark:bg-white rounded-2xl p-1">
          <ul className="flex flex-col gap-6 animate-marquee-up" aria-hidden={!animate}>
            {columnA.map((src, idx) => (
              <li key={`a-${idx}`} className="w-full">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={src}
                    alt={`Event at Antiguo Casino – left ${String((idx % baseLeft.length) + 1).padStart(2, "0")}`}
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
        <div className="relative h-full mask-fade-y overflow-hidden bg-white dark:bg-white rounded-2xl p-1">
          <ul className="flex flex-col gap-6 animate-marquee-down" aria-hidden={!animate}>
            {columnB.map((src, idx) => (
              <li key={`b-${idx}`} className="w-full">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={src}
                    alt={`Event at Antiguo Casino – right ${String((idx % baseRight.length) + 1).padStart(2, "0")}`}
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


