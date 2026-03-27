import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/differentevent",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
