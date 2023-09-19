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
      {
        protocol: "https",
        hostname: "**images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**flowbite.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
