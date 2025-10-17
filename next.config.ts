import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
