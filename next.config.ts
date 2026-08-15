import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
