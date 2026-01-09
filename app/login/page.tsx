import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2 overflow-hidden">
      
      {/* COLUNA DA ESQUERDA: Formulário */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-y-auto">
        <div className="mx-auto grid w-[350px] gap-6">
          
          {/* Botão Voltar */}
          <div className="mb-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-ippc-bordo flex items-center gap-2 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </Link>
          </div>

          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-ippc-chumbo">Bem-vindo de volta</h1>
            <p className="text-balance text-gray-500">
              Acesse a área exclusiva de membros e liderança
            </p>
          </div>

          <div className="grid gap-4">
            {/* E-mail */}
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.nome@exemplo.com"
                required
              />
            </div>

            {/* Senha */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/esqueceu-senha"
                  className="ml-auto inline-block text-sm underline text-gray-500 hover:text-ippc-bordo"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>

            {/* Botão Entrar */}
            <Button type="submit" className="w-full bg-ippc-bordo hover:bg-red-900 text-white font-semibold">
              Entrar na Plataforma
            </Button>
            
            {/* Botão Google (Exemplo de OAuth) */}
            <Button variant="outline" className="w-full">
              Entrar com Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            Ainda não é membro arrolado?{" "}
            <Link href="/contato" className="underline hover:text-ippc-bordo">
              Fale com a secretaria
            </Link>
          </div>
        </div>
      </div>

      {/* COLUNA DA DIREITA: Imagem Decorativa */}
      {/* Escondido em celulares (hidden), visível em telas grandes (lg:block) */}
      <div className="hidden lg:block bg-gray-100 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
             // Imagem de arquitetura ou detalhe da igreja
             backgroundImage: "url('https://images.unsplash.com/photo-1490555620869-63304ea261d7?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          {/* Máscara bordô semi-transparente para dar identidade */}
          <div className="absolute inset-0 bg-ippc-bordo/20 mix-blend-multiply" />
        </div>
        
        {/* Citação ou Versículo sobre a imagem */}
        <div className="absolute bottom-10 left-10 right-10 text-white z-10">
          <blockquote className="space-y-2">
            <p className="text-lg font-serif italic">
              "Porque dele, e por meio dele, e para ele são todas as coisas. A ele, pois, a glória eternamente. Amém."
            </p>
            <footer className="text-sm font-bold opacity-80">— Romanos 11:36</footer>
          </blockquote>
        </div>
      </div>

    </div>
  );
}