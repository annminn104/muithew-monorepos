/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  transpilePackages: ['@styles/ui'],
  reactStrictMode: false
});
