"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { testimonials, googleRating } from "@/data/testimonials";
import { ReviewJsonLd } from "@/components/seo/JsonLd";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-gold-400" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 lg:py-24 bg-navy-900">
      <ReviewJsonLd />
      <Container>
        <AnimateOnScroll variant="slideUp" className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl">
            Šta kažu naši klijenti
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={Math.round(googleRating.average)} />
            <span className="text-white/70">
              {googleRating.average} / 5 ({googleRating.total} recenzija na Google-u)
            </span>
          </div>
        </AnimateOnScroll>

        <div className="relative mx-auto max-w-3xl min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <svg className="mx-auto mb-6 h-10 w-10 text-gold-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-lg text-white/90 italic leading-relaxed sm:text-xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="mt-6">
                <StarRating rating={testimonials[current].rating} />
                <p className="mt-2 font-semibold text-gold-400">
                  {testimonials[current].name}
                </p>
                {testimonials[current].role && (
                  <p className="text-sm text-white/50">
                    {testimonials[current].role}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-gold-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Recenzija ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
