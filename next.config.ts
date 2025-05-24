import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // You can optionally specify port and pathname if needed
        // port: '',
        // pathname: '/account123/**',
      },
      // Add other allowed hostnames here if necessary
    ],
  },
};

export default nextConfig;
