"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, HeartHandshake, BookOpen, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Visão Geral", href: "/dashboard/oficiais", icon: LayoutDashboard },
  { name: "Conselho", href: "/dashboard/oficiais/conselho", icon: Shield },
  { name: "Junta Diaconal", href: "/dashboard/oficiais/diaconia", icon: HeartHandshake },
  { name: "Gabinete Pastoral", href: "/dashboard/oficiais/pastoral", icon: BookOpen },
];

export default function OficiaisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-6 w-full pb-8">
      {/* Cabeçalho da Área */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Área dos Oficiais</h1>
        <p className="text-muted-foreground">
          Gestão eclesiástica restrita aos oficiais ordenados da igreja.
        </p>
      </div>

      {/* Navegação Secundária (Mobile-First com Scroll Horizontal) */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <nav className="flex space-x-2 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Verifica se está ativo (exata para visão geral, parcial para sub-rotas)
            const isActive = item.href === "/dashboard/oficiais" 
              ? pathname === item.href 
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Conteúdo das Páginas Filhas */}
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}