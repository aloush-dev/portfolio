export type ProjectProps = {
  project: {
    name: string;
    slug: string;
    type: string;
    techStack: string[];
    shortDescription: string;
    description: string;
    githubLink: string;
    liveLink: string;
    images: string[];
  };
};

export type Project = {
  name: string;
  slug: string;
  type: string;
  techStack: string[];
  shortDescription: string;
  description: string;
  githubLink: string;
  liveLink: string;
  images: string[];
};
