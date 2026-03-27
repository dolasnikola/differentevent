"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    image: "/images/pagode/pagode-1.jpg",
    alt: "Pagode za events - Different Event Beograd",
  },
  {
    image: "/images/satori/sator-1.jpg",
    alt: "Šatori za venčanja - Different Event Beograd",
  },
  {
    image: "/images/pagode/pagode-5.jpg",
    alt: "Oprema za proslave - Different Event Beograd",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative h-[85vh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-900/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Vaš partner za
          <br />
          <span className="text-gold-400">nezaboravne događaje</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Profesionalno iznajmljivanje šatora, pagoda i kompletne opreme za sve
          vrste događaja u Beogradu i Srbiji.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/kontakt" size="lg">
            Zatražite ponudu
          </Button>
          <Button href="/satori" variant="outline" size="lg">
            Pogledajte ponudu
          </Button>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-gold-400 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
