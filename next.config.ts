import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/docker-master-lab",
  assetPrefix: "/docker-master-lab/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
