import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self'; script-src 'none'; object-src 'none'; frame-src 'none'",
          },
        ],
      },
    ]
  },
}

export default nextConfig
