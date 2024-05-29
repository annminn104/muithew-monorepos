const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

// const MillionLint = require('@million/lint').next({});

/**
 * A fork of 'next-pwa' that has app directory support
 * @see https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1332258575
 */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/material', '@styles/ui', '@styles/ui-mui', 'three'],
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['three']
  },
  modularizeImports: {
    '@mui/material/?(((\\w*)?/?)*)': {
      transform: '@mui/material/{{ matches.[1] }}/{{member}}'
    }
    // '@mui/icons-material/?(((\\w*)?/?)*)': {
    //   transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    // }
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

module.exports = withPlugins([[withBundleAnalyzer, withPWA], nextConfig]);
