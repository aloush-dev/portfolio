import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data";
import { FunctionComponent } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Aloush.dev | Work`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

const Work: FunctionComponent = () => {
  return (
    <div className="p-8 md:px-20 lg:px-60 grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Work;
