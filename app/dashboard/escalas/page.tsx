import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, CheckCircle2, XCircle } from "lucide-react";

export default function EscalasPage() {
  return (
    <div className="space-y-6">
      
      {/* Cabeçalho da Página */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ippc-chumbo">Minhas Escalas</h1>
          <p className="text-gray-500">Confira suas próximas datas de serviço na igreja.</p>
        </div>
        <Button variant="outline">
          Baixar Escala em PDF
        </Button>
      </div>

      {/* Seção 1: Pendentes de Confirmação (Destaque) */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-yellow-700 bg-yellow-50 p-2 rounded-md w-fit px-4 border border-yellow-100">
          <Clock className="h-4 w-4" /> Precisa da sua confirmação
        </h2>
        
        <Card className="border-l-4 border-l-yellow-500 shadow-md">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Recepção do Culto Noturno</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3"/> Próximo Domingo, 19/05</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> Chegar às 18:30</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3"/> Hall de Entrada</span>
                </div>
                <p className="text-sm mt-3 text-gray-700 bg-gray-50 p-2 rounded">
                  <span className="font-semibold">Equipe:</span> Você, Ir. Márcia e Diac. João.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800">
                <XCircle className="mr-2 h-4 w-4" />
                Não posso
              </Button>
              <Button className="flex-1 md:flex-none bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Confirmar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção 2: Próximas Escalas (Já confirmadas) */}
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-semibold text-gray-700">Agendados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item de Escala 1 */}
          <EscalaCard 
            titulo="Escola Bíblica Dominical" 
            funcao="Professor Auxiliar (Sala Jovens)"
            data="Domingo, 26/05"
            horario="09:00"
            status="confirmed"
          />
          
          {/* Item de Escala 2 */}
          <EscalaCard 
            titulo="Culto de Oração" 
            funcao="Operador de Projeção"
            data="Quinta, 30/05"
            horario="19:30"
            status="confirmed"
          />
        </div>
      </div>

    </div>
  );
}

// Componente simples para os cards menores
function EscalaCard({ titulo, funcao, data, horario, status }: any) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            Confirmado
          </Badge>
          <span className="text-xs font-mono text-gray-400">#4290</span>
        </div>
        <CardTitle className="text-base font-bold mt-2">{titulo}</CardTitle>
        <CardDescription>{funcao}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-ippc-bordo" /> {data}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-ippc-bordo" /> {horario}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}