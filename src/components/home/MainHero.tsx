import Image from "next/image";
import { FunctionComponent } from "react";
import heroImage from "../../../public/images/hero.jpeg";

export const MainHero: FunctionComponent = () => {
  return (
    <section className="relative flex h-hero overflow-hidden bg-no-repeat ">
      <Image
        className="object-cover object-center w-full"
        src={heroImage}
        alt="Main Homepage Image"
      />
      <div className="bg-accent absolute bottom-0 right-0 p-10 min-w-[50%] md:w-[50%] m-10 font-extrabold ">
        <h2 className="text-white text-4xl md:text-8xl text-center ">
          FULL STACK DEVELOPER
        </h2>
      </div>
    </section>
  );
};
