/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  eslint:{
    ignoreDuringBuilds:true
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
