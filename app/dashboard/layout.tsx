"use client"

export const runtime = "edge";
import Link from "next/link";
import { 
  Home, 
  Users, 
  Calendar, 
  CreditCard, 
  FileText, 
  LogOut,
  Menu,
  BookOpen,       // Devocional e Pastoral
  HeartHandshake, // Oração e Diaconia
  Baby,           // Família
  MapPin,         // Grupos
  GraduationCap,  // Academy
  Shield          // [NOVO] Conselho
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(">>> [DEBUG] Iniciando renderização: DashboardLayout");
  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* 1. SIDEBAR (Desktop) - Fixa à esquerda */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200 fixed inset-y-0 z-40">
        
        {/* Topo da Sidebar */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
           <span className="text-ippc-bordo font-bold text-xl tracking-tight">IPPC <span className="text-gray-400 font-normal">System</span></span>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <SidebarItem href="/dashboard" icon={<Home size={20} />} label="Início" />
          
          {/* SEÇÃO VIDA CRISTÃ */}
          <div className="pt-2 pb-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Vida Cristã</p>
          </div>
          
          <SidebarItem href="/dashboard/devocional" icon={<BookOpen size={20} />} label="Devocional Diário" />
          <SidebarItem href="/dashboard/oracao" icon={<HeartHandshake size={20} />} label="Pedidos de Oração" />
          <SidebarItem href="/dashboard/familia" icon={<Baby size={20} />} label="Minha Família" />
          <SidebarItem href="/dashboard/grupos" icon={<MapPin size={20} />} label="Pequenos Grupos" />
          <SidebarItem href="/dashboard/cursos" icon={<GraduationCap size={20} />} label="PresbiAcademy" />
          
          {/* 👇 NOVA SEÇÃO: GESTÃO ECLESIÁSTICA 👇 */}
          <div className="pt-4 pb-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Gestão Eclesiástica</p>
          </div>

          <SidebarItem href="/dashboard/oficiais/conselho" icon={<Shield size={20} />} label="Conselho" />
          <SidebarItem href="/dashboard/oficiais/diaconia" icon={<HeartHandshake size={20} />} label="Junta Diaconal" />
          <SidebarItem href="/dashboard/oficiais/pastoral" icon={<BookOpen size={20} />} label="Gabinete Pastoral" />
          
          {/* SEÇÃO SECRETARIA */}
          <div className="pt-4 pb-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Secretaria</p>
          </div>

          <SidebarItem href="/dashboard/perfil" icon={<Users size={20} />} label="Meu Perfil" />
          <SidebarItem href="/dashboard/escalas" icon={<Calendar size={20} />} label="Minhas Escalas" />
          <SidebarItem href="/dashboard/dizimos" icon={<CreditCard size={20} />} label="Dízimos e Ofertas" />
          <SidebarItem href="/dashboard/boletins" icon={<FileText size={20} />} label="Boletins" />
        </nav>

        {/* Rodapé da Sidebar (Usuário) */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700">Christian</span>
              <span className="text-xs text-gray-400">Membro Comungante</span>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </aside>

      {/* 2. CONTEÚDO PRINCIPAL (Área da direita) */}
      <main className="flex-1 md:ml-64 transition-all duration-300">
        
        {/* Header Mobile (Só aparece no celular) */}
        <header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <span className="font-bold text-lg text-ippc-chumbo">Área de Membros</span>
          
          {/* Menu Gaveta (Sheet) para Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="h-full flex flex-col bg-white overflow-y-auto">
                <div className="h-16 flex items-center px-6 border-b shrink-0">
                   <span className="text-ippc-bordo font-bold">Menu IPPC</span>
                </div>
                <nav className="flex-1 py-6 px-3 space-y-2">
                  <SidebarItemMobile href="/dashboard" icon={<Home size={20} />} label="Início" />
                  
                  <div className="pt-2 pb-1 px-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Vida Cristã</p>
                  </div>
                  <SidebarItemMobile href="/dashboard/devocional" icon={<BookOpen size={20} />} label="Devocional" />
                  <SidebarItemMobile href="/dashboard/oracao" icon={<HeartHandshake size={20} />} label="Orações" />
                  <SidebarItemMobile href="/dashboard/familia" icon={<Baby size={20} />} label="Família & Kids" />
                  <SidebarItemMobile href="/dashboard/grupos" icon={<MapPin size={20} />} label="Pequenos Grupos" />
                  <SidebarItemMobile href="/dashboard/cursos" icon={<GraduationCap size={20} />} label="Academy" />
                  
                  {/* 👇 NOVA SEÇÃO: GESTÃO ECLESIÁSTICA (MOBILE) 👇 */}
                  <div className="pt-4 pb-1 px-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase">Gestão Eclesiástica</p>
                  </div>
                  <SidebarItemMobile href="/dashboard/oficiais/conselho" icon={<Shield size={20} />} label="Conselho" />
                  <SidebarItemMobile href="/dashboard/oficiais/diaconia" icon={<HeartHandshake size={20} />} label="Junta Diaconal" />
                  <SidebarItemMobile href="/dashboard/oficiais/pastoral" icon={<BookOpen size={20} />} label="Pastoral" />

                  <div className="pt-4 pb-1 px-3">
                     <p className="text-xs font-semibold text-gray-400 uppercase">Secretaria</p>
                  </div>
                  <SidebarItemMobile href="/dashboard/escalas" icon={<Calendar size={20} />} label="Escalas" />
                  <SidebarItemMobile href="/dashboard/dizimos" icon={<CreditCard size={20} />} label="Contribuições" />
                  <SidebarItemMobile href="/dashboard/perfil" icon={<Users size={20} />} label="Perfil" />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Onde entra a página específica (children) */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>

      </main>
    </div>
  );
}

// Componente auxiliar do item de menu para Desktop
function SidebarItem({ icon, label, href, active = false }: { icon: any, label: string, href: string, active?: boolean }) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium
        ${active 
          ? "bg-red-50 text-ippc-bordo" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {icon}
        {label}
      </div>
    </Link>
  )
}

// Componente auxiliar do item de menu para Mobile (Fecha o menu ao clicar)
function SidebarItemMobile({ icon, label, href, active = false }: { icon: any, label: string, href: string, active?: boolean }) {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium
          ${active 
            ? "bg-red-50 text-ippc-bordo" 
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          {icon}
          {label}
        </div>
      </Link>
    </SheetClose>
  )
}