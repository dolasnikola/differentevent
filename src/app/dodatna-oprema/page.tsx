import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { getProductsByCategory } from "@/data/products";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Dodatna oprema za events",
  description: "Iznajmljivanje dodatne opreme za događaje: stolovi, stolice, rasveta, grejanje, klimatizacija, podijumi i više. Beograd.",
  path: "/dodatna-oprema",
});

export default function DodatnaOpremaPage() {
  const products = getProductsByCategory("dodatna-oprema");
  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Dodatna oprema</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Kompletna oprema za organizaciju događaja. Stolovi, stolice, klima uređaji, grejanje i sve što vam je potrebno.</p>
        </Container>
      </section>
      <div className="bg-gray-50 border-b"><Container><Breadcrumbs items={[{ name: "Dodatna oprema", href: "/dodatna-oprema" }]} /></Container></div>
      <section className="py-12 lg:py-16">
        <Container>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <Card title={product.title} description={product.shortDescription} image={product.images[0]} href={`/dodatna-oprema/${product.slug}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
