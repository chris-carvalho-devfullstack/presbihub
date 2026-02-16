/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Essencial para Cloudflare Workers
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;