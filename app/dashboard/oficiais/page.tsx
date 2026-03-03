import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, HeartHandshake, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OficiaisHubPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Card do Conselho */}
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <Shield className="h-8 w-8 text-blue-600 mb-2" />
          <CardTitle>Conselho</CardTitle>
          <CardDescription>
            Jurisdição espiritual, rol de membros, disciplina e supervisão geral.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full" variant="secondary">
            <Link href="/dashboard/oficiais/conselho">
              Acessar Conselho <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Card da Junta Diaconal */}
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <HeartHandshake className="h-8 w-8 text-green-600 mb-2" />
          <CardTitle>Junta Diaconal</CardTitle>
          <CardDescription>
            Assistência social, manutenção do templo e ordem na liturgia.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full" variant="secondary">
            <Link href="/dashboard/oficiais/diaconia">
              Acessar Junta Diaconal <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Card do Gabinete Pastoral */}
      <Card className="flex flex-col justify-between">
        <CardHeader>
          <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
          <CardTitle>Gabinete Pastoral</CardTitle>
          <CardDescription>
            Planejamento litúrgico, sermões, ofícios e aconselhamento restrito.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full" variant="secondary">
            <Link href="/dashboard/oficiais/pastoral">
              Acessar Gabinete <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}