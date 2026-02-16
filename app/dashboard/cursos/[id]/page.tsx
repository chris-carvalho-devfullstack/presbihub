import dynamic from "next/dynamic";

// Mantemos as configurações vitais para o Cloudflare
export const runtime = "edge";
export const dynamicParams = true; // Garante que aceite qualquer ID

// Importação Dinâmica com SSR Desativado
// O servidor manda um HTML vazio e o navegador monta a tela depois.
const SalaDeAulaContent = dynamic(
  () => import("./content"),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center text-gray-400">
        Carregando sala de aula...
      </div>
    )
  }
);

// Truque de Mestre: Não recebemos 'params' aqui.
// Assim, evitamos que o Edge Runtime tente ler parâmetros e quebre (Erro 500).
export default function Page() {
  return <SalaDeAulaContent />;
}