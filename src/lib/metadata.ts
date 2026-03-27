import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { basePath } from "@/lib/images";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: GenerateMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${basePath}/images/logo/logo.png`;

  return {
    title: `${title} | ${siteConfig.name} Beograd`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "sr_RS",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
