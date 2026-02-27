import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração vital para o Cloudflare (igual ao do Rentari)
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'picsum.photos' }, // Adicione outros se precisar
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;