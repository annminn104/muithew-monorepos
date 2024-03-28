const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@styles/ui', '@mui/material'],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ]
  },
  output: 'standalone',
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = withNextIntl(nextConfig);
