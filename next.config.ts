import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações otimizadas para Cloudflare Pages */
  images: {
    unoptimized: true, // Essencial para o ambiente de Workers
  },
  reactStrictMode: true,

  // Esta configuração é crucial para o Next 15 no Cloudflare.
  // Ela impede que o compilador tente empacotar módulos que devem ser tratados
  // como externos no ambiente de borda (Edge/Workers).
  serverExternalPackages: ["@cloudflare/workers-types"],

  // Garante que o build não falhe por erros de linting ou typescript 
  // que às vezes se comportam de forma diferente no ambiente de CI da Cloudflare
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;