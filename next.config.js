const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  images: {
    domains: ['www.kasspor.com.tr'], // 👈 Bu satırla çözülüyor
  },
};

module.exports = withLess(nextConfig);
