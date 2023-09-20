import Image from "next/image";
import { FunctionComponent } from "react";
import heroImage from "../../../public/images/hero.jpeg";

export const MainHero: FunctionComponent = () => {
  return (
    <section className="relative flex min-h-hero overflow-hidden bg-no-repeat bg-cover ">
      <Image
        className="object-cover object-center h-hero w-full"
        src={heroImage}
        alt="Main Homepage Image"
      />
    </section>
  );
};
