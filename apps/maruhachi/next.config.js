const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@styles/ui'],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ]
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/en/:path*',
  //       has: [
  //         {
  //           type: 'cookie',
  //           key: 'NEXT_LOCALE_REDIRECTED',
  //           value: 'true'
  //         }
  //       ],
  //       locale: false
  //     },
  //     {
  //       source: '/:path*',
  //       destination: '/[defaultLocale]/:path*',
  //       locale: false
  //     }
  //   ];
  // }
};

module.exports = withNextIntl(nextConfig);
