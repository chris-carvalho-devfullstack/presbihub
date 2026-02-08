"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera, Save, Lock, User, ScrollText, QrCode, Download, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PerfilPage() {
  // Estado para controlar o giro do cartão
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="space-y-6">
      
      {/* 1. CABEÇALHO DO PERFIL */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-gray-200">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full w-8 h-8 shadow-sm">
            <Camera className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-ippc-chumbo">Christian</h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-ippc-bordo border-ippc-bordo/20 bg-red-50">
              Membro Comungante
            </Badge>
            <span className="text-sm text-gray-500">Membro desde 2018</span>
          </div>
        </div>
      </div>

      {/* 2. ÁREA DE CONTEÚDO COM ABAS */}
      <Tabs defaultValue="carteirinha" className="w-full">
        <TabsList className="grid w-full md:w-[800px] grid-cols-4 mb-8">
          <TabsTrigger value="carteirinha">Carteirinha</TabsTrigger>
          <TabsTrigger value="pessoal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="eclesiastico">Eclesiástico</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
        </TabsList>
        
        {/* ABA 1: CARTEIRINHA DIGITAL (INTERATIVA) */}
        <TabsContent value="carteirinha" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* ÁREA DO CARTÃO 3D */}
                <div className="flex flex-col items-center space-y-6">
                    
                    {/* CONTAINER DE PERSPECTIVA */}
                    <div className="group w-full max-w-md h-[260px] [perspective:1000px]">
                        
                        {/* CONTAINER ROTATIVO (INNER) */}
                        <div 
                          className={cn(
                            "relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] cursor-pointer",
                            isFlipped ? "[transform:rotateY(180deg)]" : ""
                          )}
                          onClick={() => setIsFlipped(!isFlipped)}
                        >
                            
                            {/* --- FRENTE DO CARTÃO --- */}
                            <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-ippc-chumbo to-gray-900 text-white p-6 flex flex-col justify-between [backface-visibility:hidden]">
                                {/* Efeito de fundo */}
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                                
                                <div className="flex justify-between items-start relative z-10">
                                     <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
                                            <div className="h-4 w-4 bg-ippc-bordo rounded-sm"></div>
                                        </div>
                                        <span className="font-bold tracking-wider text-sm opacity-90">IPPC MEMBER</span>
                                     </div>
                                     <RefreshCcw className="text-white/50 h-5 w-5 animate-pulse" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xs uppercase text-white/60 mb-1">Nome do Membro</h3>
                                    <p className="text-xl font-medium tracking-wide">CHRISTIAN CARVALHO</p>
                                </div>

                                <div className="flex justify-between items-end relative z-10">
                                    <div>
                                        <h3 className="text-[10px] uppercase text-white/60 mb-0.5">Rol de Membros</h3>
                                        <p className="font-mono text-sm">#0429</p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="text-[10px] uppercase text-white/60 mb-0.5">Validade</h3>
                                        <p className="font-mono text-sm">12/26</p>
                                    </div>
                                </div>
                            </div>

                            {/* --- VERSO DO CARTÃO --- */}
                            <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white border-2 border-gray-100 p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <h3 className="text-gray-500 text-xs uppercase font-bold mb-4 tracking-widest">Código de Acesso</h3>
                                
                                {/* QR Code Grande */}
                                <div className="bg-white p-2 border rounded-lg shadow-sm">
                                  <QrCode className="h-32 w-32 text-gray-900" />
                                </div>
                                
                                <p className="mt-4 text-xs text-center text-gray-400 max-w-[200px]">
                                  Utilize este código para check-in no culto ou retirada de crianças.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Instruções e Texto de Apoio */}
                    <div className="text-center space-y-2">
                         <p className="text-xs font-medium text-ippc-bordo flex items-center justify-center gap-1.5 cursor-pointer hover:underline" onClick={() => setIsFlipped(!isFlipped)}>
                            <RefreshCcw className="h-3 w-3" /> Clique no cartão para virar
                        </p>
                        <p className="text-sm text-gray-500 max-w-[280px] mx-auto leading-relaxed">
                            Apresente este cartão digital na recepção de eventos ou para check-in de crianças.
                        </p>
                    </div>
                </div>

                {/* Ações da Carteira */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Carteira Digital</CardTitle>
                            <CardDescription>Adicione ao seu celular para acesso rápido.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full bg-black text-white hover:bg-gray-800 h-12 justify-start px-6 gap-3 shadow-md transition-transform active:scale-95">
                                <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M366.1 169.8L382.7 54.4c2-14.2-14.6-23.4-26-14.4L188.4 169.8H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V233.8c0-35.3-28.7-64-64-64h-81.9zM320 64c0-17.7-14.3-32-32-32H208c-17.7 0-32 14.3-32 32v105.8h144V64z"/></svg>
                                Adicionar à Apple Wallet
                            </Button>
                            <Button className="w-full bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 h-12 justify-start px-6 gap-3 shadow-sm transition-transform active:scale-95">
                                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.5 12.04c0-.82-.07-1.6-.2-2.34H12v4.43h5.9c-.25 1.34-1 2.47-2.14 3.23v2.69h3.46c2.03-1.87 3.2-4.63 3.2-7.98z"/><path fill="#34A853" d="M12 22.6c2.95 0 5.43-.98 7.24-2.66l-3.46-2.69c-.98.66-2.23 1.06-3.78 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.25 7.7 22.6 12 22.6z"/><path fill="#FBBC05" d="M5.84 13.78c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V6.76H2.18C1.43 8.25 1 9.94 1 11.69s.43 3.44 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.36 2.18 6.76l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                                Adicionar ao Google Wallet
                            </Button>
                            <Separator className="my-2" />
                            <Button variant="outline" className="w-full justify-start px-6 gap-3">
                                <Download className="h-4 w-4" />
                                Baixar PDF para Impressão
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </TabsContent>

        {/* ABA 2: DADOS PESSOAIS */}
        <TabsContent value="pessoal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Mantenha seus contatos atualizados para receber comunicados.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="Christian" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Principal</Label>
                  <Input id="email" defaultValue="christian@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Celular / WhatsApp</Label>
                  <Input id="telefone" defaultValue="(35) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nascimento">Data de Nascimento</Label>
                  <Input id="nascimento" type="date" defaultValue="1995-05-20" />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço Residencial</Label>
                <Input id="endereco" defaultValue="Rua Serra Leoa, 435 - Parque das Nações" />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button className="bg-ippc-bordo hover:bg-red-800 text-white">
                  <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ABA 3: ECLESIÁSTICO */}
        <TabsContent value="eclesiastico">
          <Card className="bg-gray-50/50">
            <CardHeader>
              <CardTitle>Registro Oficial</CardTitle>
              <CardDescription>Dados conforme constam no livro de rol da igreja.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Cartão de Dados */}
                <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                  <div className="flex items-center gap-3 text-ippc-bordo mb-2">
                    <ScrollText className="h-5 w-5" />
                    <h3 className="font-semibold">Histórico Sacramental</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">Batismo Infantil</span>
                      <span className="font-medium">12/06/1995 (IPB Central)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">Profissão de Fé</span>
                      <span className="font-medium">20/10/2010</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">Admissão nesta Igreja</span>
                      <span className="font-medium">15/01/2018 (Transferência)</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-gray-500">Número no Rol</span>
                      <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">#0429</span>
                    </div>
                  </div>
                </div>

                {/* Envolvimento Atual */}
                <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                   <div className="flex items-center gap-3 text-ippc-bordo mb-2">
                    <User className="h-5 w-5" />
                    <h3 className="font-semibold">Envolvimento Atual</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Sociedade Interna</p>
                      <p className="font-medium">UPH - União Presbiteriana de Homens</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Ministérios Ativos</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">Recepção</Badge>
                        <Badge variant="secondary">Multimídia</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Oficial Responsável (Distrito)</p>
                      <p className="font-medium">Presb. João da Silva</p>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ABA 4: SEGURANÇA */}
        <TabsContent value="seguranca">
          <Card>
            <CardHeader>
              <CardTitle>Senha e Acesso</CardTitle>
              <CardDescription>Gerencie como você entra na plataforma.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="senha_atual">Senha Atual</Label>
                <Input id="senha_atual" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nova_senha">Nova Senha</Label>
                  <Input id="nova_senha" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirma_senha">Confirmar Nova Senha</Label>
                  <Input id="confirma_senha" type="password" />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                 <Button variant="outline" className="text-gray-600">
                  <Lock className="mr-2 h-4 w-4" /> Atualizar Senha
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}