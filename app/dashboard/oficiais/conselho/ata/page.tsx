"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Plus, Trash2, Printer, Copy, CheckCircle2 } from "lucide-react";

export default function GeradorAtaPage() {
  // Estados para controlar o formulário
  const [dadosReuniao, setDadosReuniao] = useState({
    tipo: "Ordinária",
    numeroAta: "001/2026",
    data: "",
    hora: "",
    local: "nas dependências da Igreja",
    presidente: "",
    secretario: "",
    presentes: "",
    ausentesJustificados: "",
    oracaoInicial: "",
    oracaoFinal: "",
  });

  const [pautas, setPautas] = useState([
    { id: 1, assunto: "", resolucao: "" }
  ]);

  const [textoAtaGerado, setTextoAtaGerado] = useState("");
  const [copiado, setCopiado] = useState(false);

  // Manipuladores de estado
  const handleDadosChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDadosReuniao((prev) => ({ ...prev, [name]: value }));
  };

  const adicionarPauta = () => {
    setPautas([...pautas, { id: Date.now(), assunto: "", resolucao: "" }]);
  };

  const removerPauta = (id: number) => {
    setPautas(pautas.filter((p) => p.id !== id));
  };

  const handlePautaChange = (id: number, campo: "assunto" | "resolucao", valor: string) => {
    setPautas(pautas.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)));
  };

  // O "Coração" da feature: O Motor de Geração de Texto
  const gerarAta = () => {
    // Formatação de data simples para o texto (ex: 2026-03-02 -> 02/03/2026)
    const dataFormatada = dadosReuniao.data.split('-').reverse().join('/');

    let ata = `ATA Nº ${dadosReuniao.numeroAta} DA REUNIÃO ${dadosReuniao.tipo.toUpperCase()} DO CONSELHO.\n\n`;
    
    ata += `Aos ${dataFormatada}, às ${dadosReuniao.hora} horas, ${dadosReuniao.local}, reuniu-se o Conselho desta Igreja. `;
    ata += `A reunião foi presidida pelo Rev. ${dadosReuniao.presidente} e secretariada por mim, ${dadosReuniao.secretario}. `;
    
    if (dadosReuniao.oracaoInicial) {
      ata += `O presidente declarou aberta a reunião após oração proferida por ${dadosReuniao.oracaoInicial}. `;
    }

    ata += `\n\n1. QUÓRUM: Verificou-se a presença dos seguintes oficiais: ${dadosReuniao.presentes}. `;
    if (dadosReuniao.ausentesJustificados) {
      ata += `Justificaram ausência: ${dadosReuniao.ausentesJustificados}. `;
    }

    ata += `\n\n2. ORDEM DO DIA (RESOLUÇÕES): \n`;
    pautas.forEach((pauta, index) => {
      if (pauta.assunto || pauta.resolucao) {
        ata += `2.${index + 1}. Sobre ${pauta.assunto || "[ASSUNTO NÃO INFORMADO]"}: O Conselho resolveu ${pauta.resolucao || "[RESOLUÇÃO NÃO INFORMADA]"}.\n`;
      }
    });

    ata += `\n3. ENCERRAMENTO: Nada mais havendo a tratar, a reunião foi encerrada `;
    if (dadosReuniao.oracaoFinal) {
      ata += `com oração proferida por ${dadosReuniao.oracaoFinal}. `;
    }
    
    ata += `E, para constar, eu, ${dadosReuniao.secretario}, lavrei a presente ata que, após lida e aprovada, vai assinada por mim e pelo presidente.\n\n`;
    
    ata += `_________________________________________\nPresidente: Rev. ${dadosReuniao.presidente}\n\n`;
    ata += `_________________________________________\nSecretário: ${dadosReuniao.secretario}`;

    setTextoAtaGerado(ata);
  };

  const copiarAreaDeTransferencia = () => {
    navigator.clipboard.writeText(textoAtaGerado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ippc-chumbo flex items-center gap-2">
          <FileText className="h-6 w-6 text-ippc-bordo" />
          Gerador Inteligente de Atas
        </h2>
        <p className="text-muted-foreground">
          Preencha os dados abaixo e o sistema formatará a ata automaticamente segundo o Manual Presbiteriano.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* LADO ESQUERDO: FORMULÁRIO */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Dados da Reunião</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Reunião</Label>
                  <select 
                    name="tipo" 
                    value={dadosReuniao.tipo} 
                    onChange={handleDadosChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="Ordinária">Ordinária</option>
                    <option value="Extraordinária">Extraordinária</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Número da Ata</Label>
                  <Input name="numeroAta" value={dadosReuniao.numeroAta} onChange={handleDadosChange} placeholder="Ex: 015/2026" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data</Label>
                  <Input name="data" type="date" value={dadosReuniao.data} onChange={handleDadosChange} />
                </div>
                <div className="space-y-2">
                  <Label>Hora (Início)</Label>
                  <Input name="hora" type="time" value={dadosReuniao.hora} onChange={handleDadosChange} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Presidente (Rev.)</Label>
                  <Input name="presidente" value={dadosReuniao.presidente} onChange={handleDadosChange} placeholder="Nome do Pastor" />
                </div>
                <div className="space-y-2">
                  <Label>Secretário</Label>
                  <Input name="secretario" value={dadosReuniao.secretario} onChange={handleDadosChange} placeholder="Nome do Presbítero" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Quórum e Liturgia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Oficiais Presentes (Nomes)</Label>
                <Textarea name="presentes" value={dadosReuniao.presentes} onChange={handleDadosChange} placeholder="Fulano, Ciclano, Beltrano..." rows={2}/>
              </div>
              <div className="space-y-2">
                <Label>Ausentes Justificados</Label>
                <Input name="ausentesJustificados" value={dadosReuniao.ausentesJustificados} onChange={handleDadosChange} placeholder="Mencione se houver..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Oração Inicial por:</Label>
                  <Input name="oracaoInicial" value={dadosReuniao.oracaoInicial} onChange={handleDadosChange} />
                </div>
                <div className="space-y-2">
                  <Label>Oração Final por:</Label>
                  <Input name="oracaoFinal" value={dadosReuniao.oracaoFinal} onChange={handleDadosChange} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">3. Ordem do Dia (Pauta)</CardTitle>
              <Button type="button" variant="outline" size="sm" onClick={adicionarPauta}>
                <Plus className="h-4 w-4 mr-1" /> Novo Item
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {pautas.map((pauta, index) => (
                <div key={pauta.id} className="space-y-3 p-4 border rounded-md relative bg-gray-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <Label className="font-semibold text-ippc-bordo">Item {index + 1}</Label>
                    {pautas.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" className="h-6 w-6 text-red-500" onClick={() => removerPauta(pauta.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Assunto / Pedido</Label>
                    <Input 
                      value={pauta.assunto} 
                      onChange={(e) => handlePautaChange(pauta.id, "assunto", e.target.value)} 
                      placeholder="Ex: Pedido de profissão de fé de João Silva"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Resolução do Conselho</Label>
                    <Textarea 
                      value={pauta.resolucao} 
                      onChange={(e) => handlePautaChange(pauta.id, "resolucao", e.target.value)} 
                      placeholder="Ex: aprovar o pedido e marcar o batismo para o próximo domingo."
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-ippc-bordo hover:bg-red-900" onClick={gerarAta}>
                <FileText className="mr-2 h-4 w-4" />
                Gerar Texto da Ata
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* LADO DIREITO: PREVIEW DA ATA */}
        <div className="space-y-6">
          <Card className="sticky top-24 h-[calc(100vh-8rem)] flex flex-col">
            <CardHeader className="border-b bg-gray-50/50">
              <CardTitle className="text-lg flex justify-between items-center">
                <span>Pré-visualização Oficial</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copiarAreaDeTransferencia} disabled={!textoAtaGerado}>
                    {copiado ? <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copiado ? "Copiado!" : "Copiar"}
                  </Button>
                  <Button variant="outline" size="sm" disabled={!textoAtaGerado}>
                    <Printer className="h-4 w-4 mr-2" />
                    Imprimir
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-0">
              {textoAtaGerado ? (
                <div className="p-8 text-justify leading-relaxed whitespace-pre-wrap font-serif text-gray-800">
                  {textoAtaGerado}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-3">
                  <FileText className="h-12 w-12 text-gray-300" />
                  <p>Preencha os formulários ao lado e clique em <b>Gerar Texto da Ata</b> para ver o resultado formatado aqui.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}