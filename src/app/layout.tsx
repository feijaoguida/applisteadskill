import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App List EADSkills",
  description: "Listagem de produtos da EADSkills, By Roseweltty Guida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}  antialiased`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
