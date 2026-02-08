"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, Calendar, ChefHat, QrCode, AlertTriangle, FileText } from "lucide-react";

export default function FamiliaPage() {
  const [selectedKids, setSelectedKids] = useState<string[]>([]);
  const [isCheckinOpen, setIsCheckinOpen] = useState(false);

  // Mock de dados dos filhos
  const kids = [
    { id: "1", name: "Lucas Carvalho", age: 6, class: "Jardim de Infância", allergy: "Amendoim", img: "L" },
    { id: "2", name: "Sofia Carvalho", age: 3, class: "Berçário", allergy: null, img: "S" },
  ];

  const toggleKid = (id: string) => {
    setSelectedKids(prev => 
      prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ippc-chumbo">Minha Família</h1>
          <p className="text-gray-500">Gerencie o check-in e acompanhe o desenvolvimento dos seus filhos.</p>
        </div>
        
        {/* BOTÃO PRINCIPAL DE CHECK-IN */}
        <Dialog open={isCheckinOpen} onOpenChange={setIsCheckinOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-ippc-bordo hover:bg-red-800 text-white shadow-lg animate-in fade-in zoom-in duration-300">
              <QrCode className="mr-2 h-5 w-5" />
              Check-in Rápido
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Check-in PresbiKids</DialogTitle>
              <DialogDescription>
                Selecione quem está presente hoje para gerar o Fast Pass.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4 space-y-4">
              {kids.map((kid) => (
                <div key={kid.id} className="flex items-center space-x-4 border p-3 rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => toggleKid(kid.id)}>
                  <Checkbox checked={selectedKids.includes(kid.id)} />
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-700">{kid.img}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{kid.name}</p>
                    <p className="text-xs text-gray-500">{kid.class}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedKids.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center animate-in slide-in-from-bottom-2">
                <QrCode className="h-32 w-32 text-ippc-chumbo" />
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">Fast Pass Gerado</p>
                <p className="text-xs text-center text-gray-400 mt-1">Apresente no totem da recepção infantil</p>
              </div>
            )}
            
            {selectedKids.length === 0 && (
              <div className="text-center py-6 text-gray-400 text-sm">
                Selecione pelo menos uma criança acima.
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="filhos" className="w-full">
        <TabsList>
          <TabsTrigger value="filhos">Meus Filhos</TabsTrigger>
          <TabsTrigger value="boletim">Boletim Kids</TabsTrigger>
        </TabsList>

        {/* ABA 1: LISTA DOS FILHOS */}
        <TabsContent value="filhos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kids.map((kid) => (
              <Card key={kid.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-600 relative">
                  {kid.allergy && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                      <AlertTriangle className="h-3 w-3" />
                      ALERGIA: {kid.allergy.toUpperCase()}
                    </div>
                  )}
                </div>
                <CardContent className="pt-0 relative">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-sm -mt-10 mb-3">
                    <AvatarFallback className="text-xl bg-gray-100 font-bold text-gray-600">{kid.img}</AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-1 mb-4">
                    <h3 className="font-bold text-lg text-gray-900">{kid.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Baby className="h-4 w-4" />
                      <span>{kid.age} anos</span>
                      <span className="text-gray-300">•</span>
                      <span>{kid.class}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                     <div className="bg-gray-50 p-2 rounded text-center border">
                        <p className="text-xs text-gray-500 uppercase">Próx. Aniv.</p>
                        <p className="font-medium text-sm">20/Out</p>
                     </div>
                     <div className="bg-gray-50 p-2 rounded text-center border">
                        <p className="text-xs text-gray-500 uppercase">Presença (Mês)</p>
                        <p className="font-medium text-sm text-green-600">100%</p>
                     </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t p-3">
                  <Button variant="ghost" className="w-full text-sm h-8">Editar Dados Médicos</Button>
                </CardFooter>
              </Card>
            ))}
            
            {/* Card para Adicionar Novo */}
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center min-h-[280px] cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <div className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3 shadow-sm">
                <Baby className="h-6 w-6 text-gray-400" />
              </div>
              <p className="font-medium text-gray-900">Adicionar Filho</p>
              <p className="text-sm text-gray-500">Cadastrar recém-nascido</p>
            </Card>
          </div>
        </TabsContent>

        {/* ABA 2: BOLETIM (FEEDBACK DA EBD) */}
        <TabsContent value="boletim" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3 border-b bg-gray-50/40">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">Domingo, 02 de Fevereiro</CardTitle>
                    <CardDescription>Jardim de Infância (4-6 anos)</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Lucas Presente</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-ippc-bordo flex items-center gap-2">
                      <FileText className="h-4 w-4" /> O que aprendemos hoje?
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      Hoje estudamos sobre a <strong>Arca de Noé</strong>. Ensinamos as crianças sobre a obediência de Noé e a promessa de Deus simbolizada no arco-íris.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Versículo Decorado</h4>
                    <blockquote className="border-l-2 border-blue-400 pl-3 italic text-gray-600 text-sm mt-1">
                      "Noé fez tudo exatamente como Deus lhe tinha ordenado." (Gênesis 6:22)
                    </blockquote>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-semibold text-orange-800 text-sm mb-2 flex items-center gap-2">
                    <ChefHat className="h-4 w-4" /> Lanche
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    <li>Pão de queijo</li>
                    <li>Suco de uva</li>
                    <li>Maçã picada</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-orange-100">
                    <p className="text-xs text-orange-700">
                      <strong>Nota do Professor:</strong> Lucas participou muito bem da atividade de pintura da Arca!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outro item de histórico (mais antigo) */}
            <Card className="opacity-70 hover:opacity-100 transition-opacity">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="font-medium text-gray-700">Domingo, 26 de Janeiro</span>
                   </div>
                   <Badge variant="secondary">Aula Anterior</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}