import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data";
import { FunctionComponent } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Ali Abdallah | Work`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

const Work: FunctionComponent = () => {
  return (
    <div className="p-8 md:px-60 grid ">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Work;
