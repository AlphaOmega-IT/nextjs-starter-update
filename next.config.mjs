const withMDX = (await import('@next/mdx'))({
  extension: /\.mdx?$/
});

const nextConfig = withMDX({
  eslint: {
    dirs: [],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.jexcellence.de',
          },
        ],
        destination: 'https://jexcellence.de/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jexcellence.de',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://jexcellence.de/:path*',
        permanent: true,
      },
    ];
  },
  headers: () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; preload'
        },
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=300, stale-while-revalidate=86400'
        }
      ],
    },
  ],
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack(config) {
    return config;
  },
});

module.exports = nextConfig;