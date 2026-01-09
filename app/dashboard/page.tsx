import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, AlertCircle } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      
      {/* Cabeçalho de Boas-vindas */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-ippc-chumbo">Bom dia, Christian!</h1>
          <p className="text-gray-500">
            "A alegria do Senhor é a vossa força." — Neemias 8:10
          </p>
        </div>
        <div className="text-sm bg-white px-4 py-2 rounded-full border shadow-sm">
          Domingo, 04 de Janeiro de 2026
        </div>
      </div>

      {/* Grid de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Próxima Escala */}
        <Card className="border-l-4 border-l-ippc-bordo shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Sua Próxima Escala</CardTitle>
            <Calendar className="h-4 w-4 text-ippc-bordo" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Hoje, 19h</div>
            <p className="text-xs text-gray-500 mt-1">Recepção (Porta Principal)</p>
          </CardContent>
        </Card>

        {/* Card 2: Aniversariantes */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Aniversariantes da Semana</CardTitle>
            <Users className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Irmãos</div>
            <p className="text-xs text-gray-500 mt-1">Pedro, Ana e Marcos</p>
          </CardContent>
        </Card>

        {/* Card 3: Avisos */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Boletim Semanal</CardTitle>
            <AlertCircle className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Nº 425</div>
            <p className="text-xs text-ippc-bordo mt-1 cursor-pointer hover:underline">Clique para ler o PDF</p>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Avisos Maiores */}
      <div className="bg-white rounded-xl border p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Avisos da Secretaria</h3>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100">
            <strong>Atualização Cadastral:</strong> Por favor, verifique se seu telefone e endereço estão atualizados na aba "Meu Perfil".
          </div>
          <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div className="h-2 w-2 mt-2 rounded-full bg-ippc-bordo shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Reunião de Líderes</p>
              <p className="text-sm text-gray-500">A próxima reunião do conselho será na quinta-feira às 20h.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}