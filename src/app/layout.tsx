"use client";

import { Header } from "@/components/header/Header";
import "./globals.css";
import { Barlow } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import useStorage from "@/hooks/useLocalStorage";
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
  const { getItem, setItem, removeItem } = useStorage();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = getItem("theme", "local");
      return storedTheme || "";
    }
    return "";
  });

  useEffect(() => {
    setItem("theme", theme, "local");
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
