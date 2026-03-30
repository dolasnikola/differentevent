"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { basePath } from "@/lib/images";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-navy-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src={`${basePath}/images/logo/logo.png`}
              alt="Different Event logo"
              width={64}
              height={64}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-gold-400 transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="ml-1 inline-block h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-lg bg-navy-800 py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold-400 hover:bg-navy-700/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <Link
            href="/kontakt"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gold-400 text-navy-900 hover:bg-gold-300 transition-colors"
          >
            Pošaljite upit
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[10000] p-2 text-white"
            aria-label={mobileOpen ? "Zatvorite meni" : "Otvorite meni"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
