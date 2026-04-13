import type { NextConfig } from 'next'
import { execSync } from 'child_process'

const gitHash = (() => {
  try { return execSync('git rev-parse --short HEAD').toString().trim() }
  catch { return 'unknown' }
})()

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_ID: gitHash,
  },
  async redirects() {
    return [
      {
        source: '/outstaff-ai/',
        destination: '/outstaff-designers/',
        permanent: true,
      },
    ]
  },
  trailingSlash: true,   // preserves /sites/ URL structure from the current site
  output: 'standalone',  // optimised for Vercel / Docker
  // Strict Mode mounts → unmounts → remounts every component in dev, which causes
  // GSAP transitions to fire twice and resets useRef guards between the cycles.
  reactStrictMode: false,
}

export default nextConfig
