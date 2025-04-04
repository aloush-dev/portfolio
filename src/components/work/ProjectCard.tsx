"use client";

import { FunctionComponent } from "react";
import { WebsiteButton } from "../reuseable/WebsiteButton";
import { GitHubButton } from "../reuseable/GitHubButton";
import { ProjectProps } from "@/types/types";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export const ProjectCard: FunctionComponent<ProjectProps> = ({ project }) => {
  return (
    <Link key={project.name} href={`/work/${project.slug}`} className="group block h-full">
      <div className="flex flex-col h-full bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-3xl md:text-4xl text-primary-text font-bold mb-2 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-primary-text/70 mb-5 line-clamp-2">{project.shortDescription}</p>

            <ul className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent-text rounded-full text-sm font-medium transition-all duration-200 group-hover:bg-accent/15"
                  >
                    {skill}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex justify-end mt-auto pt-2">
            <div className="inline-flex items-center gap-1 text-accent font-medium transition-all duration-300 group-hover:gap-2">
              View Project{" "}
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
