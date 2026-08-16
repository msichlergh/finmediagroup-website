import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Next 16 blocks cross-origin requests for dev resources. Without this,
  // browsing the dev server on 127.0.0.1 (rather than localhost) silently
  // fails to load the client bundle, so nothing hydrates.
  allowedDevOrigins: ['127.0.0.1', 'localhost', '192.168.0.63'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'fundedtrading.com' },
      { protocol: 'https', hostname: 'www.mytradingreviews.com' },
      { protocol: 'https', hostname: 'finpr.com' },
      { protocol: 'https', hostname: 'dailyfxwire.com' },
    ],
  },
  async redirects() {
    // The legacy Apache site served /about.html etc. Preserve those URLs.
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/news-finmedia-launch', destination: '/news/finmedia-launch', permanent: true },
      { source: '/news-finmedia-launch.html', destination: '/news/finmedia-launch', permanent: true },
      { source: '/:slug.html', destination: '/:slug', permanent: true },
    ]
  },
}

export default nextConfig
