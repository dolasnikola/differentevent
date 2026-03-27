"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface ParallaxSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function ParallaxSection({ image, title, subtitle, children }: ParallaxSectionProps) {
  return (
    <section
      className="parallax-section relative bg-fixed bg-cover bg-center py-24 lg:py-32"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <AnimateOnScroll variant="scaleIn">
          <div className="mb-4 flex justify-center">
            <svg className="h-10 w-10 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="font-playfair text-3xl font-bold sm:text-4xl text-gold-400">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-white/80">{subtitle}</p>
          )}
          {children}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
