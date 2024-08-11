import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Container from "@/components/shared/Container";
import AOS from "@/components/shared/AOS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Price Tracker",
  description: "This is a stock price tracker app assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-BACKGROUND`}>
        <AOS/>
        
        <Container>
          <Header/>
          {children}
          <Footer/>
        </Container>
      </body>
    </html>
  );
}
