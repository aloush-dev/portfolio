"use client";

import { FunctionComponent } from "react";
import { WebsiteButton } from "../reuseable/WebsiteButton";
import { GitHubButton } from "../reuseable/GitHubButton";
import { ProjectProps } from "@/types/types";
import Link from "next/link";

export const ProjectCard: FunctionComponent<ProjectProps> = ({ project }) => {
  return (
    <>
      <div className="text-primary-text rounded-md p-2 md:p-4 mb-10">
        <Link key={project.name} href={`/work/${project.slug}`} passHref>
          <h3 className="text-4xl text-accent font-bold">{project.name}</h3>
          <ul className="flex flex-wrap py-2">
            {project.techStack.map((skill, index) => {
              return (
                <li
                  key={index}
                  className="px-2 py-1 mr-2 mb-2 bg-accent text-accent-text font-semibold"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </Link>
        <div className="flex justify-evenly py-2 md:justify-normal">
          <GitHubButton githubLink={project.githubLink} />
          <WebsiteButton liveLink={project.liveLink} />
        </div>
      </div>
    </>
  );
};
