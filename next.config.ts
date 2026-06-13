import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/docker-education-platform" : undefined,
  assetPrefix: isProd ? "/docker-education-platform/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
