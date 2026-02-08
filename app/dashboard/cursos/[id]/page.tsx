import SalaDeAulaContent from "./content";

// Define que roda no Edge
export const runtime = "edge";

// CORREÇÃO 1: Força a renderização dinâmica.
// Isso impede que o Next.js ou o Cloudflare tentem pré-renderizar essa página sem os parâmetros,
// o que causaria o erro 500.
export const dynamic = "force-dynamic";

// CORREÇÃO 2: O componente deve ser ASYNC no Next.js 15 para rotas dinâmicas.
// Mesmo que você use o 'useParams' no cliente, a página do servidor (esta) recebe os params
// e o runtime espera que isso seja tratado como uma Promise.
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Apenas aguardamos a resolução dos parâmetros para evitar falhas no runtime.
  // Não precisamos usar o valor 'id' se você prefere que o cliente o capture,
  // mas o 'await' garante que o contexto da rota esteja pronto.
  await params;

  return <SalaDeAulaContent />;
}