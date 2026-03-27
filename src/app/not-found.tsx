import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="font-playfair text-6xl font-bold text-navy-900 sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-playfair text-2xl font-bold text-navy-700">
          Stranica nije pronađena
        </h2>
        <p className="mt-4 text-navy-700/60 max-w-md mx-auto">
          Stranica koju tražite ne postoji ili je premeštena. Proverite URL ili se vratite na početnu.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/">Nazad na početnu</Button>
          <Button href="/kontakt" variant="outline">Kontaktirajte nas</Button>
        </div>
      </Container>
    </section>
  );
}
