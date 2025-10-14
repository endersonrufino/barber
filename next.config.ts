import type { NextConfig } from "next";
import { hostname } from "node:os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "dynamic-media-cdn.tripadvisor.com",
      },
    ],
  },
};

export default nextConfig;
