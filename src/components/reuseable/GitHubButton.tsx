import Link from "next/link";
import { FunctionComponent } from "react";
import { SiGithub } from "react-icons/si";

type GitHubButtonProps = {
  githubLink: string;
};

export const GitHubButton: FunctionComponent<GitHubButtonProps> = ({
  githubLink,
}) => {
  return (
    <Link href={githubLink}>
      <button className="text-accent-text bg-accent p-2 text-lg flex justify-center items-center rounded-sm md:mr-4">
        <SiGithub className='pr-2 text-4xl' /> GitHub
      </button>
    </Link>
  );
};
