/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // www and apex both currently resolve with 200 OK and identical
        // content — that's the direct cause of Google's "Duplicate without
        // user-selected canonical" flag. Force one canonical host.
        source: '/:path*',
        has: [{ type: 'host', value: 'www.eatyourneighbor.com' }],
        destination: 'https://eatyourneighbor.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Prevent any proxy/CDN from caching the HTML document itself,
        // since it references content-hashed JS chunk filenames that
        // change on every deploy — a cached stale HTML page points at
        // chunks that no longer exist post-deploy.
        source: '/:path*',
        has: [{ type: 'header', key: 'accept', value: '.*text/html.*' }],
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
