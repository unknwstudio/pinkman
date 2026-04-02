import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,   // preserves /sites/ URL structure from the current site
  output: 'standalone',  // optimised for Vercel / Docker
  // Strict Mode mounts → unmounts → remounts every component in dev, which causes
  // GSAP transitions to fire twice and resets useRef guards between the cycles.
  reactStrictMode: false,
}

export default nextConfig
