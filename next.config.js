/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'github.com', 'i.imgur.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 
