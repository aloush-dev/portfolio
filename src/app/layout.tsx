"use client";

import { Header } from "@/components/header/Header";
import "./globals.css";
import { Barlow } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { useState } from "react";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");

  return (
    <html className={barlow.className} lang="en">
      <body className={theme}>
        <main className="bg-background">
          <Header />
          {children}
          <Footer setTheme={setTheme} />
        </main>
      </body>
    </html>
  );
}
