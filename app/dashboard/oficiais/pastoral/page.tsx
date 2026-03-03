import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, BookOpen, CalendarDays } from "lucide-react";

export default function PastoralPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Gabinete Pastoral</h2>
        <p className="text-muted-foreground">Área restrita e confidencial para uso exclusivo do ministério pastoral.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Métrica: Aconselhamento (Foco em Sigilo) */}
        <Card className="border-l-4 border-l-purple-600">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Aconselhamentos</CardTitle>
            <Lock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Sessões agendadas para esta semana</p>
          </CardContent>
        </Card>

        {/* Métrica: Planeamento de Sermões */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Sermões Planeados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Série atual: Romanos</p>
          </CardContent>
        </Card>

        {/* Métrica: Ofícios e Sacramentos */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Próximos Ofícios</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 Batismo, 1 Casamento este mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Agenda Pastoral Privada</CardTitle>
            <CardDescription>Os seus compromissos, visitas a hospitais e reuniões.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              A integração com a sua agenda (Google Calendar/Interna) aparecerá aqui.
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lembretes e Oração</CardTitle>
            <CardDescription>Pedidos de oração submetidos pela congregação.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="p-4 text-sm text-center border border-dashed rounded-md text-muted-foreground">
              Nenhum pedido de oração pendente de leitura.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}