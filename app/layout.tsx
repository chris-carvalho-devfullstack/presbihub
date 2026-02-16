import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuração da fonte Inter (compatível com Next.js 14)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPPC - Igreja Presbiteriana de Poços de Caldas",
  description: "Uma igreja reformada, sempre se reformando.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}