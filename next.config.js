/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

  },
  distDir: 'build',
  eslint: {
    ignoreDuringBuilds: false
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      }
    ]
  },
  reactStrictMode: true,

  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
