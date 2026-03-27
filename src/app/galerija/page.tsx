import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { getPagodeImages, getSatoriImages } from "@/lib/images";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Galerija",
  description: "Pogledajte galeriju naših šatora, pagoda i event opreme. Fotografije sa realizovanih događaja u Beogradu i Srbiji.",
  path: "/galerija",
});

export default function GalerijaPage() {
  const pagodeImages = getPagodeImages();
  const satoriImages = getSatoriImages();

  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Galerija</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Pogledajte fotografije naše opreme i realizovanih događaja.</p>
        </Container>
      </section>
      <div className="bg-gray-50 border-b"><Container><Breadcrumbs items={[{ name: "Galerija", href: "/galerija" }]} /></Container></div>

      <section className="py-12 lg:py-16">
        <Container>
          <AnimateOnScroll variant="slideUp" className="mb-8">
            <h2 className="font-playfair text-2xl font-bold text-navy-900">Pagode</h2>
          </AnimateOnScroll>
          <ImageGallery images={pagodeImages} alt="Pagode Different Event" />

          <AnimateOnScroll variant="slideUp" className="mt-12 mb-8">
            <h2 className="font-playfair text-2xl font-bold text-navy-900">Šatori</h2>
          </AnimateOnScroll>
          <ImageGallery images={satoriImages} alt="Šatori Different Event" />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
