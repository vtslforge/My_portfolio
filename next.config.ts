import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://192.168.37.1:3000', '192.168.37.1'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.epicgames.com",
      },
    ],
  },
};

export default nextConfig;
