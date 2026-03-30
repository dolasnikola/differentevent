# Different Event - Website

## Pregled projekta

Moderan sajt za **Different Event** (differentevent.rs) — firmu za iznajmljivanje satora, pagoda i event opreme u Beogradu. Zamena za stari WordPress sajt (The7 tema). ~35 stranica generisanih iz centralizovanih podataka.

**Live:** https://dolasnikola.github.io/differentevent/
**Repo:** https://github.com/dolasnikola/differentevent

## Tech stack

- **Next.js 15** (App Router, TypeScript, static export)
- **Tailwind CSS v4** — custom navy/gold paleta (@theme u globals.css)
- **framer-motion** — scroll animacije (AnimateOnScroll), hero slideshow (AnimatePresence)
- **yet-another-react-lightbox** — galerija lightbox
- **Deploy:** GitHub Pages via GitHub Actions (.github/workflows/deploy.yml)

## Vazne arhitekturne odluke

### GitHub Pages deployment
- `output: "export"` u next.config.ts za staticki export u `out/` folder
- `basePath: "/differentevent"` jer je sajt na subdirektorijumu (github.io/differentevent/)
- `NEXT_PUBLIC_BASE_PATH` env var prenosi basePath u runtime kod
- `images.unoptimized: true` jer next/image optimizacija ne radi sa static export
- **KRITICNO:** `next/image` sa `unoptimized: true` NE dodaje automatski basePath na src. Sve slike MORAJU rucno koristiti `${basePath}/images/...` iz `src/lib/images.ts`
- Dinamicki `sitemap.ts` i `robots.ts` ne rade sa static export — koristimo staticke fajlove u `public/`

### Slike (basePath)
- `src/lib/images.ts` exportuje `basePath` konstanatu i helper funkcije (`getPagodeImages()`, `getSatoriImages()`)
- Svaka komponenta koja prikazuje sliku importuje `basePath` iz `@/lib/images` i koristi template literal: `` `${basePath}/images/...` ``
- Ovo vazi i za `next/image` src prop i za CSS `backgroundImage` (ParallaxSection, ProductPageTemplate)
- Fajlovi koji koriste basePath: Hero, Header, Footer, ProductGrid, products.ts, metadata.ts, page.tsx, o-nama/page.tsx

### Proizvodi (data-driven)
- `src/data/products.ts` — centralni fajl sa svim ~35 proizvoda (slug, title, description, features, images, SEO meta)
- Kategorije: satori (6), pagode (2), tiffany-stolice (2), dodatna-oprema (13)
- Dinamicke `[slug]` rute sa `generateStaticParams()` za SSG
- `src/components/ProductPageTemplate.tsx` — reusable template za sve product stranice

### SEO
- `src/lib/metadata.ts` — `generatePageMetadata()` helper za title, description, OG tags, canonical
- `src/components/seo/JsonLd.tsx` — LocalBusiness, Product, BreadcrumbList, Review structured data
- `src/components/layout/Breadcrumbs.tsx` — vizuelni breadcrumbs + JSON-LD
- `tel:` linkovi imaju `data-phone-number` atribut za Google Ads call tracking
- `siteConfig.gtmId` — placeholder za GTM (prazan dok se ne postavi)

## Struktura projekta

```
src/
├── app/                          # Stranice (App Router)
│   ├── layout.tsx                # Root layout (fontovi, Header/Footer/FloatingCTA, LocalBusiness JSON-LD)
│   ├── page.tsx                  # Pocetna (Hero + ProductGrid + Features + Parallax + Testimonials + CTA)
│   ├── o-nama/page.tsx
│   ├── satori/page.tsx + [slug]/page.tsx
│   ├── pagode/page.tsx + [slug]/page.tsx
│   ├── tiffany-stolice/page.tsx + [slug]/page.tsx
│   ├── dodatna-oprema/page.tsx + [slug]/page.tsx
│   ├── galerija/page.tsx         # Grid sa lightbox, filter po kategoriji
│   ├── video/page.tsx            # YouTube embeds
│   ├── kontakt/page.tsx          # Forma (UI only) + Google Maps + info
│   └── not-found.tsx
├── components/
│   ├── layout/                   # Header (sticky, mega-dropdown), MobileNav, Footer, Breadcrumbs
│   ├── ui/                       # Button, Card, Container, AnimateOnScroll
│   ├── sections/                 # Hero (slideshow), ProductGrid, FeatureStrip, Testimonials, ParallaxSection, CTABanner, GoogleMap
│   ├── gallery/                  # ImageGallery, Lightbox
│   ├── cta/                      # FloatingCTA (WhatsApp + tel), ContactForm, SocialButtons
│   ├── seo/                      # JsonLd (LocalBusiness, Product, Breadcrumb, Review)
│   └── ProductPageTemplate.tsx   # Reusable za sve product stranice
├── data/
│   ├── products.ts               # Svi proizvodi sa slugovima, slikama, SEO meta
│   ├── testimonials.ts           # Google Maps recenzije (placeholder, treba update sa pravim)
│   ├── navigation.ts             # Nav struktura sa nested itemima
│   └── siteConfig.ts             # Kontakt, adresa, socijalne mreze, GTM ID
├── lib/
│   ├── images.ts                 # basePath export + helper funkcije za slike
│   └── metadata.ts               # generatePageMetadata() helper
└── styles/
    └── globals.css               # Tailwind v4 @theme (navy, gold custom boje), Playfair Display + Inter fontovi
```

## Design sistem

| Token | Hex | Upotreba |
|-------|-----|----------|
| navy-900 | #0b1428 | Pozadine, header, footer |
| navy-800 | #111d3d | Hover stanja, dropdown |
| navy-700 | #1a2a52 | Body tekst |
| gold-400 | #d4a843 | Primarna akcent boja, CTA dugmad |
| gold-300 | #e8c96a | Hover gold |

Fontovi: **Playfair Display** (naslovi, h1-h3), **Inter** (body tekst)

## Ceste operacije

### Lokalni development
```bash
npm run dev        # Dev server na localhost:3000
npm run build      # Static export u out/ folder
```

### Deploy
Push na `main` branch automatski trigeruje GitHub Actions deploy (.github/workflows/deploy.yml).

### Dodavanje novog proizvoda
1. Dodaj objekat u odgovarajuci niz u `src/data/products.ts`
2. Stranica se automatski generise kroz `[slug]/page.tsx` i `generateStaticParams()`

### Promena kontakt podataka
Edituj `src/data/siteConfig.ts` — koristi se u Footer, Header, JsonLd, kontakt stranici.

## Poznati TODO-ovi

- [ ] Testimonijali: zameniti placeholder sa pravim Google Maps recenzijama (korisnik salje naknadno, 16 recenzija, 4.3 rejting)
- [ ] Slike: dodati prave slike za Tiffany stolice i dodatnu opremu (trenutno koriste pagode placeholder)
- [ ] GTM: dodati pravi Google Tag Manager ID u siteConfig.gtmId
- [ ] Domain: konfigurisati custom domain differentevent.rs i redirecte sa starog WP sajta
- [ ] Kontakt forma: povezati sa backendom (trenutno samo UI)
