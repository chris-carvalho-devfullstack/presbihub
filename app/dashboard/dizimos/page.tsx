import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Copy } from "lucide-react";

export default function DizimosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-ippc-chumbo">Dízimos e Ofertas</h1>
      
      {/* Área de Contribuição Rápida (PIX) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#9D2235] text-white border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg opacity-90">Contribuir via PIX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm opacity-80">
              Utilize a chave abaixo para realizar sua transferência. O sistema identificará seu CPF automaticamente.
            </p>
            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg border border-white/20">
              <code className="flex-1 text-sm font-mono truncate">00.000.000/0001-00</code>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resumo de 2026</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">R$ 1.250,00</div>
            <p className="text-sm text-gray-500 mt-1">Total ofertado este ano</p>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[60%]"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Você tem sido fiel. Deus o abençoe!</p>
          </CardContent>
        </Card>
      </div>

      {/* Histórico (Tabela) */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Histórico de Contribuições</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Informe de Rendimentos
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Método</TableHead>
                <TableHead className="text-right">Valor</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>05/01/2026</TableCell>
                <TableCell>Dízimo</TableCell>
                <TableCell>PIX</TableCell>
                <TableCell className="text-right font-medium">R$ 450,00</TableCell>
                <TableCell className="text-right text-green-600">Confirmado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08/12/2025</TableCell>
                <TableCell>Oferta Missões</TableCell>
                <TableCell>Cartão Débito</TableCell>
                <TableCell className="text-right font-medium">R$ 100,00</TableCell>
                <TableCell className="text-right text-green-600">Confirmado</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}