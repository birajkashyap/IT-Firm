import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // Allow external images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
