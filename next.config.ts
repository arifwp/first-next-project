import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

export default nextConfig;
