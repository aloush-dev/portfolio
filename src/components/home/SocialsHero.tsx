import { FunctionComponent } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const SocialsHero: FunctionComponent = () => {
  return (
    <div className="text-6xl flex">
      <button className="p-8">
        <SiGithub />
      </button>
      <button className="p-4">
        <SiLinkedin />
      </button>
    </div>
  );
};
