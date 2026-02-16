import SalaDeAulaContent from "./content";

// Mantemos as configs necessárias para o Cloudflare
export const runtime = "edge";
export const dynamic = "force-dynamic";

// CORREÇÃO PARA NEXT.JS 14:
// 1. Removemos o 'async' da função (não é necessário para ler params na v14).
// 2. 'params' é um objeto direto, NÃO uma Promise.
export default function Page({
  params,
}: {
  params: { id: string };
}) {
  console.log("DEBUG [SERVER]: Iniciando /cursos/[id]...");
  
  // No Next 14, acessamos o ID diretamente, sem await
  console.log("DEBUG [SERVER]: ID da rota:", params.id);

  return <SalaDeAulaContent />;
}