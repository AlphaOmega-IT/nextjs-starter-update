import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {}
});

const nextConfig = {
  eslint: {
    dirs: [],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jexcellence.de',
        port: '3001',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{
          type: 'host',
          value: 'www.jexcellence.de'
        }],
        destination: 'https://jexcellence.de/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jexcellence.de'
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        destination: 'https://jexcellence.de/:path*',
        permanent: true,
      }
    ]
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
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      ],
    },
  ],
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  webpack(config) {
    config.optimization.splitChunks = {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    }
    return config
  }
};

export default withMDX(nextConfig);