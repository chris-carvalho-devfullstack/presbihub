import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera, Save, Lock, User, ScrollText } from "lucide-react";

export default function PerfilPage() {
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
      <Tabs defaultValue="pessoal" className="w-full">
        <TabsList className="grid w-full md:w-[600px] grid-cols-3 mb-8">
          <TabsTrigger value="pessoal">Dados Pessoais</TabsTrigger>
          <TabsTrigger value="eclesiastico">Ficha Eclesiástica</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
        </TabsList>

        {/* ABA 1: DADOS PESSOAIS */}
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

        {/* ABA 2: DADOS ECLESIÁSTICOS (Visualização Apenas) */}
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

        {/* ABA 3: SEGURANÇA */}
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