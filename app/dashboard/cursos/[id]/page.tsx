import SalaDeAulaContent from "./content";

// Mantemos as configs que sabemos serem necessárias
export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // LOG 1: Verifica se o servidor chegou a iniciar a renderização desta rota
  console.log("DEBUG [SERVER]: Iniciando /cursos/[id]...");

  try {
    // LOG 2: Verifica o estado dos params antes do await
    console.log("DEBUG [SERVER]: Params recebido (Promise):", params);

    // Tentativa de resolver os parâmetros (Ponto crítico no Next 15)
    const resolvedParams = await params;

    // LOG 3: Sucesso ao ler o ID
    console.log("DEBUG [SERVER]: Params resolvidos com sucesso:", JSON.stringify(resolvedParams));
    console.log("DEBUG [SERVER]: ID da rota:", resolvedParams.id);

    // Retorna o componente cliente
    return <SalaDeAulaContent />;

  } catch (error: any) {
    // LOG DE ERRO REAL: Isso vai mostrar no painel da Cloudflare o motivo exato
    console.error("DEBUG [SERVER ERROR]: Falha fatal na página:", error);
    console.error("DEBUG [SERVER ERROR STACK]:", error?.stack);

    // Retorno visual para você saber que o erro foi capturado pelo try/catch
    return (
      <div className="p-8 text-red-600 bg-red-50 border border-red-200 m-4 rounded">
        <h1 className="text-xl font-bold mb-2">Erro Capturado no Servidor (Debug)</h1>
        <p>Verifique os logs do Cloudflare Workers.</p>
        <pre className="mt-4 p-2 bg-gray-100 rounded text-xs overflow-auto">
          {error?.message || JSON.stringify(error)}
        </pre>
      </div>
    );
  }
}