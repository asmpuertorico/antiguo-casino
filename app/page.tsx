import Hero from "@/components/Hero";
import GalleryMarquee from "@/components/GalleryMarquee";
import Container from "@/components/Container";

const IMAGES = Array.from({ length: 12 }, (_, i) =>
  `/images/gallery/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Container>
        <section aria-labelledby="gallery-title" className="py-16 sm:py-24">
          <GalleryMarquee images={IMAGES} />
        </section>
      </Container>
    </div>
  );
}
