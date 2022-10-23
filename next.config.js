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
  }
}

module.exports = nextConfig
