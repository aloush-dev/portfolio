import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data";
import { FunctionComponent } from "react";

const Work: FunctionComponent = () => {
  return (
    <div className="p-8 md:px-60">
      <ul>
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </ul>
    </div>
  );
};

export default Work;
