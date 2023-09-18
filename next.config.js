/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**seeklogo.com",
      },
      {
        protocol: "https",
        hostname: "**i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
