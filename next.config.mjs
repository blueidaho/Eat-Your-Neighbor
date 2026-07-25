/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
    ];
  },
};

export default nextConfig;
