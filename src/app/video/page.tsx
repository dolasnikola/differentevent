import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Video",
  description: "Pogledajte video snimke naših šatora, pagoda i event opreme u akciji. Different Event Beograd.",
  path: "/video",
});

export default function VideoPage() {
  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Video</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Pogledajte našu opremu u akciji.</p>
        </Container>
      </section>
      <div className="bg-gray-50 border-b"><Container><Breadcrumbs items={[{ name: "Video", href: "/video" }]} /></Container></div>

      <section className="py-12 lg:py-16">
        <Container>
          <AnimateOnScroll variant="slideUp">
            <div className="rounded-xl bg-gray-100 p-12 text-center">
              <svg className="mx-auto h-16 w-16 text-navy-700/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h2 className="mt-4 font-playfair text-2xl font-bold text-navy-900">
                Video sadržaj uskoro
              </h2>
              <p className="mt-2 text-navy-700/60">
                Pripremamo video prezentaciju naše opreme i realizovanih događaja.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
