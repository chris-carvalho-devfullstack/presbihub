import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Certifique-se de ter este componente ou use uma div simples
import { PlayCircle, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DevocionalPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Header com Progresso */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-ippc-chumbo">Devocional Diário</h1>
          <p className="text-gray-500">Alimente seu espírito antes de começar o dia.</p>
        </div>
        <div className="bg-white p-4 rounded-lg border shadow-sm w-full md:w-64">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Ofensiva Bíblica</span>
            <span className="text-ippc-bordo font-bold">5 Dias 🔥</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-ippc-bordo w-[60%]" />
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna de Leitura (Esquerda) */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden border-t-4 border-t-ippc-bordo shadow-md">
            <div className="bg-gray-50 p-6 border-b flex items-center justify-between">
              <div>
                <Badge variant="outline" className="mb-2 bg-white">08 de Fevereiro</Badge>
                <h2 className="text-2xl font-bold text-gray-800">A Alegria da Perseverança</h2>
                <p className="text-gray-500 text-sm mt-1">Leitura: Tiago 1:2-4</p>
              </div>
              <Button size="icon" className="h-12 w-12 rounded-full shadow-sm bg-ippc-bordo text-white hover:bg-red-800">
                <PlayCircle className="h-6 w-6" />
              </Button>
            </div>
            
            <CardContent className="p-6 md:p-8 text-lg leading-relaxed text-gray-700 space-y-4">
              <p>
                <span className="text-4xl float-left mr-2 font-serif text-ippc-bordo font-bold">M</span>
                uitas vezes encaramos as provações como obstáculos à nossa felicidade, mas Tiago nos convida a uma perspectiva radicalmente diferente. Ele diz para considerarmos "motivo de grande alegria" o passarmos por provações.
              </p>
              <p>
                Não é uma alegria masoquista, mas uma alegria de propósito. Sabemos que a prova produz perseverança, e a perseverança nos torna maduros e completos.
              </p>
              <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-500 my-6">
                "Onde a sua fé é testada, a sua resistência tem a chance de crescer."
              </blockquote>
              <p>
                Hoje, ao enfrentar um desafio no trabalho ou em casa, não pergunte apenas "por que isso está acontecendo?", mas "o que Deus está gerando em mim através disso?".
              </p>
            </CardContent>

            <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Share2 className="mr-2 h-4 w-4" /> Compartilhar
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Bookmark className="mr-2 h-4 w-4" /> Salvar
                </Button>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle2 className="mr-2 h-4 w-4" /> Marcar como Lido
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Sidebar Lateral (Direita) */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-gray-700">Plano Anual</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100 cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-ippc-bordo flex items-center justify-center text-white font-bold text-xs">HJ</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tiago 1-2</p>
                  <p className="text-xs text-gray-500">Novo Testamento</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer opacity-60">
                 <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">09</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tiago 3-5</p>
                  <p className="text-xs text-gray-500">Amanhã</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}