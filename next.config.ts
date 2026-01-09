import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações para Cloudflare Pages */
  images: {
    unoptimized: true, // Obrigatório para o plano gratuito da Cloudflare
  },
  // Isso ajuda a evitar erros de hidratação em alguns casos
  reactStrictMode: true,
};

export default nextConfig;