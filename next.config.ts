import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn1.epicgames.com',
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
    ],
  },
};

export default nextConfig;
