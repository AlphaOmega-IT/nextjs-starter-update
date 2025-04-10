/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },

  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: 'https://lmbeauty.de/:path*'
      }
    ];
  }
};

export default nextConfig;
