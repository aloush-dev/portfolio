export type ProjectProps = {
  project: {
    name: string;
    slug: string;
    techStack: string[];
    description: string;
    githubLink: string;
    liveLink: string;
    images: string[];
  };
};

export type Project = {
  name: string;
  slug: string;
  techStack: string[];
  description: string;
  githubLink: string;
  liveLink: string;
  images: string[];
};
