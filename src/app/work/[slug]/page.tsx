import { GitHubButton } from "@/components/reuseable/GitHubButton";
import { WebsiteButton } from "@/components/reuseable/WebsiteButton";
import Image from "next/image";
import { FunctionComponent } from "react";
import { projects } from "../../../data/index";
import { Project } from "@/types/types";
import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlider } from "@/components/reuseable/ImageSlider";

export const metadata: Metadata = {
  title: `Aloush.dev | Work`,
  description:
    "Explore my portfolio showcasing creative web development and design",
};

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => {
    return { slug: project.slug };
  });
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const { slug } = params;

  const project: Project = projects.filter(
    (project) => project.slug === slug
  )[0];

  return (
    <section>
      <Link href="/work">
        <button className="text-primary-text mt-8 ml-8 md:ml-60">
          Back to all
        </button>
      </Link>
      <li className="text-primary-text p-8 md:px-60" key={project.name}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-4xl font-bold">{project.name}</h3>
            <ul className="flex flex-wrap pt-2">
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
          </div>

          <div className="flex justify-evenly py-2 md:justify-normal">
            <GitHubButton githubLink={project.githubLink} />
            <WebsiteButton liveLink={project.liveLink} />
          </div>
        </div>

        {/* {project.type === "desktop" ? (
          <div className="w-mobile-width h-mobileimage">
            <ImageSlider imageUrls={project.images} />
          </div>
        ) : ( */}
        <div className="flex justify-center items-center">
          {project.images.map((image, index) => {
            return (
              <div key={index} className="px-2">
                <Image
                  className="border-2 border-accent"
                  priority={true}
                  alt={`screenshot for ${project.name}`}
                  src={image}
                  width={390}
                  height={844}
                />
              </div>
            );
          })}
        </div>
        {/* )} */}

        <p className="py-4 whitespace-pre-line">{project.description}</p>
      </li>
    </section>
  );
};

export default ProjectPage;
