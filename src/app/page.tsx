import { AboutHero } from "@/components/home/AboutHero";
import { MainHero } from "@/components/home/MainHero";

export default function Home() {
  return (
    <main className="bg-black">
      <MainHero />
      <AboutHero />
    </main>
  );
}
