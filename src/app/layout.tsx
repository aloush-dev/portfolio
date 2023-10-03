"use client";

import { Header } from "@/components/header/Header";
import "./globals.css";
import { Barlow } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { useEffect, useState } from "react";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html className={barlow.className} lang="en">
      <body className={theme}>
        <main className="bg-background">
          <Header />
          <div className="min-h-screenFull">{children}</div>
          <Footer setTheme={setTheme} />
        </main>
      </body>
    </html>
  );
}
