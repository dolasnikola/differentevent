import Image from "next/image";
import type { Product } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteConfig";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface ProductPageTemplateProps {
  product: Product;
}

export function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  return (
    <>
      <ProductJsonLd
        name={product.title}
        description={product.shortDescription}
        image={`${siteConfig.url}${product.images[0]}`}
        url={`${siteConfig.url}/${product.categorySlug}/${product.slug}`}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-navy-900/20" />
        <div className="absolute inset-0 flex items-end">
          <Container className="pb-10">
            <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>
            <p className="mt-2 text-lg text-white/80 max-w-2xl">
              {product.shortDescription}
            </p>
          </Container>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <Container>
          <Breadcrumbs
            items={[
              { name: product.category, href: `/${product.categorySlug}` },
              { name: product.title, href: `/${product.categorySlug}/${product.slug}` },
            ]}
          />
        </Container>
      </div>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Description */}
            <div className="lg:col-span-3">
              <AnimateOnScroll variant="slideUp">
                <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
                  Opis
                </h2>
                <p className="text-navy-700 leading-relaxed">
                  {product.description}
                </p>
              </AnimateOnScroll>

              {/* Gallery */}
              <AnimateOnScroll variant="slideUp" delay={0.2} className="mt-10">
                <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
                  Galerija
                </h2>
                <ImageGallery images={product.images} alt={product.title} />
              </AnimateOnScroll>
            </div>

            {/* Features sidebar */}
            <div className="lg:col-span-2">
              <AnimateOnScroll variant="slideRight">
                <div className="rounded-xl bg-navy-900 p-6 text-white sticky top-24">
                  <h3 className="font-playfair text-xl font-bold text-gold-400 mb-4">
                    Karakteristike
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="h-5 w-5 mt-0.5 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2 w-full rounded-lg bg-gold-400 px-6 py-3 font-semibold text-navy-900 hover:bg-gold-300 transition-colors"
                      data-phone-number={siteConfig.phone}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Pozovite: {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* Parallax break */}
      <section
        className="parallax-section relative bg-fixed bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${product.images[product.images.length > 1 ? 1 : 0]})` }}
      >
        <div className="absolute inset-0 bg-navy-900/60" />
      </section>

      <CTABanner />
    </>
  );
}
