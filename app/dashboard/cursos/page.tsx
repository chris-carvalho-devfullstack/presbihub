"use client"


import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Clock, BookOpen, Award } from "lucide-react";
import Link from "next/link"; // <--- IMPORTANTE

export default function CursosPage() {
  return (
    <div className="space-y-8">
      
      {/* 1. HERO SECTION (Curso em Destaque) */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 text-white min-h-[300px] flex items-center shadow-xl">
        <div className="absolute inset-0 opacity-40">
           {/* Imagem de Fundo */}
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
             src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&auto=format&fit=crop&q=80" 
             alt="Background" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        
        <div className="relative z-10 p-8 md:p-12 max-w-2xl space-y-4">
           <Badge className="bg-ippc-bordo hover:bg-red-700 text-white border-0 px-3 py-1">Novo Curso</Badge>
           <h1 className="text-3xl md:text-5xl font-bold leading-tight">Teologia da Reforma</h1>
           <p className="text-gray-300 text-lg line-clamp-2">
             Uma jornada profunda pelos cinco solas e como eles moldam nossa visão de mundo cristã nos dias de hoje.
           </p>
           <div className="flex items-center gap-4 pt-4">
             {/* BOTÃO COMEÇAR AGORA COM LINK */}
             <Link href="/dashboard/cursos/1">
               <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold">
                 <PlayCircle className="mr-2 h-5 w-5" /> Começar Agora
               </Button>
             </Link>
             
             <Button variant="outline" className="text-white border-white hover:bg-white/20">
               + Minha Lista
             </Button>
           </div>
        </div>
      </div>

      {/* 2. CONTINUAR ASSISTINDO (MEUS CURSOS) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h2 className="text-2xl font-bold text-gray-800">Continuar Assistindo</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Curso em Andamento 1 (Linkável) */}
           <Link href="/dashboard/cursos/1">
             <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
                <div className="relative h-40 bg-gray-200 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover -z-10" alt="Curso"/>
                </div>
                <CardContent className="p-4 space-y-3">
                   <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-800 line-clamp-1">Curso de Membros</h3>
                      <Badge variant="secondary" className="text-xs">Módulo 2</Badge>
                   </div>
                   <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-500">
                         <span>Progresso</span>
                         <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                   </div>
                </CardContent>
             </Card>
           </Link>

           {/* Curso Concluído (Certificado) */}
           <Card className="hover:shadow-md transition-shadow bg-green-50/50 border-green-100 h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full space-y-4">
                 <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Award className="h-8 w-8" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-800">Batismo e Ceia</h3>
                    <p className="text-sm text-gray-500">Concluído em Jan/2026</p>
                 </div>
                 <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-100 w-full">
                    Baixar Certificado
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>

      {/* 3. CATÁLOGO DE CURSOS */}
      <Tabs defaultValue="todos" className="w-full">
        <div className="flex items-center justify-between mb-4">
           <h2 className="text-2xl font-bold text-gray-800">Explorar</h2>
           <TabsList>
             <TabsTrigger value="todos">Todos</TabsTrigger>
             <TabsTrigger value="ebd">EBD</TabsTrigger>
             <TabsTrigger value="lideranca">Liderança</TabsTrigger>
           </TabsList>
        </div>

        <TabsContent value="todos" className="mt-0">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/dashboard/cursos/1">
                  <CourseCard 
                    title="Finanças à Luz da Bíblia" 
                    category="Vida Prática" 
                    lessons={8} 
                    duration="4h" 
                    image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60"
                  />
              </Link>
              <Link href="/dashboard/cursos/1">
                  <CourseCard 
                    title="História da Igreja" 
                    category="Teologia" 
                    lessons={12} 
                    duration="10h" 
                    image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60"
                  />
              </Link>
              <Link href="/dashboard/cursos/1">
                  <CourseCard 
                    title="Paternidade Cristã" 
                    category="Família" 
                    lessons={6} 
                    duration="3h" 
                    image="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=800&auto=format&fit=crop&q=60"
                  />
              </Link>
              <Link href="/dashboard/cursos/1">
                  <CourseCard 
                    title="Introdução ao Antigo Testamento" 
                    category="Bíblia" 
                    lessons={20} 
                    duration="15h" 
                    image="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&auto=format&fit=crop&q=60"
                  />
              </Link>
           </div>
        </TabsContent>
      </Tabs>

    </div>
  );
}

// Componente Card Simples para o Catálogo
function CourseCard({ title, category, lessons, duration, image }: any) {
   return (
      <div className="group cursor-pointer">
         <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
               src={image} 
               alt={title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute top-2 left-2">
               <Badge className="bg-black/60 hover:bg-black/60 backdrop-blur-sm border-0">{category}</Badge>
            </div>
         </div>
         <h3 className="font-bold text-gray-900 group-hover:text-ippc-bordo transition-colors leading-tight mb-1">{title}</h3>
         <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {lessons} aulas</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {duration}</span>
         </div>
      </div>
   )
}