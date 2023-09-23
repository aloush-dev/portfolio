import { FunctionComponent } from "react";
import { WebsiteButton } from "../reuseable/WebsiteButton";
import { GitHubButton } from "../reuseable/GitHubButton";

type ProjectCardProps = {
  project: {
    name: string;
    techStack: string[];
    description: string;
    githubLink: string;
    liveLink: string;
  };
};

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
}) => {
  return (
    <li
      className="text-primary-text border-accent border-4 p-2 rounded-md md:p-4"
      key={project.name}
    >
      <h3 className="text-4xl font-bold">{project.name}</h3>
      <ul className="flex py-2">
        {project.techStack.map((skill, index) => {
          return (
            <li key={index} className="px-2 py-1 mr-2 bg-accent text-accent-text font-semibold">
              {skill}
            </li>
          );
        })}
      </ul>
      <p>{project.description}</p>
      <div className="flex justify-evenly py-2 md:justify-normal">
        <GitHubButton githubLink={project.githubLink} />
        <WebsiteButton liveLink={project.liveLink} />
      </div>
    </li>
  );
};
