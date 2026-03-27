"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/siteConfig";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gold-400 to-gold-300">
      <Container>
        <AnimateOnScroll variant="scaleIn">
          <div className="text-center">
            <h2 className="font-playfair text-3xl font-bold text-navy-900 sm:text-4xl">
              Zatražite ponudu
            </h2>
            <p className="mt-4 text-lg text-navy-900/70 max-w-2xl mx-auto">
              Kontaktirajte nas za besplatnu ponudu. Naš tim je spreman da vam
              pomogne u organizaciji vašeg događaja.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/kontakt" variant="secondary" size="lg">
                Kontaktirajte nas
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="secondary"
                size="lg"
                data-phone-number={siteConfig.phone}
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
