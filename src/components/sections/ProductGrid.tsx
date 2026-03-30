"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { basePath } from "@/lib/images";

const categories = [
  {
    title: "Pagode",
    description: "Elegantne pagode za sve vrste događaja. Iznajmljivanje i prodaja.",
    image: `${basePath}/images/pagode/pagode-1.jpg`,
    href: "/pagode",
  },
  {
    title: "Šatori",
    description: "Šatori bele boje, modernog dizajna, pogodni za sve vrste događaja.",
    image: `${basePath}/images/satori/sator-1.jpg`,
    href: "/satori",
  },
  {
    title: "Dodatna oprema",
    description: "Stolovi, stolice, klima, grejanje, suncobrani i sve što vam je potrebno.",
    image: `${basePath}/images/pagode/pagode-5.jpg`,
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

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
