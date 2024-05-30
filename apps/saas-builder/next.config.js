/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@styles/ui', '@styles/ui-mui'],
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['uploadthing.com', 'utfs.io', 'img.clerk.com', 'subdomain', 'files.stripe.com']
  }
};
