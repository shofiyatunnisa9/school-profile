import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        hostname: "cdn0-production-images-kly.akamaized.net",
      },
      {
        hostname: "cdn.antaranews.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
