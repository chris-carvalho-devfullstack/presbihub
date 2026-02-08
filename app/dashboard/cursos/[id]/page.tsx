import SalaDeAulaContent from "./content";

// Define que roda no Edge (Cloudflare gosta disso)
export const runtime = "edge";

// REMOVA a função generateStaticParams. 
// Não queremos limitar os cursos apenas aos que existem no build.

export default function Page() {
  // Observe: Não recebemos 'params' aqui. 
  // Deixamos o componente Cliente descobrir o ID sozinho.
  return <SalaDeAulaContent />;
}