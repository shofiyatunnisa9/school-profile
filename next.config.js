/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn0-production-images-kly.akamaized.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.antaranews.com",
        pathname: "**",
      },
    ],
  },
  // Tambahkan config lain di sini jika perlu
};

module.exports = nextConfig;
