import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Početna", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd items={allItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-700/60">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === allItems.length - 1 ? (
                <span className="font-medium text-navy-900">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-gold-400 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
