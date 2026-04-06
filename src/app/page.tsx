import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { basePath } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <ParallaxSection
        image={`${basePath}/images/pagode/Iznajmljivanje-pagoda-6.webp`}
        title="Svaki događaj zaslužuje savršen prostor"
        subtitle="Od intimnih proslava do velikih korporativnih događaja, mi obezbeđujemo kompletnu opremu i profesionalnu montažu."
      />
      <Testimonials />
      <CTABanner />
    </>
  );
}
