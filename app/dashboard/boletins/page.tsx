import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Search, Calendar, Eye } from "lucide-react";

export default function BoletinsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ippc-chumbo">Boletins Informativos</h1>
          <p className="text-gray-500">Acesse a liturgia, avisos e a agenda semanal da igreja.</p>
        </div>
        
        {/* Campo de Busca Visual */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar por data ou assunto..." className="pl-8" />
        </div>
      </div>

      {/* DESTAQUE: Boletim da Semana */}
      <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-none shadow-xl overflow-hidden relative">
        {/* Efeito visual de fundo */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <FileText className="w-64 h-64 rotate-12" />
        </div>

        <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Simulação da Capa do Boletim */}
          <div className="h-48 w-36 bg-white rounded shadow-lg flex items-center justify-center shrink-0 rotate-[-3deg] border-4 border-white/20">
            <div className="text-center text-gray-800">
              <span className="block text-xs font-bold uppercase tracking-widest text-ippc-bordo">IPPC</span>
              <span className="block text-4xl font-serif font-bold">04</span>
              <span className="block text-sm uppercase">Janeiro</span>
              <span className="block text-xs mt-2 text-gray-400">Edição #425</span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <Badge className="bg-ippc-bordo hover:bg-red-700 text-white border-none">
              Edição Atual
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Boletim Dominical #425</h2>
            <p className="text-gray-300 max-w-lg">
              Confira a liturgia deste domingo, os aniversariantes da semana e o estudo pastoral sobre "A Soberania de Deus em Tempos de Crise".
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Eye className="mr-2 h-4 w-4" />
                Ler Online
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Baixar PDF
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LISTA: Arquivo de Boletins Anteriores */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Edições Anteriores</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BoletimCard 
            numero="424" 
            data="28 de Dezembro, 2025" 
            titulo="Culto de Ação de Graças" 
          />
          <BoletimCard 
            numero="423" 
            data="21 de Dezembro, 2025" 
            titulo="Cantata de Natal" 
          />
          <BoletimCard 
            numero="422" 
            data="14 de Dezembro, 2025" 
            titulo="Encerramento da EBD" 
          />
        </div>
      </div>
    </div>
  );
}

// Componente para os cards menores da lista
function BoletimCard({ numero, data, titulo }: { numero: string, data: string, titulo: string }) {
  return (
    <Card className="hover:border-ippc-bordo/50 hover:shadow-md transition-all cursor-pointer group">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold group-hover:text-ippc-bordo transition-colors">
            Edição #{numero}
          </CardTitle>
          <CardDescription className="flex items-center gap-1 text-xs">
            <Calendar className="h-3 w-3" /> {data}
          </CardDescription>
        </div>
        <div className="h-8 w-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:text-ippc-bordo group-hover:bg-red-50 transition-colors">
          <FileText className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          Tema: {titulo}
        </p>
        <Button variant="ghost" size="sm" className="w-full text-xs h-8">
          <Download className="mr-2 h-3 w-3" /> Download
        </Button>
      </CardContent>
    </Card>
  )
}