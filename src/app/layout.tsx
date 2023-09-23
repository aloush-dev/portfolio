import { Header } from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Footer } from "@/components/footer/Footer";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Ali Abdallah | Portfolio |`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={barlow.className} lang="en">
      <body className="darkBlueTheme">
        <main className="bg-background">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
