import { AboutPageHero } from "@/components/about/AboutPageHero";
import { Skills } from "@/components/about/Skills";
import { WorkExperience } from "@/components/about/WorkExperience";
import { FunctionComponent } from "react";
import type { Metadata } from "next";
import { Education } from "@/components/about/Education";

export const metadata: Metadata = {
  title: `Aloush.dev | About`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

const About: FunctionComponent = () => {
  return (
    <div className="p-8 md:px-60 text-primary-text">
      <AboutPageHero />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
};

export default About;
