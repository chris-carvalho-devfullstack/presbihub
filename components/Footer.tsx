import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUNA 1: IDENTIDADE */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold tracking-wide">IPPC</h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Igreja Presbiteriana de Poços de Caldas.<br/>
              Uma comunidade de fé reformada, acolhedora e comprometida com a verdade do Evangelho.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialButton icon={<Instagram className="h-4 w-4" />} href="#" />
              <SocialButton icon={<Facebook className="h-4 w-4" />} href="#" />
              <SocialButton icon={<Youtube className="h-4 w-4" />} href="#" />
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-ippc-bordo transition-colors">Sobre a Igreja</Link></li>
              <li><Link href="/lideranca" className="hover:text-ippc-bordo transition-colors">Liderança e Pastores</Link></li>
              <li><Link href="/ministerios" className="hover:text-ippc-bordo transition-colors">Ministérios</Link></li>
              <li><Link href="/sermoes" className="hover:text-ippc-bordo transition-colors">Sermões e Estudos</Link></li>
              <li><Link href="/login" className="hover:text-ippc-bordo transition-colors">Área de Membros</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ippc-bordo shrink-0" />
                <span>
                  Rua Serra Leoa, 435<br/>
                  Parque das Nações<br/>
                  Poços de Caldas - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-ippc-bordo shrink-0" />
                <span>(35) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ippc-bordo shrink-0" />
                <span>contato@ippc.org.br</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: HORÁRIOS */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Horários de Culto</h3>
            <ul className="space-y-3 text-sm border-l-2 border-gray-800 pl-4">
              <li className="flex flex-col">
                <span className="font-bold text-white">Domingo</span>
                <span>09h00 — Escola Bíblica</span>
                <span>19h00 — Culto Solene</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-white">Quinta-feira</span>
                <span>19h30 — Estudo e Oração</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* RODAPÉ INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Igreja Presbiteriana de Poços de Caldas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <span className="flex items-center gap-1">
              Feito com <span className="text-red-500">❤</span> para o Reino
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Botãozinho auxiliar para redes sociais
function SocialButton({ icon, href }: { icon: any, href: string }) {
  return (
    <Link href={href}>
      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-gray-800 hover:bg-ippc-bordo hover:text-white text-gray-400 transition-all">
        {icon}
      </Button>
    </Link>
  )
}