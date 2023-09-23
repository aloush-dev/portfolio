import { FunctionComponent } from "react";
import { aboutInfo } from "../../data/index";

export const AboutPageHero: FunctionComponent = () => {
  return (
    <section className="pb-20">
      <h2 className="text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent">
        ABOUT ME
      </h2>
      <p>{aboutInfo.aboutPageHero}</p>
    </section>
  );
};
