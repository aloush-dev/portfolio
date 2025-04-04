import { GitHubButton } from "@/components/reuseable/GitHubButton";
import { WebsiteButton } from "@/components/reuseable/WebsiteButton";
import type { FunctionComponent } from "react";
import { projects } from "../../../data/index";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { LuArrowLeft } from "react-icons/lu";

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const project = projects.find((project) => project.slug === slug);

  return {
    title: `${project?.name || "Project"} | Aloush.dev`,
    description:
      project?.shortDescription || "View project details and screenshots",
  };
}

export async function generateStaticParams() {
  return projects.map((project) => {
    return { slug: project.slug };
  });
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({ params }) => {
  const { slug } = params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="p-8 md:px-60 text-primary-text">Project not found</div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/work"
        className="inline-flex items-center text-primary-text  transition-colors mb-8 group bg-accent p-2 rounded-lg shadow-md"
      >
        <LuArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Back to all projects</span>
      </Link>

      <article className="space-y-10">
        <header className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-text">
                {project.name}
              </h1>
              <p className="text-primary-text/70 mt-2 text-lg">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex space-x-4">
              <GitHubButton githubLink={project.githubLink} />
              <WebsiteButton liveLink={project.liveLink} />
            </div>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent-text rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </header>

        <ProjectGallery
          images={project.images}
          type={(project.type as "desktop") || "desktop"}
        />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-primary-text/90 whitespace-pre-line leading-relaxed">
            {project.description}
          </p>
        </div>
      </article>
    </section>
  );
};

export default ProjectPage;
