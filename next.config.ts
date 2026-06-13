import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/docker-master-lab" : undefined,
  assetPrefix: isProd ? "/docker-master-lab/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
