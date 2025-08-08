/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      type: "asset/resource",
      generator: {
        // these will be served from .next/static/videos/
        filename: "static/videos/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
