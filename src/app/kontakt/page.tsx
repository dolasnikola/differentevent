import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/cta/ContactForm";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt",
  description: "Kontaktirajte Different Event za iznajmljivanje šatora, pagoda i event opreme. Telefon, email, adresa. Besplatna ponuda.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Kontakt</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Javite nam se — rado ćemo vam pomoći u organizaciji vašeg događaja.</p>
        </Container>
      </section>
      <div className="bg-gray-50 border-b"><Container><Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} /></Container></div>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll variant="slideLeft">
                <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-6">Pošaljite upit</h2>
                <ContactForm />
              </AnimateOnScroll>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimateOnScroll variant="slideRight">
                <div className="rounded-xl bg-navy-900 p-6 text-white">
                  <h3 className="font-playfair text-xl font-bold text-gold-400 mb-6">Kontakt informacije</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <svg className="h-6 w-6 shrink-0 text-gold-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium">Adresa</p>
                        <p className="text-white/60">{siteConfig.address.street}<br />{siteConfig.address.city}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="h-6 w-6 shrink-0 text-gold-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-medium">Telefon</p>
                        <a href={`tel:${siteConfig.phone}`} className="text-gold-400 hover:text-gold-300 transition-colors block" data-phone-number={siteConfig.phone}>
                          {siteConfig.phoneDisplay}
                        </a>
                        <a href={`tel:${siteConfig.phone2}`} className="text-gold-400 hover:text-gold-300 transition-colors block" data-phone-number={siteConfig.phone2}>
                          {siteConfig.phone2Display}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="h-6 w-6 shrink-0 text-gold-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-gold-400 hover:text-gold-300 transition-colors block">
                          {siteConfig.email}
                        </a>
                        <a href={`mailto:${siteConfig.email2}`} className="text-gold-400 hover:text-gold-300 transition-colors block">
                          {siteConfig.email2}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="h-6 w-6 shrink-0 text-gold-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium">Radno vreme</p>
                        <p className="text-white/60">{siteConfig.workingHours}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps */}
                <div className="mt-6 overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.5!2d${siteConfig.googleMaps.lng}!3d${siteConfig.googleMaps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71ed9fc749e7%3A0x770b49b248cb87b7!2sIznajmljivanje%20%C5%A1atora%20%E2%80%93%20Differentevent!5e0!3m2!1ssr!2srs!4v1`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Different Event lokacija"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
