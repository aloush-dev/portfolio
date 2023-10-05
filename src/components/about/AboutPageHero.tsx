import { FunctionComponent } from "react";
import { aboutInfo } from "../../data/index";
import { FaUserTie } from "react-icons/fa";

export const AboutPageHero: FunctionComponent = () => {
  return (
    <section className="pb-20">
      <h2 className="text-4xl pb-8 font-bold">
        ABOUT ME
        <div className="h-1 w-full bg-accent"></div>
      </h2>
      <div className="lg:flex">
        <p className="lg:w-3/5 whitespace-pre-line">
          {aboutInfo.aboutPageHero}
        </p>
        <div className="hidden lg:w-2/5 text-9xl text-accent lg:flex justify-center items-center">
          <FaUserTie />
        </div>
      </div>
    </section>
  );
};
