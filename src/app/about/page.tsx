import { AboutPageHero } from "@/components/about/AboutPageHero";
import { Skills } from "@/components/about/Skills";
import { WorkExperience } from "@/components/about/WorkExperience";
import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <div className="p-8 text-white">
      <AboutPageHero />
      <Skills />
      <WorkExperience />
    </div>
  );
};

export default About;
