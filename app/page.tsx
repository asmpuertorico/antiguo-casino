import Hero from "@/components/Hero";
import GalleryMarquee from "@/components/GalleryMarquee";
import Container from "@/components/Container";
import GetInspired from "@/components/GetInspired";
import ChatCTA from "@/components/ChatCTA";

const LEFT_IMAGES = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
];

const RIGHT_IMAGES = [
  "/images/gallery/5.png",
  "/images/gallery/6.png",
  "/images/gallery/7.png",
  "/images/gallery/8.png",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ChatCTA />
      <section aria-labelledby="gallery-title" className="py-16 sm:py-24 bg-white text-[#434343]">
        <Container>
          <GalleryMarquee imagesLeft={LEFT_IMAGES} imagesRight={RIGHT_IMAGES} />
        </Container>
      </section>

      <GetInspired />
    </div>
  );
}
