"use client";

import { FunctionComponent } from "react";
import { WebsiteButton } from "../reuseable/WebsiteButton";
import { GitHubButton } from "../reuseable/GitHubButton";
import { ProjectProps } from "@/types/types";
import Link from "next/link";

export const ProjectCard: FunctionComponent<ProjectProps> = ({ project }) => {
  return (
    <>
      <div className="flex flex-col text-primary-text border-y-2 border-accent p-2 md:p-4">
        <Link key={project.name} href={`/work/${project.slug}`}>
          <div className="flex justify-between">
            <div>
              <h3 className="text-4xl text-primary-text font-bold">
                {project.name}
              </h3>
              <p>{project.shortDescription}</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-accent rounded-sm text-accent-text px-2 py-1 h-min">
                More
              </button>
            </div>
          </div>
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
      </div>
    </>
  );
};
