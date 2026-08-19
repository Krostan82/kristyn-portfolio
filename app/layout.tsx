import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Kristyn Rostan | Commercial Operations & Transformation Leader",
  description: "Executive portfolio of Kristyn Rostan - Commercial Operations & Process Transformation Leader across PGL, SEKO Logistics, and Expeditors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" classname="scroll-smooth">
      <body className={`${plusJakarta.variable} ${outfit.variable} font-sans min-h-screen bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
