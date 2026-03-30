"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[9999] bg-navy-900 overflow-y-auto pt-20 pb-8 px-6">
      <nav className="flex flex-col gap-1">
        {navigation.map((item) => (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex-1 py-3 text-lg font-medium text-white hover:text-gold-400 transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() =>
                    setExpandedItem(expandedItem === item.href ? null : item.href)
                  }
                  className="p-3 text-white/60 hover:text-gold-400"
                  aria-label={`Proširi ${item.label}`}
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      expandedItem === item.href ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            {item.children && expandedItem === item.href && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-gold-400/30 pl-4 pb-2">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className="py-2 text-base text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 font-semibold text-navy-900"
          data-phone-number={siteConfig.phone}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phoneDisplay}
        </a>
        <Link
          href="/kontakt"
          onClick={onClose}
          className="flex items-center justify-center rounded-lg border-2 border-gold-400 px-6 py-3 font-semibold text-gold-400"
        >
          Pošaljite upit
        </Link>
      </div>
    </div>
  );
}
