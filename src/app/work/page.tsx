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
    <div className="p-8 md:px-60 grid grid-cols-1 md:auto-cols-auto md:grid-flow-col gap-16">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default Work;
