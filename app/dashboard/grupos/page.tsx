"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Calendar, Clock, Users, ChevronRight, Phone } from "lucide-react";

export default function GruposPage() {
  return (
    <div className="space-y-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ippc-chumbo">Pequenos Grupos</h1>
          <p className="text-gray-500">Conecte-se com irmãos para comunhão e estudo da Palavra.</p>
        </div>
        <Button className="bg-ippc-bordo hover:bg-red-800">
           Quero ser Líder
        </Button>
      </div>

      <Tabs defaultValue="encontrar" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="encontrar">Encontrar Grupo</TabsTrigger>
          <TabsTrigger value="meu_grupo">Meu Grupo</TabsTrigger>
        </TabsList>

        {/* ABA 1: ENCONTRAR GRUPOS (BUSCA) */}
        <TabsContent value="encontrar" className="mt-6 space-y-6">
          
          {/* Barra de Busca */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar por bairro, líder ou dia..." className="pl-10" />
            </div>
            <Button variant="outline">Filtros</Button>
          </div>

          {/* Grid de Grupos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card Grupo 1 */}
            <GroupCard 
              name="Família da Fé"
              leader="Pb. Ricardo & Sarah"
              neighborhood="Jd. dos Estados"
              day="Quarta-feira"
              time="20:00"
              tags={["Casais", "Jantar"]}
              image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60"
            />

            {/* Card Grupo 2 */}
            <GroupCard 
              name="Juventude Radical"
              leader="Matheus Silva"
              neighborhood="Centro"
              day="Sábado"
              time="18:30"
              tags={["Jovens", "Música"]}
              image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60"
            />

            {/* Card Grupo 3 */}
            <GroupCard 
              name="Mulheres de Oração"
              leader="Dna. Maria"
              neighborhood="Zona Sul"
              day="Terça-feira"
              time="15:00"
              tags={["Mulheres", "Tarde"]}
              image="https://images.unsplash.com/photo-1561489413-985b06da5bee?w=800&auto=format&fit=crop&q=60"
            />

          </div>
        </TabsContent>

        {/* ABA 2: MEU GRUPO (ÁREA DO MEMBRO) */}
        <TabsContent value="meu_grupo" className="mt-6">
            <Card>
                <div className="md:flex">
                    {/* Imagem do Grupo */}
                    <div className="md:w-1/3 h-64 md:h-auto relative bg-gray-200">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60" 
                            alt="Foto do grupo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-green-600">Você participa deste grupo</Badge>
                        </div>
                    </div>
                    
                    {/* Detalhes */}
                    <div className="p-6 md:w-2/3 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Família da Fé</h2>
                            <p className="text-gray-500 flex items-center gap-2 mt-1">
                                <MapPin className="h-4 w-4" /> Rua das Flores, 123 - Jd. dos Estados
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg border">
                                <p className="text-xs text-gray-500 uppercase">Próximo Encontro</p>
                                <p className="font-semibold text-ippc-bordo">Quarta, 12/Fev às 20h</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg border">
                                <p className="text-xs text-gray-500 uppercase">Estudo Atual</p>
                                <p className="font-semibold text-gray-800">Carta aos Romanos</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-sm text-gray-900">Líderes</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>RI</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm">Ricardo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>SA</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm">Sarah</span>
                                </div>
                                <Button variant="outline" size="sm" className="ml-auto text-xs h-8">
                                    <Phone className="h-3 w-3 mr-2" /> WhatsApp
                                </Button>
                            </div>
                        </div>
                        
                        <div className="border-t pt-4 flex gap-3">
                            <Button className="w-full bg-ippc-bordo hover:bg-red-800">
                                Confirmar Presença
                            </Button>
                            <Button variant="outline" className="w-full">
                                Baixar Estudo (PDF)
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}

// Componente Card de Grupo para a lista
function GroupCard({ name, leader, neighborhood, day, time, tags, image }: any) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="h-40 bg-gray-200 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-xs opacity-90">{leader}</p>
                </div>
            </div>
            <CardContent className="p-4 space-y-3">
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-ippc-bordo" />
                        {neighborhood}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-ippc-bordo" />
                        {day} às {time}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button variant="ghost" className="w-full justify-between text-ippc-bordo hover:bg-red-50 hover:text-red-900 group-hover:pl-6 transition-all">
                    Ver detalhes <ChevronRight className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}