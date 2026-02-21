"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

type GetInspiredProps = {
  imageSrc?: string;
  pinterestUrl?: string;
};

export default function GetInspired({
  imageSrc = "/images/get-inspired.png",
  pinterestUrl = "https://www.pinterest.com/antiguocasinopr/",
}: GetInspiredProps) {
  return (
    <section aria-labelledby="get-inspired-title" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#cec9c4] text-[#434343]">
          <div className="grid grid-cols-1 items-stretch gap-6 p-0 lg:grid-cols-2 lg:gap-0">
            {/* Left: copy + CTAs */}
            <div className="relative z-10 flex flex-col justify-center px-8 py-8 sm:px-10 sm:py-10">
              <h3 id="get-inspired-title" className="font-serif text-3xl sm:text-4xl font-semibold">
                Get Inspired
              </h3>
              <p className="mt-3 max-w-prose text-sm sm:text-base opacity-85">
                Explore our venue from anywhere. Take a virtual tour or follow us on social media
                for design inspiration and planning ideas.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/virtual-tour"
                  className="inline-flex items-center gap-2 rounded-md bg-[#434343] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2f2f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm-1.5 6.5 5 2.5-5 2.5V9.5Z"
                    />
                  </svg>
                  <span>Virtual Tour</span>
                </Link>
                <Link
                  href={pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#434343] px-5 py-2.5 text-sm font-semibold text-[#434343] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.21 2.59 7.79 6.26 9.26-.09-.79-.17-2 .04-2.86.18-.78 1.16-4.95 1.16-4.95s-.29-.58-.29-1.44c0-1.35.78-2.36 1.75-2.36.83 0 1.23.62 1.23 1.36 0 .83-.53 2.07-.8 3.22-.23 1.01.49 1.84 1.46 1.84 1.75 0 3.09-1.85 3.09-4.52 0-2.36-1.7-4.01-4.13-4.01-2.81 0-4.46 2.11-4.46 4.3 0 .85.33 1.76.74 2.26.08.1.09.19.07.29-.08.32-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.38-.64-2.24-2.66-2.24-4.28 0-3.49 2.54-6.69 7.32-6.69 3.83 0 6.8 2.73 6.8 6.38 0 3.79-2.39 6.85-5.7 6.85-1.11 0-2.15-.58-2.51-1.26l-.68 2.58c-.25.98-.92 2.21-1.37 2.96.98.3 2.02.46 3.09.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    />
                  </svg>
                  <span>Pinterest</span>
                </Link>
                <Link
                  href="https://www.instagram.com/antiguocasinopr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#434343] px-5 py-2.5 text-sm font-semibold text-[#434343] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  <span>Instagram</span>
                </Link>
                <Link
                  href="http://facebook.com/antiguocasinopr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#434343] px-5 py-2.5 text-sm font-semibold text-[#434343] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9V12.1h2.54V9.98c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.78h2.77l-.44 2.87h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94Z"
                    />
                  </svg>
                  <span>Facebook</span>
                </Link>
              </div>
            </div>

            {/* Right: image with gradient overlay */}
            <div className="relative h-64 w-full overflow-hidden rounded-b-2xl sm:h-80 lg:h-full lg:rounded-b-none lg:rounded-r-2xl self-stretch">
              <Image
                src={imageSrc}
                alt="Get inspired"
                fill
                priority
                className="object-cover object-center lg:object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Mobile: top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#cec9c4] to-transparent md:hidden" />
              {/* Desktop: left fade over partial width */}
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:w-2/3 bg-gradient-to-r from-[#cec9c4] to-transparent md:block" />
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}


