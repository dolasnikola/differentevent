import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { generatePageMetadata } from "@/lib/metadata";
import { basePath } from "@/lib/images";

export const metadata: Metadata = generatePageMetadata({
  title: "O nama",
  description:
    "Different Event - 15+ godina iskustva u iznajmljivanju šatora, pagoda i event opreme. Profesionalan tim, vrhunska oprema, kompletna usluga.",
  path: "/o-nama",
});

export default function ONamaPage() {
  return (
    <>
      <section className="bg-navy-900 pt-28 pb-12">
        <Container>
          <h1 className="font-playfair text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            O nama
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Upoznajte Different Event, vašeg pouzdanog partnera za sve vrste događaja.
          </p>
        </Container>
      </section>

      <div className="bg-gray-50 border-b">
        <Container>
          <Breadcrumbs items={[{ name: "O nama", href: "/o-nama" }]} />
        </Container>
      </div>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <AnimateOnScroll variant="slideLeft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={`${basePath}/images/different-event.webp`}
                  alt="iznajmljivanje šatora different event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slideRight">
              <h2 className="font-playfair text-2xl font-bold text-navy-900 sm:text-3xl">
                O nama
              </h2>
              <p className="mt-4 text-navy-700 leading-relaxed">
                Different Event je firma specijalizovana za iznajmljivanje šatora, pagoda
                i kompletne opreme za događaje, sa iskustvom u organizaciji različitih
                vrsta proslava i manifestacija još od 2013. godine.
              </p>
              <p className="mt-4 text-navy-700 leading-relaxed">
                Naš cilj je da svakom klijentu obezbedimo funkcionalan, estetski i
                pouzdan prostor, bilo da se radi o venčanjima, korporativnim događajima,
                promocijama ili privatnim proslavama.
              </p>
              <p className="mt-4 text-navy-700 leading-relaxed">
                Prilagođavamo se vašim potrebama i lokaciji, uz pažljivo planiranje i
                tehničku podršku na terenu.
              </p>
              <p className="mt-4 text-navy-700 leading-relaxed">
                U ponudi imamo pagoda šatore, velike modularne šatore, stolove, stolice i
                prateću opremu, uz kompletnu uslugu montaže i demontaže.
              </p>
              <p className="mt-4 text-navy-700 leading-relaxed">
                Bilo da organizujete događaj na otvorenom ili u zatvorenom prostoru,
                Different Event je partner na kog možete da se oslonite za sigurno,
                kvalitetno i profesionalno rešenje.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <ParallaxSection
        image={`${basePath}/images/satori/Iznajmljivanje-satora-3.webp`}
        title="Svaki detalj je bitan"
        subtitle="Od malih privatnih proslava do velikih korporativnih događaja — pristupamo svakom projektu sa istom posvećenošću i profesionalizmom."
      />

      <section className="py-12 lg:py-16">
        <Container>
          <AnimateOnScroll variant="slideUp" className="text-center mb-12">
            <h2 className="font-playfair text-2xl font-bold text-navy-900 sm:text-3xl">
              Zašto izabrati nas
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Iskustvo", desc: "Više od decenije iskustva i preko 1000 uspešno realizovanih događaja širom Srbije." },
              { title: "Kvalitet opreme", desc: "Koristimo samo vrhunsku opremu renomiranih proizvođača. Redovno održavanje i zamena." },
              { title: "Profesionalan tim", desc: "Iskusan tim za montažu i demontažu. Brzi, efikasni i uvek na raspolaganju." },
              { title: "Kompletna usluga", desc: "Sve na jednom mestu. Šatori, pagode, stolice, stolovi, rasveta, grejanje i više." },
              { title: "Fleksibilnost", desc: "Prilagođavamo se vašim potrebama i budžetu. Svaki događaj je jedinstven." },
              { title: "Pouzdanost", desc: "Na vreme, svaki put. Vaš događaj ne može da čeka i zato mi nikad ne kasnimo." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} variant="slideUp" delay={i * 0.1}>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-700/70">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
