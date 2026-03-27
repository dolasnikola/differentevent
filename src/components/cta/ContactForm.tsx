"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="mt-4 font-playfair text-xl font-bold text-navy-900">
          Poruka je poslata!
        </h3>
        <p className="mt-2 text-navy-700/70">
          Kontaktiraćemo vas u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">
            Ime i prezime *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors"
            placeholder="Vaše ime"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors"
            placeholder="06x xxx xxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors"
          placeholder="vas@email.com"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-navy-900 mb-1">
            Tip događaja
          </label>
          <select
            id="eventType"
            name="eventType"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors"
          >
            <option value="">Izaberite...</option>
            <option value="vencanje">Venčanje</option>
            <option value="proslava">Proslava</option>
            <option value="korporativni">Korporativni event</option>
            <option value="festival">Festival / Koncert</option>
            <option value="sajam">Sajam</option>
            <option value="drugo">Drugo</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-navy-900 mb-1">
            Datum događaja
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
          Poruka *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-900 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-colors resize-none"
          placeholder="Opišite šta vam je potrebno..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Pošaljite upit
      </Button>
    </form>
  );
}
