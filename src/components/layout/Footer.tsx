import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { basePath } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={`${basePath}/images/logo/logo.png`}
                alt="Different Event logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-playfair text-xl font-bold">
                Different Event
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Profesionalno iznajmljivanje šatora, pagoda i opreme za sve vrste
              događaja. Višegodišnje iskustvo u organizaciji nezaboravnih momenata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-gold-400">
              Proizvodi
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Pagode", href: "/pagode" },
                { label: "Šatori", href: "/satori" },
                { label: "Dodatna oprema", href: "/dodatna-oprema" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-gold-400">
              Informacije
            </h3>
            <ul className="space-y-2">
              {[
                { label: "O nama", href: "/o-nama" },
                { label: "Galerija", href: "/galerija" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4 text-gold-400">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.address.street}<br />{siteConfig.address.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-400 transition-colors" data-phone-number={siteConfig.phone}>
                    {siteConfig.phoneDisplay}
                  </a>
                  <a href={`tel:${siteConfig.phone2}`} className="hover:text-gold-400 transition-colors" data-phone-number={siteConfig.phone2}>
                    {siteConfig.phone2Display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">
                    {siteConfig.email}
                  </a>
                  <a href={`mailto:${siteConfig.email2}`} className="hover:text-gold-400 transition-colors">
                    {siteConfig.email2}
                  </a>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white/60 hover:bg-gold-400 hover:text-navy-900 transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-white/60 hover:bg-gold-400 hover:text-navy-900 transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Sva prava zadržana.
        </div>
      </Container>
    </footer>
  );
}
