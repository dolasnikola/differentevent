import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { getProductsByCategory } from "@/data/products";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Šatori za iznajmljivanje",
  description:
    "Iznajmljivanje šatora za venčanja, proslave, sajmove i industrijske potrebe u Beogradu i Srbiji. Različite veličine, profesionalna montaža.",
  path: "/satori",
});

export default function SatoriPage() {
  const products = getProductsByCategory("satori");

  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Šatori
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Profesionalno iznajmljivanje i prodaja šatora za sve vrste događaja.
            Od elegantnih šatora za venčanja do industrijskih šatora za skladištenje.
          </p>
        </Container>
      </section>

      <div className="bg-gray-50 border-b">
        <Container>
          <Breadcrumbs items={[{ name: "Šatori", href: "/satori" }]} />
        </Container>
      </div>

      <section className="py-12 lg:py-16">
        <Container>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <Card
                  title={product.title}
                  description={product.shortDescription}
                  image={product.images[0]}
                  href={`/satori/${product.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
