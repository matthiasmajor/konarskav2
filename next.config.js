/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
