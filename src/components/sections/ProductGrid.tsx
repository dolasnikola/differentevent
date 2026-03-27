"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";

const categories = [
  {
    title: "Šatori",
    description: "Šatori za venčanja, proslave, sajmove i industrijske potrebe. Različite veličine i tipovi.",
    image: "/images/satori/sator-1.jpg",
    href: "/satori",
  },
  {
    title: "Pagode",
    description: "Elegantne pagode za sve vrste događaja. Iznajmljivanje i prodaja.",
    image: "/images/pagode/pagode-1.jpg",
    href: "/pagode",
  },
  {
    title: "Tiffany stolice",
    description: "Luksuzne Tiffany stolice u beloj i zlatnoj boji za elegantne događaje.",
    image: "/images/pagode/pagode-3.jpg",
    href: "/tiffany-stolice",
  },
  {
    title: "Dodatna oprema",
    description: "Stolovi, stolice, rasveta, grejanje, klimatizacija i sve što vam je potrebno.",
    image: "/images/pagode/pagode-5.jpg",
    href: "/dodatna-oprema",
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <AnimateOnScroll variant="slideUp" className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-navy-900 sm:text-4xl">
            Naša ponuda
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            Kompletna oprema za organizaciju događaja bilo koje veličine
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <StaggerItem key={cat.href}>
              <Card
                title={cat.title}
                description={cat.description}
                image={cat.image}
                href={cat.href}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
