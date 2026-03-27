import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { getProductsByCategory } from "@/data/products";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Tiffany stolice - Iznajmljivanje",
  description: "Iznajmljivanje luksuznih Tiffany stolica u beloj i zlatnoj boji za venčanja i elegantne događaje u Beogradu.",
  path: "/tiffany-stolice",
});

export default function TiffanyStolicePage() {
  const products = getProductsByCategory("tiffany-stolice");
  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Tiffany stolice</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Luksuzne Tiffany stolice za elegantne događaje. Dostupne u beloj i zlatnoj boji.</p>
        </Container>
      </section>
      <div className="bg-gray-50 border-b"><Container><Breadcrumbs items={[{ name: "Tiffany stolice", href: "/tiffany-stolice" }]} /></Container></div>
      <section className="py-12 lg:py-16">
        <Container>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <Card title={product.title} description={product.shortDescription} image={product.images[0]} href={`/tiffany-stolice/${product.slug}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
