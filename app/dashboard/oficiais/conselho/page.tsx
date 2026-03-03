import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // <-- Importação do Botão adicionada

export default function ConselhoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Painel do Conselho</h2>
        <p className="text-muted-foreground">Resumo das atividades e jurisdição presbiterial.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Métricas Rápidas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Membros Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+3 admitidos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Reuniões no Ano</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Última ata em 15/Ago</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Acompanhamentos</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Membros precisando de visita</p>
          </CardContent>
        </Card>
      </div>

      {/* 👇 NOVA SEÇÃO DE AÇÕES RÁPIDAS (Botão Gerar Ata) 👇 */}
      <div className="flex justify-end">
        <Button asChild className="bg-ippc-bordo hover:bg-red-900 text-white shadow-sm">
          <Link href="/dashboard/oficiais/conselho/ata">
            <FileText className="mr-2 h-4 w-4" />
            Gerar Nova Ata
          </Link>
        </Button>
      </div>

      {/* Espaço para futuras tabelas/features */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Últimas Resoluções</CardTitle>
            <CardDescription>Extraídas automaticamente das últimas atas.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Aqui entrará o componente de Data Table no futuro */}
            <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              Lista de resoluções será exibida aqui...
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Próxima Pauta</CardTitle>
            <CardDescription>Itens sugeridos para a próxima reunião.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              Nenhum item adicionado à pauta ainda.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}