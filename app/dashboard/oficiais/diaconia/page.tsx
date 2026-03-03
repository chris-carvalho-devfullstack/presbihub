import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Wrench, ListChecks } from "lucide-react";

export default function DiaconiaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Painel da Junta Diaconal</h2>
        <p className="text-muted-foreground">Gestão de assistência social, património e ordem litúrgica.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Métrica: Assistência Social */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Famílias Assistidas</CardTitle>
            <HeartHandshake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 cestas básicas distribuídas este mês</p>
          </CardContent>
        </Card>

        {/* Métrica: Manutenção e Património */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Chamados de Manutenção</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">5 Pendentes</div>
            <p className="text-xs text-muted-foreground">2 resolvidos na última semana</p>
          </CardContent>
        </Card>

        {/* Métrica: Ordem / Escalas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Escalas de Plantão</CardTitle>
            <ListChecks className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">Escalas cobertas para o próximo Domingo</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Últimos Chamados (Facilities)</CardTitle>
            <CardDescription>Solicitações de manutenção reportadas pelos membros.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              Lista de chamados (ex: lâmpada queimada, reparo no som) aparecerá aqui.
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ações Diaconais</CardTitle>
            <CardDescription>Registo rápido de entregas e visitas diaconais.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              Nenhuma ação registada esta semana.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}