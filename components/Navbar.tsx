import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm sticky top-0 z-50 supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
          {/* ALTERAÇÃO AQUI: 
             Mudei de h-16 para 'h-12 md:h-14'.
             Como a barra tem h-20 (80px), isso cria um respiro maior (padding) em cima e embaixo.
          */}
          <div className="relative w-48 md:w-72 h-12 md:h-14"> 
             <Image 
               src="/logo-ippc.png" 
               alt="Logo IPPC" 
               fill 
               className="object-contain object-left" 
               priority
             />
          </div>
        </Link>

        {/* 2. LINKS DE NAVEGAÇÃO (Desktop) */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8 text-sm font-medium text-gray-700 mx-2">
          <Link href="/" className="hover:text-ippc-bordo transition-colors relative group">
            Início
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-ippc-bordo transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link href="/sobre" className="hover:text-ippc-bordo transition-colors">Sobre Nós</Link>
          <Link href="/ministerios" className="hover:text-ippc-bordo transition-colors">Ministérios</Link>
          <Link href="/sermoes" className="hover:text-ippc-bordo transition-colors">Sermões</Link>
          <Link href="/contato" className="hover:text-ippc-bordo transition-colors">Contato</Link>
        </nav>

        {/* 3. BOTÕES DE AÇÃO */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" className="text-ippc-bordo hover:text-ippc-bordo hover:bg-red-50 font-medium text-sm px-3 sm:px-4">
              Área de Membros
            </Button>
          </Link>
          <Link href="/login" className="sm:hidden">
            <Button variant="ghost" className="text-ippc-bordo hover:bg-red-50 font-medium text-sm px-2">
              Entrar
            </Button>
          </Link>
          <Link href="/doar"> 
            <Button className="bg-ippc-bordo hover:bg-red-900 text-white shadow-sm font-medium text-sm px-4 transition-colors">
              Contribua
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}