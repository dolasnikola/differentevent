import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct } from "@/data/products";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { generatePageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.filter((p) => p.categorySlug === "pagode").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct("pagode", slug);
  if (!product) return {};
  return generatePageMetadata({ title: product.seo.title, description: product.seo.description, path: `/pagode/${product.slug}`, image: product.images[0] });
}

export default async function PagodeProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct("pagode", slug);
  if (!product) notFound();
  return <ProductPageTemplate product={product} />;
}
