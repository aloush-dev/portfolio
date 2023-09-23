import { AboutHero } from "@/components/home/AboutHero";
import { MainHero } from "@/components/home/MainHero";
import { SocialsHero } from "@/components/home/SocialsHero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `Ali Abdallah | Home`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutHero />
      <SocialsHero />
    </>
  );
}
