import SalaDeAulaContent from "./content"; // Importa o componente que criamos acima

// Esta configuração fica ISOLADA aqui no Server Component
export const runtime = "edge";

// Como não estamos usando o ID para buscar dados reais ainda, isso deixa a página
// renderizar sem reclamar de falta de params.
export default function Page() {
  return <SalaDeAulaContent />;
}