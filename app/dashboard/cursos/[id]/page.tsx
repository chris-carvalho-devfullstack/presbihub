import SalaDeAulaContent from "./content";

export const runtime = "edge";

// 1. Configurações para garantir que o Cloudflare entenda como rodar

export const dynamic = "force-dynamic"; // OBRIGATÓRIO: Impede que tente criar HTML estático falho

// 2. CORREÇÃO CRÍTICA DO NEXT.JS 15:
// A função PRECISA ser 'async' e receber 'params' como uma Promise.
// O erro 500 acontece porque o Next.js 15 tenta injetar uma Promise aqui e sua função antiga não aceitava.
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("DEBUG [SERVER]: Iniciando /cursos/[id]...");

  // O await aqui está correto para Next.js 15
  const resolvedParams = await params;
  
  // Dica: Evite logar o objeto params inteiro se possível, logue apenas o ID
  console.log("DEBUG [SERVER]: ID da rota:", resolvedParams.id);

  return <SalaDeAulaContent />;
}