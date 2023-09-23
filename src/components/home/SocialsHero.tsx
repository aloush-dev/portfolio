import { socialLinks } from "@/data";
import Link from "next/link";
import { FunctionComponent } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const blob = (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path
      className="bg-accent"
      d="M58.7,-54.6C73.5,-44,80.9,-22,80.7,-0.2C80.5,21.7,72.8,43.3,58.1,56.3C43.3,69.3,21.7,73.5,2.5,71C-16.7,68.5,-33.4,59.3,-50,46.4C-66.5,33.4,-82.9,16.7,-84.3,-1.4C-85.7,-19.5,-72.1,-39,-55.5,-49.5C-39,-60.1,-19.5,-61.8,1.3,-63C22,-64.3,44,-65.2,58.7,-54.6Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const SocialsHero: FunctionComponent = () => {
  return (
    <section className="text-white h-hero flex justify-between items-center lg:px-40 flex-col lg:flex-row">
      <div className="flex flex-col p-20 lg:p-4">
        <h2 className="text-4xl font-bold underline underline-offset-8 decoration-accent">
          MY SOCIALS
        </h2>
        <p className="py-6 text-2xl">
          Feel free to reach out, I'd love to hear from you!
        </p>
        <div className="text-6xl flex text-accent">
          <Link href={socialLinks.github} target="_blank" className="pr-8">
            <SiGithub />
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" className="pr-8">
            <SiLinkedin />
          </Link>
        </div>
      </div>
      <Link href="/contact">
        <div className="bg-accent w-mobile-width h-40 md:w-80 md:h-80 mb-20 md:mb-60 lg:mb-2 md:rounded-full flex justify-center items-center font-black text-xl md:text-4xl transition-transform hover:scale-110">
          <p>CONTACT ME</p>
        </div>
      </Link>
    </section>
  );
};
