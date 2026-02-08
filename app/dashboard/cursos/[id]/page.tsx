import SalaDeAulaContent from "./content";

// MANTENHA ISTO (Define que essa rota roda no Edge para satisfazer o Build)
export const runtime = "edge";

export default function Page() {
  // Chama o componente cliente que contém toda a lógica
  return <SalaDeAulaContent />;
}