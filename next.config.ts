import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,   // preserves /sites/ URL structure from the current site
  output: 'standalone',  // optimised for Vercel / Docker
}

export default nextConfig
