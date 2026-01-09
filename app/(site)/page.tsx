import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ippc-creme flex flex-col">
      
      {/* 1. HERO SECTION (A Capa do Site) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        
        {/* Imagem de Fundo (Substitua depois por uma foto da igreja cheia) */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Camada escura para dar leitura no texto */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Conteúdo Central */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
          
          {/* Badge de "Ao Vivo" (Pode ser dinâmico depois) */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-ippc-bordo/90 backdrop-blur-sm text-white text-xs font-bold mb-6 animate-in fade-in zoom-in duration-1000 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            DOMINGO • CULTO ÀS 19H
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Uma igreja reformada, <br/>
            <span className="text-gray-200 font-serif italic font-light">sempre se reformando.</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto font-light">
            Somos uma comunidade acolhedora, comprometida com as Escrituras 
            e centrada na pregação do Evangelho de Cristo em Poços de Caldas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-ippc-bordo hover:bg-red-900 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              <PlayCircle className="mr-2 h-5 w-5" />
              Assistir Culto Online
            </Button>
            <Button variant="outline" className="text-white bg-white/10 hover:bg-white/20 border-white/30 backdrop-blur-md px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              Sou Visitante
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CARDS DE ACESSO RÁPIDO (Flutuando sobre o Hero) */}
      <section className="relative z-20 -mt-24 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <InfoCard 
            icon={<Calendar className="h-8 w-8 text-ippc-bordo"/>} 
            title="Agenda Semanal" 
            desc="Confira os horários dos cultos, EBD e reuniões de oração." 
            link="/agenda"
          />
          
          <InfoCard 
            icon={<PlayCircle className="h-8 w-8 text-ippc-bordo"/>} 
            title="Últimas Mensagens" 
            desc="Ouça as pregações expositivas do último domingo." 
            link="/sermoes"
          />
          
          <InfoCard 
            icon={<MapPin className="h-8 w-8 text-ippc-bordo"/>} 
            title="Localização" 
            desc="Rua Serra Leoa, 435 - Parque das Nações, Poços de Caldas." 
            link="/contato"
          />

        </div>
      </section>

    </main>
  );
}

// Componente auxiliar dos Cards (pode ficar aqui mesmo por enquanto)
function InfoCard({ icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) {
  return (
    <Link href={link} className="group">
      <Card className="shadow-2xl border-none h-full hover:-translate-y-2 transition-transform duration-300 ease-out">
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          <div className="p-4 bg-red-50 rounded-full mb-6 group-hover:bg-ippc-bordo group-hover:text-white transition-colors duration-300">
            {/* O ícone herda a cor do pai, então muda automaticamente no hover */}
            <div className="group-hover:text-white transition-colors">
              {icon}
            </div>
          </div>
          <h3 className="font-bold text-2xl text-ippc-chumbo mb-3">{title}</h3>
          <p className="text-gray-500 mb-6 leading-relaxed flex-1">
            {desc}
          </p>
          <span className="text-ippc-bordo font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            SAIBA MAIS <ArrowRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}